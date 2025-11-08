'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Building2,
    FileText,
    Wallet,
    RefreshCw,
    Boxes,
    ArrowRight,
    Briefcase,
    BarChart3,
    ClipboardList,
} from 'lucide-react';

const fadeUp = (i = 0) => ({
    initial: { opacity: 1, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0 },
    transition: { duration: 0.6, delay: i * 0.1 },
});

export default function B2B(): JSX.Element {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setMounted(true);
    }, []);

    return (
        <div className="min-h-screen bg-[#f0fdfa] text-[#0b2723] pt-32">
            {/* 헤더 */}
            <section className="text-center py-20 px-6 md:px-16 bg-gradient-to-b from-[#ecfdf5] to-[#f0fdfa]">
                <motion.h1
                    {...fadeUp(0)}
                    className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
                >
                    B2B 거래,{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                        대량 정산도 간단하게
                    </span>
                </motion.h1>
                <motion.p
                    {...fadeUp(0.3)}
                    className="text-lg md:text-xl text-[#1e3a34]/80 max-w-3xl mx-auto leading-relaxed"
                >
                    기업 간 거래의 세금계산서, 정기결제, 대량 송금까지. <br />
                    반복적인 거래를 자동화하여 회계팀의 부담을 줄이세요.
                </motion.p>
            </section>

            {/* ✨ B2B 결제 흐름 시각화 */}
            <section className="py-24 px-6 md:px-16 bg-[#ecfdf5] relative overflow-hidden">
                <motion.h2
                    {...fadeUp(0)}
                    className="text-4xl font-bold text-center mb-12"
                >
                    기업 간 정산 프로세스
                </motion.h2>

                <motion.div
                    {...fadeUp(0.2)}
                    className="flex flex-col md:flex-row justify-center items-center gap-8 text-center"
                >
                    {/* 계약 체결 */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 rounded-2xl bg-white border border-[#a7f3d0]/70 flex items-center justify-center text-[#10b981] text-3xl shadow-md">
                            <Briefcase />
                        </div>
                        <p className="font-semibold mt-2">계약 체결</p>
                        <p className="text-sm text-[#1e3a34]/70">정기 거래 조건 등록</p>
                    </div>

                    <ArrowRight className="text-[#10b981] w-10 h-10 hidden md:block" />

                    {/* 세금계산서 발행 */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#34d399] to-[#10b981] shadow-[0_0_25px_rgba(16,185,129,0.25)] flex items-center justify-center text-white text-3xl">
                            <FileText />
                        </div>
                        <p className="font-semibold mt-2">세금계산서 발행</p>
                        <p className="text-sm text-[#1e3a34]/70">자동 생성 및 발송</p>
                    </div>

                    <ArrowRight className="text-[#10b981] w-10 h-10 hidden md:block" />

                    {/* 정기결제 */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 rounded-2xl bg-white border border-[#a7f3d0]/70 flex items-center justify-center text-[#10b981] text-3xl shadow-md">
                            <RefreshCw />
                        </div>
                        <p className="font-semibold mt-2">정기결제</p>
                        <p className="text-sm text-[#1e3a34]/70">자동 청구 · 출금</p>
                    </div>

                    <ArrowRight className="text-[#10b981] w-10 h-10 hidden md:block" />

                    {/* 정산 완료 */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 rounded-2xl bg-white border border-[#a7f3d0]/70 flex items-center justify-center text-[#10b981] text-3xl shadow-md">
                            <Wallet />
                        </div>
                        <p className="font-semibold mt-2">정산 완료</p>
                        <p className="text-sm text-[#1e3a34]/70">D+0 · D+1 대량 정산</p>
                    </div>
                </motion.div>

                <motion.p
                    {...fadeUp(0.4)}
                    className="text-center mt-10 text-[#1e3a34]/70 max-w-3xl mx-auto leading-relaxed"
                >
                    계약부터 세금계산, 결제, 입금까지 모두 자동으로 연결됩니다. <br />
                    복잡한 송장·회계 프로세스를 SFIN PAY가 처리합니다.
                </motion.p>
            </section>

            {/* 주요 기능 */}
            <section className="py-28 px-6 md:px-16 max-w-6xl mx-auto space-y-20">
                <motion.div {...fadeUp(0)} className="text-center mb-10">
                    <h2 className="text-4xl font-bold mb-4 text-[#0b2723]">
                        🧾 B2B를 위한 스마트 기능
                    </h2>
                    <p className="text-[#1e3a34]/80">
                        계약 관리부터 정산, 회계 연동까지 한 번에 처리됩니다.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            icon: <ClipboardList size={28} />,
                            title: '자동 세금계산서 발행',
                            desc: '매 거래 건마다 자동으로 세금계산서가 생성되고 발송됩니다.',
                        },
                        {
                            icon: <RefreshCw size={28} />,
                            title: '정기결제 시스템',
                            desc: '매월, 매분기 등 주기적으로 자동 결제가 실행됩니다.',
                        },
                        {
                            icon: <BarChart3 size={28} />,
                            title: '대량 정산 리포트',
                            desc: '여러 거래처의 정산 내역을 한 화면에서 확인할 수 있습니다.',
                        },
                        {
                            icon: <Boxes size={28} />,
                            title: '상품·계약별 매출 분석',
                            desc: '각 계약별 실적을 데이터 시각화로 한눈에 확인하세요.',
                        },
                        {
                            icon: <Building2 size={28} />,
                            title: 'ERP / 회계 연동 지원',
                            desc: '기업용 회계 시스템과 자동 연동되어 업무 효율을 극대화합니다.',
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
                    기업 거래 자동화도{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                        SFIN PAY 하나로
                    </span>
                </motion.h2>
                <motion.p
                    {...fadeUp(0.2)}
                    className="text-[#1e3a34]/90 text-lg mb-10 leading-relaxed"
                >
                    계약 · 결제 · 세금계산서까지 전 과정을 자동화하세요. <br />
                    반복적인 업무를 줄이고, 정확한 정산을 경험해보세요.
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
