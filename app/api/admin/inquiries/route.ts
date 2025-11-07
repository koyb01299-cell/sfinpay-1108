import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

/**
 * ✅ 관리자 문의 조회 API (DB 연동 버전)
 * - JWT 인증된 관리자만 접근 가능
 * - Supabase DB의 `inquiry` 테이블에서 데이터 조회
 */
export async function GET(req: Request) {
    try {
        // ✅ JWT 토큰 확인
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

        // ✅ Supabase(Postgres)에서 문의 목록 조회
        const inquiries = await prisma.inquiry.findMany({
            orderBy: { createdAt: "desc" },
        });

        // ✅ 형식 맞춰서 반환
        return NextResponse.json({
            ok: true,
            records: inquiries.map((q) => ({
                id: q.id,
                company: q.company,
                email: q.email,
                type: q.type,
                message: q.message,
                status: q.status,
                date: q.createdAt, // ← DB 컬럼명 createdAt 기준
            })),
        });
    } catch (err: any) {
        console.error("❌ [ADMIN_INQUIRIES_ERROR]", err);
        return NextResponse.json(
            { ok: false, message: err.message || "Internal server error" },
            { status: 500 }
        );
    } finally {
        // ✅ Prisma 연결 해제 (메모리 누수 방지)
        await prisma.$disconnect();
    }
}
