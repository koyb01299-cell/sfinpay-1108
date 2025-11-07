"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    MessageSquare,
    Handshake,
    ShieldCheck,
    Globe2,
    ChevronRight,
    CheckCircle2,
    Building2,
    Lock,
} from "lucide-react";
import ContactFormCRM from "@/components/ContactFormCRM";

const fadeUp = (i = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.6, delay: i * 0.08 },
});

export default function GeneralInquiryClient(): JSX.Element {
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
                        일반 문의{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                            / 제휴 · 광고 · 기타
                        </span>
                    </motion.h1>
                    <motion.p
                        {...fadeUp(0.2)}
                        className="mt-5 text-lg md:text-xl text-[#1e3a34]/80 max-w-3xl mx-auto"
                    >
                        SFIN PAY와의 제휴, 마케팅 협력, 서비스 관련 문의를 남겨주세요.
                        <br className="hidden md:block" />
                        담당 부서에서 확인 후 빠르게 연락드립니다.
                    </motion.p>
                </div>
            </section>

            {/* 🌿 문의 유형 안내 */}
            <section className="py-16 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <Handshake size={24} />,
                            title: "제휴 문의",
                            desc: "공동 프로모션, 가맹 연계, 파트너십 제안 등 협업 가능 분야를 검토합니다.",
                        },
                        {
                            icon: <MessageSquare size={24} />,
                            title: "광고 / 미디어 제안",
                            desc: "브랜드 캠페인, 결제 홍보, 미디어 제안서를 공유해주세요.",
                        },
                        {
                            icon: <ShieldCheck size={24} />,
                            title: "서비스 관련 일반 문의",
                            desc: "결제·정산 외 기타 운영, 고객지원 관련 문의를 남겨주세요.",
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
                                q: "제휴 제안은 어디로 보내면 되나요?",
                                a: "아래 문의 양식 또는 partnership@sfinpay.co.kr 로 제안서를 전달해주시면 검토 후 회신드립니다.",
                            },
                            {
                                q: "언론 / 미디어 관련 문의는 어떻게 하나요?",
                                a: "보도자료, 인터뷰, 브랜드 PR 관련 문의는 press@sfinpay.co.kr 로 연락해주세요.",
                            },
                            {
                                q: "서비스 운영 관련 일반 문의는요?",
                                a: "가맹 등록, 결제 모듈, 관리자 페이지 등 운영 문의는 contact@sfinpay.co.kr 로 접수 가능합니다.",
                            },
                            {
                                q: "회신까지 얼마나 걸리나요?",
                                a: "평일 기준 24시간 이내 1차 응답을 목표로 합니다. 문의 내용에 따라 담당 부서로 이관될 수 있습니다.",
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
                    <ContactFormCRM defaultType="기타 일반 문의" />
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
                                    일반 문의:{" "}
                                    <span className="font-semibold">contact@sfinpay.co.kr</span>
                                </>
                            ),
                        },
                        {
                            icon: <Globe2 size={18} />,
                            title: "제휴 / 파트너십",
                            desc: (
                                <>
                                    partnership:{" "}
                                    <span className="font-semibold">partnership@sfinpay.co.kr</span>
                                </>
                            ),
                        },
                        {
                            icon: <Building2 size={18} />,
                            title: "본사 위치",
                            desc: "서울 — 방문 상담은 사전 예약제로 운영됩니다.",
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
                        문의 접수 시 제공된 정보는 문의 처리 및 상담 목적에만 사용되며,
                        내부 규정 및 법령에 따라 안전하게 관리됩니다.
                    </p>
                </div>
            </section>
        </div>
    );
}
