"use client";
export const dynamic = "force-dynamic";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
    CreditCard,
    ShieldCheck,
    Wallet,
    Lock,
    Globe2,
    RefreshCcw,
    ChevronRight,
} from "lucide-react";

/* ────────────────────────────────
   ✨ Animation Preset
────────────────────────────────── */
const fadeUp = (i = 0) => ({
    initial: { opacity: 1, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0 },
    transition: { duration: 0.6, delay: i * 0.08 },
});

/* ────────────────────────────────
   ✨ Type Definition
────────────────────────────────── */
interface FAQItem {
    id: string;
    q: string;
    a: string;
    icon: JSX.Element;
}

/* ────────────────────────────────
   ✨ Component
────────────────────────────────── */
export default function PaymentFAQ(): JSX.Element {
    useEffect(() => window.scrollTo(0, 0), []);

    const faqs: FAQItem[] = [
        {
            id: "approval",
            q: "결제 승인은 언제 완료되나요?",
            a: `결제는 카드사 또는 간편결제사의 실시간 승인을 통해 평균 1~3초 내에 완료됩니다. 승인 결과는 즉시 SFIN PAY 서버로 전달되며, 승인 후에는 취소·환불을 통해서만 변경 가능합니다.`,
            icon: <CreditCard size={18} />,
        },
        {
            id: "fail",
            q: "결제 실패 원인은 무엇인가요?",
            a: `가장 흔한 원인은 카드 한도 초과, 인증 실패, 유효기간 만료, 은행 점검 시간대 결제 시도 등입니다.`,
            icon: <ShieldCheck size={18} />,
        },
        {
            id: "settlement",
            q: "D+0 / D+1 정산은 무슨 의미인가요?",
            a: `‘D+0 정산’은 결제 당일 입금, ‘D+1 정산’은 익영업일 입금을 뜻합니다.`,
            icon: <Wallet size={18} />,
        },
        {
            id: "refund",
            q: "결제 취소 또는 환불은 어떻게 처리되나요?",
            a: `취소 요청이 접수되면 즉시 카드사·결제사로 취소 명령이 전송됩니다.`,
            icon: <RefreshCcw size={18} />,
        },
        {
            id: "security",
            q: "보안 인증은 어떻게 관리되나요?",
            a: `SFIN PAY는 PCI-DSS Level 1 규격을 준수하며, TLS 1.3 통신과 AES-256 암호화를 적용합니다.`,
            icon: <Lock size={18} />,
        },
        {
            id: "overseas",
            q: "해외 카드 및 다국적 통화 결제는 가능한가요?",
            a: `Visa, MasterCard, JCB, UnionPay, AMEX 등 주요 국제 네트워크를 지원합니다.`,
            icon: <Globe2 size={18} />,
        },
    ];

    return (
        <div className="min-h-screen bg-[#f0fdfa] text-[#0b2723] pt-28 pb-20 px-6 md:px-16">
            {/* 🟢 Hero Section */}
            <motion.section
                {...fadeUp(0)}
                className="text-center mb-16 bg-gradient-to-b from-[#ecfdf5] to-[#f0fdfa] py-16 rounded-2xl border border-[#a7f3d0]/50"
            >
                <div className="max-w-4xl mx-auto">
                    <motion.h1
                        {...fadeUp(0.1)}
                        className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
                    >
                        결제 관련{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                            자주 묻는 질문
                        </span>
                    </motion.h1>
                    <motion.p
                        {...fadeUp(0.2)}
                        className="text-lg md:text-xl text-[#1e3a34]/80"
                    >
                        승인부터 정산까지, 결제 과정의 모든 핵심 질문에 대한 답변을 확인하세요.
                    </motion.p>
                </div>
            </motion.section>

            {/* 🟢 FAQ */}
            <section className="max-w-5xl mx-auto space-y-6">
                {faqs.map((item, i) => (
                    <motion.details
                        key={i}
                        id={item.id}
                        {...fadeUp(i * 0.1)}
                        className="scroll-mt-24 group rounded-2xl bg-white border border-[#a7f3d0]/60 p-5 open:shadow-[0_10px_25px_rgba(16,185,129,0.1)] transition"
                    >
                        <summary className="flex items-center justify-between cursor-pointer select-none text-[#0b2723] font-semibold">
                            <span className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-10 h-10 text-[#10b981]">
                                    {item.icon}
                                </div>
                                {item.q}
                            </span>
                            <span className="text-[#10b981] group-open:rotate-90 transition">
                                <ChevronRight size={18} />
                            </span>
                        </summary>
                        <p className="mt-3 text-[#1e3a34]/80 leading-relaxed whitespace-pre-line">
                            {item.a}
                        </p>
                    </motion.details>
                ))}
            </section>

            {/* 🟢 CTA */}
            <motion.section
                {...fadeUp(0.3)}
                className="mt-20 text-center py-14 bg-gradient-to-tr from-[#d1fae5] to-[#a7f3d0] rounded-2xl"
            >
                <h2 className="text-3xl font-bold text-[#0b2723] mb-4">
                    더 자세한 결제 지원이 필요하신가요?
                </h2>
                <p className="text-[#1e3a34]/80 mb-8">
                    결제 오류, 정산 지연, API 연동 등 기술적 문의는 기술지원 센터 또는 계약 담당자를 통해 상담하실 수 있습니다.
                </p>
                <a
                    href="/inquiry/integration"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-semibold t1"
                >
                    기술 지원 문의하기 <ChevronRight size={18} />
                </a>
            </motion.section>
        </div>
    );
}
