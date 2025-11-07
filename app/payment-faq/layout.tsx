"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, HelpCircle, ChevronRight } from "lucide-react";

export const metadata = {
    title: "결제 FAQ | SFIN PAY",
    description: "SFIN PAY 결제/정산 관련 자주 묻는 질문 모음",
};

const fadeUp = (i = 0) => ({
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: i * 0.08 },
});

export default function PaymentFAQLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#f0fdfa] text-[#0b2723]">
            {/* 🟢 Header / Title */}
            <motion.header
                {...fadeUp(0)}
                className="sticky top-0 z-30 bg-gradient-to-r from-[#ecfdf5] to-[#d1fae5] border-b border-[#a7f3d0]/50 backdrop-blur-md shadow-sm"
            >
                <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                        <HelpCircle className="text-[#10b981]" size={24} />
                        <h1 className="text-lg md:text-xl font-semibold text-[#0b2723]">
                            결제 FAQ
                        </h1>
                    </div>

                    {/* breadcrumb */}
                    <nav className="flex items-center gap-1 text-sm text-[#065f46]/80">
                        <Link
                            href="/"
                            className="flex items-center gap-1 hover:text-[#059669] transition"
                        >
                            <Home size={14} />
                            홈
                        </Link>
                        <ChevronRight size={14} />
                        <Link
                            href="/payment-faq"
                            className="text-[#10b981] font-medium hover:underline"
                        >
                            결제 FAQ
                        </Link>
                    </nav>
                </div>
            </motion.header>

            {/* 🟢 Sub-nav (anchor navigation) */}
            <motion.div
                {...fadeUp(0.1)}
                className="w-full border-b border-[#a7f3d0]/50 bg-[#ecfdf5]/80 backdrop-blur-sm"
            >
                <div className="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-start gap-3 px-6 md:px-12 py-3 text-sm">
                    {[
                        { href: "#approval", label: "결제 승인" },
                        { href: "#fail", label: "결제 실패" },
                        { href: "#refund", label: "환불 / 취소" },
                        { href: "#settlement", label: "정산(D+0 / D+1)" },
                        { href: "#security", label: "보안 / 인증" },
                        { href: "#overseas", label: "해외결제" },
                    ].map((item, i) => (
                        <a
                            key={i}
                            href={item.href}
                            className="px-4 py-2 rounded-full border border-[#a7f3d0]/60 text-[#0b2723] hover:bg-[#10b981]/10 hover:text-[#059669] transition-all"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </motion.div>

            {/* 🟢 Page Content */}
            <main className="max-w-6xl mx-auto px-6 md:px-12 py-10">
                {children}
            </main>

            {/* 🟢 Footer */}
            <footer className="mt-20 border-t border-[#a7f3d0]/40 py-6 text-center text-sm text-[#065f46]/70">
                ⓒ {new Date().getFullYear()} SFIN PAY — 결제 인프라 & 정산 서비스
            </footer>
        </div>
    );
}
