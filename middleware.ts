import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

/**
 * ✅ 관리자 보호 미들웨어 (SFIN PAY)
 *
 * 목적:
 *  - /admin/* 접근 시 JWT 세션 쿠키 검증
 *  - 인증 실패 시 /admin/login 으로 안전하게 리다이렉트
 *  - public 자산, API, static 파일 등은 예외 처리
 */

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // ────────────────────────────────
    // 1️⃣ 예외 경로: 인증 불필요
    // ────────────────────────────────
    const publicPaths = [
        "/",
        "/favicon.ico",
        "/robots.txt",
        "/manifest.json",
        "/api",
        "/_next",
        "/images",
        "/public",
    ];

    // public 리소스거나, 로그인/OTP 페이지면 통과
    if (
        publicPaths.some((p) => pathname.startsWith(p)) ||
        pathname.startsWith("/admin/login") ||
        pathname.startsWith("/admin/verify-otp")
    ) {
        return NextResponse.next();
    }

    // ────────────────────────────────
    // 2️⃣ 관리자 페이지 접근 보호 (/admin/*)
    // ────────────────────────────────
    if (pathname.startsWith("/admin")) {
        const token = req.cookies.get("sfin_admin_session")?.value;

        // (1) 쿠키 없음 → 로그인 페이지로
        if (!token) {
            const redirectUrl = new URL("/admin/login", req.url);
            redirectUrl.searchParams.set("from", pathname);
            return NextResponse.redirect(redirectUrl);
        }

        // (2) JWT 검증
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET!);
            // 🔹 토큰 내용 로그로 남기지 말 것 (보안)
            return NextResponse.next();
        } catch (err: any) {
            console.warn("⚠️ JWT expired or invalid:", err.message);
            const redirectUrl = new URL("/admin/login", req.url);
            redirectUrl.searchParams.set("expired", "1");
            return NextResponse.redirect(redirectUrl);
        }
    }

    // ────────────────────────────────
    // 3️⃣ 기본 통과
    // ────────────────────────────────
    return NextResponse.next();
}

// ✅ 적용 경로 설정
export const config = {
    matcher: ["/admin/:path*"],
};
