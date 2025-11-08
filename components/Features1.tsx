'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    CreditCard,
    QrCode,
    Keyboard,
    MonitorSmartphone,
    CheckCircle2,
    ArrowRight,
    Building2,
} from 'lucide-react';
import dynamic from 'next/dynamic';

/* ────────────────────────────────────────────────
   ✅ Lottie 동적 import (SSR 비활성)
────────────────────────────────────────────────── */
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

/* ✅ 공용 LottieLoader — public/lottie/ 경로 기반 fetch */
function LottieLoader({ src, className }: { src: string; className?: string }) {
    const [data, setData] = useState<object | null>(null);
    useEffect(() => {
        fetch(src)
            .then((res) => res.json())
            .then(setData)
            .catch(console.error);
    }, [src]);
    if (!data) return null;
    return <Lottie animationData={data} loop autoplay className={className} />;
}

const fadeUp = (i = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay: 0.08 * i },
});

export default function Features1(): JSX.Element {
    const existingRoutes: string[] = [
        '/online-pay',
        '/qr-pay',
        '/device',
        '/distribution',
        '/service',
        '/fb',
        '/b2b',
        '/moto',
    ];

    const goTo = (url: string): void => {
        if (existingRoutes.includes(url)) window.location.href = url;
    };

    /* ✅ Lottie 파일은 public/lottie/features 경로 기준으로 fetch */
    const paymentBlocks = [
        {
            icon: <CreditCard size={22} />,
            lottie: '/lottie/online-pay.json',
            title: '온라인 결제',
            desc: '쇼핑몰·예약·플랫폼에서 카드/간편결제/계좌이체를 통합 처리. D+0·D+1 정산으로 현금 흐름을 안정화합니다.',
            points: ['D+0 / D+1 정산', '간편결제', 'API 연동'],
            href: '/online-pay',
        },
        {
            icon: <QrCode size={22} />,
            lottie: '/lottie/qr_pay.json',
            title: '오프라인·QR 결제',
            desc: '매장 단말·POS·QR을 하나로. 현장 운영 효율을 높이고, 매장별 매출/정산 리포트를 즉시 확인합니다.',
            points: ['POS/MPOS 연동', 'QR 통합', '매장별 리포트'],
            href: '/qr-pay',
        },
        {
            icon: <Keyboard size={22} />,
            lottie: '/lottie/moto.json',
            title: '수기 결제(MOTO)',
            desc: '전화/원격 주문에 적합. 카드정보 입력 결제에 보안·리스크 모니터링을 더해 안전하게 운영합니다.',
            points: ['MOTO 지원', '보안 인증', '리스크 모니터링'],
            href: '/moto',
        },
        {
            icon: <MonitorSmartphone size={22} />,
            lottie: '/lottie/device.json',
            title: 'POS / MPOS 단말기',
            desc: '프랜차이즈·다점포용. 본사는 통합, 매장은 개별 관리로 의사결정이 빨라집니다.',
            points: ['POS 연동', '다점포 관리', '실시간 리포트'],
            href: '/device',
        },
    ];

    return (
        <section
            id="features1"
            className="relative py-24 px-6 md:px-16 bg-gradient-to-b from-[#e8fff6] via-[#f2fffb] to-white overflow-hidden"
        >
            {/* 💫 상단 시그니처 */}
            <motion.div {...fadeUp(0)} className="max-w-3xl mx-auto text-center mb-20">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(0,200,155,0.1)] text-[#00b894] text-sm font-medium">
                    <Building2 size={16} /> 결제 방식별 솔루션
                </span>
                <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-snug">
                    어떤 결제 방식이든 <span className="text-[#00b894]">한 플랫폼</span>에서
                </h2>
                <p className="mt-5 text-[#334155]/80 text-lg leading-relaxed">
                    카드·간편결제·계좌이체·단말·QR을 한곳에.
                    <br className="hidden sm:block" />
                    정산(D+0/D+1)과 보안·리스크까지 기본 제공합니다.
                </p>
            </motion.div>

            {/* 🔳 카드 목록 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
                {paymentBlocks.map((b, i) => {
                    const isActive = existingRoutes.includes(b.href);
                    return (
                        <motion.div
                            key={b.title}
                            {...fadeUp(i + 1)}
                            onClick={() => goTo(b.href)}
                            className={`rounded-2xl border border-[rgba(0,200,155,0.22)]
                                bg-white/95 backdrop-blur-sm p-7 flex flex-col md:flex-row items-center gap-6
                                cursor-pointer group transition-all shadow-[0_4px_16px_rgba(0,200,155,0.06)]
                                ${isActive
                                    ? 'hover:bg-[#f3fffc] hover:shadow-[0_10px_28px_rgba(0,200,155,0.15)] hover:-translate-y-0.5'
                                    : 'opacity-60 pointer-events-none'}`}
                        >
                            <div className="w-full md:w-[38%] flex justify-center">
                                <LottieLoader src={b.lottie} className="w-[130px] h-[130px] md:w-[150px] md:h-[150px]" />
                            </div>

                            <div className="flex-1 text-left">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="p-2 rounded-lg bg-[#00b894]/10 text-[#00b894]">
                                        {b.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0C3C35]">{b.title}</h3>
                                </div>

                                <p className="text-[15px] text-[#2E5C54]/80 leading-relaxed mb-4">
                                    {b.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-3">
                                    {b.points.map((p) => (
                                        <span
                                            key={p}
                                            className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-[#EFFFF9] border border-[#C4F7EC] text-[#0B4D45]"
                                        >
                                            <CheckCircle2 size={13} /> {p}
                                        </span>
                                    ))}
                                </div>

                                <div className="inline-flex items-center gap-1 text-[#00b894] font-semibold group-hover:underline">
                                    자세히 보기 <ArrowRight size={14} />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* 🌿 라이트 민트 배경 효과 */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_60%,rgba(0,200,155,0.07),transparent_70%)]" />
        </section>
    );
}
