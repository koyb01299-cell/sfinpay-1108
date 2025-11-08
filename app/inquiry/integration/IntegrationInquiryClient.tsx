"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
    Cpu,
    Code2,
    Network,
    Zap,
    ShieldCheck,
    BookOpenCheck,
    Wrench,
    Mail,
    Lock,
    Globe2,
    CheckCircle2,
    ChevronRight,
} from "lucide-react";
import ContactForm from "../../../components/ContactForm";

const fadeUp = (i = 0) => ({
    initial: { opacity: 1, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0 },
    transition: { duration: 0.6, delay: i * 0.08 },
});

export default function IntegrationInquiryClient(): JSX.Element {
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
                        기술 연동{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                            / API 문의
                        </span>
                    </motion.h1>
                    <motion.p
                        {...fadeUp(0.2)}
                        className="mt-5 text-lg md:text-xl text-[#1e3a34]/80 max-w-3xl mx-auto"
                    >
                        PG 연동, 결제 모듈, SDK, Webhook — 모든 기술 지원 문의를 한 곳에서.
                        <br className="hidden md:block" />
                        담당 개발자가 직접 확인 후 기술 문서와 함께 답변드립니다.
                    </motion.p>
                </div>
            </section>

            {/* 🌿 기능 안내 */}
            <section className="py-16 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <Cpu size={24} />,
                            title: "API 연동 지원",
                            desc: "RESTful / GraphQL / Webhook 등 다양한 인터페이스 지원.",
                        },
                        {
                            icon: <Network size={24} />,
                            title: "테스트 환경 제공",
                            desc: "Sandbox 키, 가맹 인증, 실거래 모드 전환까지 빠르게 연결.",
                        },
                        {
                            icon: <ShieldCheck size={24} />,
                            title: "보안 가이드 문서",
                            desc: "HMAC, JWT, AES256 기반 암호화 예시 제공.",
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
                                q: "API 키 발급은 어떻게 하나요?",
                                a: "가맹 승인 후 관리자 페이지에서 `개발자 메뉴 → API 인증키` 항목에서 즉시 발급받을 수 있습니다.",
                            },
                            {
                                q: "Webhook 테스트 환경이 제공되나요?",
                                a: "네. `/sandbox/webhook` 엔드포인트로 이벤트를 모의 전송해 확인 가능합니다.",
                            },
                            {
                                q: "SDK 언어 지원 범위는?",
                                a: "현재 JavaScript, Python, Node.js, Kotlin을 공식 지원하며, 추가 언어는 순차적으로 확장 중입니다.",
                            },
                            {
                                q: "SSL/TLS 인증서가 필수인가요?",
                                a: "네. 모든 연동 요청은 TLS 1.2 이상을 요구합니다. 자체 서명 인증서는 허용되지 않습니다.",
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
                    <ContactForm defaultType="기술 연동 문의" />
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
                                    기술 문의:{" "}
                                    <span className="font-semibold">tech@sfinpay.co.kr</span>
                                </>
                            ),
                        },
                        {
                            icon: <BookOpenCheck size={18} />,
                            title: "개발 문서",
                            desc: (
                                <>
                                    <a
                                        href="https://docs.sfinpay.co.kr"
                                        target="_blank"
                                        className="text-[#10b981] font-medium underline"
                                    >
                                        개발자 포털에서 API 문서 보기
                                    </a>
                                </>
                            ),
                        },
                        {
                            icon: <Globe2 size={18} />,
                            title: "서버 상태",
                            desc: "status.sfinpay.co.kr — 실시간 API 운영 상태 확인 가능",
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
                        문의 시 제공된 정보는 기술 검토 및 답변 목적에만 사용되며, 법령에 따라
                        안전하게 관리됩니다.
                    </p>
                </div>
            </section>
        </div>
    );
}
