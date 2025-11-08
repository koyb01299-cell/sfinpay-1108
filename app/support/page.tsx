"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
    Wallet,
    FileSignature,
    Cpu,
    MessageSquare,
    Clock3,
    Headphones,
    ChevronDown,
} from "lucide-react";

export default function Support(): JSX.Element {
    const router = useRouter();
    useEffect(() => window.scrollTo(0, 0), []);

    const fadeUp = (d = 0) => ({
        initial: { opacity: 1, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: d },
    });

    const inquiryList = [
        {
            icon: <Wallet size={28} />,
            title: "정산 관련 문의",
            link: "/inquiry/settlement",
            desc: "입금, 수수료, D+0/D+1 관련 문의",
        },
        {
            icon: <FileSignature size={28} />,
            title: "가맹 계약 / 수수료 협의",
            link: "/inquiry/contract",
            desc: "계약 진행 및 조건 협의 문의",
        },
        {
            icon: <Cpu size={28} />,
            title: "시스템 연동 / 기술 지원",
            link: "/inquiry/integration",
            desc: "POS, API, 웹훅 등 기술 문의",
        },
        {
            icon: <MessageSquare size={28} />,
            title: "일반 / 제휴 문의",
            link: "/inquiry/general",
            desc: "제휴, 홍보, 기타 일반 문의",
        },
    ];

    const faqs = [
        {
            q: "입금(정산)이 지연되는 이유가 뭔가요?",
            a: (
                <>
                    정산이 지연되는 주요 원인은 아래 세 가지입니다:
                    <br />
                    <br />
                    ① <b>은행 점검 / 영업일 제한</b> — 주말·공휴일 또는 심야 점검 시 송금이
                    일시 중단되며, 익영업일 오전에 일괄 처리됩니다.
                    <br />
                    <br />
                    ② <b>가맹점 계좌 인증 실패</b> — 예금주 실명 불일치 시 자동 정산이
                    차단됩니다. 계좌 재등록 또는 고객센터로 문의해주세요.
                    <br />
                    <br />
                    ③ <b>한도 초과 / FDS 보류</b> — 거래금액이 한도를 초과하거나 이상거래 탐지(FDS)에
                    걸린 경우 일시 보류되며, 영업일 기준 1시간 내 담당 매니저가 연락드립니다.
                </>
            ),
        },
        {
            q: "가맹 계약은 어떤 절차로 진행되나요?",
            a: (
                <>
                    SFIN PAY 가맹 계약은 100% <b>비대면 전자계약</b>으로 진행됩니다.
                    <br />
                    <br />
                    1️⃣ 온라인 신청서 작성 → 2️⃣ 서류 및 신용심사 → 3️⃣ 전자계약 서명 →
                    4️⃣ 가맹점 ID 발급
                    <br />
                    <br />
                    평균 처리 기간은 영업일 기준 1~2일이며, 테스트용 계정도 함께 제공됩니다.
                </>
            ),
        },
        {
            q: "POS 또는 API 연동 오류는 어떻게 해결하나요?",
            a: (
                <>
                    기술 연동 오류의 대부분은 <b>API Key 설정 불일치</b> 또는{" "}
                    <b>서버 방화벽 차단</b>으로 인해 발생합니다.
                    <br />
                    <br />
                    🔹 <b>확인 1</b> — Client ID / Secret Key가 운영 환경과 일치하는지 점검
                    <br />
                    🔹 <b>확인 2</b> — 도메인{" "}
                    <code className="bg-[#d1fae5] px-1.5 rounded">api.sfinpay.co.kr</code> 을
                    화이트리스트에 등록
                    <br />
                    🔹 <b>확인 3</b> — 401/403 오류 시 Authorization 헤더 누락 여부 확인
                    <br />
                    <br />
                    해결되지 않을 경우 “시스템 연동 문의” 메뉴를 통해 로그를 첨부해주세요.
                </>
            ),
        },
        {
            q: "D+0 정산 서비스는 어떤 방식으로 입금되나요?",
            a: (
                <>
                    D+0 정산은 <b>15분 단위 자동입금</b> 시스템으로, 결제 승인 후 실시간으로 송금됩니다.
                    <br />
                    <br />
                    ⏱️ 입금 주기 : 평균 15~20분 단위
                    💰 가능 시간 : 06:00 ~ 익일 01:00
                    ⚙️ 입금 방식 : 자동송금 API 기반 실시간 처리
                    <br />
                    <br />
                    ※ 금융망 점검 시 일시적으로 D+1로 전환되며, 관리자 대시보드에서 공지됩니다.
                </>
            ),
        },
        {
            q: "수수료 정책은 어떻게 구성되어 있나요?",
            a: (
                <>
                    업종, 매출 규모, 결제수단에 따라 차등 적용됩니다:
                    <br />
                    <br />
                    💳 신용카드 : 2.5% ~ 3.2%
                    💸 계좌이체 : 1.8% ~ 2.2%
                    🧾 간편결제 : 2.2% ~ 2.9%
                    <br />
                    <br />
                    월 매출 5천만 원 이상 가맹점은 거래량 기반으로 <b>개별 협의</b>가 가능합니다.
                </>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-[#ecfdf5] text-[#0b2723] pt-32">
            {/* HEADER */}
            <section className="text-center py-20 px-6 md:px-16 bg-gradient-to-b from-[#f0fdfa] to-[#ecfdf5] border-b border-[#a7f3d0]/50">
                <motion.h1
                    {...fadeUp(0)}
                    className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
                >
                    고객 지원 센터
                </motion.h1>
                <motion.p
                    {...fadeUp(0.2)}
                    className="text-lg md:text-xl text-[#1e3a34]/80 max-w-3xl mx-auto"
                >
                    정산, 가맹, 기술, 제휴 등 모든 문의는 아래 메뉴를 통해 접수할 수 있습니다.
                </motion.p>
            </section>

            {/* INQUIRY TYPE */}
            <section className="py-24 px-6 md:px-16 max-w-6xl mx-auto">
                <motion.h2
                    {...fadeUp(0)}
                    className="text-3xl font-bold text-center mb-12 text-[#0b2723]"
                >
                    문의 유형 선택
                </motion.h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {inquiryList.map((item, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(i * 0.1)}
                            className="p-8 bg-white border border-[#a7f3d0]/70 rounded-2xl text-center hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] t1"
                        >
                            <div className="flex justify-center mb-4 text-[#10b981]">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-[#1e3a34]/80 mb-4">{item.desc}</p>
                            <button
                                onClick={() => router.push(item.link)}
                                className="inline-block mt-2 px-5 py-2 rounded-lg bg-gradient-to-r from-[#34d399] to-[#10b981] hover:from-[#10b981] hover:to-[#059669] text-white text-sm font-medium transition"
                            >
                                바로 문의하기 →
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-6 md:px-16 max-w-4xl mx-auto">
                <motion.h2
                    {...fadeUp(0)}
                    className="text-3xl font-bold text-center mb-10 text-[#0b2723]"
                >
                    자주 묻는 질문 (FAQ)
                </motion.h2>
                {faqs.map((f, i) => (
                    <motion.details
                        key={i}
                        {...fadeUp(i * 0.1)}
                        className="group border-b border-[#a7f3d0]/50 py-6"
                    >
                        <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-[#0b2723] hover:text-[#10b981]">
                            {f.q}
                            <ChevronDown className="text-[#10b981] group-open:rotate-180 transition-transform" />
                        </summary>
                        <div className="mt-3 text-[#1e3a34]/80 leading-relaxed text-[15px] space-y-2">
                            {f.a}
                        </div>
                    </motion.details>
                ))}
            </section>

            {/* CTA */}
            <section className="py-24 px-6 md:px-16 text-center border-t border-[#a7f3d0]/50">
                <motion.p
                    {...fadeUp(0)}
                    className="text-[#1e3a34]/90 text-lg mb-6 leading-relaxed"
                >
                    추가 문의나 상세 상담이 필요하신가요?
                    담당자가 직접 빠르게 도와드립니다.
                </motion.p>
                <motion.button
                    {...fadeUp(0.2)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.push("/inquiry/general")}
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#34d399] to-[#10b981] hover:from-[#10b981] hover:to-[#059669] text-white font-semibold text-lg shadow-[0_8px_25px_rgba(16,185,129,0.25)] t1"
                >
                    상담 요청하기 →
                </motion.button>
            </section>

            {/* CONTACT INFO */}
            <section className="py-16 bg-[#f0fdfa] text-center border-t border-[#a7f3d0]/50">
                <div className="flex flex-col items-center gap-3 text-[#1e3a34]/80">
                    <Headphones size={32} className="text-[#10b981]" />
                    <p className="font-medium">
                        고객센터 : 1544-7788 | support@sfinpay.co.kr
                    </p>
                    <p className="text-sm flex items-center gap-2">
                        <Clock3 size={14} /> 평일 09:00 ~ 18:00 (주말·공휴일 휴무)
                    </p>
                </div>
            </section>
        </div>
    );
}
