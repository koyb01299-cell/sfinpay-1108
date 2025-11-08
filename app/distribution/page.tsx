'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Package,
    ShoppingBag,
    Truck,
    Building2,
    Wallet,
    ArrowRight,
    ClipboardList,
    Boxes,
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

const Distribution: React.FC = () => {
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
                    유통업 정산,{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                        이제 한눈에 관리하세요
                    </span>
                </motion.h1>
                <motion.p
                    {...fadeUp(0.3)}
                    className="text-lg md:text-xl text-[#1e3a34]/80 max-w-3xl mx-auto leading-relaxed"
                >
                    복잡한 도매 거래와 정산, 이제 자동으로 처리됩니다. <br />
                    출고부터 입금까지, 거래처별 정산 내역을 한 번에 확인하세요.
                </motion.p>
            </section>

            {/* 🌿 Distribution Flow */}
            <section className="py-24 px-6 md:px-16 bg-[#ecfdf5] relative overflow-hidden">
                <motion.h2 {...fadeUp(0)} className="text-4xl font-bold text-center mb-12 text-[#0b2723]">
                    유통 거래 흐름 한눈에 보기
                </motion.h2>

                <motion.div
                    {...fadeUp(0.2)}
                    className="flex flex-col md:flex-row justify-center items-center gap-8 text-center"
                >
                    {/* 출고 */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 rounded-2xl bg-white border border-[#a7f3d0]/70 flex items-center justify-center text-[#10b981] text-3xl shadow-md">
                            <Truck />
                        </div>
                        <p className="font-semibold mt-2">상품 출고</p>
                        <p className="text-sm text-[#1e3a34]/70">거래처 주문 접수</p>
                    </div>

                    <ArrowRight className="text-[#10b981] w-10 h-10 hidden md:block" />

                    {/* 거래처 결제 */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#34d399] to-[#10b981] shadow-[0_0_25px_rgba(16,185,129,0.25)] flex items-center justify-center text-white text-3xl">
                            <ShoppingBag />
                        </div>
                        <p className="font-semibold mt-2">거래처 결제</p>
                        <p className="text-sm text-[#1e3a34]/70">PG 연동 자동 결제</p>
                    </div>

                    <ArrowRight className="text-[#10b981] w-10 h-10 hidden md:block" />

                    {/* 도매 정산 */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 rounded-2xl bg-white border border-[#a7f3d0]/70 flex items-center justify-center text-[#10b981] text-3xl shadow-md">
                            <Wallet />
                        </div>
                        <p className="font-semibold mt-2">도매 정산</p>
                        <p className="text-sm text-[#1e3a34]/70">자동 입금 및 거래 기록</p>
                    </div>

                    <ArrowRight className="text-[#10b981] w-10 h-10 hidden md:block" />

                    {/* 입금 완료 */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 rounded-2xl bg-white border border-[#a7f3d0]/70 flex items-center justify-center text-[#10b981] text-3xl shadow-md">
                            <Building2 />
                        </div>
                        <p className="font-semibold mt-2">입금 완료</p>
                        <p className="text-sm text-[#1e3a34]/70">D+0 또는 D+1 정산</p>
                    </div>
                </motion.div>

                <motion.p
                    {...fadeUp(0.4)}
                    className="text-center mt-10 text-[#1e3a34]/70 max-w-3xl mx-auto leading-relaxed"
                >
                    거래처 결제, 세금계산서, 입금까지 모두 자동으로 연결됩니다. <br />
                    더 이상 거래별 엑셀 정산표를 만들 필요가 없습니다.
                </motion.p>
            </section>

            {/* 🌿 주요 기능 */}
            <section className="py-28 px-6 md:px-16 max-w-6xl mx-auto space-y-20">
                <motion.div {...fadeUp(0)} className="text-center mb-10">
                    <h2 className="text-4xl font-bold mb-4 text-[#0b2723]">
                        📦 유통업을 위한 스마트 기능
                    </h2>
                    <p className="text-[#1e3a34]/80">
                        출고, 결제, 정산까지 하나의 화면에서 관리됩니다.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            icon: <Boxes size={28} />,
                            title: '상품별 매출 관리',
                            desc: '상품 단위로 거래 내역을 추적하고 실시간 재고를 확인하세요.',
                        },
                        {
                            icon: <ClipboardList size={28} />,
                            title: '거래처별 정산표 자동 생성',
                            desc: '거래처마다 거래 내역과 세금계산서가 자동 정리됩니다.',
                        },
                        {
                            icon: <Wallet size={28} />,
                            title: '정산 자동 입금',
                            desc: 'D+0 / D+1 기준으로 도매 정산이 자동 입금 처리됩니다.',
                        },
                        {
                            icon: <Package size={28} />,
                            title: '출고 내역 연동',
                            desc: '출고 처리 시 자동으로 정산과 결제 내역이 업데이트됩니다.',
                        },
                        {
                            icon: <Building2 size={28} />,
                            title: '본사 통합 모니터링',
                            desc: '모든 거래처의 실적을 본사 관리자 페이지에서 실시간 확인할 수 있습니다.',
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

            {/* 🌿 CTA */}
            <section className="py-24 px-6 md:px-16 bg-gradient-to-tr from-[#d1fae5] to-[#a7f3d0] text-center">
                <motion.h2
                    {...fadeUp(0)}
                    className="text-4xl font-bold text-[#0b2723] mb-4"
                >
                    유통 정산도{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                        SFIN PAY 하나로
                    </span>
                </motion.h2>
                <motion.p
                    {...fadeUp(0.2)}
                    className="text-[#1e3a34]/90 text-lg mb-10 leading-relaxed"
                >
                    출고부터 입금까지 복잡했던 과정이 자동화됩니다. <br />
                    거래처별 정산표를 손으로 만들 필요가 없습니다.
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

export default Distribution;
