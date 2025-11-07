import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
    const { email, password } = await req.json();
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL!;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD!;
    const JWT_SECRET = process.env.JWT_SECRET!;

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "12h" });

        const res = NextResponse.json({ ok: true });
        res.cookies.set("sfin_admin_token", token, {
            httpOnly: true,
            secure: true,
            path: "/",
            sameSite: "strict",
            maxAge: 60 * 60 * 12,
        });

        return res;
    } else {
        return NextResponse.json({ ok: false, error: "인증 실패" }, { status: 401 });
    }
}
