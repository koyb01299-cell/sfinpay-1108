'use client';
import React, { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MessageSquare, SendHorizonal, X, HelpCircle } from "lucide-react";

/* ────────────────────────────────────────────────
   ✅ Lottie 동적 import (SSR 비활성)
────────────────────────────────────────────────── */
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

/* ✅ fetch 기반 LottieLoader (public/lottie/* 경로 사용) */
function LottieLoader({ src, className }: { src: string; className?: string }) {
    const [data, setData] = useState<object | null>(null);
    useEffect(() => {
        fetch(src)
            .then((res) => res.json())
            .then(setData)
            .catch(console.error);
    }, [src]);
    if (!data) return null;
    return <Lottie animationData={data} loop autoplay className={className} />;
}

/* ✅ FAQ 데이터베이스 */
const FAQ_LIST = [
    {
        keywords: ["수수료", "요율", "결제 수수료"],
        answer:
            "💰 **수수료 안내**\nSFIN PAY의 수수료는 업종·월 매출·결제수단 비율(카드·간편결제)에 따라 다릅니다.\n평균 0.5%~2.2% 수준이며, 가맹점 규모에 따라 맞춤 협의 가능합니다.\n👉 자세한 상담은 [가맹 계약 문의](/inquiry/contract)에서 가능합니다.",
    },
    {
        keywords: ["정산", "입금", "D+0", "D+1"],
        answer:
            "💸 **정산 안내**\nSFIN PAY는 D+0(당일) / D+1(익일) 정산을 모두 지원합니다.\n매출 패턴과 리스크 조건에 따라 주말·공휴일 커버 옵션도 협의 가능합니다.",
    },
    {
        keywords: ["가맹", "계약", "입점", "제휴"],
        answer:
            "🤝 **가맹 계약 절차**\n전자 서류로 간단히 진행됩니다.\n1️⃣ 서류 접수 → 2️⃣ 심사 → 3️⃣ 전자계약 → 4️⃣ 개통까지 평균 2~3영업일 소요됩니다.\n👉 자세한 절차는 [가맹 계약 문의](/inquiry/contract)에서 확인하세요.",
    },
    {
        keywords: ["보안", "인증", "PCI", "ISMS"],
        answer:
            "🔒 **보안 인증**\nSFIN PAY는 ISMS 인증 및 PCI-DSS 국제 결제 보안 표준을 충족합니다.\n모든 거래는 TLS로 암호화되고, 카드정보와 키는 분리보관 및 접근통제 하에 관리됩니다.",
    },
    {
        keywords: ["API", "연동", "개발", "테스트", "sandbox"],
        answer:
            "🧩 **개발자 연동**\nRESTful API 기반으로 결제·정산·취소 기능을 제공합니다.\n개발자용 샌드박스 환경과 문서가 준비되어 있으며, 연동 지원팀이 기술 검수를 돕습니다.",
    },
    {
        keywords: ["장애", "오류", "결제 안됨", "입금 안됨"],
        answer:
            "⚠️ **장애 대응**\n결제 또는 정산 지연 시, 관리자 대시보드에서 실시간 상태를 확인할 수 있습니다.\n긴급 장애는 24시간 모니터링 시스템으로 자동 감지되어 대응됩니다.",
    },
    {
        keywords: ["상담", "문의", "전화", "연락"],
        answer:
            "📞 **고객센터 정보**\n전화: 1522-9519 (평일 10:00~18:00)\n이메일: contact@sfinpay.co.kr\n또는 [가맹 문의 페이지](/inquiry/contract)에서 접수하시면 담당자가 안내드립니다.",
    },
];

export default function Hero(): JSX.Element {
    const ref = useRef<HTMLElement | null>(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

    const [visible, setVisible] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: "bot", text: "안녕하세요 👋 SFIN PAY입니다.\n무엇을 도와드릴까요?" },
    ]);
    const [input, setInput] = useState("");

    useEffect(() => {
        const target = ref.current;
        if (!target) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.3 }
        );
        observer.observe(target);
        return () => observer.disconnect();
    }, []);

    const scrollToFeatures = (): void => {
        const section = document.getElementById("features");
        if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <>
            {/* ──────────────────────────────── HERO ──────────────────────────────── */}
            <section
                ref={ref}
                className="main_section relative flex flex-col lg:flex-row items-center justify-between
          min-h-[90vh] overflow-hidden bg-gradient-to-br
          from-[#CFFBF6] via-[#A3FFE8] to-white"
                style={{}}
            >
                <div
                    className="absolute inset-0 -z-[5]
            bg-[radial-gradient(ellipse_at_70%_20%,rgba(63,255,222,0.08),transparent_60%),
                radial-gradient(ellipse_at_20%_80%,rgba(50,245,210,0.08),transparent_60%)]"
                />

                {/* 좌측 텍스트 */}
                <div className="z-10 w-full lg:w-1/2 px-10 md:px-16 lg:px-24 py-24 lg:py-0 text-center lg:text-left">
                    <motion.h1
                        initial={{ opacity: 1, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl md:text-6xl font-extrabold leading-tight text-[#0b3c34]"
                    >
                        <span className="block mb-3 text-[#00d8b8] text-lg md:text-xl font-semibold">
                            신뢰로 연결되는 결제 경험
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0d4] via-[#00e8c8] to-[#00cbb0]">
                            비즈니스를 성장시키는<br />통합 결제 플랫폼
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 1, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mt-6 text-lg text-[#045a4d]/90 leading-relaxed max-w-md mx-auto lg:mx-0"
                    >
                        SFIN PAY는 <strong>보안·안정성·확장성</strong>을 기반으로
                        온라인과 오프라인을 아우르는 결제 환경을 제공합니다.
                        모든 거래를 투명하고 신뢰 있게.
                    </motion.p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                        <Link href="/inquiry/contract">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-9 py-4 rounded-xl text-lg bg-gradient-to-r from-[#00d8b8] to-[#00f0d4]
                  hover:from-[#00b8a0] hover:to-[#00cbb0] text-white font-semibold shadow-lg transition"
                            >
                                무료로 시작하기 →
                            </motion.button>
                        </Link>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={scrollToFeatures}
                            className="px-9 py-4 rounded-xl border border-[#00d8b8]/40
                hover:border-[#00b8a0] text-[#0b3c34] font-medium text-lg transition"
                        >
                            기능 보기
                        </motion.button>
                    </div>

                    <div className="lg:hidden mt-14 flex justify-center">
                        {visible && (
                            <LottieLoader src="/lottie/payment_success.json" className="w-4/5 max-w-[320px]" />
                        )}
                    </div>
                </div>

                {/* 오른쪽 시각화 */}
                <div className="relative hidden lg:flex w-1/2 justify-center items-center">
                    <div className="relative w-[540px] h-[420px] flex items-center justify-center">
                        { }
                    </div>
                </div>
            </section>

        </>
    );
}
