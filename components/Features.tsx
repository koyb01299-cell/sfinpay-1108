'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
    CreditCard,
    QrCode,
    Keyboard,
    MonitorSmartphone,
    ShieldCheck,
    ArrowRight,
    CheckCircle2,
} from 'lucide-react';

const fadeUp = (i = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.5, delay: 0.05 * i },
});

export default function Features(): JSX.Element {
    /** ✅ 실제 존재하는 라우트 목록 */
    const existingRoutes: string[] = [
        '/online-pay',
        '/qr-pay',
        '/device',
        '/distribution',
        '/service',
        '/fb',
        '/b2b',
    ];

    /** ✅ 존재하는 페이지만 이동 */
    const goTo = (url: string): void => {
        if (existingRoutes.includes(url)) {
            window.location.href = url;
        }
    };

    /** 💳 결제 방식별 솔루션 */
    const paymentBlocks = [
        {
            icon: <CreditCard size={22} />,
            title: '온라인 결제',
            desc: '쇼핑몰·예약형 서비스용 카드/간편결제/계좌이체를 통합 지원하며, D+0 / D+1 정산을 제공합니다.',
            points: ['간편결제', '부분환불', 'API 연동'],
            href: '/online-pay',
        },
        {
            icon: <QrCode size={22} />,
            title: '오프라인·QR 결제',
            desc: '현장용 통합 결제 솔루션. 단말기 결제와 QR 결제를 하나의 시스템으로 통합 관리합니다.',
            points: ['POS/MPOS 연동', 'QR 통합', '매장별 정산'],
            href: '/qr-pay',
        },
        {
            icon: <Keyboard size={22} />,
            title: '수기 결제(MOTO)',
            desc: '전화·원격 주문 시 카드정보 입력 결제. 리스크 보호 및 실시간 모니터링을 제공합니다.',
            points: ['MOTO 지원', '보안 인증', '리스크 모니터링'],
            href: '/payments/moto', // ❌ 미생성
        },
        {
            icon: <MonitorSmartphone size={22} />,
            title: 'POS / MPOS 단말기',
            desc: '프랜차이즈·다점포용 결제 단말. 본사 통합 리포트와 매장별 관리 기능을 지원합니다.',
            points: ['POS 연동', '다점포 관리', '리포트 기능'],
            href: '/device',
        },
    ];

    /** 🧾 업종별 추천 솔루션 */
    const industryCats = [
        {
            icon: <ShieldCheck size={22} />,
            title: '커머스 · 리테일',
            sub: '온라인몰 · 리셀 · 구독 커머스',
            desc: '상품 결제 중심 구조. D+0 정산, 카드 및 간편결제, 정기 결제까지 완벽 지원.',
            href: '/distribution',
        },
        {
            icon: <ShieldCheck size={22} />,
            title: '서비스 · 라이프케어',
            sub: '학원 · 피트니스 · 렌탈 · 미용',
            desc: '예약/반복 결제 중심 업종. 자동 정산과 스케줄 관리 기능 내장.',
            href: '/service',
        },
        {
            icon: <ShieldCheck size={22} />,
            title: '음식 · 프랜차이즈',
            sub: '식당 · 카페 · 배달 · 본사-가맹',
            desc: 'POS 연동형 결제 구조로 매장별 실시간 매출·정산 관리 가능.',
            href: '/fb',
        },
        {
            icon: <ShieldCheck size={22} />,
            title: '숙박 · 여행 · 레저',
            sub: '호텔 · 여행사 · 액티비티',
            desc: '예약·환불 중심 구조. 보증금·취소·부분환불까지 세밀한 정책 대응.',
            href: '/industries/hospitality', // ❌ 없음
        },
        {
            icon: <ShieldCheck size={22} />,
            title: '엔터테인먼트 · 콘텐츠',
            sub: 'OTT · 공연 · 게임 · 웹툰',
            desc: '정기 과금·글로벌 결제·구독형 콘텐츠 환경에 최적화.',
            href: '/industries/entertainment', // ❌ 없음
        },
        {
            icon: <ShieldCheck size={22} />,
            title: '금융 · B2B 서비스',
            sub: 'SaaS · 광고 · 보험 · 임대',
            desc: '세금계산서, 대량 정산, 자동 청구 등 B2B 중심 기능 완비.',
            href: '/b2b',
        },
    ];

    return (
        <section
            id="features"
            className="relative py-28 px-6 md:px-16 bg-gradient-to-b from-[#EFFFF9] via-[#F8FFFD] to-white overflow-hidden"
        >
            {/* 헤더 */}
            <motion.div {...fadeUp(0)} className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#0C3C35] leading-relaxed tracking-tight">
                    결제 방식이 뭐든, 업종이 뭐든 —
                    <span className="text-[#00b894] block mt-2">
                        당신의 비즈니스에 맞춰드립니다.
                    </span>
                </h2>
                <p className="mt-5 text-[#2E5C54]/80 text-lg leading-relaxed max-w-2xl mx-auto">
                    온라인·오프라인 어디서나 R+0 / R+1 정산, 보안, 리스크 관리를
                    통합 제공합니다.
                </p>
            </motion.div>

            {/* 2열 레이아웃 */}
            <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-stretch">
                {/* 좌측 결제 방식 */}
                <div className="flex flex-col justify-between">
                    <h3 className="text-lg font-semibold text-[#00b894] mb-6">
                        💳 결제 방식별 솔루션
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {paymentBlocks.map((b, i) => {
                            const isActive = existingRoutes.includes(b.href);
                            return (
                                <motion.div
                                    key={b.title}
                                    {...fadeUp(i + 1)}
                                    onClick={() => goTo(b.href)}
                                    className={`rounded-2xl border border-[#C4F7EC] bg-white p-6 group flex flex-col justify-between transition-all cursor-pointer ${isActive
                                        ? 'hover:bg-[#F3FFFC] hover:shadow-[0_10px_28px_rgba(0,200,155,0.15)]'
                                        : 'opacity-60 pointer-events-none'
                                        }`}
                                >
                                    <div>
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className="p-3 rounded-xl bg-[#00b894]/10 text-[#00b894]">
                                                {b.icon}
                                            </div>
                                            <h4 className="text-lg font-semibold text-[#0C3C35] mb-1">
                                                {b.title}
                                            </h4>
                                        </div>
                                        <p className="text-sm text-[#2E5C54]/80 leading-relaxed mb-4">
                                            {b.desc}
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {b.points.map((p) => (
                                                <span
                                                    key={p}
                                                    className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-[#EFFFF9] border border-[#C4F7EC] text-[#0B4D45]"
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
                </div>

                {/* 우측 업종별 추천 */}
                <div className="flex flex-col justify-between">
                    <h3 className="text-lg font-semibold text-[#00b894] mb-6">
                        🧾 업종별 추천 솔루션
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {industryCats.map((c, i) => {
                            const isActive = existingRoutes.includes(c.href);
                            return (
                                <motion.div
                                    key={c.title}
                                    {...fadeUp(i + 1)}
                                    onClick={() => goTo(c.href)}
                                    className={`rounded-2xl border border-[#C4F7EC] bg-white p-6 group flex flex-col justify-between transition-all cursor-pointer ${isActive
                                        ? 'hover:bg-[#F3FFFC] hover:shadow-[0_10px_28px_rgba(0,200,155,0.15)]'
                                        : 'opacity-60 pointer-events-none'
                                        }`}
                                >
                                    <div>
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className="p-3 rounded-xl bg-[#00b894]/10 text-[#00b894]">
                                                {c.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-[#0C3C35] mb-1">
                                                    {c.title}
                                                </h4>
                                                <p className="text-sm text-[#2E5C54]/70">{c.sub}</p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-[#2E5C54]/80 leading-relaxed mb-4">
                                            {c.desc}
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center gap-1 text-[#00b894] font-semibold group-hover:underline">
                                        자세히 보기 <ArrowRight size={14} />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
