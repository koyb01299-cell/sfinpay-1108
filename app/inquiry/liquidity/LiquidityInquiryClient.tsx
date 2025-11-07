"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
    Wallet,
    Banknote,
    LineChart,
    BarChart3,
    ShieldCheck,
    Coins,
    PiggyBank,
    Mail,
    Building2,
    Lock,
    CheckCircle2,
    ChevronRight,
} from "lucide-react";
import ContactFormCRM from "@/components/ContactFormCRM";

const fadeUp = (i = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.6, delay: i * 0.08 },
});

export default function LiquidityInquiryClient(): JSX.Element {
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className="min-h-screen bg-[#f0fdfa] text-[#0b2723]">
            {/* 🌿 Hero */}
            <section className="pt-28 pb-16 px-6 md:px-16 bg-gradient-to-b from-[#ecfdf5] to-[#f0fdfa] border-b border-[#a7f3d0]/40">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.h1
                        {...fadeUp(0)}
                        className="text-4xl md:text-6xl font-extrabold leading-tight"
                    >
                        유동성 지원 /{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                            단기자금 문의
                        </span>
                    </motion.h1>
                    <motion.p
                        {...fadeUp(0.2)}
                        className="mt-5 text-lg md:text-xl text-[#1e3a34]/80 max-w-3xl mx-auto"
                    >
                        매출 흐름에 기반한 단기 자금 지원.
                        <br className="hidden md:block" />
                        정산 예정금, D+0 · D+1 정산 내역을 바탕으로 빠르고 유연한 유동성을 제공합니다.
                    </motion.p>
                </div>
            </section>

            {/* 🌿 주요 특징 */}
            <section className="py-16 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <Banknote size={24} />,
                            title: "매출 기반 한도 산정",
                            desc: "최근 3개월 매출 데이터를 기반으로 자동 한도 예측.",
                        },
                        {
                            icon: <Wallet size={24} />,
                            title: "정산 예정금 활용",
                            desc: "미정산 금액을 담보로 빠른 운전자금 확보.",
                        },
                        {
                            icon: <ShieldCheck size={24} />,
                            title: "안전한 구조",
                            desc: "실제 매출과 연동된 구조로 과도한 채무 위험 없이 유연한 상환 가능.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(i)}
                            className="p-6 rounded-2xl bg-white border border-[#a7f3d0]/60 hover:shadow-[0_10px_30px_rgba(16,185,129,0.12)] transition"
                        >
                            <div className="flex items-center gap-3 text-[#10b981]">
                                {item.icon}
                                <h3 className="text-lg font-semibold text-[#0b2723]">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="mt-3 text-[#1e3a34]/80 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 🌿 조건 안내 */}
            <section className="py-10 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
                    <motion.div
                        {...fadeUp(0)}
                        className="p-8 rounded-2xl bg-white border border-[#a7f3d0]/60"
                    >
                        <h2 className="text-2xl font-bold text-[#0b2723] flex items-center gap-2">
                            <Coins className="text-[#10b981]" /> 지원 조건
                        </h2>
                        <ul className="mt-4 space-y-2 text-[#1e3a34]/80">
                            <li>• 최근 3개월 이상 매출이 발생한 가맹점</li>
                            <li>• 카드, 간편결제, 계좌이체 중 하나 이상 사용 중</li>
                            <li>• 정산 주기 D+0 또는 D+1 이용 가맹점</li>
                            <li>• 매출 및 리스크 데이터 제공 동의</li>
                        </ul>
                        <p className="mt-4 text-sm text-[#1e3a34]/60">
                            별도 담보 불필요. 단, 리스크 등급에 따라 금리 차등 적용 가능.
                        </p>
                    </motion.div>

                    <motion.div
                        {...fadeUp(0.1)}
                        className="p-8 rounded-2xl bg-white border border-[#a7f3d0]/60"
                    >
                        <h2 className="text-2xl font-bold text-[#0b2723] flex items-center gap-2">
                            <BarChart3 className="text-[#10b981]" /> 상환 방식
                        </h2>
                        <ul className="mt-4 space-y-2 text-[#1e3a34]/80">
                            <li>• 일매출 정산 시 자동 상환 (PG 연동형)</li>
                            <li>• 혹은 월 단위 고정 상환 플랜 선택 가능</li>
                            <li>• 조기 상환 수수료 없음</li>
                        </ul>
                        <p className="mt-4 text-sm text-[#1e3a34]/60">
                            실제 매출 변동에 맞춰 유연하게 상환 계획 조정 가능.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 🌿 FAQ */}
            <section className="py-10 px-6 md:px-16">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        {...fadeUp(0)}
                        className="text-2xl md:text-3xl font-bold text-[#0b2723] mb-6"
                    >
                        자주 묻는 질문
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                q: "한도는 어떻게 산정되나요?",
                                a: "최근 3개월 매출 데이터와 결제 유형 비중을 바탕으로 자동 산정됩니다.",
                            },
                            {
                                q: "정산 예정금만으로 대출이 가능한가요?",
                                a: "네. 정산 예정금 연동형 유동성 상품으로, 매출 기반 한도 내 즉시 이용 가능합니다.",
                            },
                            {
                                q: "심사 기간은 얼마나 걸리나요?",
                                a: "기본 심사 1영업일, 승인 후 당일 지급(D+0)까지 가능합니다.",
                            },
                            {
                                q: "이자율은 어떻게 되나요?",
                                a: "연 5~9% 수준으로, 가맹점 리스크 등급 및 정산 패턴에 따라 차등 적용됩니다.",
                            },
                        ].map((faq, i) => (
                            <motion.details
                                key={i}
                                {...fadeUp(i * 0.1)}
                                className="group rounded-2xl bg-white border border-[#a7f3d0]/60 p-5 open:shadow-[0_10px_30px_rgba(16,185,129,0.10)] transition"
                            >
                                <summary className="flex items-center justify-between cursor-pointer select-none text-[#0b2723] font-semibold">
                                    <span className="flex items-center gap-2">
                                        <CheckCircle2 className="text-[#10b981]" size={18} />
                                        {faq.q}
                                    </span>
                                    <span className="text-[#10b981] group-open:rotate-90 transition">
                                        <ChevronRight size={18} />
                                    </span>
                                </summary>
                                <p className="mt-3 text-[#1e3a34]/80 leading-relaxed">{faq.a}</p>
                            </motion.details>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🌿 CRM 폼 */}
            <section className="py-12 px-6 md:px-16">
                <div className="max-w-4xl mx-auto">
                    <ContactFormCRM defaultType="유동성 / 단기자금 문의" />
                </div>
            </section>

            {/* 🌿 연락 안내 */}
            <section className="py-14 px-6 md:px-16 bg-[#ecfdf5] border-t border-[#a7f3d0]/40">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <Mail size={18} />,
                            title: "이메일",
                            desc: (
                                <>
                                    유동성 문의:{" "}
                                    <span className="font-semibold">fund@sfinpay.co.kr</span>
                                </>
                            ),
                        },
                        {
                            icon: <PiggyBank size={18} />,
                            title: "상품 설명서",
                            desc: "유동성 상품 소개서 및 심사 프로세스 별도 제공.",
                        },
                        {
                            icon: <Building2 size={18} />,
                            title: "본사",
                            desc: "서울 — 재무상담 전용 사전 예약제 운영.",
                        },
                    ].map((c, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(i * 0.1)}
                            className="p-6 rounded-2xl bg-white border border-[#a7f3d0]/60"
                        >
                            <div className="flex items-center gap-2 text-[#10b981]">
                                {c.icon}
                                <h3 className="font-semibold text-[#0b2723]">{c.title}</h3>
                            </div>
                            <p className="mt-2 text-[#1e3a34]/80">{c.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 🌿 개인정보 안내 */}
            <section className="py-8 px-6 md:px-16 bg-[#f0fdfa]">
                <div className="max-w-6xl mx-auto text-[13px] leading-relaxed text-[#1e3a34]/70">
                    <p className="flex items-center gap-2">
                        <Lock size={14} className="text-[#10b981]" />
                        문의 시 제공된 정보는 심사 및 상담 목적에만 사용되며, 관련 법령에 따라
                        안전하게 관리됩니다.
                    </p>
                </div>
            </section>
        </div>
    );
}
