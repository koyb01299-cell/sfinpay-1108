"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, KeyRound, Loader2, CheckCircle2 } from "lucide-react";

export default function VerifyOtpPage() {
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/admin/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ otp }),
            });
            const json = await res.json();

            if (json.ok && json.next) {
                setSuccess(true);
                setTimeout(() => {
                    window.location.href = json.next; // ✅ /admin/inquiries
                }, 1200);
            } else {
                setError(json.message || "잘못된 OTP입니다.");
            }
        } catch (err: any) {
            setError("서버와의 통신 오류가 발생했습니다.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="flex flex-col items-center justify-center h-screen bg-mint-gradient">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/90 p-10 rounded-2xl shadow-[0_8px_25px_rgba(16,185,129,0.15)] border border-brand-mint/40 w-[360px] flex flex-col gap-5 text-center"
            >
                <ShieldCheck size={42} className="text-brand-mintDark mx-auto mb-2" />
                <h1 className="text-2xl font-bold text-[#0b2723]">OTP 인증</h1>
                <p className="text-sm text-[#1f3b37]/70">
                    이메일로 발송된 6자리 OTP 코드를 입력해주세요.
                </p>

                {/* 에러 */}
                {error && (
                    <p className="text-red-500 text-sm bg-red-50 py-2 rounded-lg border border-red-100">
                        {error}
                    </p>
                )}

                {/* 성공 */}
                {success && (
                    <p className="flex justify-center items-center gap-2 text-emerald-600 text-sm bg-emerald-50 py-2 rounded-lg border border-emerald-100">
                        <CheckCircle2 size={16} /> 인증 성공! 잠시 후 이동합니다...
                    </p>
                )}

                <form onSubmit={handleVerify} className="flex flex-col gap-4 mt-2">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-[#1f3b37]/80 flex items-center justify-center gap-2">
                            <KeyRound size={16} /> OTP 코드
                        </label>
                        <input
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            maxLength={6}
                            pattern="\d{6}"
                            inputMode="numeric"
                            placeholder="6자리 숫자 입력"
                            className="px-3 py-3 text-center text-lg tracking-widest rounded-lg border border-brand-mint/40 focus:ring-2 focus:ring-brand-mint/40 outline-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="flex justify-center items-center gap-2 bg-gradient-to-r from-brand-mintDark to-emerald-400 text-white rounded-lg py-2 font-semibold hover:opacity-90 transition"
                    >
                        {loading ? <Loader2 className="animate-spin" size={18} /> : "인증하기"}
                    </button>
                </form>

                <p className="text-xs text-center text-[#1f3b37]/60 mt-3">
                    OTP는 발급 후 5분간 유효합니다.
                </p>
            </motion.div>
        </section>
    );
}
