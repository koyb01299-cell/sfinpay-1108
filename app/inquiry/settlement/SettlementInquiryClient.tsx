"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
    Wallet,
    CalendarClock,
    FileText,
    Building2,
    ShieldCheck,
    CreditCard,
    Banknote,
    Calculator,
    Mail,
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

export default function SettlementInquiryClient(): JSX.Element {
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
                        정산{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                            문의 / 입금 안내
                        </span>
                    </motion.h1>
                    <motion.p
                        {...fadeUp(0.2)}
                        className="mt-5 text-lg md:text-xl text-[#1e3a34]/80 max-w-3xl mx-auto"
                    >
                        D+0 / D+1 정산, 입금 내역, 세금계산서 발행 등
                        <br className="hidden md:block" />
                        정산과 관련된 모든 문의를 신속히 처리해드립니다.
                    </motion.p>
                </div>
            </section>

            {/* 🌿 주요 특징 */}
            <section className="py-16 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <CalendarClock size={24} />,
                            title: "정산 일정 확인",
                            desc: "입금 예정일, 주말/공휴일 반영 여부까지 자동 계산.",
                        },
                        {
                            icon: <Calculator size={24} />,
                            title: "세금계산서 자동 발행",
                            desc: "정산 완료 시점에 맞춰 자동 전송 및 다운로드 제공.",
                        },
                        {
                            icon: <ShieldCheck size={24} />,
                            title: "오류 감지 시스템",
                            desc: "입금 지연, 금액 불일치 시 즉시 알림 및 자동 재검증.",
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

            {/* 🌿 정산 프로세스 */}
            <section className="py-10 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
                    <motion.div
                        {...fadeUp(0)}
                        className="p-8 rounded-2xl bg-white border border-[#a7f3d0]/60"
                    >
                        <h2 className="text-2xl font-bold text-[#0b2723] flex items-center gap-2">
                            <Wallet className="text-[#10b981]" /> 정산 절차 요약
                        </h2>
                        <ul className="mt-4 space-y-2 text-[#1e3a34]/80">
                            <li>• 결제 승인 후 → 정산 스케줄 자동 등록</li>
                            <li>• D+0 / D+1 기준 입금 처리</li>
                            <li>• 입금 지연 시 자동 알림 + 재전송 검증</li>
                            <li>• 정산 완료 후 세금계산서 자동 발행</li>
                        </ul>
                        <p className="mt-4 text-sm text-[#1e3a34]/60">
                            모든 정산 내역은 관리자 페이지 & Slack 알림을 통해 실시간 확인 가능합니다.
                        </p>
                    </motion.div>

                    <motion.div
                        {...fadeUp(0.1)}
                        className="p-8 rounded-2xl bg-white border border-[#a7f3d0]/60"
                    >
                        <h2 className="text-2xl font-bold text-[#0b2723] flex items-center gap-2">
                            <FileText className="text-[#10b981]" /> 유의사항
                        </h2>
                        <ul className="mt-4 space-y-2 text-[#1e3a34]/80">
                            <li>• 계좌 정보 변경은 사전 서면 신청 필요</li>
                            <li>• 주말/공휴일 입금은 별도 옵션 활성화 필요</li>
                            <li>• 법인 계좌만 정산용으로 등록 가능</li>
                            <li>• 수수료 및 세금계산서는 월 단위 일괄 정리</li>
                        </ul>
                        <p className="mt-4 text-sm text-[#1e3a34]/60">
                            문의 접수 후 정산팀 담당자가 직접 확인하여 안내드립니다.
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
                                q: "입금이 지연될 수 있는 경우는?",
                                a: "은행 점검, 공휴일, 가맹점 계좌 불일치 등의 사유가 있을 수 있습니다. 자동 알림 후 재처리됩니다.",
                            },
                            {
                                q: "세금계산서 재발행은 가능한가요?",
                                a: "네. 정산 완료 이후에도 관리자 페이지에서 PDF 재다운로드 및 재발행 요청이 가능합니다.",
                            },
                            {
                                q: "정산 내역은 어디서 확인하나요?",
                                a: "관리자 대시보드의 ‘정산 내역’ 메뉴에서 기간별 조회 및 CSV 내보내기가 가능합니다.",
                            },
                            {
                                q: "수수료 공제 방식은?",
                                a: "거래 건별 실시간 공제 후 입금되는 구조로, 투명한 정산이 가능합니다.",
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
                    <ContactFormCRM defaultType="정산 문의" />
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
                                    정산 문의:{" "}
                                    <span className="font-semibold">
                                        settlement@sfinpay.co.kr
                                    </span>
                                </>
                            ),
                        },
                        {
                            icon: <CreditCard size={18} />,
                            title: "관련 메뉴",
                            desc: "관리자 대시보드 → 정산 내역 / 세금계산서",
                        },
                        {
                            icon: <Building2 size={18} />,
                            title: "정산팀",
                            desc: "서울 본사 4F 정산실 — 평일 10:00~18:00",
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
                        문의 시 제공된 정보는 정산 검토 및 회계 처리를 위해서만 사용되며,
                        관련 법령에 따라 안전하게 관리됩니다.
                    </p>
                </div>
            </section>
        </div>
    );
}
