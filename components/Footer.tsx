'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Building2, Phone, Copyright } from 'lucide-react';

const fadeUp = (i = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay: 0.08 * i },
});

export default function Footer(): JSX.Element {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <></>;

    return (
        <footer
            id="footer"
            className="relative py-20 px-6 md:px-16 overflow-hidden
                 bg-gradient-to-b from-[#e8fff6] to-[#f2fffb]"
            aria-label="사이트 하단 정보"
        >
            {/* 🌫️ 민트 오로라 애니메이션 */}
            <motion.div
                className="absolute inset-0 pointer-events-none z-0"
                animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    background:
                        'linear-gradient(120deg, rgba(0,200,155,0.18), rgba(0,230,175,0.18), rgba(0,180,135,0.18))',
                    backgroundSize: '300% 300%',
                    filter: 'blur(120px)',
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* 📞 회사 정보 */}
                <motion.div
                    {...fadeUp(0)}
                    className="grid md:grid-cols-3 gap-10 text-[#334155]/80 text-center md:text-left"
                >
                    <div>
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-[#00b894] font-semibold">
                            <Building2 size={18} aria-hidden />
                            SFIN PAY
                        </div>
                        <p className="text-sm leading-relaxed">
                            서울특별시 강남구 테크로 77 <br /> SFIN Tower 12F
                        </p>
                    </div>

                    <div>
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-[#00b894] font-semibold">
                            <Mail size={18} aria-hidden />
                            문의 메일
                        </div>
                        <p className="text-sm leading-relaxed">
                            support@sfinpay.co.kr
                        </p>
                    </div>

                    <div>
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-[#00b894] font-semibold">
                            <Phone size={18} aria-hidden />
                            대표 번호
                        </div>
                        <p className="text-sm leading-relaxed">02-1234-5678</p>
                    </div>
                </motion.div>

                {/* 🔗 링크 / 약관 */}
                <motion.div
                    {...fadeUp(1)}
                    className="mt-12 flex flex-wrap justify-center md:justify-between text-sm text-[#475569]/70 gap-4"
                >
                    <div className="flex flex-wrap justify-center gap-6">
                        <a
                            href="/terms"
                            className="hover:text-[#00b894] transition"
                            aria-label="이용약관"
                        >
                            이용약관
                        </a>
                        <a
                            href="/privacy"
                            className="hover:text-[#00b894] transition"
                            aria-label="개인정보처리방침"
                        >
                            개인정보처리방침
                        </a>
                        <a
                            href="/security"
                            className="hover:text-[#00b894] transition"
                            aria-label="보안정책"
                        >
                            보안정책
                        </a>
                    </div>
                </motion.div>

                {/* 👣 저작권 */}
                <div className="mt-10 border-t border-[rgba(0,200,155,0.25)] pt-6 text-center text-[#475569]/70 text-sm flex flex-col md:flex-row items-center justify-center gap-2">
                    <Copyright size={14} aria-hidden />
                    <span>2025 SFIN PAY · All Rights Reserved</span>
                </div>
            </div>
        </footer>
    );
}
