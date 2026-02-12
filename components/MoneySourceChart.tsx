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

interface MoneySourceChartProps {
    data: Array<{ name: string; value: number }>;
}

const COLORS = ['#0b1c3d', '#f47c20', '#64748b', '#94a3b8'];

const MoneySourceChart: React.FC<MoneySourceChartProps> = ({ data }) => {
    return (
        <div className="bg-white p-10 rounded-xl border border-gray-300 shadow-sm h-[500px]">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-10 text-center">
                Where Does the Money Come From?
            </h3>
            <div className="w-full h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            dataKey="value"
                            label={({ name, percent }) => `${((percent || 0) * 100).toFixed(0)}%`}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0' }}
                            formatter={(value: any) => [`₹ ${Number(value).toLocaleString()} Cr`, 'Amount']}
                        />
                        <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-8 text-center px-4">
                <p className="text-gray-500 text-sm italic font-normal">
                    "Maharashtra sarkar primarily earns through state taxes and central funds.
                    Borrowing helps fund large welfare projects and infrastructure."
                </p>
            </div>
        </div>
    );
};

export default MoneySourceChart;
