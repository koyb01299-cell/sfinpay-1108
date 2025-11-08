"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
    const pathname = usePathname();
    const isFirstRender = useRef(true);

    // 브라우저의 자동 스크롤 복원 끄기 (뒤로가기/새로고침 위치 복원 방지)
    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
    }, []);

    useEffect(() => {
        // ✅ 첫 진입 (새로고침 포함)
        if (isFirstRender.current) {
            isFirstRender.current = false;

            // 이미 유저가 스크롤을 내려버렸으면 더 이상 강제로 올리지 않음
            // (지연 실행으로 인한 "끌려 올라감" 방지)
            if (window.scrollY < 5) {
                window.scrollTo(0, 0);
            }
            return;
        }

        // ✅ 그 이후엔 "라우트 변경 시에만" 맨 위로
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return null;
}
