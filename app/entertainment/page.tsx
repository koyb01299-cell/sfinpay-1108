'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Film,
    Music2,
    Gamepad2,
    Ticket,
    Globe2,
    Wallet,
    Repeat,
    ArrowRight,
    Scale,
    MonitorPlay,
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

export default function Contents(): JSX.Element {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setMounted(true);
    }, []);

    return (
        <div className="min-h-screen bg-[#f0fdfa] text-[#0b2723] pt-32">
            {/* 🎬 Header */}
            <section className="text-center py-20 px-6 md:px-16 bg-gradient-to-b from-[#ecfdf5] to-[#f0fdfa]">
                <motion.h1
                    {...fadeUp(0)}
                    className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
                >
                    콘텐츠 정산,{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                        구독과 저작권까지 자동으로
                    </span>
                </motion.h1>
                <motion.p
                    {...fadeUp(0.3)}
                    className="text-lg md:text-xl text-[#1e3a34]/80 max-w-3xl mx-auto leading-relaxed"
                >
                    정기결제, 환율 자동처리, 저작권 정산 등 <br />
                    콘텐츠 기반 비즈니스에 필요한 모든 기능을 제공합니다.
                </motion.p>
            </section>

            {/* 🎥 Flow */}
            <section className="py-24 px-6 md:px-16 bg-[#ecfdf5]">
                <motion.h2
                    {...fadeUp(0)}
                    className="text-4xl font-bold text-center mb-12 text-[#0b2723]"
                >
                    콘텐츠 결제 흐름
                </motion.h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
                    {/* 구독 신청 */}
                    <motion.div {...fadeUp(0.1)} className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 bg-white border border-[#a7f3d0]/70 rounded-2xl flex items-center justify-center text-[#10b981] text-3xl shadow-md">
                            <MonitorPlay />
                        </div>
                        <p className="font-semibold mt-2">구독/결제 신청</p>
                        <p className="text-sm text-[#1e3a34]/70">
                            고객이 콘텐츠 상품을 구독 또는 결제
                        </p>
                    </motion.div>

                    <ArrowRight className="text-[#10b981] w-10 h-10 hidden md:block" />

                    {/* 정기결제 처리 */}
                    <motion.div {...fadeUp(0.2)} className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 bg-gradient-to-tr from-[#34d399] to-[#10b981] rounded-2xl flex justify-center items-center text-white text-3xl shadow-[0_0_25px_rgba(16,185,129,0.25)]">
                            <Repeat />
                        </div>
                        <p className="font-semibold mt-2">정기결제 처리</p>
                        <p className="text-sm text-[#1e3a34]/70">
                            주기적 결제 및 자동 갱신
                        </p>
                    </motion.div>

                    <ArrowRight className="text-[#10b981] w-10 h-10 hidden md:block" />

                    {/* 저작권 정산 */}
                    <motion.div {...fadeUp(0.3)} className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 bg-white border border-[#a7f3d0]/70 rounded-2xl flex justify-center items-center text-[#10b981] text-3xl shadow-md">
                            <Scale />
                        </div>
                        <p className="font-semibold mt-2">저작권 정산</p>
                        <p className="text-sm text-[#1e3a34]/70">창작자별 자동 분배 및 지급</p>
                    </motion.div>
                </div>

                <motion.p
                    {...fadeUp(0.5)}
                    className="text-center mt-10 text-[#1e3a34]/70 max-w-3xl mx-auto leading-relaxed"
                >
                    구독부터 저작권료 정산까지 자동으로 연결되어 콘텐츠 비즈니스의 효율을 극대화합니다.
                </motion.p>
            </section>

            {/* 주요 기능 */}
            <section className="py-28 px-6 md:px-16 max-w-6xl mx-auto space-y-20">
                <motion.div {...fadeUp(0)} className="text-center mb-10">
                    <h2 className="text-4xl font-bold mb-4 text-[#0b2723]">
                        🎧 콘텐츠 업종 맞춤 기능
                    </h2>
                    <p className="text-[#1e3a34]/80">
                        구독형 서비스부터 티켓, 웹툰, 게임까지 모든 결제 흐름을 자동화합니다.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            icon: <Repeat size={28} />,
                            title: '정기구독 결제',
                            desc: '월/연 단위 결제를 자동 갱신하고, 실패 시 재시도 로직 지원',
                        },
                        {
                            icon: <Globe2 size={28} />,
                            title: '글로벌 결제 지원',
                            desc: '해외 카드 및 다중 통화 환율 자동 반영',
                        },
                        {
                            icon: <Scale size={28} />,
                            title: '저작권 정산 자동화',
                            desc: '매출 분배율 기반으로 창작자·파트너에게 자동 지급',
                        },
                        {
                            icon: <Ticket size={28} />,
                            title: '티켓·이벤트 관리',
                            desc: '공연/이벤트 예약과 결제를 동시에 처리',
                        },
                        {
                            icon: <Gamepad2 size={28} />,
                            title: '인게임 결제 연동',
                            desc: '게임 내 아이템/포인트 결제 자동 검증 및 반영',
                        },
                        {
                            icon: <Film size={28} />,
                            title: 'OTT / 영상 결제 관리',
                            desc: '구독형 영상 플랫폼의 결제 상태를 실시간 모니터링',
                        },
                        {
                            icon: <Music2 size={28} />,
                            title: '음원 스트리밍 정산',
                            desc: '재생 수 기반 자동 수익 분배 및 로열티 관리',
                        },
                        {
                            icon: <Wallet size={28} />,
                            title: 'D+0 / D+1 정산',
                            desc: '창작자 정산을 빠르게 처리하여 현금 흐름 개선',
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
                    콘텐츠 결제도{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                        SFIN PAY 하나로
                    </span>
                </motion.h2>
                <motion.p
                    {...fadeUp(0.2)}
                    className="text-[#1e3a34]/90 text-lg mb-10 leading-relaxed"
                >
                    정기결제, 글로벌 환율, 저작권 정산까지 — <br />
                    하나의 시스템으로 완전 자동화하세요.
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
