"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    CreditCard,
    Phone,
    FileText,
    Lock,
    ShieldCheck,
    ArrowRight,
    Wallet,
    CheckCircle2,
    TimerReset,
} from "lucide-react";

export default function ManualPay(): JSX.Element {
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
                    수기결제,{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                        비대면 결제의 표준
                    </span>
                </motion.h1>
                <motion.p
                    {...fadeUp(0.3)}
                    className="text-lg md:text-xl text-[#1e3a34]/80 max-w-3xl mx-auto leading-relaxed"
                >
                    전화 주문, 예약금 결제, 비대면 청구까지. <br />
                    카드번호 입력만으로 빠르고 안전하게 결제하세요.
                </motion.p>
            </section>

            {/* 결제 흐름 */}
            <section className="py-24 px-6 md:px-16 bg-[#f0fdfa]">
                <motion.h2 {...fadeUp(0)} className="text-4xl font-bold text-center mb-12">
                    수기결제 프로세스
                </motion.h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
                    {/* 주문 접수 */}
                    <motion.div {...fadeUp(0.1)} className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 bg-white border border-[#a7f3d0]/70 rounded-2xl flex justify-center items-center text-[#10b981] text-3xl shadow-md">
                            <Phone />
                        </div>
                        <p className="font-semibold mt-2">전화·주문 접수</p>
                        <p className="text-sm text-[#1e3a34]/70">고객이 전화 또는 온라인으로 주문</p>
                    </motion.div>

                    <ArrowRight className="text-[#10b981] w-10 h-10 hidden md:block" />

                    {/* 카드 정보 입력 */}
                    <motion.div {...fadeUp(0.2)} className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 bg-gradient-to-tr from-[#34d399] to-[#10b981] rounded-2xl flex justify-center items-center text-white text-3xl shadow-[0_0_25px_rgba(16,185,129,0.25)]">
                            <CreditCard />
                        </div>
                        <p className="font-semibold mt-2">카드 정보 입력</p>
                        <p className="text-sm text-[#1e3a34]/70">가맹점 관리화면에서 카드번호 입력</p>
                    </motion.div>

                    <ArrowRight className="text-[#10b981] w-10 h-10 hidden md:block" />

                    {/* 승인 및 정산 */}
                    <motion.div {...fadeUp(0.3)} className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 bg-white border border-[#a7f3d0]/70 rounded-2xl flex justify-center items-center text-[#10b981] text-3xl shadow-md">
                            <CheckCircle2 />
                        </div>
                        <p className="font-semibold mt-2">승인 및 정산 완료</p>
                        <p className="text-sm text-[#1e3a34]/70">D+0 또는 D+1 자동 입금</p>
                    </motion.div>
                </div>

                <motion.p
                    {...fadeUp(0.5)}
                    className="text-center mt-10 text-[#1e3a34]/70 max-w-3xl mx-auto leading-relaxed"
                >
                    고객의 카드 정보를 직접 입력해 비대면으로 결제가 승인되며, 안전하게 정산됩니다.
                </motion.p>
            </section>

            {/* 주요 기능 */}
            <section className="py-28 px-6 md:px-16 max-w-6xl mx-auto space-y-20">
                <motion.div {...fadeUp(0)} className="text-center mb-10">
                    <h2 className="text-4xl font-bold mb-4 text-[#0b2723]">🧾 수기결제의 장점</h2>
                    <p className="text-[#1e3a34]/80">
                        단 한 번의 입력으로 예약금·비대면 결제를 신속하고 안전하게 처리하세요.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            icon: <FileText size={28} />,
                            title: "비대면 결제 지원",
                            desc: "전화, 문자, 이메일 주문 모두 대응",
                        },
                        {
                            icon: <Lock size={28} />,
                            title: "민감정보 암호화",
                            desc: "입력된 카드정보는 즉시 암호화·폐기",
                        },
                        {
                            icon: <ShieldCheck size={28} />,
                            title: "PCI-DSS 완벽 준수",
                            desc: "국제 보안규격 기반 안전한 결제환경",
                        },
                        {
                            icon: <TimerReset size={28} />,
                            title: "D+0 빠른 정산",
                            desc: "입금 지연 없이 당일 입금 지원",
                        },
                        {
                            icon: <Wallet size={28} />,
                            title: "예약금·보증금 처리",
                            desc: "숙박, 병원, 학원, 서비스 업종에 적합",
                        },
                        {
                            icon: <CreditCard size={28} />,
                            title: "부분취소 및 영수증 관리",
                            desc: "거래 내역 및 취소를 간편하게 관리",
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
                    비대면 결제도{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                        SFIN PAY 하나로
                    </span>
                </motion.h2>
                <motion.p
                    {...fadeUp(0.2)}
                    className="text-[#1e3a34]/90 text-lg mb-10 leading-relaxed"
                >
                    예약금, 전화주문, 원격결제까지 — <br />
                    수기결제 기능으로 고객과 매장의 결제 편의성을 높이세요.
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
