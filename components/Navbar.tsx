'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

interface SubMenuItem {
    label: string;
    link: string;
}

interface MenuItem {
    label: string;
    link?: string;
    submenu?: SubMenuItem[];
}

export default function Navbar(): JSX.Element {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
    const [flash, setFlash] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const router = useRouter();

    /** 스크롤 감지 */
    useEffect(() => {
        const controlNavbar = () => {
            const currentY = window.scrollY;
            setScrolled(currentY > 10);
            if (currentY > lastScrollY && currentY > 100) setShowNav(false);
            else setShowNav(true);
            setLastScrollY(currentY);
        };
        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    /** 메뉴 정의 (Features 반영) */
    const menuItems: MenuItem[] = [
        {
            label: '결제 방식',
            submenu: [
                { label: '온라인 결제', link: '/online-pay' },
                { label: '오프라인·QR 결제', link: '/qr-pay' },
                { label: '수기 결제(MOTO)', link: '/payments/moto' },
                { label: 'POS / MPOS 단말기', link: '/device' },
            ],
        },
        {
            label: '업종별 추천',
            submenu: [
                { label: '커머스 · 리테일', link: '/distribution' },
                { label: '서비스 · 라이프케어', link: '/service' },
                { label: '음식 · 프랜차이즈', link: '/fb' },
                { label: '숙박 · 여행 · 레저', link: '/industries/hospitality' },
                { label: '엔터테인먼트 · 콘텐츠', link: '/industries/entertainment' },
                { label: '금융 · B2B 서비스', link: '/b2b' },
            ],
        },
        { label: '기술 지원', link: '/tech-support' },
        { label: '고객 지원', link: '/support' },
        { label: '회사 소개', link: '/company' },
    ];

    /** 로고 클릭 */
    const handleLogoClick = (): void => {
        const isTop = window.scrollY <= 10;
        if (window.location.pathname !== '/') {
            router.replace('/');
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 80);
            return;
        }
        if (isTop) {
            setFlash(true);
            setTimeout(() => setFlash(false), 350);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    /** 드롭다운 애니메이션 */
    const dropdownVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
        exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
    };

    return (
        <>
            {/* ⚡ 새로고침 플래시 효과 */}
            <AnimatePresence>
                {flash && (
                    <motion.div
                        key="flash"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="fixed inset-0 bg-white z-[9999] pointer-events-none"
                    />
                )}
            </AnimatePresence>

            {/* 🧭 네비게이션 */}
            <motion.nav
                initial={{ y: 0 }}
                animate={{ y: showNav ? 0 : -100 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                        ? 'bg-white/80 backdrop-blur-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
                        : 'bg-transparent'
                    }`}
            >
                <div className="flex justify-between items-center w-full px-6 md:px-16 py-4">
                    {/* 🔵 로고 */}
                    <button
                        onClick={handleLogoClick}
                        type="button"
                        tabIndex={-1}
                        className="flex items-center gap-2 select-none focus:outline-none active:outline-none ring-0 border-0 bg-transparent p-0 m-0"
                        style={{
                            WebkitTapHighlightColor: 'transparent',
                            appearance: 'none',
                            outline: 'none',
                            boxShadow: 'none',
                            background: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" className="w-10 h-10">
                            <defs>
                                <linearGradient id="grad-mint" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#00c89b" />
                                    <stop offset="50%" stopColor="#00b894" />
                                    <stop offset="100%" stopColor="#00a884" />
                                </linearGradient>
                            </defs>
                            <circle cx="60" cy="60" r="50" stroke="url(#grad-mint)" strokeWidth="5" fill="none" />
                            <circle cx="60" cy="60" r="8" fill="url(#grad-mint)" />
                        </svg>
                        <span className="text-2xl font-extrabold text-[#00b894] tracking-tight">
                            SFIN PAY
                        </span>
                    </button>

                    {/* 💻 데스크탑 메뉴 */}
                    <div className="hidden md:flex items-center gap-8">
                        {menuItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="relative group"
                                onMouseEnter={() => setActiveMenu(item.label)}
                                onMouseLeave={() => setActiveMenu(null)}
                            >
                                {item.submenu ? (
                                    <>
                                        <button className="flex items-center gap-1 text-[#0f172a] font-medium hover:text-[#00b894] transition bg-transparent border-none outline-none focus:ring-0">
                                            {item.label}
                                            <ChevronDown size={16} className="ml-1" />
                                        </button>

                                        <AnimatePresence>
                                            {activeMenu === item.label && (
                                                <motion.div
                                                    key="dropdown"
                                                    variants={dropdownVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className="absolute left-0 top-10 bg-white shadow-xl rounded-xl border border-[rgba(0,200,155,0.25)] p-3 w-72"
                                                >
                                                    {item.submenu.map((sub, i) => (
                                                        <Link
                                                            key={i}
                                                            href={sub.link}
                                                            className="block px-4 py-2 rounded-lg text-sm text-[#334155] hover:bg-[rgba(0,200,155,0.05)] hover:text-[#00b894] transition"
                                                        >
                                                            {sub.label}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </>
                                ) : (
                                    <Link
                                        href={item.link ?? '/'}
                                        className="text-[#0f172a] font-medium hover:text-[#00b894] transition"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}

                        {/* 🟢 우상단 버튼 */}
                        <div className="flex items-center gap-3 ml-4">
                            <Link
                                href="/inquiry/merchant"
                                className="px-4 py-2 text-sm font-semibold rounded-lg border border-[#00b894] text-[#00b894] hover:bg-[#00b894] hover:text-white transition-all"
                            >
                                가맹 문의
                            </Link>
                            <Link
                                href="/login"
                                className="px-4 py-2 text-sm font-semibold rounded-lg bg-[#00b894] text-white hover:bg-[#00a884] transition-all"
                            >
                                파트너 로그인
                            </Link>
                        </div>
                    </div>

                    {/* 📱 모바일 메뉴 버튼 */}
                    <button
                        className="md:hidden text-[#0f172a]"
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                        {menuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </motion.nav>

            {/* 📱 모바일 메뉴 Drawer */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed top-0 right-0 w-[85%] h-screen bg-white z-[999] shadow-2xl flex flex-col justify-between"
                    >
                        <div className="overflow-y-auto px-6 py-8 space-y-6">
                            {menuItems.map((item, idx) => (
                                <div key={idx}>
                                    {item.submenu ? (
                                        <>
                                            <button
                                                onClick={() =>
                                                    setActiveMobileMenu(
                                                        activeMobileMenu === item.label ? null : item.label
                                                    )
                                                }
                                                className="w-full flex justify-between items-center text-left text-lg font-semibold text-[#0f172a] py-2"
                                            >
                                                {item.label}
                                                {activeMobileMenu === item.label ? (
                                                    <ChevronUp size={18} />
                                                ) : (
                                                    <ChevronDown size={18} />
                                                )}
                                            </button>

                                            <AnimatePresence>
                                                {activeMobileMenu === item.label && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.25 }}
                                                        className="pl-3 border-l border-[#00b894]/30 mt-2 space-y-2"
                                                    >
                                                        {item.submenu.map((sub) => (
                                                            <Link
                                                                key={sub.link}
                                                                href={sub.link}
                                                                onClick={() => setMenuOpen(false)}
                                                                className="block text-[#334155] py-2 text-sm hover:text-[#00b894]"
                                                            >
                                                                {sub.label}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <Link
                                            href={item.link ?? '/'}
                                            onClick={() => setMenuOpen(false)}
                                            className="block text-lg font-semibold text-[#0f172a] py-2 hover:text-[#00b894]"
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* 하단 버튼 */}
                        <div className="border-t border-[#E2E8F0] p-6 flex flex-col gap-3">
                            <Link
                                href="/inquiry/merchant"
                                onClick={() => setMenuOpen(false)}
                                className="w-full text-center py-3 rounded-lg border border-[#00b894] text-[#00b894] font-semibold hover:bg-[#00b894] hover:text-white transition-all"
                            >
                                가맹 문의
                            </Link>
                            <Link
                                href="/login"
                                onClick={() => setMenuOpen(false)}
                                className="w-full text-center py-3 rounded-lg bg-[#00b894] text-white font-semibold hover:bg-[#00a884] transition-all"
                            >
                                파트너 로그인
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
