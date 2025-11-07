"use client";
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Phone, FileText } from "lucide-react";

export default function Recruit(): JSX.Element {
    useEffect(() => window.scrollTo(0, 0), []);

    const [tab, setTab] = useState<"job" | "partner">("job");
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        field: "",
        message: "",
        file: null as File | null,
    });

    const fadeUp = (i = 0) => ({
        initial: { opacity: 0, y: 25 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.6, delay: i * 0.1 },
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleFile = (e: ChangeEvent<HTMLInputElement>) =>
        setForm({ ...form, file: e.target.files ? e.target.files[0] : null });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(
            tab === "job"
                ? "채용 문의가 접수되었습니다. 담당자가 검토 후 연락드리겠습니다."
                : "파트너 문의가 접수되었습니다. 담당 부서에서 확인 후 연락드리겠습니다."
        );
        setForm({
            name: "",
            email: "",
            company: "",
            field: "",
            message: "",
            file: null,
        });
    };

    return (
        <div className="min-h-screen bg-[#ecfdf5] text-[#0b2723] pt-32">
            {/* HEADER */}
            <section className="text-center py-24 px-6 md:px-16 bg-gradient-to-b from-[#f0fdfa] to-[#ecfdf5] border-b border-[#a7f3d0]">
                <motion.h1
                    {...fadeUp(0)}
                    className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
                >
                    채용 및 파트너 문의
                </motion.h1>
                <motion.p
                    {...fadeUp(0.2)}
                    className="text-lg md:text-xl text-[#1e3a34]/80 max-w-3xl mx-auto leading-relaxed"
                >
                    SFIN PAY는{" "}
                    <strong className="text-[#059669]">기술 중심의 결제 혁신</strong>을 함께
                    만들어갈 인재와 파트너를 찾고 있습니다.
                    <br />
                    민트빛 성장, 지금 함께하세요.
                </motion.p>
            </section>

            {/* TAB BUTTONS */}
            <section className="py-10 text-center bg-[#ecfdf5]/70 border-b border-[#a7f3d0]">
                <div className="inline-flex bg-[#ffffff] border border-[#a7f3d0]/60 rounded-full p-1 shadow-sm">
                    <button
                        onClick={() => setTab("job")}
                        className={`w-36 md:w-44 px-6 py-3 rounded-full font-semibold transition-all ${tab === "job"
                                ? "bg-gradient-to-r from-[#34d399] to-[#10b981] text-white shadow-md"
                                : "bg-transparent text-[#1e3a34]/80 hover:bg-[#d1fae5]/60 hover:text-[#059669]"
                            }`}
                    >
                        채용 문의
                    </button>
                    <button
                        onClick={() => setTab("partner")}
                        className={`w-36 md:w-44 px-6 py-3 rounded-full font-semibold transition-all ${tab === "partner"
                                ? "bg-gradient-to-r from-[#34d399] to-[#10b981] text-white shadow-md"
                                : "bg-transparent text-[#1e3a34]/80 hover:bg-[#d1fae5]/60 hover:text-[#059669]"
                            }`}
                    >
                        파트너 문의
                    </button>
                </div>

                <p className="text-[#1e3a34]/70 mt-4 text-sm md:text-base">
                    {tab === "job"
                        ? "SFIN PAY와 함께 성장할 민트빛 인재를 기다립니다."
                        : "함께 시너지를 낼 수 있는 파트너십을 제안해주세요."}
                </p>
            </section>

            {/* FORM */}
            <section className="pb-28 px-6 md:px-16 bg-gradient-to-b from-[#ecfdf5] to-[#ffffff] text-center">
                <motion.form
                    {...fadeUp(0.3)}
                    onSubmit={handleSubmit}
                    className="max-w-3xl mx-auto bg-white rounded-2xl shadow-[0_6px_25px_rgba(16,185,129,0.1)] border border-[#a7f3d0]/70 p-10 text-left"
                >
                    <h2 className="text-3xl font-bold mb-8 text-center text-[#0b2723]">
                        {tab === "job" ? "채용 문의" : "파트너 문의"}
                    </h2>

                    {tab === "partner" && (
                        <div className="mb-6">
                            <label className="block text-[#0b2723] font-medium mb-2">회사명</label>
                            <input
                                type="text"
                                name="company"
                                value={form.company}
                                onChange={handleChange}
                                required
                                placeholder="회사 또는 단체명을 입력하세요"
                                className="w-full px-4 py-3 border border-[#a7f3d0] rounded-lg focus:border-[#10b981] focus:outline-none"
                            />
                        </div>
                    )}

                    <div className="mb-6">
                        <label className="block text-[#0b2723] font-medium mb-2">이름</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="성함을 입력하세요"
                            className="w-full px-4 py-3 border border-[#a7f3d0] rounded-lg focus:border-[#10b981] focus:outline-none"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-[#0b2723] font-medium mb-2">이메일</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="example@sfinpay.com"
                            className="w-full px-4 py-3 border border-[#a7f3d0] rounded-lg focus:border-[#10b981] focus:outline-none"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-[#0b2723] font-medium mb-2">
                            {tab === "job" ? "지원 분야" : "제휴 분야"}
                        </label>
                        <input
                            type="text"
                            name="field"
                            value={form.field}
                            onChange={handleChange}
                            placeholder={
                                tab === "job" ? "예: 개발, 디자인, 운영 등" : "예: 금융기관, 가맹점, VAN 등"
                            }
                            className="w-full px-4 py-3 border border-[#a7f3d0] rounded-lg focus:border-[#10b981] focus:outline-none"
                        />
                    </div>

                    <div className="mb-8">
                        <label className="block text-[#0b2723] font-medium mb-2">
                            {tab === "job" ? "자기소개 / 경력 요약" : "제안 내용"}
                        </label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={5}
                            required
                            placeholder={
                                tab === "job"
                                    ? "자신의 경력, 관심 분야 등을 간단히 소개해주세요."
                                    : "제안 또는 문의 내용을 작성해주세요."
                            }
                            className="w-full px-4 py-3 border border-[#a7f3d0] rounded-lg focus:border-[#10b981] focus:outline-none resize-none"
                        />
                    </div>

                    {tab === "job" && (
                        <div className="mb-8">
                            <label className="block text-[#0b2723] font-medium mb-2">
                                이력서 / 포트폴리오 (선택)
                            </label>
                            <input
                                type="file"
                                name="file"
                                onChange={handleFile}
                                accept=".pdf,.doc,.docx"
                                className="w-full border border-dashed border-[#a7f3d0] rounded-lg px-4 py-3 text-[#1e3a34]/70 cursor-pointer"
                            />
                        </div>
                    )}

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-[#34d399] to-[#10b981] text-white font-semibold text-lg shadow-[0_8px_25px_rgba(16,185,129,0.25)]"
                    >
                        {tab === "job" ? <FileText size={20} /> : <Send size={20} />}
                        {tab === "job" ? "제출하기" : "문의 보내기"}
                    </motion.button>
                </motion.form>
            </section>

            {/* CONTACT INFO */}
            <section className="py-20 px-6 md:px-16 bg-[#ffffff] border-t border-[#a7f3d0] text-center">
                <motion.div {...fadeUp(0)} className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-[#0b2723] mb-8">기타 문의</h3>
                    <div className="flex flex-wrap justify-center gap-8 text-[#1e3a34]/85 text-lg">
                        <div className="flex items-center gap-3">
                            <Mail className="text-[#10b981]" size={22} />
                            <span>contact@sfinpay.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="text-[#10b981]" size={22} />
                            <span>02-123-4567</span>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
