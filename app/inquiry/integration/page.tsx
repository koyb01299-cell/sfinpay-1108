// app/inquiry/integration/page.tsx
import type { Metadata } from "next";
import IntegrationInquiryClient from "./IntegrationInquiryClient";

export const metadata: Metadata = {
    title: "기술 연동 문의 | SFIN PAY",
    description:
        "API, SDK, 결제 모듈 연동 및 기술 지원 문의를 남겨주세요. 담당 개발자가 직접 답변드립니다.",
    openGraph: {
        title: "기술 연동 문의 | SFIN PAY",
        description:
            "API, SDK, 결제 모듈 연동 및 기술 지원 문의를 남겨주세요. 담당 개발자가 직접 답변드립니다.",
        type: "website",
        url: "https://www.sfinpay.co.kr/inquiry/integration",
    },
};

export default function Page() {
    return <IntegrationInquiryClient />;
}
