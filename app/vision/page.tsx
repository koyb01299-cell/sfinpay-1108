"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb, HeartHandshake, Rocket, Globe2, Users } from "lucide-react";

export const metadata = {
    title: "Vision | SFIN PAY",
    description: "SFIN PAY의 비전과 핵심 가치",
};

const fadeUp = (i = 0) => ({
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: 0.08 * i },
});

export default function VisionPage(): JSX.Element {
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className="min-h-screen bg-mint-gradient text-[#0f2b26] pt-32 pb-24">
            {/* ────────────── ① HEADER ────────────── */}
            <section className="text-center px-6 md:px-16 py-20 border-b border-brand-mint">
                <motion.h1
                    {...fadeUp(0)}
                    className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-[#0f2b26]"
                >
                    SFIN PAY <span className="text-brand-mintDark">VISION 2025</span>
                </motion.h1>
                <motion.p
                    {...fadeUp(0.2)}
                    className="text-lg md:text-xl text-[#145C52]/85 max-w-3xl mx-auto leading-relaxed"
                >
                    “모든 결제는 <strong>신뢰</strong> 위에 세워져야 한다.”
                    <br />
                    기술보다 투명성, 속도보다 신뢰를 우선하는 것이
                    SFIN PAY의 비전입니다.
                </motion.p>
            </section>

            {/* ────────────── ② OUR MISSION ────────────── */}
            <section className="py-24 px-6 md:px-16 bg-white border-b border-brand-mint">
                <motion.h2
                    {...fadeUp(0)}
                    className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#0f2b26]"
                >
                    우리의 미션
                </motion.h2>

                <motion.p
                    {...fadeUp(0.2)}
                    className="max-w-4xl mx-auto text-center text-[#145C52]/90 leading-relaxed text-[15.5px]"
                >
                    SFIN PAY는 단순한 결제 솔루션이 아니라, <strong>신뢰 기반 금융 인프라</strong>를
                    구축하는 기업입니다.
                    우리는 투명한 정산, 공정한 수수료, 그리고 ESG 중심의 기술로
                    소상공인부터 글로벌 브랜드까지 모두가 공평한 금융 생태계에 참여할 수 있도록 만듭니다.
                </motion.p>

                <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
                    {[
                        {
                            icon: <Target size={28} />,
                            title: "고객 신뢰 우선",
                            desc: "모든 서비스는 고객의 데이터와 결제 신뢰를 최우선 가치로 설계합니다.",
                        },
                        {
                            icon: <Lightbulb size={28} />,
                            title: "투명한 기술 혁신",
                            desc: "혁신은 검증 가능해야 합니다. SFIN PAY의 모든 알고리즘은 투명한 기준에 따라 운영됩니다.",
                        },
                        {
                            icon: <HeartHandshake size={28} />,
                            title: "지속가능한 성장",
                            desc: "우리는 사회적 책임을 다하며, ESG 기반의 지속가능한 결제 생태계를 확장합니다.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(i + 1)}
                            className="p-8 rounded-2xl border border-brand-mintLight bg-[#F9FFFE] hover:shadow-[0_8px_25px_rgba(0,201,167,0.15)] transition-all duration-500"
                        >
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="p-4 rounded-full bg-brand-mint/20 text-brand-mintDark">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-[#0f2b26]">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-[#145C52]/80 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ────────────── ③ OUR FUTURE ────────────── */}
            <section className="py-24 px-6 md:px-16 bg-mint-gradient border-b border-brand-mint">
                <motion.h2
                    {...fadeUp(0)}
                    className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#0f2b26]"
                >
                    우리의 미래
                </motion.h2>

                <motion.p
                    {...fadeUp(0.2)}
                    className="max-w-4xl mx-auto text-center text-[#145C52]/90 leading-relaxed text-[15.5px]"
                >
                    SFIN PAY는 2025년까지 아시아 전역의 결제 인프라를 연결하여
                    <strong>국경 없는 정산 네트워크</strong>를 구축하고자 합니다.
                    이를 통해 금융 소외 계층의 디지털 접근성을 높이고,
                    공정한 유동성 흐름을 만들어가는 것이 우리의 미래 비전입니다.
                </motion.p>

                <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
                    {[
                        {
                            icon: <Rocket size={28} />,
                            title: "Global Expansion",
                            desc: "2025년까지 5개국 결제 네트워크 통합 및 해외 가맹점 정산 인프라 구축.",
                        },
                        {
                            icon: <Globe2 size={28} />,
                            title: "Cross-border Finance",
                            desc: "환율, 세금, 수수료를 실시간 자동처리하는 글로벌 결제 표준화 추진.",
                        },
                        {
                            icon: <Users size={28} />,
                            title: "Inclusive Ecosystem",
                            desc: "스타트업, 프리랜서, 소상공인 누구나 접근 가능한 개방형 금융 플랫폼 실현.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(i + 1)}
                            className="p-8 rounded-2xl border border-brand-mintDark/20 bg-white hover:shadow-[0_8px_25px_rgba(0,201,167,0.15)] transition-all duration-500"
                        >
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="p-4 rounded-full bg-brand-mintDark/15 text-brand-mintDark">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-[#0f2b26]">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-[#145C52]/80 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ────────────── ④ FOOTNOTE ────────────── */}
            <footer className="text-center py-16 text-[#145C52]/75 text-sm">
                <motion.p {...fadeUp(0)}>
                    © 2025 SFIN PAY — 모든 비전은 <strong>신뢰</strong>에서 출발합니다.
                </motion.p>
            </footer>
        </div>
    );
}
