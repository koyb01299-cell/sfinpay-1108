import { NextResponse } from "next/server";

/**
 * ✅ Slack Interactive Endpoint
 * - Slack 버튼 클릭 시 호출되는 핸들러
 * - Notion 페이지 상태를 자동 업데이트 ("처리 완료" / "진행 중")
 */

export async function POST(req: Request) {
    try {
        const text = await req.text();
        const payload = JSON.parse(new URLSearchParams(text).get("payload") || "{}");

        const action = payload?.actions?.[0];
        const pageId = action?.value;
        const actionType = action?.text?.text;

        if (!pageId) {
            console.error("❌ pageId 누락:", payload);
            return NextResponse.json({ ok: false, error: "pageId 누락" }, { status: 400 });
        }

        // 🔑 환경 변수 확인
        const notionSecret = process.env.NOTION_SECRET;
        if (!notionSecret) {
            return NextResponse.json({ ok: false, error: "NOTION_SECRET 누락" }, { status: 500 });
        }

        // 🔄 상태값 결정
        let newStatus = "진행 중";
        if (actionType.includes("완료")) newStatus = "처리 완료";

        // 🧾 Notion PATCH 요청
        const notionRes = await fetch(`https://api.notion.com/v1/pages/${pageId}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${notionSecret}`,
                "Content-Type": "application/json",
                "Notion-Version": "2022-06-28",
            },
            body: JSON.stringify({
                properties: {
                    상태: { select: { name: newStatus } },
                },
            }),
        });

        if (!notionRes.ok) {
            const errText = await notionRes.text();
            console.error("❌ Notion 상태 업데이트 실패:", errText);
            return NextResponse.json({ ok: false, error: "Notion API 실패" }, { status: 500 });
        }

        console.log(`✅ Notion 상태 업데이트 성공 → ${newStatus}`);

        // Slack 응답 메시지
        const slackReply = {
            response_type: "ephemeral",
            text: `✅ 문의 상태가 *${newStatus}* 으로 변경되었습니다.`,
            replace_original: false,
        };

        return new Response(JSON.stringify(slackReply), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err: any) {
        console.error("❌ SLACK ACTION ERROR:", err.message);
        return NextResponse.json(
            { ok: false, error: err.message },
            { status: 500 }
        );
    }
}
