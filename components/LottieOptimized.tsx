'use client';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface LottieOptimizedProps {
    /** JSON 파일 경로 (public 기준 또는 import 객체) */
    src?: string;
    data?: object;
    /** 추가 클래스 */
    className?: string;
    /** 보이는 비율 (0~1) */
    threshold?: number;
    /** 반복 여부 */
    loop?: boolean;
    /** viewport 근처에서 미리 로드할 거리(px) */
    preloadMargin?: number;
}

/**
 * 🌿 LottieOptimized (lazy + prefetch)
 * ----------------------------------------------------
 * ✅ SVG 렌더러 기반 (모바일 최적화)
 * ✅ IntersectionObserver + Preload (근처에서 미리 로드)
 * ✅ JSON import or fetch 모두 지원
 * ✅ useMemo로 렌더링 안정화
 */
export default function LottieOptimized({
    src,
    data,
    className,
    threshold = 0.3,
    loop = true,
    preloadMargin = 300,
}: LottieOptimizedProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [inView, setInView] = useState(false);
    const [jsonData, setJsonData] = useState<object | null>(data || null);
    const [prefetched, setPrefetched] = useState(false);

    /* ✅ IntersectionObserver로 가시성 감지 */
    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // 실제 보임 상태
                    setInView(entry.isIntersecting);

                    // 뷰포트 근처 접근 시 prefetch
                    if (!prefetched && entry.boundingClientRect.top < window.innerHeight + preloadMargin) {
                        if (src && !data) {
                            fetch(src)
                                .then((res) => res.json())
                                .then((json) => setJsonData(json))
                                .catch(console.error)
                                .finally(() => setPrefetched(true));
                        }
                    }
                });
            },
            { threshold }
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold, src, data, prefetched, preloadMargin]);

    /* ✅ JSON 데이터 변경 시 Lottie 메모이제이션 */
    const lottieMemo = useMemo(() => {
        if (!jsonData) return null;
        return (
            <Lottie
                animationData={jsonData}
                loop={loop && inView}
                autoplay={inView}
                renderer="svg"
                style={{ width: '100%', height: '100%' }}
            />
        );
    }, [inView, loop, jsonData]);

    return (
        <div ref={ref} className={className}>
            {lottieMemo}
        </div>
    );
}
