'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Stethoscope,
    HeartPulse,
    Syringe,
    ClipboardCheck,
    Building2,
    Wallet,
    ArrowRight,
    ActivitySquare,
    CalendarClock,
    Microscope,
} from 'lucide-react';

/* ──────────────────────────────────────────────
   🌿 Animation Preset
────────────────────────────────────────────── */
const fadeUp = (i = 0) => ({
    initial: { opacity: 1, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0 },
    transition: { duration: 0.6, delay: i * 0.1 },
});

export default function Medical(): JSX.Element {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setMounted(true);
    }, []);

    return (
        <div className="min-h-screen bg-[#f0fdfa] text-[#0b2723] pt-32">
            {/* 🏥 Header */}
            <section className="text-center py-20 px-6 md:px-16 bg-gradient-to-b from-[#ecfdf5] to-[#f0fdfa]">
                <motion.h1
                    {...fadeUp(0)}
                    className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
                >
                    의료 결제,{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                        비급여부터 정산까지 자동화
                    </span>
                </motion.h1>
                <motion.p
                    {...fadeUp(0.3)}
                    className="text-lg md:text-xl text-[#1e3a34]/80 max-w-3xl mx-auto leading-relaxed"
                >
                    비급여 결제, 의료기기 렌탈, 예약 진료 등 <br />
                    의료 서비스 환경에 최적화된 결제 시스템을 제공합니다.
                </motion.p>
            </section>

            {/* 🩺 Flow */}
            <section className="py-24 px-6 md:px-16 bg-[#ecfdf5]">
                <motion.h2
                    {...fadeUp(0)}
                    className="text-4xl font-bold text-center mb-12 text-[#0b2723]"
                >
                    의료 결제 프로세스
                </motion.h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
                    {/* 예약 접수 */}
                    <motion.div {...fadeUp(0.1)} className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 bg-white border border-[#a7f3d0]/70 rounded-2xl flex items-center justify-center text-[#10b981] text-3xl shadow-md">
                            <CalendarClock />
                        </div>
                        <p className="font-semibold mt-2">예약 접수</p>
                        <p className="text-sm text-[#1e3a34]/70">환자 예약 및 진료 등록</p>
                    </motion.div>

                    <ArrowRight className="text-[#10b981] w-10 h-10 hidden md:block" />

                    {/* 비급여 결제 */}
                    <motion.div {...fadeUp(0.2)} className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 bg-gradient-to-tr from-[#34d399] to-[#10b981] rounded-2xl flex justify-center items-center text-white text-3xl shadow-[0_0_25px_rgba(16,185,129,0.25)]">
                            <Stethoscope />
                        </div>
                        <p className="font-semibold mt-2">비급여 결제</p>
                        <p className="text-sm text-[#1e3a34]/70">카드 또는 간편결제로 즉시 결제</p>
                    </motion.div>

                    <ArrowRight className="text-[#10b981] w-10 h-10 hidden md:block" />

                    {/* 정산 완료 */}
                    <motion.div {...fadeUp(0.3)} className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 bg-white border border-[#a7f3d0]/70 rounded-2xl flex justify-center items-center text-[#10b981] text-3xl shadow-md">
                            <Wallet />
                        </div>
                        <p className="font-semibold mt-2">정산 완료</p>
                        <p className="text-sm text-[#1e3a34]/70">D+0 또는 D+1 자동 입금</p>
                    </motion.div>
                </div>

                <motion.p
                    {...fadeUp(0.5)}
                    className="text-center mt-10 text-[#1e3a34]/70 max-w-3xl mx-auto leading-relaxed"
                >
                    진료 예약부터 비급여 결제, 정산까지 자동으로 연결됩니다.
                    복잡한 의료 결제 행정이 간편해집니다.
                </motion.p>
            </section>

            {/* 주요 기능 */}
            <section className="py-28 px-6 md:px-16 max-w-6xl mx-auto space-y-20">
                <motion.div {...fadeUp(0)} className="text-center mb-10">
                    <h2 className="text-4xl font-bold mb-4 text-[#0b2723]">
                        🩺 의료 업종 특화 기능
                    </h2>
                    <p className="text-[#1e3a34]/80">
                        병원, 의원, 한의원, 헬스케어 산업에 맞춘 결제 및 정산 시스템입니다.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            icon: <HeartPulse size={28} />,
                            title: '비급여 항목 결제',
                            desc: '치료비, 미용·도수치료 등 비급여 항목 결제를 자동 관리',
                        },
                        {
                            icon: <ClipboardCheck size={28} />,
                            title: '예약 진료 결제 연동',
                            desc: '예약 시 결제 및 당일 취소 자동 환불 시스템',
                        },
                        {
                            icon: <Microscope size={28} />,
                            title: '의료기기 렌탈 정산',
                            desc: '렌탈기간별 자동 청구 및 계약별 수익 관리',
                        },
                        {
                            icon: <ActivitySquare size={28} />,
                            title: '의료 데이터 연동',
                            desc: 'EMR, OCS 등 시스템과 연동하여 결제 이력 자동 반영',
                        },
                        {
                            icon: <Syringe size={28} />,
                            title: '시술별 결제 구분',
                            desc: '시술, 검사, 상담 등 항목별 금액 관리 및 영수증 구분',
                        },
                        {
                            icon: <Building2 size={28} />,
                            title: '지점 통합 정산',
                            desc: '병원·의원 본사에서 지점별 매출 현황 실시간 확인',
                        },
                        {
                            icon: <Wallet size={28} />,
                            title: 'D+0 / D+1 자동 입금',
                            desc: '의료기관 운영에 맞춘 빠른 입금 프로세스',
                        },
                    ].map((f, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(i * 0.15)}
                            className="p-8 bg-white border border-[#a7f3d0]/60 rounded-2xl hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] t1"
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
            <section className="py-24 px-6 md:px-16 bg-gradient-to-tr from-[#d1fae5] to-[#a7f3d0] text-center">
                <motion.h2
                    {...fadeUp(0)}
                    className="text-4xl font-bold text-[#0b2723] mb-4"
                >
                    의료 결제도{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                        SFIN PAY 하나로
                    </span>
                </motion.h2>
                <motion.p
                    {...fadeUp(0.2)}
                    className="text-[#1e3a34]/90 text-lg mb-10 leading-relaxed"
                >
                    병의원, 한의원, 헬스케어 서비스까지 — <br />
                    비급여부터 렌탈 정산까지 완전 자동화하세요.
                </motion.p>

                <Link href="/inquiry/contract">
                    <motion.button
                        {...fadeUp(0.4)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-semibold text-lg shadow-md t1"
                    >
                        도입 상담 받기 →
                    </motion.button>
                </Link>
            </section>
        </div>
    );
}
