'use client';
import React, { useState } from 'react';

interface SecurityPolicyPDFGeneratorProps {
    targetSelector?: string;
}

export default function SecurityPolicyPDFGenerator({
    targetSelector = '#security-policy',
}: SecurityPolicyPDFGeneratorProps): JSX.Element {
    const [busy, setBusy] = useState(false);

    const handleGenerate = async (): Promise<void> => {
        setBusy(true);
        try {
            const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
                import('html2canvas'),
                import('jspdf'),
            ]);

            const el = document.querySelector(targetSelector);
            if (!el) throw new Error('대상 요소를 찾을 수 없습니다.');

            const canvas = await html2canvas(el as HTMLElement, {
                scale: 2,
                useCORS: true,
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');

            const pageWidth = pdf.internal.pageSize.getWidth();
            const imgWidth = pageWidth;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            let remaining = imgHeight;

            while (remaining > 0) {
                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                remaining -= pdf.internal.pageSize.getHeight();
                if (remaining > 0) pdf.addPage();
            }

            pdf.save('security-policy.pdf');
        } catch (error) {
            console.error(error);
            alert('PDF 생성 중 오류가 발생했습니다.');
        } finally {
            setBusy(false);
        }
    };

    return (
        <button
            onClick={handleGenerate}
            disabled={busy}
            className="bg-[#00b894] text-white px-4 py-2 rounded-lg hover:bg-[#00a884] disabled:opacity-60 transition"
        >
            {busy ? '생성 중...' : 'PDF로 저장'}
        </button>
    );
}
