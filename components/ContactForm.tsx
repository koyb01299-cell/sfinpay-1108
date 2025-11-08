'use client';

import React, { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    Building2,
    MessageSquare,
    Send,
    CheckCircle2,
    ShieldCheck,
} from 'lucide-react';
import emailjs from '@emailjs/browser';

/* ────────────────────────────────────────────────
   📩 ContactFormCRM.tsx — TSX 완전 호환 버전
────────────────────────────────────────────────── */

interface ContactFormCRMProps {
    /** optional: 기본 메시지나 초기 프리필 옵션 */
    defaultType?: string;
}

interface ContactFormState {
    company: string;
    email: string;
    type: string;
    message: string;
}

const ContactFormCRM: React.FC<ContactFormCRMProps> = ({ defaultType = '' }) => {
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState<ContactFormState>({
        company: '',
        email: '',
        type: defaultType,
        message: '',
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '';

    async function getRecaptchaToken(): Promise<string> {
        if (!(window as any).grecaptcha) return 'test-token';
        return await (window as any).grecaptcha.execute(RECAPTCHA_KEY, {
            action: 'contact_form',
        });
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSending(true);
        try {
            const token = await getRecaptchaToken();

            // ✅ EmailJS 발송
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
                { ...form, token },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''
            );

            // ✅ Notion CRM API 저장
            await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            setSent(true);
            setForm({ company: '', email: '', type: defaultType, message: '' });
        } catch (err) {
            console.error(err);
            alert('전송 실패 — 잠시 후 다시 시도해주세요.');
        } finally {
            setSending(false);
        }
    };

    return (
        <section className="relative py-28 px-6 md:px-16 bg-mint-gradient overflow-hidden">
            {/* reCAPTCHA v3 */}
            <script
                src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_KEY}`}
                async
                defer
            ></script>

            <motion.form
                onSubmit={handleSubmit}
                className="max-w-3xl mx-auto rounded-2xl border border-brand-mint/30 bg-white/90 backdrop-blur-sm p-8 md:p-10 space-y-6 shadow-[0_8px_25px_rgba(16,185,129,0.10)]"
            >
                <h2 className="text-3xl font-extrabold text-brand-mintDark text-center mb-6">
                    문의 접수
                </h2>

                {/* 회사명 */}
                <div>
                    <label className="block text-sm font-medium text-[#0b2723]/80 mb-2 flex items-center gap-2">
                        <Building2 size={16} className="text-brand-mintDark" />
                        회사명 / 상호명
                    </label>
                    <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        required
                        placeholder="예: 주식회사 에스핀"
                        className="w-full rounded-xl bg-brand-mintLight/20 border border-brand-mint/40 text-[#0b2723] px-4 py-3 focus:border-brand-mintDark focus:ring-2 focus:ring-brand-mint/40 outline-none transition"
                    />
                </div>

                {/* 이메일 */}
                <div>
                    <label className="block text-sm font-medium text-[#0b2723]/80 mb-2 flex items-center gap-2">
                        <Mail size={16} className="text-brand-mintDark" /> 이메일
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.co.kr"
                        className="w-full rounded-xl bg-brand-mintLight/20 border border-brand-mint/40 text-[#0b2723] px-4 py-3 focus:border-brand-mintDark focus:ring-2 focus:ring-brand-mint/40 outline-none transition"
                    />
                </div>

                {/* 문의 유형 */}
                <div>
                    <label className="block text-sm font-medium text-[#0b2723]/80 mb-2 flex items-center gap-2">
                        <MessageSquare size={16} className="text-brand-mintDark" /> 문의 유형
                    </label>
                    <select
                        name="type"
                        value={form.type}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl bg-brand-mintLight/20 border border-brand-mint/40 text-[#0b2723] px-4 py-3 focus:border-brand-mintDark focus:ring-2 focus:ring-brand-mint/40 outline-none transition"
                    >
                        <option value="">선택하세요</option>
                        <option>정산 관련 문의</option>
                        <option>D+0 / D+1 정산 문의</option>
                        <option>유동성 상품 문의</option>
                        <option>가맹점 계약 / 수수료 협의</option>
                        <option>기술 연동 / 시스템 문의</option>
                        <option>기타 일반 문의</option>
                    </select>
                </div>

                {/* 문의 내용 */}
                <div>
                    <label className="block text-sm font-medium text-[#0b2723]/80 mb-2">
                        문의 내용
                    </label>
                    <textarea
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        required
                        placeholder="문의 내용을 입력해주세요."
                        className="w-full rounded-xl bg-brand-mintLight/20 border border-brand-mint/40 text-[#0b2723] px-4 py-3 focus:border-brand-mintDark focus:ring-2 focus:ring-brand-mint/40 outline-none resize-none transition"
                    />
                </div>

                {/* 전송 버튼 */}
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    disabled={sending}
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-mintDark to-emerald-400 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold shadow-[0_8px_25px_rgba(16,185,129,0.25)] t1 disabled:opacity-60"
                >
                    {sending ? (
                        '전송 중...'
                    ) : sent ? (
                        <>
                            <CheckCircle2 size={18} /> 접수 완료
                        </>
                    ) : (
                        <>
                            <Send size={18} /> 문의 보내기
                        </>
                    )}
                </motion.button>

                <div className="flex justify-center items-center gap-2 text-[#0b2723]/50 text-xs mt-4">
                    <ShieldCheck size={14} /> Google reCAPTCHA v3 보호 + Notion CRM 자동 기록
                </div>
            </motion.form>
        </section>
    );
};

export default ContactFormCRM;
