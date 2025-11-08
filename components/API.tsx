"use client";

import React, { memo, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FileCheck2,
    Settings,
    CreditCard,
    Rocket,
    type LucideProps,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────
   타입 정의
────────────────────────────────────────────────────────── */
type Step = {
    icon: (props?: LucideProps) => JSX.Element;
    title: string;
    desc: string;
};

type APISectionProps = {
    id?: string;
    steps?: Step[];
    badgeLabel?: string;
    titleLines?: [string, string];
    description?: string;
    ctaHref?: string;
    ctaLabel?: string;
    onCtaClick?: () => void;
    className?: string;
};

/* ─────────────────────────────────────────────────────────
   애니메이션 프리셋 (Framer Motion 11 호환)
────────────────────────────────────────────────────────── */
const fadeUp = (i = 0) => ({
    initial: { opacity: 1, y: 20 },
    whileInView: { opacity: 1, y: 0 },
});

/* ─────────────────────────────────────────────────────────
   기본 스텝 정의
────────────────────────────────────────────────────────── */
const DEFAULT_STEPS: Step[] = [
    {
        icon: (p) => <FileCheck2 {...p} />,
        title: "간편 가입",
        desc: "사업자 등록증과 계좌 정보만 입력하면 바로 계약이 완료됩니다.",
    },
    {
        icon: (p) => <Settings {...p} />,
        title: "환경 설정",
        desc: "결제 수단, 정산 주기, 수수료 정책을 선택해 맞춤형으로 세팅합니다.",
    },
    {
        icon: (p) => <CreditCard {...p} />,
        title: "결제 시작",
        desc: "등록 즉시 카드, 계좌이체, 간편결제가 활성화되어 운영이 시작됩니다.",
    },
];

/* ─────────────────────────────────────────────────────────
   접근성 카드 컴포넌트
────────────────────────────────────────────────────────── */
const StepCard = memo(function StepCard({
    index,
    step,
}: {
    index: number;
    step: Step;
}): JSX.Element {
    return (
        <motion.article
            {...fadeUp(index + 1)}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 * index }}
            tabIndex={0}
            role="article"
            aria-label={`${index + 1}단계: ${step.title}`}
            className="group text-center rounded-2xl border border-brand-mint/40 bg-white/90 p-8 shadow-[0_8px_25px_rgba(16,185,129,0.08)] hover:shadow-[0_12px_35px_rgba(16,185,129,0.13)] t1 outline-none focus-visible:ring-4 focus-visible:ring-brand-mint/40"
        >
            <div className="flex justify-center mb-4 text-brand-mintDark">
                {step.icon({ size: 28 })}
            </div>
            <h3 className="text-xl font-semibold text-[#102a27] mb-2">
                {step.title}
            </h3>
            <p className="text-[#1f3b37]/70 text-sm leading-relaxed">{step.desc}</p>
        </motion.article>
    );
});

/* ─────────────────────────────────────────────────────────
   메인 섹션
────────────────────────────────────────────────────────── */
export default function API({
    id = "api",
    steps,
    badgeLabel = "도입 절차",
    titleLines = ["누구나 바로 사용할 수 있는", "결제 인프라"],
    description = "복잡한 서류나 별도 시스템 없이, 가입부터 결제 운영까지 단 하루면 충분합니다.",
    ctaHref = "#contact",
    ctaLabel = "도입 상담 신청하기",
    onCtaClick,
    className = "",
}: APISectionProps): JSX.Element {
    const data = useMemo<Step[]>(() => (steps?.length ? steps : DEFAULT_STEPS), [steps]);

    return (
        <section
            id={id}
            aria-labelledby={`${id}-heading`}
            className={[
                "relative py-28 px-6 md:px-16",
                "bg-gradient-to-b from-brand-mintLight/60 to-white/60",
                className,
            ].join(" ")}
        >
            {/* 헤더 */}
            <motion.div
                {...fadeUp(0)}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0 }}
                className="text-center max-w-3xl mx-auto mb-20"
            >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-mint/20 text-brand-mintDark text-sm font-medium">
                    <Rocket size={16} aria-hidden="true" />
                    {badgeLabel}
                </span>

                <h2
                    id={`${id}-heading`}
                    className="mt-8 text-4xl md:text-5xl font-extrabold text-[#0b2723] leading-relaxed tracking-tight"
                >
                    {titleLines[0]}
                    <br className="hidden sm:block" />
                    <span className="block mt-3 text-brand-mintDark">{titleLines[1]}</span>
                </h2>

                <p className="mt-8 text-[#1f3b37]/70 text-lg leading-relaxed">
                    {description}
                </p>
            </motion.div>

            {/* 3단계 카드 */}
            <div
                className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
                role="list"
                aria-label="도입 절차 단계 목록"
            >
                {data.map((step, i) => (
                    <StepCard key={step.title} index={i} step={step} />
                ))}
            </div>

            {/* 안내 문구 */}
            <motion.div
                {...fadeUp(4)}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.32 }}
                className="max-w-3xl mx-auto text-center mt-16"
            >
                <p className="text-[#1f3b37]/70 text-lg leading-relaxed">
                    SFIN PAY는 가맹점 등록, 정산 관리, 결제 모듈 제공을 하나의 프로세스로 통합했습니다.
                    별도 구축 없이, 안정적이고 빠르게 운영을 시작할 수 있습니다.
                </p>
            </motion.div>

            {/* CTA */}
            <motion.div
                {...fadeUp(5)}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center mt-12"
            >
                {ctaHref.startsWith("#") ? (
                    <a
                        href={ctaHref}
                        onClick={onCtaClick}
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-brand-mintDark to-emerald-400 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold shadow-[0_8px_20px_rgba(16,185,129,0.25)] t1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-mint/40"
                    >
                        {ctaLabel}
                    </a>
                ) : (
                    <Link
                        href={ctaHref}
                        onClick={onCtaClick}
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-brand-mintDark to-emerald-400 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold shadow-[0_8px_20px_rgba(16,185,129,0.25)] t1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-mint/40"
                    >
                        {ctaLabel}
                    </Link>
                )}
            </motion.div>
        </section>
    );
}
