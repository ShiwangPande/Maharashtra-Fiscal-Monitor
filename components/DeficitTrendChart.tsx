"use client";

import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts';
import { deficitTrend } from '@/lib/data';

const DeficitTrendChart: React.FC = () => {
    return (
        <div className="bg-white p-6 sm:p-10 rounded-xl border border-gray-300 shadow-sm h-[450px] sm:h-[500px] transition-all duration-300">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-10">
                Deficit Trends (₹ Cr)
            </h3>
            <div className="w-full h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={deficitTrend} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis
                            dataKey="year"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
                            dy={15}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94a3b8', fontSize: 11 }}
                            tickFormatter={(value) => `₹${(value / 1000).toLocaleString()}k`}
                        />
                        <Tooltip
                            contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                            formatter={(value: any) => [`₹ ${Number(value).toLocaleString()} Cr`, '']}
                        />
                        <Legend verticalAlign="top" height={36} iconType="circle" />
                        <Line
                            type="monotone"
                            dataKey="fiscalDeficit"
                            name="Fiscal Deficit"
                            stroke="#0b1c3d"
                            strokeWidth={3}
                            dot={{ r: 6, fill: '#0b1c3d' }}
                            activeDot={{ r: 8 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="revenueDeficit"
                            name="Revenue Deficit"
                            stroke="#94a3b8"
                            strokeWidth={3}
                            dot={{ r: 6, fill: '#94a3b8' }}
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <p className="text-gray-400 text-[10px] mt-8 uppercase tracking-[0.2em] font-bold text-center opacity-60">
                Historical Deficit Trend Analysis (2023-2026)
            </p>
        </div>
    );
};

export default DeficitTrendChart;
