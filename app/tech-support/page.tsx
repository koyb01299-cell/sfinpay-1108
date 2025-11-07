"use client";
import React, { useEffect, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    CreditCard,
    BarChart3,
    FileSignature,
    Building2,
    Cpu,
    Server,
    Network,
    Code2,
    Lock,
    Workflow,
    Globe2,
    ClipboardList,
    Bug,
    Rocket,
    Handshake,
    Bell,
    ChartPie,
    GaugeCircle,
    Database,
    TerminalSquare,
    AlertTriangle,
    CheckCircle2,
    Clock3,
    BookOpen,
    Phone,
    Mail,
    Users,
    Trophy,
    PlugZap,
    Shield,
    FileText,
    Download,
    Zap,
    ArrowUpRight,
    ArrowDownRight,
    Receipt,
    CalendarDays,
    ReceiptJapaneseYen,
    Wallet,
    Megaphone,
    ClipboardCheck,
    StickyNote,
    MessageSquare,
    MapPin,
} from "lucide-react";

/**
 * SFIN PAY — TechSupportPro (Mint theme)
 * - 색상 팔레트: 민트/청록 기반 (mint main: #10b981 / #2dd4bf / accent soft #bbf7f0)
 * - 모든 R+0 / R+1 표기는 D+0 / D+1 으로 통일 (이미 적용)
 * - 기존 구조를 확장해 더 많은 섹션과 상세 설명을 포함함
 * - Tailwind 클래스에는 기존 보라색을 모두 민트 계열로 변환함
 *
 * 주의: 이 파일은 UI 전용 React 컴포넌트입니다. 프로젝트에 따라 작은 이름/경로 수정을 요할 수 있습니다.
 */

