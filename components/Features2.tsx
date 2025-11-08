'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Building2 } from 'lucide-react';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

/* ✅ Lottie 파일 경로 (public/lottie/) */
import commerceAnim from '@/public/lottie/industry_commerce.json';
import serviceAnim from '@/public/lottie/industry_service.json';
import fbAnim from '@/public/lottie/industry_fb.json';
import travelAnim from '@/public/lottie/industry_travel.json';
import entertainmentAnim from '@/public/lottie/industry_entertainment.json';
import b2bAnim from '@/public/lottie/industry_b2b.json';
import hospitalAnim from '@/public/lottie/industry_hospital.json';
import personalAnim from '@/public/lottie/industry_personal.json';

const fadeUp = (i = 0) => ({
    initial: { opacity: 1, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.55, delay: 0.07 * i },
});

export default function Features2(): JSX.Element {
    const existingRoutes = [
        '/online-pay',
        '/qr-pay',
        '/device',
        '/distribution',
        '/service',
        '/fb',
        '/b2b',
        '/hospitality',
        '/entertainment',
        '/healthcare',
        '/personal',
    ];

    const goTo = (url: string): void => {
        if (existingRoutes.includes(url)) window.location.href = url;
    };

    const industryCats = [
        {
            lottie: commerceAnim,
            title: '쇼핑 · 판매 · 유통업',
            sub: '온라인몰 · 오픈마켓 · 예약 플랫폼',
            desc: '상품 판매나 예약 결제가 중심인 업종을 위해 D+0 정산, 간편결제, 정기결제 기능을 제공합니다.',
            keywords: ['D+0 정산', '정기결제', '간편결제'],
            href: '/distribution',
        },
        {
            lottie: serviceAnim,
            title: '서비스 · 교육업',
            sub: '학원 · 피트니스 · 렌탈 · 미용 · 강의',
            desc: '반복결제와 예약 결제가 필요한 업종을 위한 자동청구, 스케줄 정산, 리스크 관리 기능을 지원합니다.',
            keywords: ['자동청구', '예약결제', '스케줄정산'],
            href: '/service',
        },
        {
            lottie: fbAnim,
            title: '외식 · 프랜차이즈업',
            sub: '식당 · 카페 · 본사-가맹 구조',
            desc: 'POS, 키오스크, 배달앱과 실시간 연동되어 매출부터 본사 정산까지 한눈에 관리할 수 있습니다.',
            keywords: ['POS연동', '매출리포트', '본사정산'],
            href: '/fb',
        },
        {
            lottie: travelAnim,
            title: '숙박 · 여행 · 레저업',
            sub: '호텔 · 여행사 · 액티비티',
            desc: '예약금, 취소, 부분환불 등 복잡한 결제 흐름을 자동으로 처리해 효율적인 운영 환경을 제공합니다.',
            keywords: ['부분환불', '예약금관리', '자동처리'],
            href: '/hospitality',
        },
        {
            lottie: entertainmentAnim,
            title: '콘텐츠 · 엔터테인먼트',
            sub: '공연 · OTT · 게임 · 웹툰 · 티켓',
            desc: '정기결제, 환율 자동처리, 저작권 정산 등 콘텐츠 기반 비즈니스에 필요한 모든 기능을 제공합니다.',
            keywords: ['정기구독', '글로벌결제', '저작권정산'],
            href: '/entertainment',
        },
        {
            lottie: hospitalAnim,
            title: '병원 · 의료 · 헬스케어',
            sub: '병의원 · 한의원 · 의료기기 · 헬스',
            desc: '비급여 결제, 의료기기 렌탈, 예약 진료 등 의료 서비스 환경에 최적화된 결제 시스템을 제공합니다.',
            keywords: ['비급여결제', '예약진료', '의료정산'],
            href: '/healthcare',
        },
        {
            lottie: b2bAnim,
            title: '기업 · B2B 서비스',
            sub: '광고 · SaaS · 임대 · 보험',
            desc: '자동청구, 세금계산서, 대량정산 등 기업간 결제(B2B)에 특화된 인프라를 제공합니다.',
            keywords: ['세금계산서', '대량정산', 'B2B결제'],
            href: '/b2b',
        },
        {
            lottie: personalAnim,
            title: '개인 · 프리랜서',
            sub: '결제링크 · 1인사업자 · 인플루언서',
            desc: '사업자등록 없이도 결제 링크를 생성해 대금을 받을 수 있는 비사업자 맞춤형 결제 솔루션입니다.',
            keywords: ['결제링크', '비사업자결제', '1인창작자'],
            href: '/personal',
        },
    ];

    return (
        <section
            id="features2"
            className="relative py-28 px-6 md:px-16 bg-gradient-to-b from-[#F9FFFD] via-[#EFFFF9] to-[#F8FFFD] overflow-hidden"
        >
            {/* 💫 헤더 */}
            <motion.div {...fadeUp(0)} className="max-w-3xl mx-auto text-center mb-20">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(0,200,155,0.1)] text-[#00b894] text-sm font-medium">
                    <Building2 size={16} /> 업종별 맞춤 솔루션
                </span>
                <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-snug">
                    업종에 맞는 <span className="text-[#00b894]">결제·정산 환경</span>
                </h2>
                <p className="mt-5 text-[#334155]/80 text-lg leading-relaxed">
                    쇼핑부터 의료까지, 모든 업종을 아우르는 유연한 결제 인프라를 제공합니다.
                    <br className="hidden sm:block" />
                    SFIN PAY는 업종별 결제 흐름에 최적화되어 있습니다.
                </p>
            </motion.div>

            {/* 🧾 2×4 카드 그리드 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {industryCats.map((c, i) => {
                    const isActive = existingRoutes.includes(c.href);
                    return (
                        <motion.div
                            key={c.title}
                            {...fadeUp(i + 1)}
                            onClick={() => goTo(c.href)}
                            className={`relative rounded-2xl border border-[rgba(0,200,155,0.25)]
                            bg-white/95 backdrop-blur-sm p-5 flex flex-col justify-between
                            cursor-pointer group t1 duration-300
                            shadow-[0_4px_14px_rgba(0,200,155,0.05)]
                            ${isActive
                                    ? 'hover:bg-[#f3fffc] hover:shadow-[0_10px_28px_rgba(0,200,155,0.12)] hover:-translate-y-0.5'
                                    : 'opacity-60 pointer-events-none'}`}
                        >
                            <div className="flex flex-col items-center text-center">
                                {/* 🎞️ Lottie */}
                                <Lottie
                                    animationData={c.lottie}
                                    loop
                                    autoplay
                                    className="w-[100px] h-[100px] mb-4 opacity-90"
                                />
                                <h4 className="text-lg font-semibold text-[#0C3C35] mb-1">{c.title}</h4>
                                <p className="text-sm text-[#2E5C54]/70 mb-2">{c.sub}</p>
                                <p className="text-sm text-[#2E5C54]/80 leading-relaxed mb-4">{c.desc}</p>

                                {/* ✳️ 키워드 */}
                                <div className="flex flex-wrap gap-2 justify-center mb-5">
                                    {c.keywords.map((k, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 rounded-lg text-xs font-medium bg-[#EFFFF9] border border-[#00b894]/20 text-[#008c73]"
                                        >
                                            {k}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="text-center inline-flex items-center justify-center gap-1 text-[#00b894] font-semibold group-hover:underline">
                                자세히 보기 <ArrowRight size={14} />
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* 🌿 배경 장식 */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_60%_80%,rgba(0,200,155,0.06),transparent_70%)]"
            />
        </section>
    );
}
