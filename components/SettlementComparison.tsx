'use client';
import React from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    BarChart,
    Bar,
} from 'recharts';

type SettlementData = {
    name: string;
    ours: number;
    others: number;
};

interface SettlementComparisonProps {
    data?: SettlementData[];
}

export default function SettlementComparison({
    data = [],
}: SettlementComparisonProps): JSX.Element {
    const sample: SettlementData[] = data.length
        ? data
        : [
            { name: '1월', ours: 1.4, others: 1.7 },
            { name: '2월', ours: 1.3, others: 1.6 },
            { name: '3월', ours: 1.2, others: 1.55 },
            { name: '4월', ours: 1.25, others: 1.5 },
        ];

    return (
        <div className="grid md:grid-cols-2 gap-8">
            {/* 📈 라인차트 */}
            <div className="h-72 bg-white rounded-xl border border-[#C4F7EC] shadow-[0_6px_20px_rgba(0,184,148,0.08)] p-4">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sample}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E6FFFA" />
                        <XAxis dataKey="name" tick={{ fill: '#0B4D45' }} />
                        <YAxis tick={{ fill: '#0B4D45' }} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#F3FFFC',
                                border: '1px solid #C4F7EC',
                            }}
                        />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="ours"
                            name="SFIN 정산"
                            stroke="#00b894"
                            strokeWidth={3}
                            dot={{ r: 5, stroke: '#00c89b', fill: '#00b894' }}
                        />
                        <Line
                            type="monotone"
                            dataKey="others"
                            name="타사 정산"
                            stroke="#A7ECDD"
                            strokeWidth={2}
                            dot={{ r: 4, stroke: '#A7ECDD', fill: '#A7ECDD' }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* 📊 막대차트 */}
            <div className="h-72 bg-white rounded-xl border border-[#C4F7EC] shadow-[0_6px_20px_rgba(0,184,148,0.08)] p-4">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sample}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E6FFFA" />
                        <XAxis dataKey="name" tick={{ fill: '#0B4D45' }} />
                        <YAxis tick={{ fill: '#0B4D45' }} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#F3FFFC',
                                border: '1px solid #C4F7EC',
                            }}
                        />
                        <Legend />
                        <Bar
                            dataKey="ours"
                            name="SFIN 정산"
                            fill="#00b894"
                            radius={[6, 6, 0, 0]}
                        />
                        <Bar
                            dataKey="others"
                            name="타사 정산"
                            fill="#A7ECDD"
                            radius={[6, 6, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
