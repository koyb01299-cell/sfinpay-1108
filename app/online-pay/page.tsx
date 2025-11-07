"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    CreditCard,
    PenLine,
    Zap,
    Lock,
    BarChart3,
    Globe2,
    ShieldCheck,
    Wallet,
    Smartphone,
} from "lucide-react";

export default function OnlinePay(): JSX.Element {
    const [activeTab, setActiveTab] = useState<"auto" | "manual">("auto");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 25 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay },
        viewport: { once: true, amount: 0.25 },
    });

    return (
        <div className="min-h-screen bg-[#f0fdfa] text-[#0b2723] pt-32">
            {/* ────────────────────────────────
        🟩 Hero Section
      ──────────────────────────────── */}
            <section className="text-center px-6 md:px-16 py-20 bg-gradient-to-br from-[#ecfdf5] via-[#f0fdfa] to-[#d1fae5]">
                <motion.h1
                    {...fadeUp(0)}
                    className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
                >
                    온라인 결제,{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                        한 번의 API로 끝
                    </span>
                </motion.h1>

                <motion.p
                    {...fadeUp(0.2)}
                    className="text-lg md:text-xl text-[#1e3a34]/80 max-w-3xl mx-auto"
                >
                    카드, 간편결제, 수기결제까지 — 단일 인터페이스에서 통합 관리하세요.
                </motion.p>

                <motion.div
                    {...fadeUp(0.4)}
                    className="flex flex-wrap justify-center gap-4 mt-10"
                >
                    {[
                        { icon: <CreditCard />, label: "카드 결제" },
                        { icon: <Smartphone />, label: "간편결제" },
                        { icon: <PenLine />, label: "수기결제" },
                        { icon: <Wallet />, label: "자동 정산" },
                    ].map((f, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#a7f3d0]/60 text-[#10b981] shadow-sm cursor-default"
                        >
                            {f.icon}
                            <span className="font-medium">{f.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ────────────────────────────────
        🟩 자동결제 vs 수기결제 비교
      ──────────────────────────────── */}
            <section className="py-24 px-6 md:px-16 text-center bg-[#ecfdf5]">
                <motion.h2
                    {...fadeUp(0)}
                    className="text-4xl font-bold mb-10 text-[#0b2723]"
                >
                    결제 방식 선택
                </motion.h2>

                <div className="flex justify-center gap-3 mb-10">
                    {(["auto", "manual"] as const).map((t) => (
                        <button
                            key={t}
                            onClick={() => setActiveTab(t)}
                            className={`px-8 py-3 rounded-full text-lg font-medium transition-all ${activeTab === t
                                    ? "bg-[#10b981] text-white shadow-md"
                                    : "bg-white border border-[#a7f3d0]/70 text-[#1e3a34] hover:text-[#059669]"
                                }`}
                        >
                            {t === "auto" ? "자동결제" : "수기결제"}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    {activeTab === "auto" ? (
                        <motion.div
                            key="auto"
                            {...fadeUp(0)}
                            exit={{ opacity: 0 }}
                            className="max-w-4xl mx-auto p-8 bg-white rounded-2xl border border-[#a7f3d0]/60 shadow-sm text-left"
                        >
                            <h3 className="text-2xl font-bold text-[#059669] mb-4">
                                자동결제 (Recurring Payment)
                            </h3>
                            <p className="text-[#1e3a34]/80 mb-6 leading-relaxed">
                                고객이 한 번 결제 정보를 등록하면, 매월 혹은 지정 주기마다 자동으로
                                청구됩니다. 구독 서비스, 렌탈, 멤버십 등 반복 결제 비즈니스에
                                최적화되어 있습니다.
                            </p>
                            <ul className="space-y-3 text-[#1e3a34]/80">
                                <li>• 카드 / 계좌 자동 청구 및 승인</li>
                                <li>• 주기별 자동 세금계산서 발행</li>
                                <li>• 실패 시 재청구 로직 자동 처리</li>
                            </ul>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="manual"
                            {...fadeUp(0)}
                            exit={{ opacity: 0 }}
                            className="max-w-4xl mx-auto p-8 bg-white rounded-2xl border border-[#a7f3d0]/60 shadow-sm text-left"
                        >
                            <h3 className="text-2xl font-bold text-[#059669] mb-4">
                                수기결제 (Manual Payment)
                            </h3>
                            <p className="text-[#1e3a34]/80 mb-6 leading-relaxed">
                                고객의 결제 정보를 입력하여 직접 결제를 처리할 수 있습니다. 전화
                                주문, 예약금, 오프라인 후결제 등 다양한 비대면 결제 상황에
                                활용됩니다.
                            </p>
                            <ul className="space-y-3 text-[#1e3a34]/80">
                                <li>• 카드 정보 직접 입력 후 승인 처리</li>
                                <li>• 3D Secure 및 PCI-DSS 준수</li>
                                <li>• 결제내역 자동 정산 및 리포트 반영</li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            {/* ────────────────────────────────
        🟩 기능 카드 섹션
      ──────────────────────────────── */}
            <section className="py-28 px-6 md:px-16 max-w-6xl mx-auto space-y-20">
                <motion.div {...fadeUp(0)} className="text-center mb-10">
                    <h2 className="text-4xl font-bold mb-4 text-[#0b2723]">🌐 핵심 기능</h2>
                    <p className="text-[#1e3a34]/80">
                        단일 API로 모든 결제 프로세스를 통합 관리하세요.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            icon: <Zap size={28} />,
                            title: "원클릭 결제",
                            desc: "고객의 결제 경험을 최소한의 단계로 간소화합니다.",
                        },
                        {
                            icon: <ShieldCheck size={28} />,
                            title: "보안 인증 완비",
                            desc: "PG 보안 규격, 3D Secure, PCI-DSS 완전 준수.",
                        },
                        {
                            icon: <BarChart3 size={28} />,
                            title: "리포트 & 통계",
                            desc: "실시간 매출 추이와 거래 성공률을 시각화.",
                        },
                        {
                            icon: <Globe2 size={28} />,
                            title: "글로벌 결제 지원",
                            desc: "해외 카드 및 다국적 통화 결제 완벽 지원.",
                        },
                        {
                            icon: <Wallet size={28} />,
                            title: "자동 정산",
                            desc: "D+0 / D+1 입금 및 세금계산 자동 반영.",
                        },
                        {
                            icon: <Lock size={28} />,
                            title: "안전한 암호화",
                            desc: "민감정보 전송 전 AES256 / TLS 1.3 암호화 적용.",
                        },
                    ].map((f, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(i * 0.1)}
                            className="p-8 bg-white border border-[#a7f3d0]/70 rounded-2xl hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] transition-all"
                        >
                            <div className="flex items-center gap-3 text-[#10b981] mb-4">
                                {f.icon}
                                <h3 className="text-xl font-semibold text-[#0b2723]">
                                    {f.title}
                                </h3>
                            </div>
                            <p className="text-[#1e3a34]/80 leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ────────────────────────────────
        🟩 CTA 섹션
      ──────────────────────────────── */}
            <section className="py-24 px-6 md:px-16 bg-gradient-to-tr from-[#d1fae5] to-[#a7f3d0] text-center">
                <motion.h2
                    {...fadeUp(0)}
                    className="text-4xl font-bold text-[#0b2723] mb-4"
                >
                    온라인 결제,{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                        더 스마트하게
                    </span>
                </motion.h2>

                <motion.p
                    {...fadeUp(0.2)}
                    className="text-[#1e3a34]/90 text-lg mb-10 leading-relaxed"
                >
                    자동·수기결제 모두 지원하는 통합 결제 솔루션으로 고객 경험을
                    혁신하세요.
                </motion.p>

                <Link href="/inquiry/contract">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-semibold text-lg shadow-md transition-all"
                    >
                        도입 상담 받기 →
                    </motion.button>
                </Link>
            </section>
        </div>
    );
}
