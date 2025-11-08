"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Handshake,
    Percent,
    ShieldCheck,
    BookCheck,
    Clock3,
    Phone,
    Mail,
    Building2,
    ChevronRight,
    CheckCircle2,
    FileText,
    Wallet,
    Lock,
    Globe2,
} from "lucide-react";
import ContactForm from "../../../components/ContactForm";

const fadeUp = (i = 0) => ({
    initial: { opacity: 1, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0 },
    transition: { duration: 0.6, delay: i * 0.08 },
});

export default function ContractInquiryClient(): JSX.Element {
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className="min-h-screen bg-[#f0fdfa] text-[#0b2723]">
            {/* 🌿 Breadcrumb + JSON-LD (invisible but SEO-helpful) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "SFIN PAY",
                                item: "https://www.sfinpay.co.kr",
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "문의",
                                item: "https://www.sfinpay.co.kr/inquiry",
                            },
                            {
                                "@type": "ListItem",
                                position: 3,
                                name: "가맹 계약 / 수수료 협의",
                                item: "https://www.sfinpay.co.kr/inquiry/contract",
                            },
                        ],
                    }),
                }}
            />

            {/* 🌿 Hero */}
            <section className="pt-28 pb-16 px-6 md:px-16 bg-gradient-to-b from-[#ecfdf5] to-[#f0fdfa] border-b border-[#a7f3d0]/40">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.h1
                        {...fadeUp(0)}
                        className="text-4xl md:text-6xl font-extrabold leading-tight"
                    >
                        가맹 계약 ·{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                            수수료 협의
                        </span>{" "}
                        문의
                    </motion.h1>
                    <motion.p
                        {...fadeUp(0.2)}
                        className="mt-5 text-lg md:text-xl text-[#1e3a34]/80 max-w-3xl mx-auto"
                    >
                        D+0 · D+1 정산, 투명한 수수료, 민트 톤 UI. <br className="hidden md:block" />
                        가맹점 규모와 업종에 맞춘 최적 조건을 제안드립니다.
                    </motion.p>

                    {/* 신뢰 배지 */}
                    <motion.div
                        {...fadeUp(0.35)}
                        className="mt-8 flex flex-wrap justify-center gap-3 text-sm"
                    >
                        {[
                            { icon: <ShieldCheck size={16} />, label: "ISMS 준비·진행" },
                            { icon: <BookCheck size={16} />, label: "PCI-DSS 준수" },
                            { icon: <Lock size={16} />, label: "데이터 암호화 · 키관리" },
                            { icon: <Globe2 size={16} />, label: "해외 카드/통화 대응" },
                        ].map((b, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#a7f3d0]/70 bg-white/80 text-[#0b2723]"
                            >
                                {b.icon}
                                {b.label}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 🌿 혜택 하이라이트 */}
            <section className="py-16 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <Percent size={24} />,
                            title: "맞춤형 수수료",
                            desc: "업종/월 매출/결제비중(카드·간편결제)에 따라 최적 요율 설계.",
                        },
                        {
                            icon: <Wallet size={24} />,
                            title: "D+0 · D+1 정산",
                            desc: "현금 흐름 개선. 주말·공휴일 커버 옵션 상담 가능.",
                        },
                        {
                            icon: <Handshake size={24} />,
                            title: "원스톱 온보딩",
                            desc: "서류 가이드/전자계약/검수/개통까지 매니저가 동행.",
                        },
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(i)}
                            className="p-6 rounded-2xl bg-white border border-[#a7f3d0]/60 hover:shadow-[0_10px_30px_rgba(16,185,129,0.12)] transition"
                        >
                            <div className="flex items-center gap-3 text-[#10b981]">
                                {card.icon}
                                <h3 className="text-lg font-semibold text-[#0b2723]">
                                    {card.title}
                                </h3>
                            </div>
                            <p className="mt-3 text-[#1e3a34]/80 leading-relaxed">
                                {card.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 🌿 요구사항 안내 + 체크리스트 */}
            <section className="py-6 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
                    <motion.div
                        {...fadeUp(0)}
                        className="p-8 rounded-2xl bg-white border border-[#a7f3d0]/60"
                    >
                        <h2 className="text-2xl font-bold text-[#0b2723] flex items-center gap-2">
                            <FileText className="text-[#10b981]" /> 심사를 위한 기본 서류
                        </h2>
                        <ul className="mt-4 space-y-2 text-[#1e3a34]/80">
                            <li>• 사업자등록증 사본</li>
                            <li>• 대표자 신분증 사본</li>
                            <li>• 통신판매업 신고증(해당 시)</li>
                            <li>• 통장 사본(정산 계좌)</li>
                            <li>• 가맹점 기본 정보(상호/주소/업종/월 매출/수수료 희망범위)</li>
                        </ul>
                        <p className="mt-4 text-sm text-[#1e3a34]/60">
                            업종/리스크 특성에 따라 추가자료(상품권, 선불충전형, 해외청구 등) 요청될 수
                            있습니다.
                        </p>
                    </motion.div>

                    <motion.div
                        {...fadeUp(0.15)}
                        className="p-8 rounded-2xl bg-white border border-[#a7f3d0]/60"
                    >
                        <h2 className="text-2xl font-bold text-[#0b2723] flex items-center gap-2">
                            <ShieldCheck className="text-[#10b981]" /> 보안 · 컴플라이언스
                        </h2>
                        <ul className="mt-4 space-y-2 text-[#1e3a34]/80">
                            <li>• 전 구간 TLS, 민감정보 분리보관 및 암호화, 접근통제</li>
                            <li>• 결제정보 최소수집, 로그 감사, 키 수명주기 관리</li>
                            <li>• 카드사·밴·정산 기관 연계 리스크 모니터링</li>
                            <li>• ISMS 단계적 충족, PCI-DSS 요구사항 준수</li>
                        </ul>
                        <p className="mt-4 text-sm text-[#1e3a34]/60">
                            가맹 심사 및 개통 과정에서 기술/보안 점검 가이드를 제공해 드립니다.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 🌿 요율/정산 요약 배너 */}
            <section className="py-6 px-6 md:px-16">
                <motion.div
                    {...fadeUp(0)}
                    className="max-w-6xl mx-auto rounded-2xl p-6 md:p-8 bg-gradient-to-tr from-[#d1fae5] to-[#a7f3d0] border border-[#a7f3d0]"
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h3 className="text-2xl font-extrabold text-[#0b2723]">
                                요율 & 정산 조건, 이렇게 제안됩니다
                            </h3>
                            <p className="mt-1 text-[#1e3a34]/80">
                                월매출, 결제수단 비중(카드/간편), 환불/차지백 리스크 등 종합 고려.
                                D+0 · D+1 정산 가용성 및 주말/공휴일 옵션 상담 가능.
                            </p>
                        </div>
                        <Link
                            href="/online-pay"
                            className="inline-flex items-center gap-2 self-start md:self-auto px-5 py-3 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-semibold shadow-md transition"
                        >
                            결제수단 & API 살펴보기 <ChevronRight size={18} />
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* 🌿 FAQ (details 원소로 의존성 없이 구현) */}
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
                                q: "수수료는 어떻게 책정되나요?",
                                a: "업종, 월 매출 규모, 결제수단 비율(카드·간편), 리스크 지표(환불·차지백) 등을 반영해 협의합니다. 견적은 접수 후 담당 매니저가 제안드립니다.",
                            },
                            {
                                q: "정산 주기는 D+0와 D+1 모두 가능한가요?",
                                a: "네. 표준은 D+1이며, 매출 패턴/리스크/기관 연동 조건 충족 시 D+0 옵션을 제공합니다. 주말·공휴일 커버도 협의 가능합니다.",
                            },
                            {
                                q: "온라인·오프라인을 모두 지원하나요?",
                                a: "가능합니다. 온라인 결제(카드/간편/수기)와 오프라인(단말기·QR) 모두 지원하며, 통합 리포트·정산을 제공합니다.",
                            },
                            {
                                q: "개통까지 어느 정도 소요되나요?",
                                a: "서류 접수와 심사, 테스트 환경 확인 후 전자계약을 진행합니다. 업종별로 상이하지만, 필요한 사항을 신속히 안내드립니다.",
                            },
                        ].map((f, i) => (
                            <motion.details
                                key={i}
                                {...fadeUp(i * 0.1)}
                                className="group rounded-2xl bg-white border border-[#a7f3d0]/60 p-5 open:shadow-[0_10px_30px_rgba(16,185,129,0.10)] transition"
                            >
                                <summary className="flex items-center justify-between cursor-pointer select-none text-[#0b2723] font-semibold">
                                    <span className="flex items-center gap-2">
                                        <CheckCircle2 className="text-[#10b981]" size={18} />
                                        {f.q}
                                    </span>
                                    <span className="text-[#10b981] group-open:rotate-90 transition">
                                        <ChevronRight size={18} />
                                    </span>
                                </summary>
                                <p className="mt-3 text-[#1e3a34]/80 leading-relaxed">{f.a}</p>
                            </motion.details>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🌿 본문의 핵심: CRM 폼 (reCAPTCHA + Notion + Slack 이미 연동됨) */}
            <section className="py-12 px-6 md:px-16">
                <div className="max-w-4xl mx-auto">
                    <ContactForm defaultType="가맹점 계약 / 수수료 협의" />
                </div>
            </section>

            {/* 🌿 연락/운영 안내 */}
            <section className="py-14 px-6 md:px-16 bg-[#ecfdf5] border-t border-[#a7f3d0]/40">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <Mail size={18} />,
                            title: "이메일",
                            desc: (
                                <>
                                    계약/수수료: <span className="font-semibold">contract@sfinpay.co.kr</span>
                                </>
                            ),
                        },
                        {
                            icon: <Phone size={18} />,
                            title: "전화/상담",
                            desc: "평일 10:00–18:00 (점심 12:30–13:30)",
                        },
                        {
                            icon: <Building2 size={18} />,
                            title: "본사",
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

            {/* 🌿 개인정보/법적 고지 */}
            <section className="py-8 px-6 md:px-16 bg-[#f0fdfa]">
                <div className="max-w-6xl mx-auto text-[13px] leading-relaxed text-[#1e3a34]/70">
                    <p className="flex items-center gap-2">
                        <Lock size={14} className="text-[#10b981]" />
                        문의 접수 시 수집되는 정보는 문의 처리 및 상담 목적에만 사용되며, 내부 규정 및
                        관련 법령에 따라 안전하게 관리됩니다. 저장·보관 기간, 제3자 제공, 파기 절차 등은
                        개인정보 처리방침을 따릅니다.
                    </p>
                </div>
            </section>
        </div>
    );
}
