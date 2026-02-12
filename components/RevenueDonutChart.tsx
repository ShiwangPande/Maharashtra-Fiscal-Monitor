"use client";

import React from 'react';
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts';
import { revenueBreakdown } from '@/lib/data';

// High-contrast professional palette
const COLORS = [
    '#0b1c3d', // State GST (Navy)
    '#f47c20', // State Excise (Orange)
    '#166534', // Stamp Duty (Forest Green)
    '#f59e0b', // Central Transfers (Amber)
    '#4f46e5', // Non-Tax Revenue (Indigo)
    '#64748b', // Other Taxes (Slate)
];

const RevenueDonutChart: React.FC = () => {
    return (
        <div className="bg-white p-10 rounded-xl border border-gray-300 shadow-sm h-[550px]">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-10 text-center">
                Revenue Composition (₹ Cr)
            </h3>
            <div className="w-full h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={revenueBreakdown}
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={120}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {revenueBreakdown.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                            formatter={(value: any) => [`₹ ${Number(value).toLocaleString()} Cr`, 'Revenue']}
                        />
                        <Legend
                            layout="horizontal"
                            verticalAlign="bottom"
                            align="center"
                            wrapperStyle={{ paddingTop: '40px' }}
                            iconType="circle"
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <p className="text-gray-400 text-[10px] mt-12 uppercase tracking-[0.2em] font-bold text-center opacity-60">
                Projected Revenue Receipts by Major Head
            </p>
        </div>
    );
};

export default RevenueDonutChart;
