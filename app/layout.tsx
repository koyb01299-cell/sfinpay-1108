import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuroraBackground from "../components/AuroraBackground";
import ScrollToTop from "../components/ScrollToTop";
import SeoProvider from "./providers/SeoProvider";

/**
 * 🌐 RootLayout — SFIN PAY 전역 레이아웃
 * ----------------------------------------------------
 * 구성요소:
 *  - AuroraBackground (민트톤 오로라 배경)
 *  - Navbar / Footer (전역 공용 UI)
 *  - ScrollToTop (UX 유틸)
 *  - SeoProvider (next-seo 클라이언트 SEO)
 * ----------------------------------------------------
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* ✅ Schema.org 구조화 데이터 (Organization / WebSite / Breadcrumbs) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SFIN PAY",
              url: "https://www.sfinpay.co.kr",
              logo: "https://www.sfinpay.co.kr/og/sfinpay_logo_mint.png",
              sameAs: [
                "https://www.instagram.com/sfinpay",
                "https://www.linkedin.com/company/sfinpay",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "SFIN PAY",
              url: "https://www.sfinpay.co.kr",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.sfinpay.co.kr/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>

      <body
        className="
          relative min-h-screen overflow-x-hidden
          text-[#0b2723]
          font-['Pretendard','Inter','sans-serif']
          bg-gradient-to-br from-[#ecfeff] via-[#f0fdfa] to-white
          antialiased transition-colors duration-700
        "
      >
        {/* ✅ SEO 컴포넌트는 클라이언트 전용이므로 body 안에서 렌더링 */}
        <SeoProvider />

        {/* 🌈 전역 Aurora Background */}
        <AuroraBackground />

        {/* 🧭 전역 네비게이션 */}
        <Navbar />

        {/* ⬆️ 스크롤 복귀 */}
        <ScrollToTop />

        {/* 📄 페이지별 콘텐츠 */}
        <main className="relative z-10">{children}</main>

        {/* ⚓ 전역 푸터 */}
        <Footer />

        {/* 🧩 BreadcrumbList 구조화 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "홈",
                  item: "https://www.sfinpay.co.kr",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "서비스",
                  item: "https://www.sfinpay.co.kr/features",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
