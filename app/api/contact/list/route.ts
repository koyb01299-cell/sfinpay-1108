import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * GET /api/contact/list
 * -----------------------------------
 * 관리자용 전체 문의 리스트 조회
 * 쿼리 파라미터:
 *  - page: number (기본 1)
 *  - limit: number (기본 20)
 *  - status: string (필터)
 *  - keyword: string (검색)
 */
export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const page = Number(searchParams.get("page") || 1);
        const limit = Number(searchParams.get("limit") || 20);
        const status = searchParams.get("status");
        const keyword = searchParams.get("keyword");

        const where: any = {};

        if (status && status !== "전체") {
            where.status = status;
        }

        if (keyword) {
            where.OR = [
                { company: { contains: keyword, mode: "insensitive" } },
                { email: { contains: keyword, mode: "insensitive" } },
                { message: { contains: keyword, mode: "insensitive" } },
            ];
        }

        const [inquiries, total] = await Promise.all([
            prisma.inquiry.findMany({
                where,
                orderBy: { createdAt: "desc" },
                skip: (page - 1) * limit,
                take: limit,
            }),
            prisma.inquiry.count({ where }),
        ]);

        const totalPages = Math.ceil(total / limit);

        console.log(
            `📄 문의 리스트 조회: ${page}페이지 / ${limit}개 (총 ${total}건)`
        );

        return NextResponse.json({
            ok: true,
            total,
            totalPages,
            currentPage: page,
            limit,
            data: inquiries,
        });
    } catch (err: any) {
        console.error("❌ GET ERROR:", err.message);
        return NextResponse.json(
            { ok: false, error: err.message || "서버 내부 오류" },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}
