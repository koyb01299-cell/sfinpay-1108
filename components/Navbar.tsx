'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Menu,
    X,
    ChevronDown,
    ChevronUp,
    ArrowRight,
    CreditCard,
    QrCode,
    MonitorSmartphone,
    Building2,
    ShieldCheck,
    Server,
    Users,
    Wrench,
    ShoppingBag,
    Hospital,
    Building,
    FileUser
} from 'lucide-react';

interface SubMenuItem {
    label: string;
    desc?: string;
    link: string;
    icon?: JSX.Element;
}

interface MenuItem {
    label: string;
    link?: string;
    submenu?: SubMenuItem[];
    categoryDesc?: string;
}

export default function Navbar(): JSX.Element {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
    const [flash, setFlash] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
    const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
    const router = useRouter();

    /** ✅ 스크롤 감지 (Navbar 숨김/표시) */
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

    /** ✅ 메뉴 항목 정의 */
    const menuItems: MenuItem[] = [
        {
            label: '결제 방식',
            categoryDesc: '모든 결제 방식에 최적화된 솔루션',
            submenu: [
                {
                    label: '온라인 결제',
                    desc: '쇼핑몰·예약·플랫폼용 통합 결제 환경',
                    link: '/online-pay',
                    icon: <CreditCard size={18} />,
                },
                {
                    label: '오프라인·QR 결제',
                    desc: 'POS·QR·단말 결제까지 한 번에',
                    link: '/qr-pay',
                    icon: <QrCode size={18} />,
                },
                {
                    label: '수기 결제(MOTO)',
                    desc: '전화·원격 주문용 안전한 결제 방식',
                    link: '/moto',
                    icon: <ShieldCheck size={18} />,
                },
                {
                    label: 'POS / MPOS 단말기',
                    desc: '매장별 단말기·MPOS 관리 시스템',
                    link: '/device',
                    icon: <MonitorSmartphone size={18} />,
                },
            ],
        },
        {
            label: '업종별 추천',
            categoryDesc: '비즈니스 구조에 맞춘 결제 솔루션',
            submenu: [
                {
                    label: '쇼핑·판매·유통업',
                    desc: 'D+0 정산, 정기결제, 간편결제',
                    link: '/distribution',
                    icon: <ShoppingBag size={18} />,
                },
                {
                    label: '서비스·교육업',
                    desc: '자동청구, 예약결제, 스케줄정산',
                    link: '/service',
                    icon: <Users size={18} />,
                },
                {
                    label: '외식·프랜차이즈업',
                    desc: 'POS연동, 매출리포트, 본사정산',
                    link: '/fb',
                    icon: <Building2 size={18} />,
                },
                {
                    label: '숙박·여행·레저업',
                    desc: '부분환불, 예약금관리, 자동처리',
                    link: '/hospitality',
                    icon: <ShieldCheck size={18} />,
                },
                {
                    label: '콘텐츠·엔터테인먼트',
                    desc: '정기구독, 글로벌결제, 저작권정산',
                    link: '/entertainment',
                    icon: <Server size={18} />,
                },
                {
                    label: '병원·의료·헬스케어',
                    desc: '정기구독, 환율자동처리, 저작권정산',
                    link: '/healthcare',
                    icon: <Hospital size={18} />,
                },
                {
                    label: '기업·광고·임대 서비스',
                    desc: '세금계산서, 대량정산, B2B결제',
                    link: '/b2b',
                    icon: <Building size={18} />,
                },
                {
                    label: '개인·프리랜서',
                    desc: '결제링크, 비사업자결제, 1인창작자',
                    link: '/personal',
                    icon: <FileUser size={18} />,
                },
            ],
        },
        {
            label: '기술 지원',
            link: '/tech-support',
            categoryDesc: 'API 연동 / 개발자 문서 / 테스트 샌드박스',
        },
        {
            label: '고객 지원',
            link: '/support',
            categoryDesc: '1:1 문의 / 장애 대응 / 공지사항',
        },
        {
            label: '회사 소개',
            link: '/company',
            categoryDesc: 'SFIN PAY의 비전과 인증, 연혁',
        },
    ];

    /** ✅ 로고 클릭 */
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

    /** ✅ Hover Delay (대형 메뉴 안정화) */
    const handleMouseEnter = (label: string) => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        setHoveredMenu(label);
    };
    const handleMouseLeave = () => {
        hoverTimeout.current = setTimeout(() => setHoveredMenu(null), 180);
    };

    /** ✅ 드롭다운 애니메이션 정의 */
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

            {/* 🧭 NAVBAR */}
            <motion.nav
                initial={{ y: 0 }}
                animate={{ y: showNav ? 0 : -100 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className={`fixed top-0 left-0 w-full z-50 t1 duration-300 ${scrolled
                    ? 'bg-white/85 backdrop-blur-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
                    : 'bg-transparent'
                    }`}
            >
                <div className="flex justify-between items-center w-full px-6 md:px-16 py-4">
                    {/* 🔵 LOGO */}
                    <button
                        onClick={handleLogoClick}
                        className="flex items-center gap-2 select-none "
                        style={{ WebkitTapHighlightColor: 'transparent' }}
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
                        <span className="text-2xl font-extrabold text-[#00b894] tracking-tight">SFIN PAY</span>
                    </button>

                    {/* 💻 데스크탑 메뉴 */}
                    <div className="hidden md:flex items-center gap-8">
                        {menuItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="relative group"
                                onMouseEnter={() => handleMouseEnter(item.label)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {item.submenu ? (
                                    <>
                                        <button className="flex items-center gap-1 text-[#0f172a] font-medium hover:text-[#00b894] transition">
                                            {item.label}
                                            <ChevronDown size={16} className="ml-1" />
                                        </button>

                                        <AnimatePresence>
                                            {hoveredMenu === item.label && (
                                                <motion.div
                                                    key="mega-menu"
                                                    variants={dropdownVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className="absolute left-0 top-10 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-2xl border border-[#00b894]/20 w-[600px] p-6 grid grid-cols-2 gap-4"
                                                >
                                                    {item.submenu.map((sub, i) => (
                                                        <Link
                                                            key={i}
                                                            href={sub.link}
                                                            className="flex items-start gap-3 rounded-lg p-3 hover:bg-[#f6fffb] t1"
                                                        >
                                                            <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-[#00b894]/10 text-[#00b894]">
                                                                {sub.icon}
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <span className="text-[15px] font-semibold text-[#0f172a]">
                                                                    {sub.label}
                                                                </span>
                                                                <span className="text-xs text-[#4b5563]/80">
                                                                    {sub.desc}
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    ))}

                                                    {/* 우측 하단 브랜드 설명 */}
                                                    {item.categoryDesc && (
                                                        <div className="col-span-2 mt-4 border-t border-[#E2E8F0] pt-3 text-sm text-[#334155]/80 flex items-center gap-2">
                                                            <ShieldCheck size={16} className="text-[#00b894]" />
                                                            {item.categoryDesc}
                                                        </div>
                                                    )}
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

                        {/* 🟢 상단 우측 버튼 */}
                        <div className="flex items-center gap-3 ml-4">
                            <Link
                                href="/inquiry/merchant"
                                className="px-4 py-2 text-sm font-semibold rounded-lg border border-[#00b894] text-[#00b894] hover:bg-[#00b894] hover:text-white t1"
                            >
                                가맹 문의
                            </Link>
                            <Link
                                href="/login"
                                className="px-4 py-2 text-sm font-semibold rounded-lg bg-[#00b894] text-white hover:bg-[#00a884] t1"
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

            {/* 📱 모바일 메뉴 */}
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
                        {/* 🧭 상단 헤더 (로고 + 닫기버튼) */}
                        <div className="flex justify-between items-center px-6 py-5 border-b border-[#E2E8F0]">
                            <span className="text-xl font-extrabold text-[#00b894] select-none">SFIN PAY</span>
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="text-[#0f172a] hover:text-[#00b894] transition"
                                aria-label="Close menu"
                            >
                                <X size={26} />
                            </button>
                        </div>

                        {/* 메뉴 리스트 */}
                        <div className="overflow-y-auto px-6 py-8 space-y-6 flex-1">
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
                                                                <div className="text-xs text-[#64748b]/70">
                                                                    {sub.desc}
                                                                </div>
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
                                            <div className="text-xs text-[#64748b]/70">
                                                {item.categoryDesc}
                                            </div>
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
                                className="w-full text-center py-3 rounded-lg border border-[#00b894] text-[#00b894] font-semibold hover:bg-[#00b894] hover:text-white t1"
                            >
                                가맹 문의
                            </Link>
                            <Link
                                href="/login"
                                onClick={() => setMenuOpen(false)}
                                className="w-full text-center py-3 rounded-lg bg-[#00b894] text-white font-semibold hover:bg-[#00a884] t1"
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
