'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    CreditCard,
    Clock3,
    CheckCircle2,
    ArrowRight,
    Wallet,
} from 'lucide-react';

export default function Settlement(): JSX.Element {
    const [step, setStep] = useState(0);
    const [amount, setAmount] = useState(0);

    // 단계 순환
    useEffect(() => {
        const loop = () => {
            setStep((s) => (s + 1) % 3);
        };
        const interval = setInterval(loop, 4000);
        return () => clearInterval(interval);
    }, []);

    // 💸 금액 카운트업 (10원 단위)
    useEffect(() => {
        let newAmount = amount;
        if (step === 0) {
            // 10원 단위로 랜덤 금액 생성 (80,000 ~ 120,000원)
            const min = 80000;
            const max = 120000;
            newAmount = Math.floor(Math.random() * ((max - min) / 10 + 1)) * 10 + min;
        }

        const start = 0;
        const end = newAmount;
        const duration = 1500;
        const startTime = performance.now();

        let frame: number;
        const animate = (time: number) => {
            const progress = Math.min((time - startTime) / duration, 1);
            const value = start + (end - start) * progress;
            setAmount(Math.floor(value / 10) * 10); // 10원 단위 유지
            if (progress < 1) frame = requestAnimationFrame(animate);
        };

        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, [step]);

    const stages = [
        {
            title: '결제 발생',
            desc: '고객 결제 승인과 동시에 매출 데이터가 생성됩니다.',
            sub: '🔄 승인 결과 실시간 전송 중',
            icon: <CreditCard size={24} />,
        },
        {
            title: '정산 검증',
            desc: 'AI 정산 엔진이 거래 내역을 분석하고 리스크를 자동 감지합니다.',
            sub: '⚙️ 이상 거래 0건, 검증 완료 예정',
            icon: <Clock3 size={24} />,
        },
        {
            title: '입금 완료',
            desc: '정상 거래로 확정된 금액이 가맹점 계좌로 자동 입금됩니다.',
            sub: '💰 15분 내 송금 완료',
            icon: <CheckCircle2 size={24} />,
        },
    ];

    return (
        <section
            id="settlement"
            className="relative py-28 px-6 md:px-16 bg-gradient-to-b from-[#EFFFF9] via-[#F8FFFD] to-white overflow-hidden"
        >
            {/* 💫 민트 데이터 흐름 배경 */}
            <motion.div
                animate={{ backgroundPosition: ['0% 0%', '100% 50%', '0% 100%', '0% 0%'] }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 -z-10 opacity-60"
                style={{
                    backgroundImage:
                        'linear-gradient(115deg, rgba(0,184,148,0.18), rgba(10,206,177,0.1), rgba(0,168,132,0.18))',
                    backgroundSize: '400% 400%',
                    filter: 'blur(80px)',
                }}
            />

            {/* 헤더 */}
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-20"
            >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00c8b4]/10 text-[#00c8b4] text-sm font-medium">
                    <Wallet size={16} /> 실시간 자동 정산
                </span>
                <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#0C3C35] leading-tight">
                    결제 후 <span className="text-[#00c8b4]">입금까지 단 15분</span>
                </h2>
                <p className="mt-5 text-[#2E5C54]/80 text-lg leading-relaxed">
                    결제 승인 → 검증 → 입금 <br /> 모든 과정이 자동으로 연결됩니다.
                </p>
            </motion.div>

            {/* 단계 카드 */}
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-10">
                {stages.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className={`relative flex-1 p-6 rounded-2xl border transition-all duration-500 backdrop-blur-sm ${i === step
                                ? 'border-[#00c8b4]/50 bg-white shadow-[0_8px_30px_rgba(0,200,155,0.18)]'
                                : 'border-[#C4F7EC] bg-[#F8FFFD]'
                            }`}
                    >
                        {i === step && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: [0.2, 0.45, 0.2], scale: [1, 1.05, 1] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute inset-0 -z-10 rounded-2xl bg-[#00c8b4]/30 blur-2xl"
                            />
                        )}

                        <div className={`flex items-center gap-3 ${i === step ? 'text-[#00c8b4]' : 'text-[#2E5C54]/60'}`}>
                            <div className={`p-3 rounded-xl ${i === step ? 'bg-[#00c8b4]/10' : 'bg-[#C4F7EC]/30'}`}>
                                {s.icon}
                            </div>
                            <h3 className="font-semibold text-lg">{s.title}</h3>
                        </div>

                        <p className="mt-3 text-[#2E5C54]/80 text-sm leading-relaxed">{s.desc}</p>

                        {i === step && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mt-4 text-xs text-[#00c8b4] font-semibold tracking-wide"
                            >
                                {s.sub}
                            </motion.div>
                        )}

                        {i < stages.length - 1 && (
                            <div className="hidden md:block absolute right-[-20px] top-[50%] translate-y-[-50%]">
                                <ArrowRight size={20} className={`${i === step ? 'text-[#00c8b4]' : 'text-[#A7ECDD]'}`} />
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* 💰 금액 카운트업 */}
            <div className="mt-16 text-center">
                <motion.div
                    key={amount}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#00c8b4] via-[#00d0aa] to-[#00a884] bg-clip-text text-transparent drop-shadow-sm"
                >
                    ₩{amount.toLocaleString()}
                </motion.div>
                <p className="mt-3 text-[#2E5C54]/70 text-base">
                    {['결제 승인 중', '정산 검증 중', '입금 완료'][step]}
                </p>
            </div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-20 max-w-4xl mx-auto text-center rounded-2xl border border-[#C4F7EC] bg-gradient-to-r from-[#EFFFF9] to-white p-10 shadow-[0_6px_30px_rgba(0,200,155,0.08)]"
            >
                <p className="text-[#2E5C54]/80 text-lg mb-5">
                    결제에서 입금까지 단 15분.
                    <br />
                    현금 흐름을 끊김 없이 이어드립니다.
                </p>
                <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00c8b4] to-[#00d0aa] hover:from-[#00a884] hover:to-[#00b894] text-white font-semibold shadow-[0_8px_20px_rgba(0,184,148,0.25)] transition-all"
                >
                    빠른 정산 문의하기 <ArrowRight size={16} />
                </a>
            </motion.div>
        </section>
    );
}
