'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Link2,
    Smartphone,
    User,
    CreditCard,
    Wallet,
    Share2,
    ArrowRight,
    Receipt,
    Globe2,
    PiggyBank,
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

export default function Personal(): JSX.Element {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setMounted(true);
    }, []);

    return (
        <div className="min-h-screen bg-[#f0fdfa] text-[#0b2723] pt-32">
            {/* 💼 Header */}
            <section className="text-center py-20 px-6 md:px-16 bg-gradient-to-b from-[#ecfdf5] to-[#f0fdfa]">
                <motion.h1
                    {...fadeUp(0)}
                    className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
                >
                    개인 결제,{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                        링크 하나로 끝
                    </span>
                </motion.h1>
                <motion.p
                    {...fadeUp(0.3)}
                    className="text-lg md:text-xl text-[#1e3a34]/80 max-w-3xl mx-auto leading-relaxed"
                >
                    사업자등록 없이도 결제 링크를 생성해 <br />
                    대금을 받을 수 있는 비사업자 맞춤형 결제 솔루션입니다.
                </motion.p>
            </section>

            {/* 💳 Flow */}
            <section className="py-24 px-6 md:px-16 bg-[#ecfdf5]">
                <motion.h2
                    {...fadeUp(0)}
                    className="text-4xl font-bold text-center mb-12 text-[#0b2723]"
                >
                    결제 흐름
                </motion.h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
                    {/* 결제링크 생성 */}
                    <motion.div {...fadeUp(0.1)} className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 bg-white border border-[#a7f3d0]/70 rounded-2xl flex items-center justify-center text-[#10b981] text-3xl shadow-md">
                            <Link2 />
                        </div>
                        <p className="font-semibold mt-2">결제링크 생성</p>
                        <p className="text-sm text-[#1e3a34]/70">금액·상품 입력 후 링크 발행</p>
                    </motion.div>

                    <ArrowRight className="text-[#10b981] w-10 h-10 hidden md:block" />

                    {/* 고객 결제 */}
                    <motion.div {...fadeUp(0.2)} className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 bg-gradient-to-tr from-[#34d399] to-[#10b981] rounded-2xl flex justify-center items-center text-white text-3xl shadow-[0_0_25px_rgba(16,185,129,0.25)]">
                            <Smartphone />
                        </div>
                        <p className="font-semibold mt-2">고객 결제</p>
                        <p className="text-sm text-[#1e3a34]/70">링크 클릭으로 간편 결제</p>
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
                    인플루언서, 프리랜서, 1인 창작자도 링크 한 번으로 결제·정산을 받을 수 있습니다.
                </motion.p>
            </section>

            {/* 주요 기능 */}
            <section className="py-28 px-6 md:px-16 max-w-6xl mx-auto space-y-20">
                <motion.div {...fadeUp(0)} className="text-center mb-10">
                    <h2 className="text-4xl font-bold mb-4 text-[#0b2723]">
                        💰 개인 · 프리랜서를 위한 결제 솔루션
                    </h2>
                    <p className="text-[#1e3a34]/80">
                        비사업자부터 소상공인까지, 수익 창출을 위한 다양한 결제 방식을 지원합니다.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            icon: <Link2 size={28} />,
                            title: '결제링크 발행',
                            desc: '상품명, 금액, 설명 입력 후 즉시 결제링크 생성',
                        },
                        {
                            icon: <Share2 size={28} />,
                            title: 'SNS 공유 결제',
                            desc: '인스타그램, 블로그, 카카오톡 등 어디서나 결제 유도 가능',
                        },
                        {
                            icon: <User size={28} />,
                            title: '비사업자 결제 수수료 절감',
                            desc: '개인 간 거래에 최적화된 낮은 수수료율',
                        },
                        {
                            icon: <CreditCard size={28} />,
                            title: '간편결제 지원',
                            desc: '네이버페이, 카카오페이 등 간편결제 연동 지원',
                        },
                        {
                            icon: <Receipt size={28} />,
                            title: '자동 영수증 발행',
                            desc: '결제 시 문자·이메일 영수증 자동 전송',
                        },
                        {
                            icon: <Globe2 size={28} />,
                            title: '글로벌 결제 링크',
                            desc: '해외 고객을 위한 다국어·해외카드 결제 지원',
                        },
                        {
                            icon: <PiggyBank size={28} />,
                            title: '정산관리 대시보드',
                            desc: '개인 수익, 정산 내역을 실시간으로 확인',
                        },
                        {
                            icon: <Wallet size={28} />,
                            title: 'D+0 / D+1 정산',
                            desc: '결제 후 당일 또는 익일 입금으로 현금 흐름 개선',
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
                    프리랜서 결제도{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                        SFIN PAY 하나로
                    </span>
                </motion.h2>
                <motion.p
                    {...fadeUp(0.2)}
                    className="text-[#1e3a34]/90 text-lg mb-10 leading-relaxed"
                >
                    결제링크, 비사업자 정산, SNS 결제까지 —
                    창작자와 1인 사업자를 위한 완벽한 솔루션입니다.
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
