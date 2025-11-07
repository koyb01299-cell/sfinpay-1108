"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Headphones,
    Users,
    HeartHandshake,
    CreditCard,
    ClipboardCheck,
    Building2,
    ArrowRight,
    Wallet,
} from "lucide-react";

export default function Service(): JSX.Element {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
        setMounted(true);
    }, []);

    const fadeUp = (i = 0) => ({
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.6, delay: i * 0.1 },
    });

    return (
        <div className="min-h-screen bg-[#ecfdf5] text-[#0b2723] pt-32">
            {/* HEADER */}
            <section className="text-center py-20 px-6 md:px-16 bg-gradient-to-b from-[#f0fdfa] to-[#ecfdf5] border-b border-[#a7f3d0]/60">
                <motion.h1
                    {...fadeUp(0)}
                    className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
                >
                    서비스업 결제 관리,{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                        고객 응대보다 쉬워집니다
                    </span>
                </motion.h1>
                <motion.p
                    {...fadeUp(0.3)}
                    className="text-lg md:text-xl text-[#1e3a34]/80 max-w-3xl mx-auto leading-relaxed"
                >
                    미용실, 병원, 학원, 피트니스 등 다양한 서비스업 매출을 한눈에 관리하세요.
                    예약·결제·정산이 하나의 프로세스로 자동 연결되어 인력과 시간을 절약합니다.
                </motion.p>
            </section>

            {/* FLOW DIAGRAM */}
            <section className="py-24 px-6 md:px-16 bg-[#f0fdfa] border-b border-[#a7f3d0]/50 relative overflow-hidden">
                <motion.h2
                    {...fadeUp(0)}
                    className="text-4xl font-bold text-center mb-12 text-[#0b2723]"
                >
                    서비스 결제 프로세스 한눈에 보기
                </motion.h2>

                <motion.div
                    {...fadeUp(0.2)}
                    className="flex flex-col md:flex-row justify-center items-center gap-8 text-center"
                >
                    {/* 예약 접수 */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 rounded-2xl bg-white border border-[#a7f3d0] flex items-center justify-center text-[#10b981] text-3xl shadow-md">
                            <ClipboardCheck />
                        </div>
                        <p className="font-semibold mt-2">예약 접수</p>
                        <p className="text-sm text-[#1e3a34]/70">고객 일정 및 예약 등록</p>
                    </div>

                    <ArrowRight className="text-[#10b981] w-10 h-10 hidden md:block" />

                    {/* 결제 진행 */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#34d399] to-[#10b981] flex items-center justify-center text-white text-3xl shadow-[0_0_25px_rgba(16,185,129,0.25)]">
                            <CreditCard />
                        </div>
                        <p className="font-semibold mt-2">결제 진행</p>
                        <p className="text-sm text-[#1e3a34]/70">QR / 온라인 자동결제</p>
                    </div>

                    <ArrowRight className="text-[#10b981] w-10 h-10 hidden md:block" />

                    {/* 고객 관리 */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 rounded-2xl bg-white border border-[#a7f3d0] flex items-center justify-center text-[#10b981] text-3xl shadow-md">
                            <Users />
                        </div>
                        <p className="font-semibold mt-2">고객 관리</p>
                        <p className="text-sm text-[#1e3a34]/70">방문·결제 이력 확인 및 맞춤 혜택 제공</p>
                    </div>

                    <ArrowRight className="text-[#10b981] w-10 h-10 hidden md:block" />

                    {/* 정산 완료 */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 rounded-2xl bg-white border border-[#a7f3d0] flex items-center justify-center text-[#10b981] text-3xl shadow-md">
                            <Wallet />
                        </div>
                        <p className="font-semibold mt-2">정산 완료</p>
                        <p className="text-sm text-[#1e3a34]/70">D+0 또는 D+1 정산 자동입금</p>
                    </div>
                </motion.div>

                <motion.p
                    {...fadeUp(0.5)}
                    className="text-center mt-10 text-[#1e3a34]/70 max-w-3xl mx-auto leading-relaxed"
                >
                    예약부터 결제, 고객관리, 정산까지 하나의 프로세스로 통합되어
                    실시간 매출 파악과 고객 응대가 훨씬 효율적입니다.
                </motion.p>
            </section>

            {/* 주요 기능 */}
            <section className="py-28 px-6 md:px-16 max-w-6xl mx-auto space-y-20">
                <motion.div {...fadeUp(0)} className="text-center mb-10">
                    <h2 className="text-4xl font-bold mb-4 text-[#0b2723]">
                        💡 서비스업을 위한 스마트 기능
                    </h2>
                    <p className="text-[#1e3a34]/80">
                        결제와 고객관리가 한 번에 이루어지는,
                        서비스업 전용 맞춤형 결제·정산 플랫폼입니다.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            icon: <Headphones size={28} />,
                            title: "고객 상담 및 예약 관리",
                            desc: "전화·현장 예약과 동시에 고객 정보, 결제 상태를 실시간으로 관리합니다.",
                        },
                        {
                            icon: <CreditCard size={28} />,
                            title: "자동 결제 링크 발송",
                            desc: "고객별 맞춤형 결제 링크를 생성하여 카카오톡·SMS로 즉시 전송.",
                        },
                        {
                            icon: <HeartHandshake size={28} />,
                            title: "고객 충성도 프로그램",
                            desc: "결제 이력 기반 포인트 적립, 쿠폰 발급, 멤버십 혜택 자동 적용.",
                        },
                        {
                            icon: <Building2 size={28} />,
                            title: "본사 통합 대시보드",
                            desc: "지점별 매출, 정산 현황, 고객 분석을 본사 단일 화면에서 통합 조회.",
                        },
                        {
                            icon: <Wallet size={28} />,
                            title: "D+0 / D+1 정산 지원",
                            desc: "매출 데이터 기반으로 당일 또는 익일 정산 자동화 처리.",
                        },
                        {
                            icon: <Users size={28} />,
                            title: "직원 및 관리자 권한 분리",
                            desc: "권한별 접근 제어로 보안과 효율성을 모두 확보.",
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

            {/* CTA */}
            <section className="py-24 px-6 md:px-16 bg-gradient-to-tr from-[#d1fae5] to-[#a7f3d0] text-center border-t border-[#a7f3d0]/50">
                <motion.h2
                    {...fadeUp(0)}
                    className="text-4xl font-bold text-[#0b2723] mb-4"
                >
                    서비스업 매출 관리도{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                        SFIN PAY 하나로
                    </span>
                </motion.h2>
                <motion.p
                    {...fadeUp(0.2)}
                    className="text-[#1e3a34]/90 text-lg mb-10 leading-relaxed"
                >
                    예약·결제·정산·고객관리를 완전히 자동화하세요. <br />
                    SFIN PAY는 현장 효율을 극대화하는 서비스업 전용 결제 인프라입니다.
                </motion.p>

                <Link href="/inquiry/contract">
                    <motion.button
                        {...fadeUp(0.4)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#34d399] to-[#10b981] hover:from-[#10b981] hover:to-[#059669] text-white font-semibold text-lg shadow-[0_8px_25px_rgba(16,185,129,0.25)] transition-all"
                    >
                        도입 상담 받기 →
                    </motion.button>
                </Link>
            </section>
        </div>
    );
}
