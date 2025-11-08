"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare, HelpCircle, SendHorizonal } from "lucide-react";

/* 💬 FAQ 목록 */
const FAQ_LIST: {
    keywords: string[];
    answer: React.ReactNode; // string 또는 JSX 허용
}[] = [
        {
            keywords: ["정산 주기"],
            answer: (
                <>
                    SFIN PAY는 D+0(당일) 및 D+1(익일) 정산을 지원합니다.
                    <br />
                    사업자 유형에 따라 계약 시 선택 가능합니다.
                </>
            ),
        },
        {
            keywords: ["수수료"],
            answer: (
                <>
                    결제 수수료는 업종·거래량에 따라 상이하며 평균 0.5~2.5% 수준입니다.
                    <br />
                    정확한 견적은 가맹 문의 시 안내드립니다.
                </>
            ),
        },
        {
            keywords: ["가맹 문의", "가맹", "제휴"],
            answer: (
                <>
                    SFIN PAY 가맹은 온라인 간편 신청이 가능합니다.
                    <br />
                    상단 메뉴 또는 아래 링크에서 신청서를 제출해주세요.
                    <br />
                    👉 <a href="/inquiry/contract">가맹 문의 바로가기</a>
                </>
            ),
        },
        {
            keywords: ["보안"],
            answer: (
                <>
                    모든 결제 데이터는 PCI-DSS 및 ISMS 인증 체계로 관리되며,
                    <br />
                    실시간 위험 탐지 시스템이 적용됩니다.
                </>
            ),
        },
        {
            keywords: ["고객센터", "문의", "전화"],
            answer: (
                <>
                    고객센터는 평일 09:00~18:00 운영됩니다.
                    <br />
                    채팅 또는 support@sfinpay.co.kr로 문의주세요.
                </>
            ),
        },
    ];

interface ChatMessage {
    from: "user" | "bot";
    text: React.ReactNode; // JSX/문자 모두 허용
}

/* ✅ FAQ 매칭: ReactNode 반환 */
const findBestMatch = (text: string): React.ReactNode => {
    const lower = text.toLowerCase();

    const matched = FAQ_LIST.find((faq) =>
        faq.keywords.some((k) => lower.includes(k.toLowerCase()))
    );

    if (matched) return matched.answer;

    // ✅ 매칭 없을 때 기본 안내 JSX (요청하신 그대로)
    return (
        <>
            이 주제에 대한 답변은 당장 안내드리기 어려워요. 😊
            <br />
            하지만 걱정 마세요.
            <br />
            가맹팀이 신속히 안내드릴 수 있도록 도와드릴게요.
            <br />
            👉 <a href="/inquiry/contract">가맹 문의 바로가기</a>
            <br />
            또는 <a href="mailto:contact@sfinpay.co.kr">contact@sfinpay.co.kr</a> 로 문의해 주세요.
        </>
    );
};

export default function Chatbot(): JSX.Element {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            from: "bot",
            text: (
                <>
                    안녕하세요 👋 SFIN PAY 자동상담입니다.
                    <br />
                    무엇을 도와드릴까요?
                </>
            ),
        },
    ]);
    const [input, setInput] = useState("");
    const chatRef = useRef<HTMLDivElement>(null);

    /* ✅ 새 메시지/창 열릴 때 스크롤 아래로 */
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTo({
                top: chatRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [messages, isChatOpen]);

    const handleSend = () => {
        const trimmed = input.trim();
        if (!trimmed) return;

        // 유저 메시지 추가 (string도 ReactNode라 그대로 사용 가능)
        setMessages((prev) => [...prev, { from: "user", text: trimmed }]);

        const reply = findBestMatch(trimmed);
        setInput("");

        // 봇 응답 (딜레이)
        setTimeout(() => {
            setMessages((prev) => [...prev, { from: "bot", text: reply }]);
        }, 600);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleSend();
    };

    const handleQuickFaq = (keyword: string) => {
        const reply = findBestMatch(keyword);
        setMessages((prev) => [
            ...prev,
            { from: "user", text: keyword },
            { from: "bot", text: reply },
        ]);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999]">
            {/* 🟢 Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsChatOpen((prev) => !prev)}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-[#36ffc6] to-[#76ffe0]
          flex items-center justify-center shadow-lg text-white hover:shadow-xl"
                aria-label="SFIN PAY 상담 열기"
            >
                {isChatOpen ? <X size={28} /> : <MessageSquare size={30} />}
            </motion.button>

            {/* 💬 Chat Window */}
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
                        {/* Header */}
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

                        {/* Messages */}
                        <div
                            ref={chatRef}
                            id="chat-scroll-container"
                            className="flex-1 p-5 overflow-y-auto space-y-3 text-[15px] leading-relaxed
                scrollbar-thin scrollbar-thumb-[#36ffc6]/50 scrollbar-track-transparent"
                        >
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.from === "user"
                                        ? "justify-end"
                                        : "justify-start"
                                        }`}
                                >
                                    <div
                                        className={`px-4 py-3 rounded-xl shadow-sm max-w-[80%]
                      ${msg.from === "user"
                                                ? "bg-[#36ffc6]/90 text-[#004d3f] whitespace-pre-line"
                                                : "bg-[#f5fffd] text-[#004d3f] border border-[#c5fff0]"
                                            } text-[14px]`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Quick FAQ */}
                        <div className="border-t border-gray-200 p-4 flex flex-wrap gap-2 justify-start bg-[#f0fff9]">
                            {FAQ_LIST.slice(0, 5).map((faq, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleQuickFaq(faq.keywords[0])}
                                    className="px-3 py-1.5 rounded-full border border-[#36ffc6]/40 bg-white
                    hover:bg-[#36ffc6]/10 text-[#007a65] text-xs font-medium
                    transition flex items-center"
                                >
                                    <HelpCircle
                                        size={12}
                                        className="mr-1 text-[#00d8b8]"
                                    />
                                    {faq.keywords[0]}
                                </button>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="border-t border-gray-200 bg-white p-3 flex items-center gap-3">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder="문의 내용을 입력하세요..."
                                className="flex-1 px-4 py-2.5 text-sm border border-[#a6f2df] rounded-lg
                  focus:ring-1 focus:ring-[#36ffc6]/70 outline-none"
                            />
                            <button
                                onClick={handleSend}
                                className="p-3 rounded-full bg-[#36ffc6] hover:bg-[#00d8b8] text-white transition"
                            >
                                <SendHorizonal size={20} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
