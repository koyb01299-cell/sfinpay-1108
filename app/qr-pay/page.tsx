"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    QrCode,
    Smartphone,
    CreditCard,
    Building2,
    Wallet,
    ArrowRight,
    Wifi,
    Clock3,
    ShieldCheck,
    Zap,
} from "lucide-react";

export default function QrPay(): JSX.Element {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setMounted(true);
    }, []);

    const fadeUp = (i = 0) => ({
        initial: { opacity: 1, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0 },
        transition: { duration: 0.6, delay: i * 0.1 },
    });

    return (
        <div className="min-h-screen bg-[#ecfdf5] text-[#0b2723] pt-32">
            {/* 헤더 */}
            <section className="text-center py-20 px-6 md:px-16 bg-gradient-to-b from-[#f0fdfa] to-[#ecfdf5] border-b border-[#a7f3d0]/50">
                <motion.h1
                    {...fadeUp(0)}
                    className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
                >
                    QR · 오프라인 결제,{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                        현장에서 더 빠르게
                    </span>
                </motion.h1>
                <motion.p
                    {...fadeUp(0.3)}
                    className="text-lg md:text-xl text-[#1e3a34]/80 max-w-3xl mx-auto leading-relaxed"
                >
                    QR, NFC, 단말기 결제까지 한 번에. <br />
                    POS 연동과 자동 정산으로 오프라인 결제의 효율을 극대화하세요.
                </motion.p>
            </section>

            {/* 결제 흐름 */}
            <section className="py-24 px-6 md:px-16 bg-[#f0fdfa]">
                <motion.h2 {...fadeUp(0)} className="text-4xl font-bold text-center mb-12">
                    오프라인 결제 프로세스
                </motion.h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
                    {/* QR/NFC 인식 */}
                    <motion.div {...fadeUp(0.1)} className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 bg-white border border-[#a7f3d0]/70 rounded-2xl flex justify-center items-center text-[#10b981] text-3xl shadow-md">
                            <QrCode />
                        </div>
                        <p className="font-semibold mt-2">QR/NFC 인식</p>
                        <p className="text-sm text-[#1e3a34]/70">고객이 스마트폰으로 결제</p>
                    </motion.div>

                    <ArrowRight className="text-[#10b981] w-10 h-10 hidden md:block" />

                    {/* 단말기 승인 */}
                    <motion.div {...fadeUp(0.2)} className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 bg-gradient-to-tr from-[#34d399] to-[#10b981] rounded-2xl flex justify-center items-center text-white text-3xl shadow-[0_0_25px_rgba(16,185,129,0.25)]">
                            <CreditCard />
                        </div>
                        <p className="font-semibold mt-2">단말기 승인</p>
                        <p className="text-sm text-[#1e3a34]/70">POS와 자동 연동 승인 처리</p>
                    </motion.div>

                    <ArrowRight className="text-[#10b981] w-10 h-10 hidden md:block" />

                    {/* 정산 완료 */}
                    <motion.div {...fadeUp(0.3)} className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 bg-white border border-[#a7f3d0]/70 rounded-2xl flex justify-center items-center text-[#10b981] text-3xl shadow-md">
                            <Wallet />
                        </div>
                        <p className="font-semibold mt-2">정산 완료</p>
                        <p className="text-sm text-[#1e3a34]/70">D+0 또는 D+1 입금</p>
                    </motion.div>
                </div>

                <motion.p
                    {...fadeUp(0.5)}
                    className="text-center mt-10 text-[#1e3a34]/70 max-w-3xl mx-auto leading-relaxed"
                >
                    고객이 QR을 찍거나 카드를 터치하면 결제 → 승인 → 정산까지 자동으로 진행됩니다.
                </motion.p>
            </section>

            {/* 주요 기능 */}
            <section className="py-28 px-6 md:px-16 max-w-6xl mx-auto space-y-20">
                <motion.div {...fadeUp(0)} className="text-center mb-10">
                    <h2 className="text-4xl font-bold mb-4 text-[#0b2723]">
                        💳 오프라인 결제의 혁신
                    </h2>
                    <p className="text-[#1e3a34]/80">
                        하드웨어와 소프트웨어의 완벽한 조합으로 현장 결제 환경을 개선합니다.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            icon: <Smartphone size={28} />,
                            title: "QR·NFC 결제 지원",
                            desc: "카드 없이 스마트폰 터치로 결제 완료",
                        },
                        {
                            icon: <Wifi size={28} />,
                            title: "POS 실시간 연동",
                            desc: "결제 내역이 즉시 POS로 동기화",
                        },
                        {
                            icon: <Clock3 size={28} />,
                            title: "D+0 빠른 정산",
                            desc: "당일 입금으로 현금 흐름 개선",
                        },
                        {
                            icon: <Zap size={28} />,
                            title: "단말기 자동 승인",
                            desc: "결제 승인·취소를 자동으로 처리",
                        },
                        {
                            icon: <ShieldCheck size={28} />,
                            title: "보안 & 안정성 강화",
                            desc: "EMV / PCI-DSS 표준 완벽 준수",
                        },
                        {
                            icon: <Building2 size={28} />,
                            title: "매장 통합 관리",
                            desc: "지점별 매출을 한 눈에 관리",
                        },
                    ].map((f, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(i * 0.1)}
                            className="p-8 bg-white border border-[#a7f3d0]/70 rounded-2xl hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] t1"
                        >
                            <div className="flex items-center gap-3 text-[#10b981] mb-4">
                                {f.icon}
                                <h3 className="text-xl font-semibold text-[#0b2723]">{f.title}</h3>
                            </div>
                            <p className="text-[#1e3a34]/80 leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 md:px-16 bg-gradient-to-tr from-[#d1fae5] to-[#a7f3d0] text-center border-t border-[#a7f3d0]/50">
                <motion.h2 {...fadeUp(0)} className="text-4xl font-bold text-[#0b2723] mb-4">
                    현장 결제도{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                        SFIN PAY 하나로
                    </span>
                </motion.h2>
                <motion.p
                    {...fadeUp(0.2)}
                    className="text-[#1e3a34]/90 text-lg mb-10 leading-relaxed"
                >
                    오프라인 결제의 모든 단계를 자동화하고, 매출 관리의 정확도를 높이세요.
                </motion.p>
                <Link href="/inquiry/contract">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#34d399] to-[#10b981] hover:from-[#10b981] hover:to-[#059669] text-white font-semibold text-lg shadow-[0_8px_25px_rgba(16,185,129,0.25)] t1"
                    >
                        도입 상담 받기 →
                    </motion.button>
                </Link>
            </section>
        </div>
    );
}
