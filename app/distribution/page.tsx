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
                <motion.h1 {...fadeUp(0)} className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight" >
                    쇼핑 · 판매 · 유통 정산,{" "}
                    <br className="block md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                        한 번에 관리하세요
                    </span>
                </motion.h1>
                <motion.p {...fadeUp(0.3)} className="text-lg md:text-xl text-[#1e3a34]/80 max-w-3xl mx-auto leading-relaxed" >
                    온라인몰, 오픈마켓, 예약 플랫폼 등
                    <br />
                    상품 판매와 예약 결제가 중심인 비즈니스를 위해
                    <br />
                    <strong>
                        D+0 정산 · 간편결제 · 정기결제
                    </strong>
                    를 제공합니다.
                </motion.p>
            </section>

            {/* 🌿 Distribution Flow */}
            <section className="py-24 px-6 md:px-16 bg-[#ecfdf5] relative overflow-hidden">
                <motion.h2
                    {...fadeUp(0)}
                    className="text-4xl font-bold text-center mb-12 text-[#0b2723]"
                >
                    주문부터 정산까지, 흐름 한눈에 보기
                </motion.h2>

                <motion.div
                    {...fadeUp(0.2)}
                    className="flex flex-wrap md:flex-nowrap justify-center items-center gap-6 text-center"
                >
                    {/* 고객 주문/예약 */}
                    <div className="flex flex-col items-center gap-2 w-24 md:w-28">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white border border-[#a7f3d0]/70
                flex items-center justify-center text-[#10b981] text-2xl md:text-3xl shadow-md">
                            <ShoppingBag />
                        </div>
                        <p className="font-semibold mt-2 text-sm md:text-base">상품 주문 · 예약</p>
                        <p className="text-[11px] md:text-sm text-[#1e3a34]/70">
                            온라인몰 · 오픈마켓 · 예약
                        </p>
                    </div>

                    <ArrowRight className="text-[#10b981] w-7 h-7 md:w-8 md:h-8 hidden md:block shrink-0" />

                    {/* 결제 처리 */}
                    <div className="flex flex-col items-center gap-2 w-24 md:w-28">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-tr from-[#34d399] to-[#10b981]
                shadow-[0_0_18px_rgba(16,185,129,0.22)] flex items-center justify-center
                text-white text-2xl md:text-3xl">
                            <Wallet />
                        </div>
                        <p className="font-semibold mt-2 text-sm md:text-base">각종 결제 시퀀스</p>
                        <p className="text-[11px] md:text-sm text-[#1e3a34]/70">
                            카드 · 간편결제 · 정기결제 지원
                        </p>
                    </div>

                    <ArrowRight className="text-[#10b981] w-7 h-7 md:w-8 md:h-8 hidden md:block shrink-0" />

                    {/* 판매자/가맹점 정산 관리 */}
                    <div className="flex flex-col items-center gap-2 w-24 md:w-28">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white border border-[#a7f3d0]/70
                flex items-center justify-center text-[#10b981] text-2xl md:text-3xl shadow-md">
                            <Building2 />
                        </div>
                        <p className="font-semibold mt-2 text-sm md:text-base">판매자 정산 관리</p>
                        <p className="text-[11px] md:text-sm text-[#1e3a34]/70">
                            입점사 · 파트너별 자동 분배
                        </p>
                    </div>

                    <ArrowRight className="text-[#10b981] w-7 h-7 md:w-8 md:h-8 hidden md:block shrink-0" />

                    {/* D+0 / D+1 입금 완료 */}
                    <div className="flex flex-col items-center gap-2 w-24 md:w-28">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white border border-[#a7f3d0]/70
                flex items-center justify-center text-[#10b981] text-2xl md:text-3xl shadow-md">
                            <Wallet />
                        </div>
                        <p className="font-semibold mt-2 text-sm md:text-base">D+0 · D+1 정산</p>
                        <p className="text-[11px] md:text-sm text-[#1e3a34]/70">
                            빠른 입금 · 투명한 정산 내역
                        </p>
                    </div>
                </motion.div>

                <motion.p
                    {...fadeUp(0.4)}
                    className="text-center mt-10 text-[#1e3a34]/70 max-w-3xl mx-auto leading-relaxed"
                >
                    주문/예약, 결제, 판매자 정산까지 하나의 흐름으로 관리합니다.
                    <br />
                    엑셀로 따로 정산표를 만들 필요 없이,
                    플랫폼 내에서 입점사·가맹점별 정산을 자동화할 수 있습니다.
                </motion.p>
            </section>

            {/* 🌿 주요 기능 */}
            <section className="py-28 px-6 md:px-16 max-w-6xl mx-auto space-y-20">
                <motion.div {...fadeUp(0)} className="text-center mb-10">
                    <h2 className="text-4xl font-bold mb-4 text-[#0b2723]">
                        쇼핑 · 판매 · 유통업을 위한 핵심 기능
                    </h2>
                    <p className="text-[#1e3a34]/80">
                        온라인몰, 오픈마켓, 예약 플랫폼, 입점형 서비스 모두 하나의 정산 시스템으로 관리하세요.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            icon: <ShoppingBag size={28} />,
                            title: '온라인몰·오픈마켓 통합 정산',
                            desc: '자사몰, 마켓, 플랫폼의 매출을 한 화면에서 집계하고 정산할 수 있습니다.',
                        },
                        {
                            icon: <ClipboardList size={28} />,
                            title: '입점사·파트너별 자동 정산표',
                            desc: '수수료, 분배 비율에 따라 입점사·공급사별 정산 내역이 자동 생성됩니다.',
                        },
                        {
                            icon: <Wallet size={28} />,
                            title: 'D+0 / D+1 빠른 정산',
                            desc: '상품 판매·예약 결제 이후 지정 기준에 따라 자동 입금 처리됩니다.',
                        },
                        {
                            icon: <Package size={28} />,
                            title: '예약 · 구독 · 정기결제 지원',
                            desc: '예약 서비스, 구독형 상품 등을 위한 반복결제/정기과금 기능을 제공합니다.',
                        },
                        {
                            icon: <Building2 size={28} />,
                            title: '플랫폼 운영자 통합 대시보드',
                            desc: '전체 매출, 정산 현황, 채널별 실적을 실시간으로 모니터링할 수 있습니다.',
                        },
                        {
                            icon: <Boxes size={28} />,
                            title: '다채널 판매 연동',
                            desc: '다수 판매 채널과의 연동을 통해 주문·결제·정산 데이터를 자동으로 수집합니다.',
                        },
                    ].map((f, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(i * 0.15)}
                            className="p-8 bg-white border border-[#a7f3d0]/60 rounded-2xl hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]"
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
                    쇼핑 · 판매 · 유통 비즈니스,
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                        {" "}SFIN PAY 하나로
                    </span>
                </motion.h2>
                <motion.p
                    {...fadeUp(0.2)}
                    className="text-[#1e3a34]/90 text-lg mb-10 leading-relaxed"
                >
                    온라인몰, 오픈마켓, 예약·플랫폼까지
                    <br />
                    상품 판매와 예약 결제에 최적화된 D+0 정산, 간편결제, 정기결제를 한 번에 도입하세요.
                </motion.p>

                <Link href="/inquiry/contract">
                    <motion.button
                        {...fadeUp(0.4)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-semibold text-lg shadow-md"
                    >
                        도입 상담 받기 →
                    </motion.button>
                </Link>
            </section>

        </div>
    );
};

export default Distribution;
