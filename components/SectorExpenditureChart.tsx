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
import { sectorExpenditure } from '@/lib/data';

const SectorExpenditureChart: React.FC = () => {
    return (
        <div className="bg-white p-6 sm:p-10 rounded-xl border border-gray-300 shadow-sm h-[450px] sm:h-[500px] transition-all duration-300">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-10">
                Sector-wise Expenditure (₹ Cr)
            </h3>
            <div className="w-full h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        layout="vertical"
                        data={sectorExpenditure}
                        margin={{ top: 10, right: 30, left: 40, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                        <XAxis
                            type="number"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94a3b8', fontSize: 11 }}
                            tickFormatter={(value) => `₹${(value / 1000).toLocaleString()}k`}
                        />
                        <YAxis
                            dataKey="sector"
                            type="category"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#475569', fontSize: 12, fontWeight: 600 }}
                            width={100}
                        />
                        <Tooltip
                            cursor={{ fill: '#f8fafc' }}
                            contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                            formatter={(value: any) => [`₹ ${Number(value).toLocaleString()} Cr`, 'Expenditure']}
                        />
                        <Bar dataKey="amount" radius={[0, 6, 6, 0]} barSize={25} fill="#0b1c3d">
                            {sectorExpenditure.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={index === 1 ? '#0b1c3d' : '#64748b'} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <p className="text-gray-400 text-[10px] mt-8 uppercase tracking-[0.2em] font-bold text-center opacity-60">
                Consolidated Sectoral Outlays (Top Categories)
            </p>
        </div>
    );
};

export default SectorExpenditureChart;
