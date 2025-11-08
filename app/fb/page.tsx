'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Coffee,
    UtensilsCrossed,
    Building2,
    Zap,
    Clock3,
    Wallet,
    ArrowRight,
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

const FB: React.FC = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setMounted(true);
    }, []);

    return (
        <div className="min-h-screen bg-[#f0fdfa] text-[#0b2723] pt-32">
            {/* 🌿 Header */}
            <section className="text-center py-20 px-6 md:px-16 bg-gradient-to-b from-[#ecfdf5] to-[#f0fdfa]">
                <motion.h1
                    {...fadeUp(0)}
                    className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
                >
                    외식업 매출 관리,{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                        이제 자동으로
                    </span>
                </motion.h1>
                <motion.p
                    {...fadeUp(0.3)}
                    className="text-lg md:text-xl text-[#1e3a34]/80 max-w-3xl mx-auto leading-relaxed"
                >
                    하루 매출을 직접 정리하지 않아도 됩니다. <br />
                    카드 결제부터 입금까지, SFIN PAY가 알아서 처리해드립니다.
                </motion.p>
            </section>

            {/* 🌿 결제 흐름 시각화 */}
            <section className="py-24 px-6 md:px-16 bg-[#ecfdf5] relative overflow-hidden">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-12 text-[#0b2723]"
                >
                    F&B 결제 흐름 한눈에 보기
                </motion.h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
                    {/* 매장 (POS) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-col items-center gap-2"
                    >
                        <div className="w-24 h-24 rounded-2xl bg-white border border-[#a7f3d0]/70 flex items-center justify-center text-[#10b981] text-3xl shadow-md">
                            <Coffee />
                        </div>
                        <p className="font-semibold mt-2">매장 (POS)</p>
                        <p className="text-sm text-[#1e3a34]/70">결제 발생</p>
                    </motion.div>

                    <ArrowRight className="text-[#10b981] w-10 h-10 hidden md:block" />

                    {/* SFIN PAY */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col items-center gap-2"
                    >
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#34d399] to-[#10b981] shadow-[0_0_25px_rgba(16,185,129,0.25)] flex items-center justify-center text-white text-3xl">
                            <Wallet />
                        </div>
                        <p className="font-semibold mt-2">SFIN PAY</p>
                        <p className="text-sm text-[#1e3a34]/70">
                            결제 승인 · 정산 자동 처리
                        </p>
                    </motion.div>

                    <ArrowRight className="text-[#10b981] w-10 h-10 hidden md:block" />

                    {/* 가맹점 계좌 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-col items-center gap-2"
                    >
                        <div className="w-24 h-24 rounded-2xl bg-white border border-[#a7f3d0]/70 flex items-center justify-center text-[#10b981] text-3xl shadow-md">
                            <Building2 />
                        </div>
                        <p className="font-semibold mt-2">가맹점 계좌</p>
                        <p className="text-sm text-[#1e3a34]/70">
                            D+0 또는 D+1 입금 완료
                        </p>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-10 text-[#1e3a34]/70 max-w-3xl mx-auto leading-relaxed"
                >
                    결제 → 승인 → 정산 → 입금까지 모든 절차가 자동으로 연결됩니다. <br />
                    복잡한 정산표 대신 SFIN PAY가 모든 과정을 관리합니다.
                </motion.p>
            </section>

            {/* 🌿 주요 기능 */}
            <section className="py-28 px-6 md:px-16 max-w-6xl mx-auto space-y-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-4xl font-bold mb-4 text-[#0b2723]">
                        🍽 꼭 필요한 기능만 담았습니다
                    </h2>
                    <p className="text-[#1e3a34]/80">
                        바쁜 점주님을 위해 실제 현장에서 가장 자주 쓰이는 기능만 모았습니다.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            icon: <UtensilsCrossed size={28} />,
                            title: '지점별 매출 한눈에',
                            desc: '본사나 점주가 매출·정산 내역을 즉시 확인할 수 있습니다.',
                        },
                        {
                            icon: <Clock3 size={28} />,
                            title: '빠른 입금 시스템',
                            desc: '오늘 결제된 금액을 당일(D+0) 또는 익일(D+1) 바로 입금받으세요.',
                        },
                        {
                            icon: <Zap size={28} />,
                            title: 'POS 교체 없이 연동',
                            desc: '기존 포스기 그대로 사용 가능하며, 별도 장비 설치가 필요 없습니다.',
                        },
                        {
                            icon: <Coffee size={28} />,
                            title: '프랜차이즈 통합 관리',
                            desc: '본사는 모든 매장의 매출과 정산 현황을 실시간으로 확인할 수 있습니다.',
                        },
                        {
                            icon: <Building2 size={28} />,
                            title: '세금계산서 자동 발행',
                            desc: '정산이 완료되면 자동으로 세금계산서가 생성됩니다.',
                        },
                    ].map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                            transition={{ duration: 0.6, delay: 0.2 * i }}
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

            {/* 🌿 CTA */}
            <section className="py-24 px-6 md:px-16 bg-gradient-to-tr from-[#d1fae5] to-[#a7f3d0] text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold mb-4 text-[#0b2723]"
                >
                    결제부터 입금까지,{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                        SFIN PAY 하나로
                    </span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-[#1e3a34]/90 text-lg mb-10 leading-relaxed"
                >
                    복잡한 매출 관리, 이제 버튼 한 번으로 끝냅니다. <br />
                    오늘 결제한 금액을 오늘 바로 입금받아보세요.
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
};

export default FB;
