"use client";

import React, { useState } from 'react';
import { formatCurrency } from '@/lib/calculations';
import { budgetData } from '@/lib/data';

interface ReallocationSimulationProps {
    reallocationImpact: {
        education: { colleges: number; description: string };
        health: { hospitals: number; description: string };
        infrastructure: { expresswayKm: number; description: string };
    };
}

type SimulationCategory = 'education' | 'health' | 'infrastructure';

const ReallocationSimulation: React.FC<ReallocationSimulationProps> = ({ reallocationImpact }) => {
    const [category, setCategory] = useState<SimulationCategory>('education');

    const categories: { id: SimulationCategory; label: string; icon: string }[] = [
        { id: 'education', label: 'Education', icon: '🎓' },
        { id: 'health', label: 'Healthcare', icon: '🏥' },
        { id: 'infrastructure', label: 'Infrastructure', icon: '🛣️' },
    ];

    const currentImpact = reallocationImpact[category];

    let unitValue: number;
    let unitLabel: string;

    if (category === 'education') {
        unitValue = (currentImpact as { colleges: number }).colleges;
        unitLabel = 'Colleges';
    } else if (category === 'health') {
        unitValue = (currentImpact as { hospitals: number }).hospitals;
        unitLabel = 'Hospitals';
    } else {
        unitValue = (currentImpact as { expresswayKm: number }).expresswayKm;
        unitLabel = 'Kilometers';
    }

    return (
        <div className="bg-white p-6 sm:p-10 rounded-xl border border-gray-200 shadow-sm transition-all duration-300">
            <div className="mb-8 sm:mb-10 text-center">
                <h2 className="text-lg sm:text-xl font-bold text-primary mb-2">
                    Reallocation Simulation
                </h2>
                <p className="text-[10px] sm:text-sm text-gray-400 font-normal">
                    Equivalent spending examples for ₹{formatCurrency(budgetData.ladkiBahinAllocation)} Cr
                </p>
            </div>

            <div className="flex justify-center mb-10 sm:mb-12">
                <div className="bg-gray-50 p-1 rounded-xl border border-gray-200 flex flex-wrap justify-center gap-1 sm:gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setCategory(cat.id)}
                            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-[10px] sm:text-sm font-bold transition-all flex items-center gap-2 ${category === cat.id
                                    ? 'bg-white text-primary shadow-sm ring-1 ring-gray-200'
                                    : 'text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            <span>{cat.icon}</span>
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-2xl mx-auto bg-blue-50/50 border border-blue-100 rounded-2xl p-8 sm:p-12 text-center">
                <div className="mb-4">
                    <span className="text-4xl sm:text-5xl font-black text-primary tracking-tight">
                        {unitValue.toLocaleString()}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-primary ml-2 sm:ml-3 uppercase tracking-widest opacity-60">
                        {unitLabel}
                    </span>
                </div>
                <p className="text-[11px] sm:text-sm text-blue-900/70 font-medium mb-6 sm:mb-8">
                    {currentImpact.description}
                </p>
                <div className="pt-6 sm:pt-8 border-t border-blue-100">
                    <p className="text-[9px] sm:text-[10px] text-blue-800/50 uppercase tracking-[0.2em] font-bold">
                        Institutional Equivalence Projection
                    </p>
                </div>
            </div>

            <div className="mt-10 text-center">
                <p className="text-[10px] text-gray-400 font-medium italic opacity-70">
                    Note: These figures are illustrative equivalencies based on average institutional unit costs and do not constitute policy recommendations.
                </p>
            </div>
        </div>
    );
};

export default ReallocationSimulation;
