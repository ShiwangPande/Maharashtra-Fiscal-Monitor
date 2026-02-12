"use client";

import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell
} from 'recharts';
import { budgetData } from '@/lib/data';

const FiscalChart: React.FC = () => {
    const chartData = [
        { name: 'Total Budget', value: budgetData.totalExpenditure },
        { name: 'Revenue Receipts', value: budgetData.revenueReceipts },
        { name: 'Ladki Bahin', value: budgetData.ladkiBahinAllocation },
    ];

    const formatYAxis = (value: number) => {
        return `₹${(value / 1000).toLocaleString()}k`;
    };

    return (
        <div className="bg-white p-6 sm:p-10 rounded-xl border border-gray-300 shadow-sm h-[450px] sm:h-[500px] transition-all duration-300">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-10">
                Fiscal Comparison (₹ Cr)
            </h3>
            <div className="w-full h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
                            dy={15}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94a3b8', fontSize: 11 }}
                            tickFormatter={formatYAxis}
                        />
                        <Tooltip
                            cursor={{ fill: '#f8fafc' }}
                            contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                            formatter={(value: any) => [`₹ ${Number(value).toLocaleString()} Cr`, 'Value']}
                        />
                        <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={45}>
                            {chartData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.name === 'Ladki Bahin' ? '#f47c20' : '#0b1c3d'}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <p className="text-gray-400 text-[10px] mt-8 uppercase tracking-[0.2em] font-bold text-center opacity-60">
                Data source: Maharashtra State Budget 2025-26 (PRS Legislative Research)
            </p>
        </div>
    );
};

export default FiscalChart;
