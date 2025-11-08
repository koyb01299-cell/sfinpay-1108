'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
    TrendingUp,
    RefreshCcw,
    HandCoins,
    Info,
    ShieldCheck,
    Database,
    Building2,
    ArrowRight,
    CreditCard,
} from 'lucide-react';

const fadeUp = (i = 0) => ({
    initial: { opacity: 1, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay: 0.08 * i },
});

export default function Liquidity(): JSX.Element {
    return (
        <section
            id="liquidity"
            className="relative py-28 px-6 md:px-16 bg-gradient-to-b from-[#e8fff6] via-[#f2fffb] to-white overflow-hidden"
        >
            {/* 🔹 상단 배너 — 신뢰형 유동성 시스템 */}
            <motion.div
                {...fadeUp(0)}
                className="max-w-5xl mx-auto mb-10 rounded-2xl border border-[rgba(0,200,155,0.25)]
                   bg-white shadow-[0_6px_25px_rgba(0,200,155,0.08)]"
            >
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-8 py-5">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[rgba(0,200,155,0.1)] text-[#00b894]">
                            <ShieldCheck size={20} />
                        </div>
                        <div>
                            <p className="text-[#0f172a] font-semibold">
                                정산 데이터 기반 신뢰형 유동성 시스템
                            </p>
                            <p className="text-sm text-[#334155]/70">
                                SFIN PAY는 매출 정산 정보를 안전하게 분석하고, 금융기관과 직접 연동합니다.
                            </p>
                        </div>
                    </div>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-5 py-2 rounded-xl
                       bg-gradient-to-r from-[#00c89b] to-[#00b894]
                       text-white text-sm font-medium hover:opacity-90 transition"
                    >
                        더 알아보기
                    </a>
                </div>
            </motion.div>

            {/* 💡 메인 헤더 */}
            <motion.div {...fadeUp(1)} className="max-w-3xl mx-auto text-center mb-20">
                <span
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                     bg-[rgba(0,200,155,0.10)] text-[#00b894] text-sm font-medium"
                >
                    <HandCoins size={16} /> 정산액 활용형 유동성 시스템
                </span>

                <h2 className="mt-8 text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-relaxed tracking-tight">
                    <span className="text-[#00b894]">데이터가 자산이 되는 순간</span>
                    <br className="hidden md:block" />
                    <span className="block mt-3 text-[#00c89b]">
                        정산 흐름이 금융을 확장합니다
                    </span>
                </h2>

                <p className="mt-8 text-[#334155]/80 text-lg leading-relaxed">
                    결제와 정산에서 생성되는 데이터를 기반으로,
                    제휴 금융기관과 연동된 신뢰형 유동성 서비스를 제공합니다.
                    투명한 한도 산출과 자동 심사 시스템으로, 안정적 자금 운용이 가능합니다.
                </p>
            </motion.div>

            {/* 🔄 데이터 플로우 다이어그램 */}
            <motion.div
                {...fadeUp(2)}
                className="max-w-5xl mx-auto mb-20 flex flex-col items-center justify-center"
            >
                <div className="relative w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-[#0f172a]">
                    {/* 1️⃣ 결제 발생 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center gap-2 bg-white p-6 rounded-xl
                       shadow-[0_6px_20px_rgba(0,200,155,0.1)]
                       border border-[rgba(0,200,155,0.25)] w-[220px]"
                    >
                        <CreditCard className="text-[#00b894]" size={28} />
                        <p className="font-semibold">결제 발생</p>
                        <p className="text-sm text-[#334155]/70 text-center">
                            고객 결제 및 승인 데이터
                        </p>
                    </motion.div>

                    <ArrowRight className="text-[#00c89b]" size={32} />

                    {/* 2️⃣ 정산 데이터 분석 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center gap-2 bg-white p-6 rounded-xl
                       shadow-[0_6px_20px_rgba(0,200,155,0.1)]
                       border border-[rgba(0,200,155,0.25)] w-[220px]"
                    >
                        <Database className="text-[#00b894]" size={28} />
                        <p className="font-semibold">정산 데이터 분석</p>
                        <p className="text-sm text-[#334155]/70 text-center">
                            매출·리스크 패턴 자동 분석
                        </p>
                    </motion.div>

                    <ArrowRight className="text-[#00c89b]" size={32} />

                    {/* 3️⃣ 금융기관 연동 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center gap-2 bg-white p-6 rounded-xl
                       shadow-[0_6px_20px_rgba(0,200,155,0.1)]
                       border border-[rgba(0,200,155,0.25)] w-[220px]"
                    >
                        <Building2 className="text-[#00b894]" size={28} />
                        <p className="font-semibold">금융기관 연동</p>
                        <p className="text-sm text-[#334155]/70 text-center">
                            제휴기관 심사 및 한도 승인
                        </p>
                    </motion.div>

                    <ArrowRight className="text-[#00c89b]" size={32} />

                    {/* 4️⃣ 유동성 지원 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center gap-2 bg-gradient-to-br
                       from-[#00c89b]/10 to-[#00b894]/10 p-6 rounded-xl
                       shadow-[0_6px_25px_rgba(0,200,155,0.15)]
                       border border-[rgba(0,200,155,0.3)] w-[220px]"
                    >
                        <TrendingUp className="text-[#00b894]" size={28} />
                        <p className="font-semibold text-[#0f172a]">유동성 지원 실행</p>
                        <p className="text-sm text-[#334155]/70 text-center">
                            정산액 기반 자동 실행
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* 💰 주요 상품 카드 */}
            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {/* Data-Linked 한도 */}
                <motion.div
                    {...fadeUp(3)}
                    className="rounded-2xl border border-[rgba(0,200,155,0.25)]
                     bg-white p-8 hover:shadow-[0_10px_30px_rgba(0,200,155,0.15)]
                     t1 duration-500"
                >
                    <div className="flex items-center gap-3 mb-5 text-[#00b894]">
                        <TrendingUp size={22} />
                        <h3 className="text-2xl font-bold text-[#0f172a]">
                            매출 연동형 한도 (Data-Linked)
                        </h3>
                    </div>
                    <p className="text-[#334155]/80 text-sm leading-relaxed mb-6">
                        정산 데이터를 기반으로 자동 한도를 산출합니다.
                        실시간 리스크 검증 후, 제휴 금융기관과 즉시 연동됩니다.
                    </p>
                    <ul className="space-y-2 text-[#334155]/70 text-sm">
                        <li>• 기간: 3~6개월 단기</li>
                        <li>• 상환: 정산금 일부 자동 차감</li>
                        <li>• 실행: 승인 후 즉시 처리</li>
                    </ul>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl
                       bg-gradient-to-r from-[#00c89b] to-[#00b894]
                       hover:from-[#00b894] hover:to-[#00a884]
                       text-white font-semibold shadow-[0_8px_20px_rgba(0,200,155,0.25)]
                       t1"
                    >
                        한도 확인
                    </a>
                </motion.div>

                {/* 순환형 유동성 */}
                <motion.div
                    {...fadeUp(4)}
                    className="rounded-2xl border border-[rgba(0,200,155,0.25)]
                     bg-white p-8 hover:shadow-[0_10px_30px_rgba(0,200,155,0.15)]
                     t1 duration-500"
                >
                    <div className="flex items-center gap-3 mb-5 text-[#00b894]">
                        <RefreshCcw size={22} />
                        <h3 className="text-2xl font-bold text-[#0f172a]">
                            순환형 유동성 (Auto Renewal)
                        </h3>
                    </div>
                    <p className="text-[#334155]/80 text-sm leading-relaxed mb-6">
                        정산 패턴이 일정하게 유지되면 한도가 자동 갱신됩니다.
                        계절형 매장, 스타트업, 프로젝트성 매출에도 유연하게 대응합니다.
                    </p>
                    <ul className="space-y-2 text-[#334155]/70 text-sm">
                        <li>• 데이터 기반 자동 심사</li>
                        <li>• 중도상환 수수료 없음</li>
                        <li>• 금융기관 실시간 연동</li>
                    </ul>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl
                       bg-gradient-to-r from-[#00c89b] to-[#00b894]
                       hover:from-[#00b894] hover:to-[#00a884]
                       text-white font-semibold shadow-[0_8px_20px_rgba(0,200,155,0.25)]
                       t1"
                    >
                        상담 신청
                    </a>
                </motion.div>
            </div>

            {/* 🧠 안내문 */}
            <motion.div
                {...fadeUp(5)}
                className="mt-20 max-w-5xl mx-auto rounded-2xl border border-[rgba(0,200,155,0.25)]
                   bg-[#f2fffb] p-8"
            >
                <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-[rgba(0,200,155,0.10)] text-[#00b894]">
                        <Info size={20} />
                    </div>
                    <div>
                        <h4 className="text-[#0f172a] font-semibold mb-2">
                            투명 운영 및 데이터 보호
                        </h4>
                        <ul className="space-y-1 text-[#334155]/80 text-sm leading-relaxed">
                            <li>• SFIN PAY는 직접 대출을 수행하지 않으며, 제휴 금융기관을 통해 유동성이 제공됩니다.</li>
                            <li>• 모든 정산 데이터는 비식별화·암호화 후 처리됩니다.</li>
                            <li>• APR 및 수수료 구조는 사전 명시됩니다.</li>
                            <li>• 이용 내역은 신용점수에 직접 반영되지 않습니다.</li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
