import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

/**
 * ✅ 문의 상태 업데이트 API (DB 연동 버전)
 * - JWT 인증 필수
 * - 문의 상태: "신규" → "진행중" → "완료"
 */
export async function POST(req: Request) {
    try {
        // 🔹 JWT 쿠키 인증
        const token = req.headers.get("cookie")?.match(/sfin_admin_session=([^;]+)/)?.[1];
        if (!token) {
            return NextResponse.json(
                { ok: false, message: "인증 토큰이 없습니다." },
                { status: 401 }
            );
        }

        try {
            jwt.verify(token, process.env.JWT_SECRET!);
        } catch {
            return NextResponse.json(
                { ok: false, message: "JWT 토큰이 유효하지 않습니다." },
                { status: 403 }
            );
        }

        // 🔹 요청 데이터
        const { id, status } = await req.json();

        if (!id || !status) {
            return NextResponse.json(
                { ok: false, message: "필수 필드(id, status)가 누락되었습니다." },
                { status: 400 }
            );
        }

        // 🔹 상태값 화이트리스트
        const allowedStatuses = ["신규", "진행중", "완료"];
        if (!allowedStatuses.includes(status)) {
            return NextResponse.json(
                { ok: false, message: "유효하지 않은 상태 값입니다." },
                { status: 400 }
            );
        }

        // 🔹 DB 업데이트
        const updated = await prisma.inquiry.update({
            where: { id },
            data: { status },
        });

        // 🔹 응답
        return NextResponse.json({
            ok: true,
            message: `문의 상태가 '${status}'로 변경되었습니다.`,
            updated,
        });
    } catch (err: any) {
        // 🔹 Prisma P2025 (없는 ID) 처리
        if (err.code === "P2025") {
            return NextResponse.json(
                { ok: false, message: "해당 문의를 찾을 수 없습니다." },
                { status: 404 }
            );
        }

        console.error("❌ [UPDATE_STATUS_ERROR]", err.message || err);
        return NextResponse.json(
            { ok: false, message: err.message || "서버 내부 오류" },
            { status: 500 }
        );
    } finally {
        // ✅ Prisma 연결 해제 (메모리 누수 방지)
        await prisma.$disconnect();
    }
}
