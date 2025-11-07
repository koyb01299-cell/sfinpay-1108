"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * 🌌 AuroraBackground (민트 테마 버전)
 * 사이트 전역 배경에 사용되는 반투명 그라데이션 오로라 효과
 * - Tailwind + Framer Motion 기반
 * - 퍼포먼스 최적화: fixed + blur + blend-lighten
 */
export default function AuroraBackground(): JSX.Element {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
            {/* 🟢 메인 Aurora Layer */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#a7f3d0] via-[#99f6e4] to-[#ecfeff] blur-[100px] opacity-80 mix-blend-lighten"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {/* 💠 추가 반사광 Layer */}
            <motion.div
                className="absolute -top-40 left-1/2 w-[120vw] h-[120vh] bg-gradient-radial from-[#b2f5ea]/70 via-transparent to-transparent blur-[180px] mix-blend-screen"
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
            />

            {/* 💎 subtle light shimmer */}
            <motion.div
                className="absolute bottom-0 right-0 w-[60vw] h-[60vh] bg-gradient-to-tr from-[#6ee7b7]/40 via-transparent to-transparent blur-[120px] mix-blend-overlay"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 0.6, x: 0 }}
                transition={{ duration: 1.4, ease: "easeOut", delay: 0.6 }}
            />
        </div>
    );
}
