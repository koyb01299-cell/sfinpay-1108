// app/inquiry/general/page.tsx
import type { Metadata } from "next";
import GeneralInquiryClient from "./GeneralInquiryClient";

export const metadata: Metadata = {
    title: "일반 문의 | SFIN PAY",
    description:
        "광고, 제휴, 기타 일반적인 문의사항을 남겨주세요. 담당자가 확인 후 연락드립니다.",
    openGraph: {
        title: "일반 문의 | SFIN PAY",
        description:
            "광고, 제휴, 기타 일반적인 문의사항을 남겨주세요. 담당자가 확인 후 연락드립니다.",
        type: "website",
        url: "https://www.sfinpay.co.kr/inquiry/general",
    },
};

export default function Page() {
    return <GeneralInquiryClient />;
}
