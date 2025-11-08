'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    BedDouble,
    Plane,
    CalendarClock,
    Wallet,
    ArrowRight,
    RefreshCw,
    Building2,
    ClipboardCheck,
} from 'lucide-react';

const fadeUp = (i = 0) => ({
    initial: { opacity: 1, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0 },
    transition: { duration: 0.6, delay: i * 0.1 },
});

export default function Travel(): JSX.Element {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
        setMounted(true);
    }, []);

    return (
        <div className="min-h-screen bg-[#f0fdfa] text-[#0b2723] pt-32">
            {/* Header */}
            <section className="text-center py-20 px-6 md:px-16 bg-gradient-to-b from-[#ecfdf5] to-[#f0fdfa]">
                <motion.h1 {...fadeUp(0)} className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                    숙박 · 여행 정산,{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                        예약부터 환불까지 자동화
                    </span>
                </motion.h1>
                <motion.p {...fadeUp(0.3)} className="text-lg md:text-xl text-[#1e3a34]/80 max-w-3xl mx-auto leading-relaxed">
                    예약금, 취소, 부분환불 등 복잡한 결제 흐름을 자동 처리해 <br /> 효율적인 운영 환경을 제공합니다.
                </motion.p>
            </section>

            {/* Flow */}
            <section className="py-24 px-6 md:px-16 bg-[#ecfdf5]">
                <motion.h2 {...fadeUp(0)} className="text-4xl font-bold text-center mb-12">예약 결제 흐름</motion.h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
                    <motion.div {...fadeUp(0.1)} className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 bg-white border border-[#a7f3d0]/70 rounded-2xl flex items-center justify-center text-[#10b981] text-3xl shadow-md">
                            <CalendarClock />
                        </div>
                        <p className="font-semibold mt-2">예약 접수</p>
                        <p className="text-sm text-[#1e3a34]/70">고객 예약 및 결제 요청</p>
                    </motion.div>

                    <ArrowRight className="text-[#10b981] w-10 h-10 hidden md:block" />

                    <motion.div {...fadeUp(0.2)} className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 bg-gradient-to-tr from-[#34d399] to-[#10b981] rounded-2xl flex justify-center items-center text-white text-3xl shadow-[0_0_25px_rgba(16,185,129,0.25)]">
                            <Wallet />
                        </div>
                        <p className="font-semibold mt-2">예약금 결제</p>
                        <p className="text-sm text-[#1e3a34]/70">예약 시 카드 또는 간편결제</p>
                    </motion.div>

                    <ArrowRight className="text-[#10b981] w-10 h-10 hidden md:block" />

                    <motion.div {...fadeUp(0.3)} className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 bg-white border border-[#a7f3d0]/70 rounded-2xl flex justify-center items-center text-[#10b981] text-3xl shadow-md">
                            <RefreshCw />
                        </div>
                        <p className="font-semibold mt-2">취소 / 부분환불</p>
                        <p className="text-sm text-[#1e3a34]/70">자동 처리 및 정산 반영</p>
                    </motion.div>
                </div>
                <motion.p {...fadeUp(0.5)} className="text-center mt-10 text-[#1e3a34]/70 max-w-3xl mx-auto leading-relaxed">
                    예약부터 취소·환불까지, 복잡한 결제 절차를 자동화합니다.
                </motion.p>
            </section>

            {/* Features */}
            <section className="py-28 px-6 md:px-16 max-w-6xl mx-auto space-y-20">
                <motion.div {...fadeUp(0)} className="text-center mb-10">
                    <h2 className="text-4xl font-bold mb-4 text-[#0b2723]">🛎 숙박·여행 업종 특화 기능</h2>
                    <p className="text-[#1e3a34]/80">예약금, 부분환불, 기간제 정산을 자동 처리합니다.</p>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        { icon: <BedDouble size={28} />, title: '예약금 자동 관리', desc: '고객 예약 시 예약금 자동 결제 및 취소 처리' },
                        { icon: <ClipboardCheck size={28} />, title: '부분환불 시스템', desc: '이용 전·후 환불 조건에 따른 금액 자동 계산' },
                        { icon: <Plane size={28} />, title: '여행사 다중 결제 지원', desc: '복수 예약, 단체결제, 일정별 자동 배분' },
                        { icon: <Building2 size={28} />, title: '객실/지점 통합 정산', desc: '호텔/리조트 지점별 매출 자동 정리' },
                        { icon: <Wallet size={28} />, title: 'D+0 빠른 입금', desc: '숙박업 특화 당일 입금 지원' },
                    ].map((f, i) => (
                        <motion.div key={i} {...fadeUp(i * 0.15)} className="p-8 bg-white border border-[#a7f3d0]/70 rounded-2xl hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] t1">
                            <div className="flex items-center gap-3 text-[#10b981] mb-4">{f.icon}<h3 className="text-xl font-semibold text-[#0b2723]">{f.title}</h3></div>
                            <p className="text-[#1e3a34]/80 leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 md:px-16 bg-gradient-to-tr from-[#d1fae5] to-[#a7f3d0] text-center">
                <motion.h2 {...fadeUp(0)} className="text-4xl font-bold text-[#0b2723] mb-4">
                    숙박·여행 정산도{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                        SFIN PAY 하나로
                    </span>
                </motion.h2>
                <motion.p {...fadeUp(0.2)} className="text-[#1e3a34]/90 text-lg mb-10 leading-relaxed">
                    예약금, 취소, 부분환불까지 — 자동 정산으로 손쉬운 운영이 가능합니다.
                </motion.p>
                <Link href="/inquiry/contract">
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-semibold text-lg shadow-md t1">
                        도입 상담 받기 →
                    </motion.button>
                </Link>
            </section>
        </div>
    );
}
