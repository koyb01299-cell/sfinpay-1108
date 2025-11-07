import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  titleTemplate: "%s | SFIN PAY",
  defaultTitle: "SFIN PAY | D+0·D+1 정산 결제 인프라",
  description:
    "SFIN PAY는 D+0·D+1 정산과 실시간 유동성 관리, 투명한 수수료 체계를 제공하는 민트톤 기반 결제 인프라 플랫폼입니다.",
  canonical: "https://www.sfinpay.co.kr",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.sfinpay.co.kr",
    siteName: "SFIN PAY",
    title: "SFIN PAY | D+0·D+1 정산 결제 인프라",
    description:
      "D+0·D+1 정산과 실시간 유동성 관리, 투명한 결제 인프라 — SFIN PAY.",
    images: [
      {
        url: "https://www.sfinpay.co.kr/og/sfinpay_og_mint.png",
        width: 1200,
        height: 630,
        alt: "SFIN PAY 민트톤 Aurora 이미지",
      },
    ],
  },
  twitter: {
    handle: "@sfinpay",
    site: "@sfinpay",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    { name: "author", content: "SFIN PAY" },
    { name: "theme-color", content: "#a7f3d0" },
    { name: "robots", content: "index, follow" },
    { name: "google-site-verification", content: "YOUR_GOOGLE_VERIFY_TOKEN" },
    { name: "naver-site-verification", content: "YOUR_NAVER_VERIFY_TOKEN" },
  ],
};

export default config;
