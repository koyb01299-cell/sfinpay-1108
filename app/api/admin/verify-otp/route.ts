import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

/**
 * ✅ OTP 검증 + JWT 세션 쿠키 발급
 * - 6자리 OTP 확인
 * - 성공 시 JWT 생성 후 HttpOnly Secure 쿠키 발급
 * - 이후 /admin/inquiries 접근 허용
 */

export async function POST(req: Request) {
    try {
        const { otp } = await req.json();

        // 🔹 입력 검증
        if (!otp) {
            return NextResponse.json(
                { ok: false, message: "OTP를 입력해주세요." },
                { status: 400 }
            );
        }

        // 🔹 OTP 저장소 확인 (임시: global 메모리)
        const otpData = globalThis.__SFIN_ADMIN_OTP__;

        if (!otpData) {
            return NextResponse.json(
                { ok: false, message: "OTP 세션이 존재하지 않습니다. 다시 로그인해주세요." },
                { status: 400 }
            );
        }

        if (Date.now() > otpData.expires) {
            delete globalThis.__SFIN_ADMIN_OTP__;
            return NextResponse.json(
                { ok: false, message: "OTP가 만료되었습니다. 다시 로그인해주세요." },
                { status: 401 }
            );
        }

        if (otp !== otpData.otp) {
            return NextResponse.json(
                { ok: false, message: "잘못된 OTP입니다." },
                { status: 401 }
            );
        }

        // 🔹 환경변수 검증
        const JWT_SECRET = process.env.JWT_SECRET;
        const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

        if (!JWT_SECRET || !ADMIN_EMAIL) {
            console.error("❌ 환경변수 누락: JWT_SECRET / ADMIN_EMAIL");
            return NextResponse.json(
                { ok: false, message: "서버 환경변수가 누락되었습니다." },
                { status: 500 }
            );
        }

        // ✅ JWT 발급
        const token = jwt.sign({ role: "admin", email: ADMIN_EMAIL }, JWT_SECRET, {
            expiresIn: "1h",
        });

        // ✅ HttpOnly 쿠키로 세션 발급
        const res = NextResponse.json({
            ok: true,
            message: "OTP 인증이 완료되었습니다.",
            next: "/admin/inquiries",
        });

        res.cookies.set("sfin_admin_session", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60, // 1시간
        });

        // ✅ 사용 완료된 OTP 즉시 폐기
        delete globalThis.__SFIN_ADMIN_OTP__;

        return res;
    } catch (err: any) {
        console.error("[VERIFY_OTP_ERROR]", err.message);
        return NextResponse.json(
            { ok: false, message: "서버 내부 오류가 발생했습니다." },
            { status: 500 }
        );
    }
}
