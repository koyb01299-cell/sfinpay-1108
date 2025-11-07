"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import {
    CreditCard,
    ShieldCheck,
    Wallet,
    Lock,
    Globe2,
    RefreshCcw,
    Calculator,
    ChevronRight,
} from "lucide-react";

/* ───────────────────────────────────────────────
   ✨ Metadata
────────────────────────────────────────────────── */
/*export const metadata = {
    title: "결제 FAQ | SFIN PAY",
    description:
        "SFIN PAY 결제 및 정산 관련 자주 묻는 질문 — 승인 실패, 환불, D+0/D+1 정산, 세금계산서, 보안 인증 등 모든 답변을 확인하세요.",
    alternates: {
        canonical: "https://www.sfinpay.co.kr/payment-faq",
    },
    openGraph: {
        title: "결제 FAQ | SFIN PAY",
        description:
            "결제 승인, 오류, 정산, 환불, 보안, 해외 결제 관련 자주 묻는 질문과 해결 가이드입니다.",
        url: "https://www.sfinpay.co.kr/payment-faq",
        type: "website",
    },
};*/

/* ───────────────────────────────────────────────
   ✨ Animation Preset
────────────────────────────────────────────────── */
const fadeUp = (i = 0) => ({
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.6, delay: i * 0.08 },
});

/* ───────────────────────────────────────────────
   ✨ Lottie JSON (민트톤 라인 애니메이션)
   (짧고 가벼운 SVG라인 기반)
────────────────────────────────────────────────── */
//import cardAnim from "@/public/lottie/card.json";
//import shieldAnim from "@/public/lottie/shield.json";
//import walletAnim from "@/public/lottie/wallet.json";
//import refundAnim from "@/public/lottie/refund.json";
//import lockAnim from "@/public/lottie/lock.json";
//import globeAnim from "@/public/lottie/globe.json";

/* ───────────────────────────────────────────────
   ✨ Component
────────────────────────────────────────────────── */
export default function PaymentFAQ(): JSX.Element {
    useEffect(() => window.scrollTo(0, 0), []);

    const faqs = [
        {
            id: "approval",
            q: "결제 승인은 언제 완료되나요?",
            a: `결제는 카드사 또는 간편결제사의 실시간 승인을 통해 평균 1~3초 내에 완료됩니다. 승인 결과는 즉시 SFIN PAY 서버로 전달되며, 승인 후에는 취소·환불을 통해서만 변경 가능합니다.
승인 과정에서 네트워크 지연이 발생할 경우 일시적으로 “승인 중” 상태가 유지될 수 있으나, 이는 자동으로 동기화되어 처리됩니다.`,
            icon: <CreditCard size={18} />,
            //lottie: cardAnim,
        },
        {
            id: "fail",
            q: "결제 실패 원인은 무엇인가요?",
            a: `가장 흔한 원인은 카드 한도 초과, 인증 실패, 유효기간 만료, 은행 점검 시간대 결제 시도 등입니다. 간편결제(토스·네이버·카카오)는 잔액 부족이나 인증 오류로 실패할 수 있습니다.
SFIN PAY 관리자 대시보드의 "거래 내역 > 실패 사유" 항목에서 상세 코드를 확인할 수 있으며, API 연동 시 오류 코드를 기반으로 자동 재시도 로직을 구성할 수 있습니다.`,
            icon: <ShieldCheck size={18} />,
            // lottie: shieldAnim,
        },
        {
            id: "settlement",
            q: "D+0 / D+1 정산은 무슨 의미인가요?",
            a: `‘D+0 정산’은 결제 당일 입금, ‘D+1 정산’은 익영업일 입금을 뜻합니다. D+0은 유동성이 필요한 업종(예: 음식·유통)에 제공되며 내부 심사 기준을 통과해야 합니다.
D+1은 표준으로 적용되며, 주말·공휴일 정산 여부는 계약 시 지정 가능합니다. 모든 정산 내역은 실시간 대시보드에서 확인할 수 있습니다.`,
            icon: <Wallet size={18} />,
            //lottie: walletAnim,
        },
        {
            id: "refund",
            q: "결제 취소 또는 환불은 어떻게 처리되나요?",
            a: `취소 요청이 접수되면 즉시 카드사·결제사로 취소 명령이 전송됩니다. 승인 후 고객 계좌로의 환불은 결제사 정책에 따라 1~5영업일 내 완료됩니다.
가맹점은 관리자 페이지에서 ‘부분취소’, ‘전체취소’를 선택할 수 있으며, API 기반 자동 취소 기능도 제공합니다.`,
            icon: <RefreshCcw size={18} />,
            //lottie: refundAnim,
        },
        {
            id: "security",
            q: "보안 인증은 어떻게 관리되나요?",
            a: `SFIN PAY는 PCI-DSS Level 1 규격을 준수하며, 결제 데이터는 TLS 1.3 통신과 AES-256 알고리즘으로 암호화됩니다.
민감정보는 분리 보관되고, 접근 제어·로그 감사·키 관리 등 보안 프로세스가 ISMS 기준에 맞게 주기적으로 검증됩니다.`,
            icon: <Lock size={18} />,
            //lottie: lockAnim,
        },
        {
            id: "overseas",
            q: "해외 카드 및 다국적 통화 결제는 가능한가요?",
            a: `Visa, MasterCard, JCB, UnionPay, AMEX 등 주요 국제 네트워크를 지원합니다. 결제 시점의 실시간 환율을 적용하며, 정산은 원화 기준으로 처리됩니다.
다국어 영수증과 해외 BIN 검증 기능도 제공됩니다.`,
            icon: <Globe2 size={18} />,
            //lottie: globeAnim,
        },
    ];

    return (
        <div className="min-h-screen bg-[#f0fdfa] text-[#0b2723] pt-28 pb-20 px-6 md:px-16">
            {/* ✅ JSON-LD for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: faqs.map((f) => ({
                            "@type": "Question",
                            name: f.q,
                            acceptedAnswer: { "@type": "Answer", text: f.a },
                        })),
                    }),
                }}
            />

            {/* 🟢 Hero */}
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

            {/* 🟢 FAQ with Lottie */}
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
                                <div className="relative flex items-center justify-center w-10 h-10">
                                    <Lottie
                                        animationData={item.lottie}
                                        loop
                                        autoplay
                                        className="absolute w-10 h-10 opacity-70"
                                    />
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
                    결제 오류, 정산 지연, API 연동 등 기술적 문의는 기술지원 센터 또는 계약 담당자를
                    통해 직접 상담하실 수 있습니다.
                </p>
                <a
                    href="/inquiry/integration"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-semibold transition-all"
                >
                    기술 지원 문의하기 <ChevronRight size={18} />
                </a>
            </motion.section>
        </div>
    );
}
