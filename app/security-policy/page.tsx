"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, FileText, KeyRound, Eye } from "lucide-react";
import SecurityPolicyPDFGenerator from "../../components/SecurityPolicyPDFGenerator";

export default function SecurityPolicy() {
    return (
        <motion.main
            id="security-policy-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen bg-[#ecfdf5] text-[#0b2723] px-6 md:px-16 py-28"
        >
            {/* 제목 영역 */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d1fae5] text-[#10b981] text-sm font-medium">
                    <ShieldCheck size={16} /> SFIN PAY 보안 정책
                </span>
                <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight text-[#0b2723]">
                    정보보호 및 개인정보처리방침
                </h1>
                <p className="mt-4 text-[#1e3a34]/80 text-lg leading-relaxed">
                    SFIN PAY는 고객의 결제정보와 개인정보를 최우선으로 보호하기 위해
                    국제 보안 기준 및 국내 관련 법규를 철저히 준수합니다.
                </p>
            </div>

            {/* 본문 */}
            <div className="max-w-4xl mx-auto space-y-16 text-[#0b2723]/90 leading-relaxed">
                {/* 1️⃣ 정보보호 정책 */}
                <section>
                    <h2 className="flex items-center gap-2 text-2xl font-bold mb-4 text-[#10b981]">
                        <Lock size={20} /> 1. 정보보호 정책
                    </h2>
                    <p className="mb-4">
                        SFIN PAY는 「전자금융거래법」, 「개인정보보호법」 및 「정보통신망법」을 기반으로
                        모든 결제 및 고객 데이터를 보호하기 위한 관리적·기술적·물리적 보호조치를 시행합니다.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[#1e3a34]/85">
                        <li>TLS 1.3 암호화 통신 전 구간 적용</li>
                        <li>서버·DB 접근제어 및 2FA 인증체계 운영</li>
                        <li>정기적 취약점 점검 및 모의해킹 수행</li>
                        <li>외부 보안감사(ISMS) 연 1회 이상 이행</li>
                    </ul>
                </section>

                {/* 2️⃣ 개인정보 처리방침 */}
                <section>
                    <h2 className="flex items-center gap-2 text-2xl font-bold mb-4 text-[#10b981]">
                        <FileText size={20} /> 2. 개인정보 처리방침
                    </h2>
                    <p className="mb-4">
                        고객으로부터 수집하는 개인정보는 서비스 제공에 필요한 최소한의 범위 내에서만 이용되며,
                        명시된 목적 외에는 사용되지 않습니다.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[#1e3a34]/85">
                        <li>수집항목: 이름, 연락처, 이메일, 사업자등록번호 등</li>
                        <li>보유기간: 회원 탈퇴 후 5년간(전자금융거래법 기준)</li>
                        <li>보관방법: 암호화 저장 및 분리보관</li>
                        <li>제3자 제공: 법령 근거 또는 이용자 동의 시에 한함</li>
                    </ul>
                </section>

                {/* 3️⃣ 암호화 및 접근통제 정책 */}
                <section>
                    <h2 className="flex items-center gap-2 text-2xl font-bold mb-4 text-[#10b981]">
                        <KeyRound size={20} /> 3. 암호화 및 접근통제
                    </h2>
                    <p className="mb-4">
                        내부 인력의 접근 권한은 최소화하며, 중요 데이터는 전자서명 기반의 이중 인증을 통해 접근을 통제합니다.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[#1e3a34]/85">
                        <li>DB 비밀번호 및 API Key는 AES-256으로 암호화</li>
                        <li>운영자 로그 및 접근 기록 실시간 모니터링</li>
                        <li>중요 인프라 접근 시 OTP 기반 보안토큰 사용</li>
                    </ul>
                </section>

                {/* 4️⃣ 이상거래탐지 및 FDS 운영 */}
                <section>
                    <h2 className="flex items-center gap-2 text-2xl font-bold mb-4 text-[#10b981]">
                        <Eye size={20} /> 4. 이상거래탐지(FDS)
                    </h2>
                    <p className="mb-4">
                        AI 기반 이상거래탐지(Fraud Detection System)를 통해 실시간 거래 패턴을 분석하고 위험 거래를 차단합니다.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[#1e3a34]/85">
                        <li>비정상 결제·반복 시도 자동 차단</li>
                        <li>거래 리스크 스코어링 기반 승인/보류 프로세스</li>
                        <li>탐지 결과는 보안담당자 및 운영팀에 실시간 전달</li>
                    </ul>
                </section>

                {/* 5️⃣ 문의 및 신고 */}
                <section>
                    <h2 className="flex items-center gap-2 text-2xl font-bold mb-4 text-[#10b981]">
                        <ShieldCheck size={20} /> 5. 문의 및 신고
                    </h2>
                    <p>
                        개인정보보호 또는 보안 관련 문의는 아래 채널을 통해 접수 가능합니다.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-[#1e3a34]/85">
                        <li>보안 책임자: 보안관리팀장 김도윤</li>
                        <li>이메일: security@sfinpay.co.kr</li>
                        <li>전화: 02-1234-5678 (내선 2)</li>
                    </ul>
                </section>

                <p className="mt-16 text-sm text-[#10b981]/80 text-center">
                    본 보안정책은 2025년 11월 1일에 제정되었습니다.
                    SFIN PAY는 서비스 환경 및 법규 변경에 따라 보안정책을 지속적으로 갱신합니다.
                </p>
            </div>

            {/* ✅ PDF 다운로드 버튼 */}
            <div className="mt-16 text-center">
                <SecurityPolicyPDFGenerator />
            </div>
        </motion.main>
    );
}
