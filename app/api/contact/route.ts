import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const { company, email, type, message } = await req.json();

        // ✅ 필수값 검증
        if (!company || !email || !message) {
            return NextResponse.json(
                { ok: false, error: '모든 필드를 입력해야 합니다.' },
                { status: 400 }
            );
        }

        // ✅ 환경변수 검증
        const notionSecret = process.env.NOTION_SECRET;
        const notionDb = process.env.NOTION_DATABASE_ID;
        const slackWebhook = process.env.SLACK_WEBHOOK_URL;
        if (!notionSecret || !notionDb || !slackWebhook) {
            console.error('❌ 환경변수 누락');
            return NextResponse.json(
                { ok: false, error: '환경변수가 누락되었습니다.' },
                { status: 500 }
            );
        }

        // ────────────────────────────────
        // 💾 1️⃣ Supabase (또는 PostgreSQL) 저장 — Prisma ORM
        // ────────────────────────────────
        const inquiry = await prisma.inquiry.create({
            data: {
                company: company.trim(),
                email: email.trim(),
                type: type?.trim() || '기타 문의',
                message: message.trim(),
                status: '신규',
            },
        });
        console.log(`✅ DB 저장 완료: ${inquiry.id}`);

        // ────────────────────────────────
        // 🧾 2️⃣ Notion CRM 저장
        // ────────────────────────────────
        try {
            const notionPayload = {
                parent: { database_id: notionDb },
                properties: {
                    회사명: { title: [{ text: { content: company } }] },
                    이메일: { email },
                    문의유형: {
                        rich_text: [{ text: { content: type || '기타 문의' } }],
                    },
                    내용: { rich_text: [{ text: { content: message } }] },
                    상태: { select: { name: '신규' } },
                    수신일시: { date: { start: new Date().toISOString() } },
                },
            };

            const notionRes = await fetch('https://api.notion.com/v1/pages', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${notionSecret}`,
                    'Content-Type': 'application/json',
                    'Notion-Version': '2022-06-28',
                },
                body: JSON.stringify(notionPayload),
            });

            if (!notionRes.ok) {
                console.error('⚠️ Notion API 오류:', await notionRes.text());
            } else {
                const notionData = await notionRes.json();
                console.log(`🧾 Notion 페이지 생성 완료: ${notionData.id}`);
            }
        } catch (err: any) {
            console.error('⚠️ Notion 저장 실패:', err.message);
        }

        // ────────────────────────────────
        // 💬 3️⃣ Slack Webhook 알림
        // ────────────────────────────────
        try {
            const slackBody = {
                blocks: [
                    {
                        type: 'section',
                        text: {
                            type: 'mrkdwn',
                            text: `📢 *새 문의 도착 (SFIN PAY)*\n━━━━━━━━━━━━━━━\n🏢 *회사명:* ${company}\n📧 *이메일:* ${email}\n💬 *문의유형:* ${type || '미입력'}\n📝 *내용:* ${message}\n🕒 *수신시각:* ${new Date().toLocaleString('ko-KR')}`,
                        },
                    },
                    {
                        type: 'actions',
                        elements: [
                            {
                                type: 'button',
                                text: { type: 'plain_text', text: '✅ 처리 완료' },
                                style: 'primary',
                                value: inquiry.id,
                            },
                            {
                                type: 'button',
                                text: { type: 'plain_text', text: '⏳ 진행 중' },
                                style: 'danger',
                                value: inquiry.id,
                            },
                        ],
                    },
                ],
            };

            const slackRes = await fetch(slackWebhook, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(slackBody),
            });

            if (!slackRes.ok) {
                console.error('⚠️ Slack Webhook 오류:', await slackRes.text());
            } else {
                console.log(`💬 Slack 알림 전송 완료 (${company})`);
            }
        } catch (err: any) {
            console.error('⚠️ Slack 전송 실패:', err.message);
        }

        // ✅ 성공 응답
        return NextResponse.json({
            ok: true,
            message: '문의가 성공적으로 등록되었습니다.',
            id: inquiry.id,
        });
    } catch (err: any) {
        console.error('❌ CONTACT API ERROR:', err.message);
        return NextResponse.json(
            { ok: false, error: err.message || '서버 내부 오류' },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}