export default function TechSupportProMint(): JSX.Element {
    useEffect(() => {
        // 페이지 로드 시 최상단으로 스크롤
        if (typeof window !== "undefined") window.scrollTo(0, 0);
    }, []);

    const fadeUp = (i = 0, d = 0.5) => ({
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.22 },
        transition: { duration: d, delay: 0.06 * i },
    });

    /** ------------------------------
     *  공용 마크업 컴포넌트
     * ------------------------------- */
    const SectionTitle = ({ kicker, title, sub }: { kicker?: string; title: string; sub?: string }) => (
        <div className="text-center mb-10">
            {kicker && (
                <div className="text-xs font-semibold tracking-wider text-[#059669] uppercase">{kicker}</div>
            )}
            <h2 className="text-[26px] md:text-3xl font-bold text-[#0f766e] mt-1">{title}</h2>
            {sub && <p className="text-[15px] text-gray-700 mt-2">{sub}</p>}
        </div>
    );

    const Pill = ({ children }: { children: React.ReactNode }) => (
        <span className="px-2.5 py-1 rounded-lg border border-[#e6fffa] bg-white text-[#065f46] text-xs">
            {children}
        </span>
    );

    const Sparkline = ({ data = [], width = 80, height = 26, strokeWidth = 1.6 }: { data?: number[]; width?: number; height?: number; strokeWidth?: number }) => {
        const path = useMemo(() => {
            if (!data || data.length === 0) return "";
            const max = Math.max(...data);
            const min = Math.min(...data);
            const norm = (v: number) => height - ((v - min) / (max - min || 1)) * (height - 4) - 2;
            const step = (width - 4) / (data.length - 1 || 1);
            return data.map((v, i) => `${i === 0 ? "M" : "L"} ${2 + i * step} ${norm(v)}`).join(" ");
        }, [data, width, height]);

        return (
            <svg width={width} height={height} role="img" aria-label="추세 스파크라인" className="block">
                <path d={path} fill="none" stroke="#059669" strokeWidth={strokeWidth} strokeLinecap="round" />
            </svg>
        );
    };

    const TrendBadge = ({ delta = 0 }: { delta?: number }) => {
        const isUp = delta >= 0;
        return (
            <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium ${isUp ? "bg-[#ecfdf5] text-[#065f46]" : "bg-[#fff1f2] text-[#991b1b]"}`}
                aria-label={`전월 대비 ${Math.abs(delta).toFixed(1)}% ${isUp ? "상승" : "하락"}`}
            >
                {isUp ? <ArrowUpRight className="w-3.5 h-3.5 text-[#10b981]" /> : <ArrowDownRight className="w-3.5 h-3.5 text-[#ef4444]" />}
                {Math.abs(delta).toFixed(1)}%
            </span>
        );
    };

    const KPICard = ({ icon, label, value, unit, delta, sub, series }: { icon: React.ReactNode; label: string; value: string; unit?: string; delta?: number; sub?: string; series?: number[] }) => (
        <div className="rounded-2xl border border-[#e6fff9] bg-white p-4 md:p-5">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <span className="text-[#059669]">{icon}</span>
                    <span className="text-[12px] text-gray-500">{label}</span>
                </div>
                <TrendBadge delta={delta ?? 0} />
            </div>
            <div className="flex items-end justify-between">
                <div>
                    <div className="text-[22px] md:text-[24px] leading-none font-extrabold text-[#0f172a]">
                        {value}
                        {unit && <span className="text-[13px] font-semibold text-gray-500 ml-1">{unit}</span>}
                    </div>
                    {sub && <div className="text-[11px] text-gray-500 mt-1">{sub}</div>}
                </div>
                <Sparkline data={series} />
            </div>
        </div>
    );

    const InfoCard = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
        <div className="p-6 rounded-2xl border border-[#e8fdf8] bg-white hover:shadow-lg transition">
            <div className="mb-4 text-[#064e3b]">{icon}</div>
            <div className="text-[16px] font-semibold text-[#042f2e] mb-2">{title}</div>
            <div className="text-[15px] text-gray-700">{children}</div>
        </div>
    );

    /** ---------------------------------
     *  데이터 (확장된 항목들 — 상세화)
     * ---------------------------------- */
    const heroBadges = [
        { icon: <ShieldCheck className="w-5 h-5" />, text: "실시간 대응 우선" },
        { icon: <CreditCard className="w-5 h-5" />, text: "월세·학원비·과외비 특화" },
        { icon: <Workflow className="w-5 h-5" />, text: "고지·미수·정산 자동화" },
        { icon: <Cpu className="w-5 h-5" />, text: "간단 연동 & 친절 가이드" },
        { icon: <Bell className="w-5 h-5" />, text: "모니터링 알림 체계화" },
        { icon: <Rocket className="w-5 h-5" />, text: "빠른 온보딩 템플릿" },
    ];

    const kpis = [
        {
            label: "납부 완료율",
            value: "96.4",
            unit: "%",
            delta: 1.8,
            sub: "리마인드/링크결제/분할 납부 도입 전후",
            icon: <ChartPie className="w-5 h-5" />,
            series: [92.1, 93.3, 94.4, 95.2, 95.8, 96.4],
        },
        {
            label: "가용성",
            value: "99.95",
            unit: "%",
            delta: 0.02,
            sub: "상태 페이지/알림 운영",
            icon: <GaugeCircle className="w-5 h-5" />,
            series: [99.8, 99.85, 99.9, 99.9, 99.93, 99.95],
        },
        {
            label: "정산 리드타임",
            value: "D+0 / D+1",
            unit: "",
            delta: 0.0,
            sub: "업종별 설정 합의",
            icon: <Clock3 className="w-5 h-5" />,
            series: [1, 1, 1, 1, 1, 1],
        },
        {
            label: "문의 TTR",
            value: "2.1",
            unit: "h",
            delta: -9.7,
            sub: "핫라인·공유 매크로·SLA",
            icon: <Bell className="w-5 h-5" />,
            series: [4.6, 3.9, 3.3, 2.9, 2.5, 2.1],
        },
        {
            label: "웹훅 재전송률",
            value: "99.2",
            unit: "%",
            delta: 0.6,
            sub: "재시도/서명 검증 개선",
            icon: <Database className="w-5 h-5" />,
            series: [97.0, 97.8, 98.5, 98.9, 99.0, 99.2],
        },
        {
            label: "오입금 감지",
            value: "27",
            unit: "/월",
            delta: 4.0,
            sub: "규칙+ML 혼합 탐지",
            icon: <AlertTriangle className="w-5 h-5" />,
            series: [18, 21, 24, 22, 25, 27],
        },
    ];

    const serviceSupports = [
        {
            icon: <Receipt className="w-10 h-10 text-[#10b981]" />,
            title: "고지·납부 링크",
            bullets: ["문자/카톡 청구서", "원클릭 납부", "납부현황 대시보드"],
        },
        {
            icon: <CalendarDays className="w-10 h-10 text-[#10b981]" />,
            title: "자동 리마인드",
            bullets: ["기한 전/당일/연체 알림", "템플릿 저장", "주기별 예약"],
        },
        {
            icon: <Wallet className="w-10 h-10 text-[#10b981]" />,
            title: "분할 납부",
            bullets: ["월 분납/학기 분납", "무이자/수수료 안내", "일정표 자동 생성"],
        },
        {
            icon: <ClipboardCheck className="w-10 h-10 text-[#10b981]" />,
            title: "미수 관리",
            bullets: ["연체 현황판", "부분 납부 처리", "자동 재고지"],
        },
        {
            icon: <Building2 className="w-10 h-10 text-[#10b981]" />,
            title: "정산 스케줄",
            bullets: ["D+0/D+1 선택", "월 정산 옵션", "대리점/분배 정산"],
        },
        {
            icon: <Megaphone className="w-10 h-10 text-[#10b981]" />,
            title: "보호자/세입자 커뮤니케이션",
            bullets: ["안내장/영수증 PDF", "일괄 문자 발송", "응답 수집 폼"],
        },
    ];

    const devSupports = [
        {
            icon: <Code2 className="w-10 h-10 text-[#10b981]" />,
            title: "간단 연동",
            desc: "납부 링크 생성/확인/취소 등 핵심만 간결하게.",
            pills: ["Idempotency", "샘플 리포", "테스트 데이터"],
        },
        {
            icon: <Server className="w-10 h-10 text-[#10b981]" />,
            title: "웹훅 알림",
            desc: "납부완료/부분납부/취소/연체 이벤트 수신.",
            pills: ["로그 조회", "재전송", "서명 검증"],
        },
        {
            icon: <Lock className="w-10 h-10 text-[#10b981]" />,
            title: "접근 제어",
            desc: "권한·역할 기반 접근, 최소 권한 원칙.",
            pills: ["감사로그", "토큰 수명", "IP 제한"],
        },
        {
            icon: <Network className="w-10 h-10 text-[#10b981]" />,
            title: "외부 연계",
            desc: "학사/회계/임대관리 프로그램과 양방향 동기화.",
            pills: ["CSV/Excel 업로드", "Webhook→ETL", "간편 매핑"],
        },
        {
            icon: <Bug className="w-10 h-10 text-[#10b981]" />,
            title: "사전점검 & 모니터링",
            desc: "정책 변경/알림 중단/오탈자 등 자동 검수.",
            pills: ["알림 실패 탐지", "헬스체크", "릴리즈 캘린더"],
        },
        {
            icon: <Cpu className="w-10 h-10 text-[#10b981]" />,
            title: "리스크 가드",
            desc: "오입금/중복 고지/오류 납부 사전 차단.",
            pills: ["명세 상계", "이상탐지", "리뷰 큐"],
        },
    ];

    const realtimeOps = [
        {
            icon: <Bell className="w-8 h-8 text-[#10b981]" />,
            title: "상태 페이지 & 구독 알림",
            lines: ["실시간 컴포넌트 상태", "SEV별 공지 템플릿", "구독자 대상 SMS/Email"],
            pills: ["Status", "Subscribe", "History"],
        },
        {
            icon: <PlugZap className="w-8 h-8 text-[#10b981]" />,
            title: "ChatOps / 슬래시 명령",
            lines: ["/sfin status", "/sfin rca last", "/sfin sev new"],
            pills: ["Slack", "Webhook", "온콜단축키"],
        },
        {
            icon: <Zap className="w-8 h-8 text-[#10b981]" />,
            title: "자동 에스컬레이션",
            lines: ["응답지연/오류율 임계치", "온콜 → L2 → 팀장", "중복 알림 억제"],
            pills: ["Pager", "Throttle", "Escalation"],
        },
        {
            icon: <Rocket className="w-8 h-8 text-[#10b981]" />,
            title: "자동 복구 & 백필",
            lines: ["대기 큐 자동 소진", "증분 백필", "재시도 우선순위 정책"],
            pills: ["AutoFill", "Backfill", "Prioritize"],
        },
    ];

    const observability = [
        { k: "p95 결제 지연", v: "420 ms", delta: -7.2, tips: ["APM 트레이싱", "콜드스타트 완화"] },
        { k: "웹훅 실패율", v: "0.21 %", delta: -0.08, tips: ["재시도 백오프", "서명 오류 가이드"] },
        { k: "알림 배달 성공", v: "99.2 %", delta: +0.6, tips: ["발송자 평판", "템플릿 검증"] },
        { k: "큐 대기 길이", v: "1.3 s", delta: -11.0, tips: ["버스트 버퍼", "동시성 상향"] },
        { k: "정산 배치 시간", v: "02:17", delta: -3.0, tips: ["증분 처리", "I/O 스트리밍"] },
        { k: "오입금 감지", v: "27 건/월", delta: +4.0, tips: ["규칙+ML", "리뷰 큐"] },
    ];

    const oncall = [
        { role: "L1 온콜", resp: "초동조치·상태업데이트·로그 수집", target: "5분 이내 응답" },
        { role: "L2 엔지니어", resp: "롤백/플래그/핫픽스 적용", target: "15분 이내 완화" },
        { role: "Incident Lead", resp: "SEV 등급/커뮤니케이션 승인", target: "전 채널 브리핑" },
        { role: "Comms", resp: "가맹점 공지/템플릿 배포", target: "15~30분 주기 갱신" },
    ];

    const timeline = [
        { t: "00:00", e: "오류율 급증 탐지 (웹훅 5xx > 3%)", a: "SEV-2 선언, 온콜 호출" },
        { t: "00:04", e: "원인 후보: 서드파티 지연", a: "서비스 플래그로 일부 트래픽 우회" },
        { t: "00:09", e: "배달 성공률 회복 97%+", a: "상태 페이지 1차 공지" },
        { t: "00:18", e: "서드파티 정상화", a: "대기 큐 소진, 백필 실행" },
        { t: "00:40", e: "정상화 선언", a: "포스트모템 일정 공지 (24h 내 초안)" },
    ];

    const playbooks = [
        {
            title: "연체 3일 전 사전 안내",
            points: [
                "대상자 자동 추출 → 템플릿 선택 → 카톡/문자 발송",
                "읽지 않음 대상만 재발송(자동)",
                "납부 완료 시 플래그 갱신·리마인드 중지",
            ],
        },
        {
            title: "부분 납부/차감 처리",
            points: [
                "현장/원격에서 부분 납부 반영",
                "잔액 자동 계산·추가 고지 생성",
                "정산 리포트에 회차별로 분리 표기",
            ],
        },
        {
            title: "정산일 변동/휴무 공지",
            points: [
                "캘린더 이동 → 공지 템플릿 선택",
                "대상자 세그먼트 필터링 후 일괄 발송",
                "FAQ/문의 챗봇으로 반복 질문 감소",
            ],
        },
    ];

    const onboardingChecklist = {
        biz: [
            "가맹점 정보/정산 계좌",
            "납부 일정/분할 옵션 결정",
            "고지 템플릿/어조 설정",
            "알림 채널(문자/이메일/카톡)",
        ],
        dev: [
            "테스트 워크스페이스 발급",
            "납부 링크 생성/조회 샘플",
            "웹훅 엔드포인트/서명 검증",
            "CSV 업로드/필드 매핑",
        ],
    };

    const rcaSnapshots = [
        {
            sev: "SEV-1",
            cause: "외부 알림 게이트웨이 타임아웃",
            fix: "다중 게이트웨이 라우팅 + 서킷브레이커",
            learn: ["지연 임계 조정", "백필 우선순위 상향", "상태페이지 구독 확대"],
        },
        {
            sev: "SEV-2",
            cause: "Webhook 서명 검증 오류 증가",
            fix: "시간드리프트 허용범위 확대 + 재시도 백오프",
            learn: ["고객 SDK 버전 점검", "로그 가이드 강화", "시뮬레이터 배포"],
        },
    ];

    const comms = [
        { lvl: "알림 지연", msg: "[안내] 일부 알림 지연이 감지되어 우회 라우팅을 적용했습니다. 납부 기능은 정상입니다." },
        { lvl: "부분 불가", msg: "[주의] 일부 결제가 일시적으로 지연될 수 있습니다. 복구 중이며 완료 시 추가 공지 드리겠습니다." },
        { lvl: "정상화", msg: "[정상화] 지연 원인을 제거했고 모든 기능이 정상 동작합니다. 상세 보고서는 링크에서 확인하세요." },
    ];

    const contacts = [
        { label: "영업/가맹점", icon: <Phone className="w-5 h-5" />, to: "/inquiry/integration", desc: "요금/정산/도입 상담" },
        { label: "기술 지원", icon: <TerminalSquare className="w-5 h-5" />, to: "/support", desc: "연동/웹훅/샘플" },
        { label: "제휴/파트너", icon: <Handshake className="w-5 h-5" />, to: "/support", desc: "리셀러/연동 파트너" },
        { label: "일반 문의", icon: <Mail className="w-5 h-5" />, to: "/support", desc: "기타 문의" },
    ];

    const diffPoints = [
        {
            icon: <BarChart3 className="w-6 h-6 text-[#10b981]" />,
            title: "실시간 우선 전략",
            lines: ["상태 공개/구독", "ChatOps 단축명령", "자동 에스컬레이션"],
            note: "문제 감지~커뮤니케이션~완화까지 분 단위로 연결.",
        },
        {
            icon: <Globe2 className="w-6 h-6 text-[#10b981]" />,
            title: "현장 친화 납부 흐름",
            lines: ["링크 결제", "분할 납부", "연체 리마인드"],
            note: "월세·학원비·과외비 등 실제 패턴 맞춤 구성.",
        },
        {
            icon: <FileSignature className="w-6 h-6 text-[#10b981]" />,
            title: "투명 보고 문화",
            lines: ["SEV 기준", "RCA 공개", "시정조치 공유"],
            note: "사후 학습 공유로 동일 장애 재발 방지.",
        },
    ];

    /** ------------------------------------------------
     *  렌더링 마크업 (아래 섹션들은 길게 늘려 상세화)
     * ------------------------------------------------- */
    return (
        <section className="bg-white min-h-screen">
            {/* HERO */}
            <div className="py-24 px-6 md:px-16 bg-gradient-to-b from-white via-[#f0fdfa] to-[#ecfdf3] text-center">
                <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                    className="text-[34px] md:text-5xl font-extrabold text-[#047857] tracking-tight">
                    기술 지원 안내 — Mint Edition
                </motion.h1>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15, duration: 0.5 }}
                    className="mt-4 text-[15px] md:text-lg text-gray-700 max-w-3xl mx-auto">
                    실시간 대응과 안정성에 집중한 운영 허브. 고지·납부·미수·정산은 물론, 관제·에스컬레이션·포스트모템까지
                    하나의 흐름으로 운영합니다.
                </motion.p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {heroBadges.map((b, i) => (
                        <motion.span key={i} {...fadeUp(i)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#e6fffa] bg-white text-[13px] md:text-sm text-[#065f46]">
                            {b.icon} {b.text}
                        </motion.span>
                    ))}
                </div>

                <div className="mt-10 flex items-center justify-center gap-3">
                    <Link href="/inquiry/integration" className="px-6 py-3 rounded-xl bg-[#10b981] text-white font-semibold hover:bg-[#059669] transition focus:outline-none focus:ring-2 focus:ring-[#bbf7f0]">
                        도입 상담 요청
                    </Link>
                    <Link href="/support" className="px-6 py-3 rounded-xl bg-white border border-[#e6fff9] text-[#10b981] font-semibold hover:bg-[#f0fdfa] transition focus:outline-none focus:ring-2 focus:ring-[#bbf7f0]">
                        기술 문의하기
                    </Link>
                </div>
            </div>

            {/* 실시간 대응 허브 */}
            <div className="py-18 md:py-20 px-6 md:px-16">
                <SectionTitle kicker="Real-Time" title="실시간 대응 허브" sub="감지 → 통지 → 완화 → 복구 → 보고 전체 흐름을 체계화합니다." />
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    {realtimeOps.map((r, i) => (
                        <motion.div key={r.title} {...fadeUp(i)}>
                            <div className="rounded-2xl border border-[#e6fff9] bg-white p-6">
                                <div className="mb-3">{r.icon}</div>
                                <div className="font-semibold text-[#042f2e]">{r.title}</div>
                                <ul className="text-[15px] text-gray-700 mt-2 space-y-1.5">
                                    {r.lines.map((L) => <li key={L}>• {L}</li>)}
                                </ul>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {r.pills.map((p) => <Pill key={p}>{p}</Pill>)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 상세 운영 정책 블록 (추가된 설명으로 길이 확대) */}
                <div className="max-w-6xl mx-auto mt-8 grid md:grid-cols-2 gap-6">
                    <motion.div {...fadeUp(0)}>
                        <div className="rounded-2xl border border-[#e6fff9] bg-white p-6">
                            <div className="font-semibold text-[#042f2e] mb-2">감지 기준 및 알림 정책</div>
                            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                <li>Service Error Rate &gt; 1% 지속 시 자동 SEV-3 알림</li>
                                <li>웹훅 5xx 비율 3% 초과 시 SEV-2, 10% 초과 시 SEV-1로 분류</li>
                                <li>재시도 백오프 정책: 1s → 2s → 5s → 10s (최대 4회)</li>
                                <li>알림 경로: Slack → Email → SMS (중요도에 따라 escalation)</li>
                            </ol>
                        </div>
                    </motion.div>

                    <motion.div {...fadeUp(1)}>
                        <div className="rounded-2xl border border-[#e6fff9] bg-white p-6">
                            <div className="font-semibold text-[#042f2e] mb-2">온콜/에스컬레이션 규칙</div>
                            <div className="text-gray-700 space-y-2">
                                <div>• L1: 1차 대응(로그 수집/휴먼 체크) — 목표 응답 5분</div>
                                <div>• L2: 핫픽스/롤백 판단 — 목표 완화 15분</div>
                                <div>• Incident Lead: 고객/경영진 커뮤니케이션 및 RCA 승인</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 모니터링 보드 */}
            <div className="py-18 md:py-20 px-6 md:px-16 bg-[#f7fffb]">
                <SectionTitle kicker="Observability" title="상태/모니터링 보드" sub="지연·오류·큐·정산 배치 등 핵심 신호를 한눈에." />
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    {observability.map((m, i) => (
                        <motion.div key={m.k} {...fadeUp(i)}>
                            <div className="rounded-2xl border border-[#e6fff9] bg-white p-6">
                                <div className="flex items-center justify-between">
                                    <div className="text-[15px] text-gray-600">{m.k}</div>
                                    <TrendBadge delta={m.delta} />
                                </div>
                                <div className="text-2xl font-extrabold text-[#042f2e] mt-1">{m.v}</div>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {m.tips.map((t) => <Pill key={t}>{t}</Pill>)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 모니터링 심화 가이드 (설명 확장) */}
                <div className="max-w-6xl mx-auto mt-8">
                    <div className="rounded-2xl border border-[#e6fff9] bg-white p-6">
                        <h4 className="font-semibold text-[#042f2e] mb-3">모니터링 심화 가이드</h4>
                        <p className="text-gray-700 mb-3">
                            각 지표는 알림 임계값 및 자동화 대응 룰과 매핑되어 있으며, 주기적으로 SLI/SLO 재조정이 이루어집니다.
                            장애 발생시 자동 수집된 트레이스/스택트레이스는 포스트모템 템플릿에 포함되어 RCA 작성이 빠르게 진행됩니다.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div>
                                <div className="text-sm font-semibold text-gray-600">Trace</div>
                                <div className="text-[13px] text-gray-700">APM 연결을 통해 p50/p95/p99 분해</div>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-gray-600">Logs</div>
                                <div className="text-[13px] text-gray-700">중요 이벤트에 태그 부착 및 보존기간 설정</div>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-gray-600">Alerts</div>
                                <div className="text-[13px] text-gray-700">SEV 레벨에 따른 알림 우선순위 정의</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* KPI */}
            <div className="py-12 px-6 md:px-16">
                <SectionTitle kicker="Metrics" title="핵심 KPI" sub="운영 성과와 신뢰성 지표를 정량적으로 확인합니다." />
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
                    {kpis.map((k, i) => (
                        <motion.div key={k.label} {...fadeUp(i)}>
                            <KPICard {...k} />
                        </motion.div>
                    ))}
                </div>

                {/* KPI 해석 섹션 (추가적으로 상세 분석 제공) */}
                <div className="max-w-6xl mx-auto mt-6">
                    <div className="rounded-2xl border border-[#e6fff9] bg-white p-6">
                        <h4 className="font-semibold text-[#042f2e] mb-2">KPI 해석과 권장 조치</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>납부 완료율이 95% 미만인 세그먼트에 대해 리마인드 템플릿 A/B 테스트 권장</li>
                            <li>가용성 99.9% 유지를 위해 롤링 배포와 헬스 체크 강화</li>
                            <li>D+0 정산 비율 분석으로 은행/스케줄 최적화 제안</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 경쟁사 비교 하이라이트 */}
            <div className="py-18 md:py-20 px-6 md:px-16 bg-[#f7fffb]">
                <SectionTitle kicker="Highlights" title="경쟁사 대비 핵심 차별점" sub="대응 속도·현장 적합성·투명 보고로 차이를 만듭니다." />
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    {diffPoints.map((d, i) => (
                        <motion.div key={d.title} {...fadeUp(i)}>
                            <div className="rounded-2xl border border-[#e6fff9] bg-white p-6">
                                <div className="flex items-center gap-2 mb-2">{d.icon}<div className="font-semibold text-[#042f2e]">{d.title}</div></div>
                                <ul className="text-[15px] text-gray-700 space-y-1.5">{d.lines.map(x => <li key={x}>• {x}</li>)}</ul>
                                <p className="text-[13px] text-gray-500 mt-3">{d.note}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 비교표 (간단한 표형태) */}
                <div className="max-w-6xl mx-auto mt-8 overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="p-3 text-sm text-gray-600">항목</th>
                                <th className="p-3 text-sm text-gray-600">SFIN PAY</th>
                                <th className="p-3 text-sm text-gray-600">일반 PG사</th>
                                <th className="p-3 text-sm text-gray-600">비고</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-t">
                                <td className="p-3 text-sm">실시간 대응</td>
                                <td className="p-3 text-sm">상태페이지 + ChatOps 연동</td>
                                <td className="p-3 text-sm">이메일 중심</td>
                                <td className="p-3 text-sm">구독형 알림 지원</td>
                            </tr>
                            <tr className="bg-white border-t">
                                <td className="p-3 text-sm">정산 옵션</td>
                                <td className="p-3 text-sm">D+0 / D+1 선택 가능</td>
                                <td className="p-3 text-sm">기본 D+1</td>
                                <td className="p-3 text-sm">업종별 조정 가능</td>
                            </tr>
                            <tr className="bg-white border-t">
                                <td className="p-3 text-sm">투명 보고</td>
                                <td className="p-3 text-sm">RCA 공개 + 시정조치</td>
                                <td className="p-3 text-sm">부분 공개</td>
                                <td className="p-3 text-sm">사후 학습 체계화</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* 서비스 지원 (비즈니스) */}
            <div className="py-18 md:py-20 px-6 md:px-16">
                <SectionTitle title="서비스 지원 영역" sub="운영자가 바로 쓰는 고지·리마인드·분납·정산·커뮤니케이션 기능을 한 곳에." />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {serviceSupports.map((s, i) => (
                        <motion.div key={s.title} {...fadeUp(i)}>
                            <InfoCard icon={s.icon} title={s.title}>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {s.bullets.map(b => <Pill key={b}>{b}</Pill>)}
                                </div>

                                {/* 상세 설명 추가 */}
                                <div className="mt-3 text-gray-700 text-[14px]">
                                    {s.title === "정산 스케줄" ? (
                                        <>
                                            <div className="font-semibold mb-1">정산 스케줄 상세</div>
                                            <ul className="list-disc list-inside space-y-1">
                                                <li>D+0: 최소 입금 창구 연동(15분 단위)</li>
                                                <li>D+1: 은행 배치 기반 표준 정산</li>
                                                <li>가맹점 별로 기본값 설정 및 예외 규칙 등록 가능</li>
                                            </ul>
                                        </>
                                    ) : (
                                        <div>{s.bullets.join(" • ")}</div>
                                    )}
                                </div>
                            </InfoCard>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 개발 지원 (기술) */}
            <div className="py-18 md:py-20 px-6 md:px-16 bg-[#f7fffb]">
                <SectionTitle title="개발자 중심 기술지원" sub="연동/운영에 꼭 필요한 것만 정교하게 제공합니다." />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {devSupports.map((s, i) => (
                        <motion.div key={s.title} {...fadeUp(i)}>
                            <div className="p-6 rounded-2xl border border-[#e6fff9] bg-white hover:shadow-lg transition">
                                <div className="mb-3 text-[#042f2e]">{s.icon}</div>
                                <div className="text-[16px] font-semibold text-[#042f2e] mb-1">{s.title}</div>
                                <p className="text-[15px] text-gray-700 mb-2">{s.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {s.pills.map(p => <Pill key={p}>{p}</Pill>)}
                                </div>

                                {/* 개발자 전용 코드 스니펫(예시) */}
                                <div className="mt-4 bg-[#f0fdfa] border border-[#e6fff9] rounded-md p-3 text-[13px] text-gray-700">
                                    <div className="font-semibold mb-2">Webhook 검증 예시 (Node)</div>
                                    <pre className="whitespace-pre-wrap text-[12px]">
                                        {`// express 예시
app.post('/webhook', (req, res) => {
  const signature = req.headers['x-sfin-sign'];
  if (!verifySignature(req.rawBody, signature, process.env.WEBHOOK_SECRET)) {
    return res.status(401).send('invalid signature');
  }
  // 처리 로직...
  res.status(200).send('ok');
});`}
                                    </pre>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Quickstart */}
            <div className="py-14 px-6 md:px-16">
                <div className="max-w-5xl mx-auto rounded-2xl border border-[#e6fff9] bg-white p-6">
                    <div className="flex items-center gap-2 mb-3">
                        <Rocket className="w-5 h-5 text-[#10b981]" />
                        <h3 className="text-xl font-bold text-[#042f2e]">5분 만에 시작하기</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 text-[13px] md:text-[14px]">
                        <div>
                            <div className="text-[#10b981] font-bold text-xs mb-1">STEP 1</div>
                            <div className="font-semibold mb-2">워크스페이스/키 발급</div>
                            <pre className="bg-[#f0fdfa] border border-[#e6fff9] rounded-lg p-3 overflow-x-auto">{`관리자 대시보드 > 설정 > 테스트 키 발급
알림 채널(문자/이메일/카톡) 연결`}</pre>
                        </div>
                        <div>
                            <div className="text-[#10b981] font-bold text-xs mb-1">STEP 2</div>
                            <div className="font-semibold mb-2">납부 링크 생성</div>
                            <pre className="bg-[#f0fdfa] border border-[#e6fff9] rounded-lg p-3 overflow-x-auto">{`POST /v1/billing/links
{ amount: 250000, title: "10월 수강료", customer: "홍길동" }`}</pre>
                        </div>
                        <div>
                            <div className="text-[#10b981] font-bold text-xs mb-1">STEP 3</div>
                            <div className="font-semibold mb-2">웹훅 수신/검증</div>
                            <pre className="bg-[#f0fdfa] border border-[#e6fff9] rounded-lg p-3 overflow-x-auto">{`이벤트: paid, partial_paid, overdue
서명 검증 후 내부 시스템 업데이트`}</pre>
                        </div>
                    </div>
                    <div className="mt-4 text-right">
                        <Link href="/support" className="text-sm text-[#10b981] hover:underline">샘플/템플릿 더 보기 →</Link>
                    </div>
                </div>
            </div>

            {/* 에스컬레이션 & 온콜 */}
            <div className="py-18 md:py-20 px-6 md:px-16">
                <SectionTitle kicker="Escalation" title="에스컬레이션 & 온콜" sub="역할·목표시간·커뮤니케이션 책임을 명확히." />
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {oncall.map((o, i) => (
                        <motion.div key={o.role} {...fadeUp(i)}>
                            <div className="rounded-2xl border border-[#e6fff9] bg-white p-6">
                                <div className="font-semibold text-[#042f2e]">{o.role}</div>
                                <div className="text-[15px] text-gray-700 mt-1">• 책임: {o.resp}</div>
                                <div className="text-[13px] text-gray-500 mt-1">• 목표: {o.target}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 장애 타임라인 샘플 */}
            <div className="py-18 md:py-20 px-6 md:px-16 bg-[#f7fffb]">
                <SectionTitle kicker="Incident" title="장애 타임라인 샘플" sub="감지부터 정상화까지 외부 공개용 서술 가이드." />
                <div className="max-w-4xl mx-auto rounded-2xl border border-[#e6fff9] bg-white p-6">
                    <ol className="space-y-3 text-[15px] text-gray-700">
                        {timeline.map(row => (
                            <li key={row.t} className="flex items-start gap-3">
                                <span className="mt-1 rounded-md bg-[#ecfdf5] text-[#065f46] px-2 py-0.5 text-xs font-semibold">{row.t}</span>
                                <div>
                                    <div><b>이벤트:</b> {row.e}</div>
                                    <div><b>조치:</b> {row.a}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                    <div className="text-right mt-4">
                        <Link href="/transparency-report" className="text-sm text-[#10b981] hover:underline">상세 보고서 예시 보기 →</Link>
                    </div>
                </div>
            </div>

            {/* 실결제 포트폴리오 */}
            <div className="py-18 md:py-20 px-6 md:px-16">
                <SectionTitle title="실결제 포트폴리오" sub="월세·학원비·과외비 등 실제 납부 시나리오에 맞춘 기능 구성입니다." />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[
                        {
                            id: "01", name: "월세 · 관리비", icon: <Building2 className="w-5 h-5" />,
                            desc: ["세입자별 납부 링크 자동 발송", "연체 자동 리마인드(단계별 톤)", "보증금/수리비 부분정산 처리"],
                            tag: "부동산/임대", tips: ["납부 현황판", "분할 옵션", "세입자 연락처 동기화"]
                        },
                        {
                            id: "02", name: "학원비 · 수강료", icon: <BookOpen className="w-5 h-5" />,
                            desc: ["반/학생 일괄 고지서 생성", "보호자 카톡 납부 링크", "형제/재등록 할인 자동 반영"],
                            tag: "교육/학원", tips: ["출결 연동", "장학/쿠폰", "영수증 자동발행"]
                        },
                        {
                            id: "03", name: "과외비 · 레슨비", icon: <Users className="w-5 h-5" />,
                            desc: ["주/월 단위 반복 고지", "노쇼/연기 부분차감", "현장 QR/링크 빠른 납부"],
                            tag: "개인지도", tips: ["일정표 공유", "분납 스케줄", "간단 환불"]
                        },
                        {
                            id: "04", name: "병원 · 의원", icon: <Shield className="w-5 h-5" />,
                            desc: ["미수금 안내 자동화", "시술 패키지 분납", "안내문/동의서 파일 첨부"],
                            tag: "의료/헬스케어", tips: ["상담 예약 연동", "리뷰 요청", "안심 고지 문구"]
                        },
                        {
                            id: "05", name: "생활 구독 · 관리", icon: <ReceiptJapaneseYen className="w-5 h-5" />,
                            desc: ["정기 납부 일정표", "변경/일시중지 셀프 처리", "연간 납부 리포트"],
                            tag: "구독/멤버십", tips: ["가격 플랜", "프로모션 코드", "만료 리마인드"]
                        },
                        {
                            id: "06", name: "동네 상권 · 시설", icon: <MapPin className="w-5 h-5" />,
                            desc: ["회원권/자리비 납부", "일괄 고지/개별 납부", "현장 QR + 온라인 겸용"],
                            tag: "지역/시설", tips: ["간편 환불", "정산 캘린더", "직원 권한"]
                        },
                    ].map((p, i) => (
                        <motion.div key={p.id} {...fadeUp(i)}>
                            <div className="p-7 bg-white border border-[#e6fff9] rounded-2xl shadow-sm hover:shadow-md hover:scale-[1.01] transition">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="text-[17px] font-bold text-[#042f2e] flex items-center gap-2">
                                        {p.icon} {p.name}
                                    </div>
                                    <div className="text-4xl font-extrabold text-[#ecfdf5]">{p.id}</div>
                                </div>
                                <ul className="text-[15px] text-gray-700 space-y-1.5">
                                    {p.desc.map(d => <li key={d}>• {d}</li>)}
                                </ul>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    <Pill>{p.tag}</Pill>
                                    {p.tips.map(t => <Pill key={t}>{t}</Pill>)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 운영 시나리오(Playbooks) */}
            <div className="py-18 md:py-20 px-6 md:px-16 bg-[#f7fffb]">
                <SectionTitle title="운영 시나리오 (Playbooks)" sub="현장에서 많이 쓰는 흐름만 간결하게 모았습니다." />
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    {playbooks.map((p, i) => (
                        <motion.div key={p.title} {...fadeUp(i)}>
                            <div className="rounded-2xl border border-[#e6fff9] bg-white p-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <StickyNote className="w-5 h-5 text-[#10b981]" />
                                    <div className="font-semibold text-[#042f2e]">{p.title}</div>
                                </div>
                                <ul className="text-[15px] text-gray-700 space-y-1.5">
                                    {p.points.map(pt => <li key={pt}>• {pt}</li>)}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 온보딩 체크리스트 */}
            <div className="py-18 md:py-20 px-6 md:px-16">
                <SectionTitle title="온보딩 체크리스트" />
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
                    <motion.div {...fadeUp(0)}>
                        <div className="rounded-2xl border border-[#e6fff9] bg-white p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <Users className="w-5 h-5 text-[#10b981]" />
                                <div className="font-semibold text-[#042f2e]">비즈니스 준비</div>
                            </div>
                            <ul className="text-[15px] text-gray-700 space-y-2">
                                {onboardingChecklist.biz.map(c => (
                                    <li key={c} className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#10b981]" /> {c}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div {...fadeUp(1)}>
                        <div className="rounded-2xl border border-[#e6fff9] bg-white p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <Code2 className="w-5 h-5 text-[#10b981]" />
                                <div className="font-semibold text-[#042f2e]">개발/연동 준비</div>
                            </div>
                            <ul className="text-[15px] text-gray-700 space-y-2">
                                {onboardingChecklist.dev.map(c => (
                                    <li key={c} className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#10b981]" /> {c}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 투명 보고 & RCA 요약 */}
            <div className="py-18 md:py-20 px-6 md:px-16 bg-[#f7fffb]">
                <SectionTitle title="투명 보고 & RCA 요약" sub="장애를 숨기지 않고 학습합니다. 반복 방지를 위해 설계와 프로세스를 고칩니다." />
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
                    {rcaSnapshots.map((r, i) => (
                        <motion.div key={r.sev + r.cause} {...fadeUp(i)}>
                            <div className="rounded-2xl border border-[#e6fff9] bg-white p-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <AlertTriangle className="w-5 h-5 text-[#10b981]" />
                                    <div className="font-semibold text-[#042f2e]">{r.sev}</div>
                                </div>
                                <div className="text-[15px] text-gray-700">
                                    <div><b>원인:</b> {r.cause}</div>
                                    <div><b>조치:</b> {r.fix}</div>
                                    <div className="mt-2"><b>학습:</b></div>
                                    <ul className="mt-1 space-y-1.5">
                                        {r.learn.map(x => <li key={x}>• {x}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <p className="text-center text-sm text-gray-600 mt-4">
                    자세한 내역은 <Link href="/transparency-report" className="text-[#10b981] hover:underline">투명경영/사후보고서</Link> 에서 확인하세요.
                </p>
            </div>

            {/* 고객 커뮤니케이션 템플릿 */}
            <div className="py-18 md:py-20 px-6 md:px-16">
                <SectionTitle title="고객 커뮤니케이션 템플릿" sub="SEV 레벨별 공지문을 표준화해 혼선을 줄입니다." />
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    {comms.map((c, i) => (
                        <motion.div key={c.lvl} {...fadeUp(i)}>
                            <div className="rounded-2xl border border-[#e6fff9] bg-white p-6">
                                <div className="flex items-center gap-2">
                                    <Megaphone className="w-5 h-5 text-[#10b981]" />
                                    <div className="font-semibold text-[#042f2e]">{c.lvl}</div>
                                </div>
                                <p className="text-[15px] text-gray-700 mt-2 whitespace-pre-wrap">{c.msg}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* SLA & 인시던트 */}
            <div className="py-18 md:py-20 px-6 md:px-16 bg-[#f7fffb]">
                <SectionTitle title="SLA & 인시던트 대응" />
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    {[
                        { level: "SEV-1", impact: "납부 대다수 지연/불가", action: "즉시 핫라인/롤백/상태 업데이트", target: "15분 알림 · 24h RCA" },
                        { level: "SEV-2", impact: "일부 납부/알림 누락", action: "우선 대응/대체 경로/공지", target: "30분 알림 · 48h RCA" },
                        { level: "SEV-3", impact: "경미한 지연/오표기", action: "다음 배포 반영", target: "주간 리포트" },
                    ].map((r, i) => (
                        <motion.div key={r.level} {...fadeUp(i)}>
                            <div className="rounded-2xl border border-[#e6fff9] bg-white p-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <AlertTriangle className="w-5 h-5 text-[#10b981]" />
                                    <div className="font-semibold text-[#042f2e]">{r.level}</div>
                                </div>
                                <div className="text-[15px] text-gray-700">
                                    <div><b>영향:</b> {r.impact}</div>
                                    <div><b>조치:</b> {r.action}</div>
                                    <div><b>목표:</b> {r.target}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 연락 채널 */}
            <div className="py-18 md:py-20 px-6 md:px-16">
                <SectionTitle title="연락 채널" />
                <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
                    {contacts.map((c, i) => (
                        <motion.div key={c.label} {...fadeUp(i)}>
                            <div className="rounded-2xl border border-[#e6fff9] bg-white p-6">
                                <div className="flex items-center gap-2">
                                    <div className="text-[#10b981]">{c.icon}</div>
                                    <div className="font-semibold text-[#042f2e]">{c.label}</div>
                                </div>
                                <div className="text-[14px] text-gray-600 mt-1">{c.desc}</div>
                                <Link href={c.to} className="inline-block mt-3 text-sm text-[#10b981] hover:underline">
                                    바로가기 →
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 최종 CTA */}
            <div className="text-center py-24 bg-gradient-to-r from-[#ecfdf5] to-[#bbf7f0]">
                <motion.h3 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
                    className="text-3xl font-bold text-[#059669] mb-4">
                    가맹점 운영과 기술, 함께 단순하게 — 그리고 실시간으로
                </motion.h3>
                <p className="text-[15px] text-gray-700 mb-8">
                    감지·통지·완화·복구·보고까지 하나의 흐름으로 설계했습니다. 필요한 부분을 바로 도입할 수 있도록
                    템플릿 및 샘플 코드를 제공합니다.
                </p>
                <div className="flex justify-center gap-3">
                    <Link href="/inquiry/integration" className="px-8 py-3 bg-[#10b981] text-white rounded-xl font-semibold hover:bg-[#059669] transition focus:outline-none focus:ring-2 focus:ring-[#bbf7f0]">
                        상담 요청하기
                    </Link>
                    <Link href="/support" className="px-8 py-3 bg-white border border-[#e6fff9] text-[#10b981] rounded-xl font-semibold hover:bg-[#f0fdfa] transition focus:outline-none focus:ring-2 focus:ring-[#bbf7f0]">
                        기술 문의하기
                    </Link>
                </div>
            </div>
        </section>
    );
}
