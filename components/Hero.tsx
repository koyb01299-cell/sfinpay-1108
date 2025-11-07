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

/* ✅ Lottie JSON import */
import posMachine from "../app/lottie/pos_machine.json";
import dashboard from "../app/lottie/Dashboard Developer.json";
import paymentSuccess from "../app/lottie/Payment Successful Animation.json";

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

    const findBestMatch = (text: string): string => {
        const lower = text.toLowerCase();
        for (const faq of FAQ_LIST) {
            if (faq.keywords.some((k) => lower.includes(k.toLowerCase()))) {
                return faq.answer;
            }
        }
        return (
            "아직 이 주제에 대한 자동응답은 준비 중이에요 😊\n" +
            "하지만 걱정 마세요.\n" +
            "가맹팀이 신속히 안내드릴 수 있도록 도와드릴게요.\n" +
            "👉 [가맹 문의 바로가기](/inquiry/contract)\n" +
            "또는 contact@sfinpay.co.kr 로 문의해 주세요."
        );
    };

    const handleSend = () => {
        if (!input.trim()) return;
        const userMsg = { from: "user", text: input };
        setMessages((prev) => [...prev, userMsg]);
        const reply = findBestMatch(input);
        setInput("");
        setTimeout(() => {
            setMessages((prev) => [...prev, { from: "bot", text: reply }]);
            // 챗창 자동 스크롤
            const el = document.getElementById("chat-scroll-container");
            if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
        }, 600);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleSend();
    };

    return (
        <>
            {/* ──────────────────────────────── HERO ──────────────────────────────── */}
            <motion.section
                ref={ref}
                className="relative flex flex-col lg:flex-row items-center justify-between
          min-h-[90vh] overflow-hidden bg-gradient-to-br
          from-[#CFFBF6] via-[#A3FFE8] to-white"
                style={{ opacity, y }}
            >
                <div
                    className="absolute inset-0 -z-[5]
            bg-[radial-gradient(ellipse_at_70%_20%,rgba(63,255,222,0.08),transparent_60%),
                radial-gradient(ellipse_at_20%_80%,rgba(50,245,210,0.08),transparent_60%)]"
                />

                {/* 좌측 텍스트 */}
                <div className="z-10 w-full lg:w-1/2 px-10 md:px-16 lg:px-24 py-24 lg:py-0 text-center lg:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
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
                            <Lottie
                                animationData={paymentSuccess}
                                loop
                                autoplay
                                className="w-4/5 max-w-[320px]"
                            />
                        )}
                    </div>
                </div>

                {/* 오른쪽 시각화 */}
                <div className="relative hidden lg:flex w-1/2 justify-center items-center">
                    <div className="relative w-[540px] h-[420px] flex items-center justify-center">
                        {visible && (
                            <>
                                <Lottie animationData={posMachine} className="absolute top-0 left-4 w-[240px]" loop autoplay />
                                <Lottie animationData={dashboard} className="absolute top-10 right-0 w-[280px]" loop autoplay />
                                <Lottie animationData={paymentSuccess} className="absolute bottom-0 left-[60px] w-[240px]" loop autoplay />
                            </>
                        )}
                    </div>
                </div>
            </motion.section>

            {/* ──────────────────────────────── CHATBOT ──────────────────────────────── */}
            <div className="fixed bottom-6 right-6 z-[9999]">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsChatOpen((prev) => !prev)}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-[#36ffc6] to-[#76ffe0]
      flex items-center justify-center shadow-lg text-white hover:shadow-xl transition-all"
                    aria-label="SFIN PAY 상담 열기"
                >
                    {isChatOpen ? <X size={28} /> : <MessageSquare size={30} />}
                </motion.button>

                <AnimatePresence>
                    {isChatOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 40 }}
                            transition={{ duration: 0.25 }}
                            className="fixed bottom-28 right-6 w-[420px] max-h-[620px]
          flex flex-col rounded-2xl bg-white border border-[#a6f2df]
          shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden"
                        >
                            <div className="bg-gradient-to-r from-[#36ffc6] to-[#76ffe0]
          text-white px-5 py-3 flex items-center justify-between text-base font-semibold">
                                <span>💬 SFIN PAY 자동상담</span>
                                <button
                                    onClick={() => setIsChatOpen(false)}
                                    className="hover:opacity-80 transition"
                                    aria-label="닫기"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div
                                className="flex-1 p-5 overflow-y-auto space-y-3 text-[15px] leading-relaxed
            scrollbar-thin scrollbar-thumb-[#36ffc6]/50 scrollbar-track-transparent"
                                ref={(el) => {
                                    if (el) {
                                        el.scrollTop = el.scrollHeight;
                                    }
                                }}
                                id="chat-scroll-container"
                            >
                                {messages.map((msg, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div
                                            className={`px-4 py-3 rounded-xl shadow-sm whitespace-pre-line max-w-[80%]
                  ${msg.from === "user"
                                                    ? "bg-[#36ffc6]/90 text-[#004d3f]"
                                                    : "bg-[#f5fffd] text-[#004d3f] border border-[#c5fff0]"
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}
                                <div id="scroll-anchor" />
                            </div>

                            <div className="border-t border-gray-200 p-4 flex flex-wrap gap-2 justify-start bg-[#f0fff9]">
                                {FAQ_LIST.slice(0, 5).map((faq, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            setMessages((prev) => [...prev, { from: "user", text: faq.keywords[0] }]);
                                            setTimeout(() => {
                                                setMessages((prev) => [...prev, { from: "bot", text: faq.answer }]);
                                                const el = document.getElementById("chat-scroll-container");
                                                if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
                                            }, 400);
                                        }}
                                        className="px-3 py-1.5 rounded-full border border-[#36ffc6]/40 bg-white hover:bg-[#36ffc6]/10
                text-[#007a65] text-xs font-medium transition flex items-center"
                                    >
                                        <HelpCircle size={12} className="mr-1 text-[#00d8b8]" />
                                        {faq.keywords[0]}
                                    </button>
                                ))}
                            </div>

                            <div className="border-t border-gray-200 bg-white p-3 flex items-center gap-3">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                    placeholder="문의 내용을 입력하세요..."
                                    className="flex-1 px-4 py-2.5 text-sm border border-[#a6f2df] rounded-lg
              focus:outline-none focus:ring-1 focus:ring-[#36ffc6]/70"
                                />
                                <button
                                    onClick={() => {
                                        handleSend();
                                        setTimeout(() => {
                                            const el = document.getElementById("chat-scroll-container");
                                            if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
                                        }, 150);
                                    }}
                                    className="p-3 rounded-full bg-[#36ffc6] hover:bg-[#00d8b8] text-white transition"
                                >
                                    <SendHorizonal size={20} />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
