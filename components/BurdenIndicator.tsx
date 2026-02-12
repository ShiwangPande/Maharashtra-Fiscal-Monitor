import React from 'react';
import { formatPercentage } from '@/lib/calculations';

interface BurdenIndicatorProps {
    label: string;
    value: number;
}

const BurdenIndicator: React.FC<BurdenIndicatorProps> = ({ label, value }) => {
    return (
        <div className="bg-white rounded-lg border border-gray-300 shadow-sm overflow-hidden flex flex-col h-full">
            <div className="h-1 bg-accent w-full" />
            <div className="p-8 flex flex-col items-center justify-center flex-grow text-center">
                <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-6">
                    {label}
                </p>
                <p className="text-4xl font-bold text-accent">
                    {formatPercentage(value)}
                </p>
            </div>
        </div>
    );
};

export default BurdenIndicator;
