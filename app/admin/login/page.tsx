"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Mail, Lock, Loader2, Shield, AlertTriangle } from "lucide-react";

export default function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const searchParams = useSearchParams();

    // ✅ middleware.ts에서 전달된 ?expired=1 or ?from 파라미터 감지
    useEffect(() => {
        if (searchParams.get("expired") === "1") {
            setError("세션이 만료되었습니다. 다시 로그인해주세요.");
        } else if (searchParams.get("from")) {
            setError("관리자 인증이 필요합니다.");
        }
    }, [searchParams]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const json = await res.json();
            if (json.ok && json.next) {
                window.location.href = json.next; // ✅ /admin/verify-otp로 이동
            } else {
                setError(json.message || "이메일 또는 비밀번호가 잘못되었습니다.");
            }
        } catch (err: any) {
            setError("서버 통신 오류가 발생했습니다.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="flex flex-col items-center justify-center h-screen bg-mint-gradient">
            <motion.form
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleLogin}
                className="bg-white/90 p-10 rounded-2xl shadow-[0_8px_25px_rgba(16,185,129,0.15)] border border-brand-mint/40 w-[360px] flex flex-col gap-5"
            >
                {/* 헤더 */}
                <div className="flex flex-col items-center mb-2">
                    <Shield size={42} className="text-brand-mintDark mb-3" />
                    <h1 className="text-2xl font-bold text-[#0b2723]">
                        SFIN PAY 관리자 로그인
                    </h1>
                    <p className="text-sm text-[#1f3b37]/70 mt-1">
                        보안 인증을 위해 2단계 OTP 절차가 진행됩니다.
                    </p>
                </div>

                {/* 에러 메시지 */}
                {error && (
                    <div className="flex items-center justify-center gap-2 bg-red-50 border border-red-100 text-red-600 rounded-lg px-4 py-2 text-sm">
                        <AlertTriangle size={16} /> {error}
                    </div>
                )}

                {/* 이메일 입력 */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-[#1f3b37]/80 flex items-center gap-2">
                        <Mail size={16} /> 이메일
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="admin@sfinpay.co.kr"
                        className="px-3 py-2 rounded-lg border border-brand-mint/40 focus:ring-2 focus:ring-brand-mint/40 outline-none"
                        required
                    />
                </div>

                {/* 비밀번호 입력 */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-[#1f3b37]/80 flex items-center gap-2">
                        <Lock size={16} /> 비밀번호
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="********"
                        className="px-3 py-2 rounded-lg border border-brand-mint/40 focus:ring-2 focus:ring-brand-mint/40 outline-none"
                        required
                    />
                </div>

                {/* 로그인 버튼 */}
                <button
                    type="submit"
                    disabled={loading}
                    className="flex justify-center items-center gap-2 bg-gradient-to-r from-brand-mintDark to-emerald-400 text-white rounded-lg py-2 font-semibold hover:opacity-90 transition"
                >
                    {loading ? <Loader2 className="animate-spin" size={18} /> : "로그인"}
                </button>

                {/* 안내 */}
                <p className="text-xs text-center text-[#1f3b37]/60 mt-2">
                    로그인 후 이메일로 OTP 코드가 전송됩니다.
                </p>
            </motion.form>
        </section>
    );
}
