// app/inquiry/contract/page.tsx
import type { Metadata } from "next";
import ContractInquiryClient from "./ContractInquiryClient";

export const metadata: Metadata = {
    title: "가맹 계약 / 수수료 협의 문의 | SFIN PAY",
    description:
        "SFIN PAY 신규 가맹점 등록, 수수료 조건, 서비스 이용 계약 관련 문의를 남겨주세요.",
    openGraph: {
        title: "가맹 계약 / 수수료 협의 문의 | SFIN PAY",
        description:
            "SFIN PAY 신규 가맹점 등록, 수수료 조건, 서비스 이용 계약 관련 문의를 남겨주세요.",
        type: "website",
        url: "https://www.sfinpay.co.kr/inquiry/contract",
        images: [{ url: "/og/contract-mint.png" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "가맹 계약 / 수수료 협의 문의 | SFIN PAY",
        description:
            "SFIN PAY 신규 가맹점 등록, 수수료 조건, 서비스 이용 계약 관련 문의를 남겨주세요.",
        images: ["/og/contract-mint.png"],
    },
    alternates: {
        canonical: "https://www.sfinpay.co.kr/inquiry/contract",
    },
};

export default function Page() {
    return <ContractInquiryClient />;
}
