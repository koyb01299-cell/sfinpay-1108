// app/inquiry/liquidity/page.tsx
import type { Metadata } from "next";
import LiquidityInquiryClient from "./LiquidityInquiryClient";

export const metadata: Metadata = {
    title: "유동성 / 단기자금 문의 | SFIN PAY",
    description:
        "매출 기반 단기자금 지원, 정산 예정금 활용형 유동성 상품 관련 문의를 남겨주세요.",
    openGraph: {
        title: "유동성 / 단기자금 문의 | SFIN PAY",
        description:
            "매출 기반 단기자금 지원, 정산 예정금 활용형 유동성 상품 관련 문의를 남겨주세요.",
        type: "website",
        url: "https://www.sfinpay.co.kr/inquiry/liquidity",
    },
};

export default function Page() {
    return <LiquidityInquiryClient />;
}
