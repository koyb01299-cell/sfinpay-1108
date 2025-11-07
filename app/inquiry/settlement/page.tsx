// app/inquiry/settlement/page.tsx
import type { Metadata } from "next";
import SettlementInquiryClient from "./SettlementInquiryClient";

export const metadata: Metadata = {
    title: "정산 문의 | SFIN PAY",
    description:
        "입금 지연, 정산 내역, 세금계산서, 정산 정책 관련 문의를 남겨주세요. 담당 부서가 신속히 확인 후 안내드립니다.",
    openGraph: {
        title: "정산 문의 | SFIN PAY",
        description:
            "입금 지연, 정산 내역, 세금계산서, 정산 정책 관련 문의를 남겨주세요.",
        type: "website",
        url: "https://www.sfinpay.co.kr/inquiry/settlement",
    },
};

export default function Page() {
    return <SettlementInquiryClient />;
}
