'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck,
    Lock,
    Database,
    KeyRound,
    FileText,
    Eye,
    Server,
    Network,
} from 'lucide-react';
import Link from 'next/link';

const fadeUp = (i = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay: 0.08 * i },
});

export default function Security(): JSX.Element {
    return (
        <section
            id="security"
            className="relative py-28 px-6 md:px-16 bg-gradient-to-b from-[#e8fff6] via-[#f2fffb] to-white overflow-hidden"
        >
            {/* ✨ 헤더 */}
            <motion.div {...fadeUp(0)} className="max-w-3xl mx-auto text-center mb-16">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(0,200,155,0.1)] text-[#00b894] text-sm font-medium">
                    <ShieldCheck size={16} /> 보안 · 컴플라이언스
                </span>

                <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-tight">
                    금융 보안 수준의{' '}
                    <span className="text-[#00b894]">데이터 보호 체계</span>
                </h2>

                <p className="mt-5 text-[#334155]/80 text-lg leading-relaxed">
                    SFIN PAY는 전자금융거래법 및 ISMS 기준을 기반으로
                    결제 데이터의 생성부터 저장, 전송까지 전 구간을 보호합니다.
                    <br />
                    단순한 암호화를 넘어, <b>체계적 보안 거버넌스</b>를 운영합니다.
                </p>
            </motion.div>

            {/* 🧱 보안 기능 카드 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                    {
                        icon: <Lock size={26} />,
                        title: '엔드투엔드 암호화',
                        desc: '모든 결제 트래픽은 TLS 1.3 기반으로 암호화되어 전송됩니다.',
                    },
                    {
                        icon: <Database size={26} />,
                        title: '데이터 무결성',
                        desc: '결제 로그는 변조 불가 구조(tamper-proof)로 저장 및 검증됩니다.',
                    },
                    {
                        icon: <Eye size={26} />,
                        title: '이상거래 탐지 (FDS)',
                        desc: 'AI 기반 FDS 엔진이 실시간으로 거래 이상 패턴을 감지합니다.',
                    },
                    {
                        icon: <KeyRound size={26} />,
                        title: 'KYC · AML 프로세스',
                        desc: '가맹점 실명확인, AML 자동 리스크 스코어링, 비정상 거래 차단.',
                    },
                    {
                        icon: <FileText size={26} />,
                        title: '컴플라이언스 자동화',
                        desc: '전자금융거래법·ISMS·여신전문법 기준에 따른 자동 리포팅.',
                    },
                    {
                        icon: <Network size={26} />,
                        title: '내부통제 / 접근권한',
                        desc: '권한 분리, 2FA, 운영자 행위 로깅으로 접근통제 강화.',
                    },
                ].map((f, i) => (
                    <motion.div
                        key={i}
                        {...fadeUp(i + 1)}
                        className="group relative rounded-2xl border border-[rgba(0,200,155,0.25)]
                       bg-white p-6 hover:shadow-[0_10px_30px_rgba(0,200,155,0.15)]
                       transition-all duration-500"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-[rgba(0,200,155,0.08)] text-[#00b894]">
                                {f.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-[#0f172a]">
                                    {f.title}
                                </h3>
                                <p className="mt-2 text-sm text-[#334155]/80 leading-relaxed">
                                    {f.desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* 🧩 보안 계층 다이어그램 */}
            <motion.div
                {...fadeUp(7)}
                className="max-w-4xl mx-auto mt-24 mb-20 text-center"
            >
                <h3 className="text-2xl font-bold text-[#0f172a] mb-10">
                    SFIN PAY의{' '}
                    <span className="text-[#00b894]">보안 계층 구조</span>
                </h3>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    {[
                        { icon: <Server size={26} />, label: '인프라 보호' },
                        { icon: <Database size={26} />, label: '데이터 무결성' },
                        { icon: <ShieldCheck size={26} />, label: '암호화 및 접근제어' },
                        { icon: <Eye size={26} />, label: '모니터링 및 FDS' },
                    ].map((layer, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-col items-center gap-3 bg-white p-5 rounded-xl
                         border border-[rgba(0,200,155,0.25)]
                         shadow-[0_6px_20px_rgba(0,200,155,0.1)] w-[180px]"
                        >
                            <div className="p-3 rounded-full bg-[rgba(0,200,155,0.1)] text-[#00b894]">
                                {layer.icon}
                            </div>
                            <p className="text-sm font-medium text-[#0f172a]">
                                {layer.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* 🧾 하단 배너 */}
            <motion.div
                {...fadeUp(8)}
                className="max-w-5xl mx-auto text-center rounded-2xl border border-[rgba(0,200,155,0.25)]
                   bg-white p-10 shadow-[0_6px_25px_rgba(0,200,155,0.1)]"
            >
                <p className="text-[#334155]/80 text-lg mb-4 leading-relaxed">
                    모든 결제 데이터는 암호화되어 저장되며,
                    API 및 접근 로그는 5년 이상 안전하게 보존됩니다.
                    SFIN PAY는 금융 보안 표준을 넘어서는{' '}
                    <b>투명한 보안 체계</b>를 제공합니다.
                </p>

                <Link
                    href="/security-policy"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                     bg-gradient-to-r from-[#00c89b] to-[#00b894]
                     hover:from-[#00b894] hover:to-[#00a884]
                     text-white font-semibold transition-all
                     shadow-[0_8px_20px_rgba(0,200,155,0.25)]"
                >
                    보안 정책 전문 보기
                </Link>
            </motion.div>
        </section>
    );
}
