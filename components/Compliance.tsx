"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
    ShieldCheck,
    FileText,
    LockKeyhole,
    Banknote,
    Scale,
    Building2,
    Network,
    ClipboardCheck,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────
   타입 및 애니메이션 정의
────────────────────────────────────────────────────────── */
const fadeUp = (i = 0): Variants => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay: 0.08 * i },
});

type ComplianceCard = {
    icon: JSX.Element;
    title: string;
    desc: string;
};

/* ─────────────────────────────────────────────────────────
   메인 컴포넌트
────────────────────────────────────────────────────────── */
export default function Compliance(): JSX.Element {
    const complianceItems: ComplianceCard[] = [
        {
            icon: <LockKeyhole size={24} />,
            title: "ISMS & 개인정보보호",
            desc: "ISMS 인증 및 정기 보안 점검으로 고객 데이터 보호 체계 강화.",
        },
        {
            icon: <FileText size={24} />,
            title: "전자금융거래법 준수",
            desc: "결제·정산·예치금 관리 전 과정이 법정 규제 기준에 부합.",
        },
        {
            icon: <Banknote size={24} />,
            title: "여신전문금융업법 대응",
            desc: "가맹점 대금 정산 및 결제대행 업무의 법적 요건 완전 충족.",
        },
        {
            icon: <Scale size={24} />,
            title: "리스크 및 차지백 관리",
            desc: "거래이력·보류·한도 데이터를 기반으로 리스크 실시간 통제.",
        },
        {
            icon: <ShieldCheck size={24} />,
            title: "데이터 암호화 & 로깅",
            desc: "PAN 토큰화, TLS 1.3, AES256 암호화로 전 구간 보안 보장.",
        },
    ];

    const controlStages = [
        { icon: <Network size={28} />, label: "1단계 : 자동 리스크 감시" },
        { icon: <ClipboardCheck size={28} />, label: "2단계 : 내부 감사·검증" },
        { icon: <Building2 size={28} />, label: "3단계 : 외부 법률·회계 자문" },
    ];

    return (
        <section
            id="compliance"
            className="relative py-28 px-6 md:px-16 bg-gradient-to-b from-[#ecfeff] via-[#f0fdfa] to-white overflow-hidden"
        >
            {/* 💎 헤더 */}
            <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-20">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                    <ShieldCheck size={16} /> 컴플라이언스 · 내부통제
                </span>

                <h2 className="mt-8 text-4xl md:text-5xl font-extrabold text-[#0b2723] leading-relaxed tracking-tight">
                    <span className="text-emerald-600">신뢰 가능한 법적 기반</span> 위의
                    <br className="hidden md:block" />
                    <span className="block mt-3 text-[#0b2723]">투명한 결제 인프라</span>
                </h2>

                <p className="mt-8 text-[#1f3b37]/70 text-lg leading-relaxed">
                    SFIN PAY는 전자금융거래법과 여신전문금융업법 등 주요 금융 규제를 완벽히 준수하며,
                    데이터 보호·리스크 통제를 결제 인프라에 내재화했습니다.
                </p>
            </motion.div>

            {/* 🧩 인증/법규 카드 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {complianceItems.map((item, i) => (
                    <motion.div
                        key={i}
                        {...fadeUp(i + 1)}
                        className="group relative rounded-2xl border border-emerald-200/60 bg-white/90 p-7 hover:shadow-[0_10px_30px_rgba(16,185,129,0.12)] hover:border-emerald-300 transition-all duration-500"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-emerald-100 text-emerald-600">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-[#0b2723]">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm text-[#1f3b37]/70 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* 🔄 내부통제 체계 다이어그램 */}
            <motion.div {...fadeUp(6)} className="max-w-4xl mx-auto mt-28 text-center">
                <h3 className="text-2xl font-bold text-[#0b2723] mb-12">
                    SFIN PAY의{" "}
                    <span className="text-emerald-600">내부통제 3단계 체계</span>
                </h3>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    {controlStages.map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-col items-center gap-3 bg-gradient-to-b from-[#ecfdf5] to-white p-6 rounded-xl border border-emerald-200 shadow-[0_6px_20px_rgba(16,185,129,0.08)] w-[230px]"
                        >
                            <div className="p-3 rounded-full bg-emerald-100 text-emerald-600">
                                {item.icon}
                            </div>
                            <p className="text-sm font-medium text-[#0b2723] leading-relaxed">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* 📘 하단 CTA */}
            <motion.div
                {...fadeUp(8)}
                className="text-center max-w-3xl mx-auto mt-24 rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-white p-10 shadow-[0_6px_25px_rgba(16,185,129,0.08)]"
            >
                <p className="text-[#1f3b37]/70 text-lg mb-8 leading-relaxed">
                    모든 데이터와 정산 내역은 암호화되어 저장되며,
                    내부 감사 결과는 주기적으로 외부 기관에 공개됩니다.
                    SFIN PAY는 <b>투명성과 법적 신뢰</b>를 결제 서비스의 핵심 가치로 둡니다.
                </p>
                <Link
                    href="/transparency-report"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-600 hover:to-emerald-400 text-white font-semibold shadow-[0_8px_20px_rgba(16,185,129,0.25)] transition-all"
                >
                    투명경영 보고서 보기
                </Link>
            </motion.div>
        </section>
    );
}
