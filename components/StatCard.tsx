import React from 'react';
import { formatCurrency, formatPercentage } from '@/lib/calculations';

interface StatCardProps {
    label: string;
    value: number;
    description?: string;
    isPercentage?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, description, isPercentage }) => {
    return (
        <div className="bg-white p-8 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between h-full">
            <div>
                <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-4">
                    {label}
                </p>
                <p className="text-2xl font-semibold text-primary">
                    {isPercentage ? formatPercentage(value) : formatCurrency(value)}
                </p>
            </div>
            {description && (
                <p className="text-gray-400 text-xs mt-6 font-medium">
                    {description}
                </p>
            )}
        </div>
    );
};

export default StatCard;
