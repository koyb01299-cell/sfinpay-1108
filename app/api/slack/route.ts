import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const form = await req.formData();
        const payload = JSON.parse(form.get("payload") as string);

        const action = payload.actions[0];
        const pageId = action.value;
        const status =
            action.action_id === "mark_done" ? "완료" : "진행중";

        // ✅ Notion 상태 업데이트
        await fetch(`https://api.notion.com/v1/pages/${pageId}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${process.env.NOTION_SECRET}`,
                "Content-Type": "application/json",
                "Notion-Version": "2022-06-28",
            },
            body: JSON.stringify({
                properties: { 상태: { select: { name: status } } },
            }),
        });

        // ✅ Slack 응답 메시지
        return NextResponse.json({
            text: `✅ 문의 상태가 *${status}* 로 변경되었습니다.`,
        });
    } catch (err: any) {
        console.error("❌ SLACK API ERROR:", err.message);
        return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
    }
}
