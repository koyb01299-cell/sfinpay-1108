'use client';

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// lottie-react를 동적 import 해서 초기 번들 부담 감소 + SSR 문제 방지
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface LottieLoaderProps {
    src: string;   // public 경로의 lottie json
    size?: number; // width/height (기본 140)
}

export default function LottieLoader({ src, size = 140 }: LottieLoaderProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);       // 화면에 들어왔는지
    const [data, setData] = useState<object | null>(null);

    // 1️⃣ IntersectionObserver로 "보일 때만" 활성화
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect(); // 한 번만 로드 (원하면 제거)
                }
            },
            { threshold: 0.1 } // 요소의 25% 보이면 로드 시작
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // 2️⃣ visible 될 때만 JSON fetch
    useEffect(() => {
        if (!visible) return;

        let cancelled = false;

        fetch(src)
            .then((res) => res.json())
            .then((json) => {
                if (!cancelled) setData(json);
            })
            .catch(console.error);

        return () => {
            cancelled = true;
        };
    }, [src, visible]);

    return (
        <div
            ref={containerRef}
            style={{ width: size, height: size }}
            className="flex items-center justify-center select-none pointer-events-none"
        >
            {data && (
                <Lottie
                    animationData={data}
                    loop
                    autoplay
                    style={{ width: size, height: size }}
                />
            )}
            {/* data 로드 전에는 빈 박스만 유지해서 레이아웃 튐 방지 */}
        </div>
    );
}
