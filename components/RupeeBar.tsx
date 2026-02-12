"use client";

import React from 'react';

interface RupeeBarProps {
    schemePercentage: number;
}

const RupeeBar: React.FC<RupeeBarProps> = ({ schemePercentage }) => {
    const roundedPercent = Math.round(schemePercentage);
    const remaining = 100 - roundedPercent;

    return (
        <div className="bg-white p-10 rounded-xl border border-gray-300 shadow-sm">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">
                Out of ₹100 earned by Maharashtra
            </h3>

            <div className="relative h-12 w-full bg-gray-100 rounded-full overflow-hidden flex shadow-inner border border-gray-200">
                <div
                    className="h-full bg-accent flex items-center justify-center text-white text-xs font-bold transition-all duration-1000"
                    style={{ width: `${roundedPercent}%` }}
                >
                    {roundedPercent > 5 && `₹${roundedPercent}`}
                </div>
                <div className="h-full flex-grow flex items-center justify-center text-gray-400 text-xs font-medium">
                    ₹{remaining} for All Other Government Spending
                </div>
            </div>

            <div className="mt-8 flex justify-between items-start gap-12">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-accent rounded-full" />
                        <span className="text-sm font-semibold text-primary">₹{roundedPercent} for Ladki Bahin</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed font-normal">
                        Sarkar har ₹100 kamati hai, usme se ₹{roundedPercent} is yojana par kharch ho rahe hain.
                        Yeh scheme rajya ke total kamai ka ek mahatvapurna hissa hai.
                    </p>
                </div>
                <div className="flex-1 opacity-60">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-gray-300 rounded-full" />
                        <span className="text-sm font-semibold text-gray-600">₹{remaining} for Others</span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed font-normal">
                        The rest goes towards roads, schools, hospitals, and other state expenses.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RupeeBar;
