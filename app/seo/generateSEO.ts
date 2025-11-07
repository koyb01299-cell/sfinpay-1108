import { seoMap } from "./seoMap";
import { Metadata } from "next";

/**
 * 페이지 이름에 맞춰 자동으로 Metadata를 생성하는 함수
 * @param pageKey seoMap의 key
 */
export function generateSEO(pageKey: string): Metadata {
    const info = seoMap[pageKey] || seoMap["home"];
    return {
        title: info.title,
        description: info.description,
        keywords: info.keywords,
        openGraph: {
            title: info.title,
            description: info.description,
            url: `https://www.sfinpay.co.kr/${pageKey}`,
            images: [
                {
                    url: info.image || "/og/sfinpay_og_mint.png",
                    width: 1200,
                    height: 630,
                    alt: "SFIN PAY",
                },
            ],
        },
    };
}
