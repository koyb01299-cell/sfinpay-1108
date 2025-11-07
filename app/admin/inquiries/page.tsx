"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
    Loader2,
    Mail,
    Building2,
    CheckCircle2,
    AlertTriangle,
    Clock,
    Search,
    Download,
    RefreshCw,
    Filter,
} from "lucide-react";

type Inquiry = {
    id: string;
    company: string;
    email: string;
    type: string;
    message: string;
    status: string;
    date: string;
};

export default function InquiriesAdminPage() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Inquiry[]>([]);
    const [filter, setFilter] = useState("전체");
    const [query, setQuery] = useState("");
    const [updating, setUpdating] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        const res = await fetch("/api/admin/inquiries");
        const json = await res.json();
        if (json.ok) setData(json.records);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const updateStatus = async (pageId: string, status: string) => {
        setUpdating(pageId);
        const res = await fetch("/api/admin/update-status", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ pageId, status }),
        });
        const json = await res.json();
        if (json.ok) await fetchData();
        setUpdating(null);
    };

    const filteredData = useMemo(() => {
        return data.filter((q) => {
            const matchStatus = filter === "전체" || q.status === filter;
            const matchQuery =
                q.company.includes(query) ||
                q.email.includes(query) ||
                q.message.includes(query);
            return matchStatus && matchQuery;
        });
    }, [data, filter, query]);

    const exportCSV = () => {
        const header = "회사명,이메일,문의유형,내용,상태,수신일시\n";
        const rows = filteredData
            .map(
                (q) =>
                    `${q.company},${q.email},${q.type},"${q.message.replace(/\n/g, " ")}",${q.status},${new Date(
                        q.date
                    ).toLocaleString("ko-KR")}`
            )
            .join("\n");
        const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `SFINPAY_문의목록_${new Date().toISOString().slice(0, 10)}.csv`;
        a.click();
    };

    if (loading)
        return (
            <div className="flex justify-center items-center h-[60vh] text-brand-mintDark">
                <Loader2 className="animate-spin mr-2" /> 데이터를 불러오는 중입니다...
            </div>
        );

    return (
        <section className="p-8 md:p-16 bg-mint-gradient min-h-screen">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-extrabold text-[#0b2723] mb-8"
            >
                🧾 문의 대시보드 (Admin)
            </motion.h1>

            {/* ───────── 필터 / 검색 / 내보내기 ───────── */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                <div className="flex items-center gap-3">
                    <button
                        onClick={fetchData}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-mintDark text-white hover:bg-emerald-500 transition"
                    >
                        <RefreshCw size={14} /> 새로고침
                    </button>

                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="rounded-lg border border-brand-mint/50 bg-white/80 text-sm px-3 py-2 text-[#0b2723]/80"
                    >
                        <option>전체</option>
                        <option>신규</option>
                        <option>진행중</option>
                        <option>완료</option>
                    </select>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-3 text-[#1f3b37]/60" size={16} />
                        <input
                            type="text"
                            placeholder="검색 (회사명, 이메일, 내용)"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="pl-9 pr-4 py-2 rounded-lg border border-brand-mint/40 bg-white/80 text-sm text-[#0b2723]/80 focus:ring-2 focus:ring-brand-mint/40 outline-none w-[240px]"
                        />
                    </div>

                    <button
                        onClick={exportCSV}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-brand-mint/60 bg-white/90 hover:bg-brand-mintLight/70 text-brand-mintDark font-semibold text-sm shadow-[0_3px_8px_rgba(16,185,129,0.1)]"
                    >
                        <Download size={14} /> CSV 내보내기
                    </button>
                </div>
            </div>

            {/* ───────── 테이블 ───────── */}
            <div className="overflow-x-auto rounded-2xl border border-brand-mint/40 bg-white/90 shadow-[0_8px_25px_rgba(16,185,129,0.08)]">
                <table className="w-full text-left text-sm">
                    <thead className="bg-brand-mintLight/50 text-[#0b2723]/80">
                        <tr>
                            <th className="px-5 py-3 font-semibold">회사명</th>
                            <th className="px-5 py-3 font-semibold">이메일</th>
                            <th className="px-5 py-3 font-semibold">문의유형</th>
                            <th className="px-5 py-3 font-semibold">내용</th>
                            <th className="px-5 py-3 font-semibold">상태</th>
                            <th className="px-5 py-3 font-semibold">수신일시</th>
                            <th className="px-5 py-3 font-semibold text-center">조치</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length === 0 && (
                            <tr>
                                <td colSpan={7} className="text-center py-6 text-[#0b2723]/60">
                                    검색 결과가 없습니다.
                                </td>
                            </tr>
                        )}
                        {filteredData.map((q) => (
                            <tr
                                key={q.id}
                                className="border-t border-brand-mint/30 hover:bg-brand-mintLight/30 transition"
                            >
                                <td className="px-5 py-3 flex items-center gap-2">
                                    <Building2 size={14} className="text-brand-mintDark" />
                                    {q.company}
                                </td>
                                <td className="px-5 py-3 flex items-center gap-2">
                                    <Mail size={14} className="text-brand-mintDark" />
                                    {q.email}
                                </td>
                                <td className="px-5 py-3">{q.type}</td>
                                <td className="px-5 py-3 text-[#0b2723]/80 truncate max-w-[200px]">
                                    {q.message}
                                </td>
                                <td className="px-5 py-3">
                                    {q.status === "완료" ? (
                                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-100 text-emerald-700 text-xs font-semibold">
                                            <CheckCircle2 size={12} /> 완료
                                        </span>
                                    ) : q.status === "진행중" ? (
                                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-yellow-100 text-yellow-700 text-xs font-semibold">
                                            <AlertTriangle size={12} /> 진행중
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-gray-100 text-gray-600 text-xs font-semibold">
                                            신규
                                        </span>
                                    )}
                                </td>
                                <td className="px-5 py-3 text-xs text-[#0b2723]/60">
                                    {new Date(q.date).toLocaleString("ko-KR")}
                                </td>
                                <td className="px-5 py-3 text-center">
                                    {updating === q.id ? (
                                        <Loader2 className="animate-spin inline text-brand-mintDark" size={16} />
                                    ) : (
                                        <div className="flex justify-center gap-2">
                                            <button
                                                onClick={() => updateStatus(q.id, "진행중")}
                                                className="px-2 py-1 text-xs rounded-md bg-yellow-100 hover:bg-yellow-200 text-yellow-700 font-semibold"
                                            >
                                                진행중
                                            </button>
                                            <button
                                                onClick={() => updateStatus(q.id, "완료")}
                                                className="px-2 py-1 text-xs rounded-md bg-emerald-100 hover:bg-emerald-200 text-emerald-700 font-semibold"
                                            >
                                                완료
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
