import { PageSEO } from "./types";

export const seoMap: Record<string, PageSEO> = {
    home: {
        title: "D+0·D+1 정산 결제 인프라",
        description:
            "SFIN PAY는 D+0·D+1 정산, 실시간 유동성 관리, 투명한 수수료 체계를 갖춘 결제 인프라 플랫폼입니다.",
        keywords: ["SFIN PAY", "결제대행", "D+0", "D+1", "유동성", "PG사"],
    },
    b2b: {
        title: "기업용 정산·결제 시스템",
        description:
            "도매·유통·B2B 거래 환경에 최적화된 D+0·D+1 정산 결제 인프라. 대규모 정산도 안정적으로 처리합니다.",
        keywords: ["B2B 결제", "기업 정산", "PG", "SFIN PAY"],
    },
    service: {
        title: "서비스·O2O 결제 솔루션",
        description:
            "미용·헬스·렌탈·교육 등 서비스 업종에 맞춘 D+0·D+1 정산 시스템. 고객경험 중심의 결제 흐름 제공.",
        keywords: ["서비스결제", "O2O", "정산", "SFIN PAY"],
    },
    fb: {
        title: "F&B 전용 결제 솔루션",
        description:
            "카페·레스토랑·배달업체에 최적화된 결제 인프라. D+0 실시간 정산과 POS 연동 지원.",
        keywords: ["F&B", "음식점결제", "POS연동", "빠른정산"],
    },
    distribution: {
        title: "유통·리테일 결제 시스템",
        description:
            "가맹점 다수 관리, 매출 분석, 실시간 정산 기능을 포함한 유통 전용 결제 플랫폼.",
    },
    "tech-support": {
        title: "기술지원 센터",
        description:
            "API 연동, 결제 모듈 설정, 가맹점 시스템 통합까지 — 개발자 친화적 기술지원 문서 제공.",
    },
    "inquiry/settlement": {
        title: "정산 문의",
        description: "정산 관련 상담 및 데이터 요청을 신속히 처리합니다.",
    },
    "inquiry/liquidity": {
        title: "유동성 문의",
        description: "매출 기반 단기 자금, 유동성 관리 상품에 대한 상담을 신청하세요.",
    },
    "inquiry/contract": {
        title: "가맹점 계약 문의",
        description: "가맹점 등록 및 수수료 정책 관련 문의를 접수합니다.",
    },
};
