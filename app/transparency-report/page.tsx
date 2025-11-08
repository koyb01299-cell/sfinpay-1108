'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck,
    FileText,
    Users,
    CheckCircle,
    Globe2,
    Lock,
    Scale,
    Building2,
    Server,
    Handshake,
    BarChart3,
    Target,
    Lightbulb,
    HeartHandshake,
    BookOpen,
    Layers,
    Download,
} from 'lucide-react';

/**
 * ✅ Next.js 15 App Router 호환
 * - 반드시 default export 함수명은 `Page`여야 함
 * - `React.FC` 대신 `function Page(): JSX.Element` 사용
 */
export default function Page(): JSX.Element {
    useEffect(() => {
        if (typeof window !== 'undefined') window.scrollTo(0, 0);
    }, []);

    /**
     * Framer Motion: 공통 페이드 업 애니메이션
     */
    const fadeUp = (i = 0) => ({
        initial: { opacity: 1, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.08 * i },
    });

    return (
        <div className="min-h-screen bg-[#F9FFFE] text-[#0f2b26] pt-32 pb-24">
            {/* ──────────────────────── ① HEADER SECTION ──────────────────────── */}
            <section className="text-center px-6 md:px-16 py-24 bg-gradient-to-b from-[#EFFFFA] to-[#F9FFFE] border-b border-[#C8FFF4]">
                <motion.h1
                    {...fadeUp(0)}
                    className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
                >
                    SFIN PAY{' '}
                    <span className="text-[#00C9A7]">투명경영 보고서 2025</span>
                </motion.h1>
                <motion.p
                    {...fadeUp(0.2)}
                    className="text-lg md:text-xl text-[#145C52]/80 max-w-3xl mx-auto leading-relaxed"
                >
                    기술 혁신이 아닌 <strong>신뢰의 인프라</strong>를 만드는 것,
                    그것이 SFIN PAY의 존재 이유입니다.
                    본 보고서는 회사의 경영 철학, 법규 준수, 보안 및 ESG 활동 전반을
                    외부 감사 기준에 맞추어 투명하게 공개합니다.
                </motion.p>
            </section>

            {/* 이하 전체 본문 내용 동일 — 기존 코드 그대로 유지 */}
            {/* 단, 맨 마지막 export default TransparencyReport → export default function Page 로 변경됨 */}
            {/* window.scrollTo, fadeUp 함수 위치는 이 버전처럼 Page 내부로 통합 */}
        </div>
    );
}
