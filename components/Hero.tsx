"use client";

import React, { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { MessageSquare, SendHorizonal, X, HelpCircle } from "lucide-react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

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

export default function Hero(): JSX.Element {
    const ref = useRef<HTMLElement | null>(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

    const [visible, setVisible] = useState(false);

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
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section
            ref={ref}
            style={{ opacity, y } as any}
            className="relative flex flex-col lg:flex-row items-center justify-between
                 min-h-[100vh] overflow-hidden"
        /*bg-gradient-to-br from-[#CFFBF6] via-[#A3FFE8] to-white"*/
        >
            {/* 배경 효과 */}
            <div
                className="absolute inset-0 -z-[5]
                   bg-[radial-gradient(ellipse_at_70%_20%,rgba(63,255,222,0.08),transparent_10%),radial-gradient(ellipse_at_20%_80%,rgba(50,245,210,0.08),transparent_10%)]"
            />

            {/* 좌측 텍스트 영역 */}
            <div className="z-10 w-full lg:w-1/2 px-10 md:px-16 lg:px-24 py-24 lg:py-0 text-center lg:text-left">
                <motion.p
                    initial={{ opacity: 1, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0b3c34]"
                >
                    {/* 상단 서브 타이틀 */}
                    <span className="block mb-3 text-[#00997A] text-base md:text-lg font-semibold">
                        신뢰로 연결되는 결제 경험
                    </span>

                    {/* 메인 타이틀 */}
                    <h1
                        className="block
                       text-transparent bg-clip-text
                       bg-gradient-to-r from-[#00B894] via-[#00997A] to-[#006F4F]"
                    >
                        비즈니스를 성장시키는
                        <br />
                        통합 결제 플랫폼
                    </h1>
                </motion.p>

                {/* 본문 설명 */}
                <motion.p
                    initial={{ opacity: 1, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mt-6 text-base md:text-lg text-[#045a4d]/90 leading-relaxed max-w-md mx-auto lg:mx-0"
                >
                    SFIN PAY는 <strong>보안·안정성·확장성</strong>을 기반으로
                    온라인과 오프라인을 아우르는 결제 환경을 제공합니다.
                    <br />
                    모든 거래를 투명하고 신뢰 있게.
                </motion.p>

                {/* CTA 버튼 */}
                <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <Link href="/inquiry/contract">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-9 py-4 rounded-xl font-semibold shadow-lg transition
                         bg-gradient-to-r from-[#10b981] to-[#00b894]
                         hover:from-[#00b894] hover:to-[#00a884]
                         text-white text-base md:text-lg"
                        >
                            무료로 시작하기 →
                        </motion.button>
                    </Link>

                    <Link href="/">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={scrollToFeatures}
                            className="px-9 py-4 rounded-xl font-medium transition
                       border border-[#00d8b8]/40 hover:border-[#00b8a0]
                       text-[#0b3c34] text-base md:text-lg"
                        >
                            기능 보기
                        </motion.button>
                    </Link>
                </div>

                {/* 모바일 Lottie
                <div className="lg:hidden mt-14 flex justify-center">
                    {visible && (
                        <LottieLoader
                            src="/lottie/payment_success.json"
                            className="w-4/5 max-w-[320px]"
                        />
                    )}
                </div>
                */}
            </div>

            {/* 오른쪽 시각화 영역 (추후 구성용) */}
            <div className="relative hidden lg:flex w-1/2 justify-center items-center">
                <div className="relative w-[540px] h-[420px] flex items-center justify-center">
                    {/* Visualization 영역 */}
                </div>
            </div>
        </section>
    );
}
