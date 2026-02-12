"use client";

import React from 'react';
import { formatCurrency, formatPercentage } from '@/lib/calculations';
import { budgetData } from '@/lib/data';

interface ScenarioAnalysisProps {
    mode: 'analyst' | 'simple';
    metrics: {
        revenueDeficitWithoutScheme: number;
        fiscalDeficitWithoutScheme: number;
        revenueDeficitReductionPercent: number;
        fiscalDeficitReductionPercent: number;
    };
}

const ScenarioAnalysis: React.FC<ScenarioAnalysisProps> = ({ mode, metrics }) => {
    const isSimple = mode === 'simple';

    return (
        <div className="bg-white p-6 sm:p-10 rounded-xl border border-gray-200 shadow-sm mt-12 sm:mt-16 transition-all duration-300">
            <div className="mb-12">
                <h2 className="text-xl font-bold text-primary mb-2">
                    Scenario Analysis: If Scheme Is Discontinued
                </h2>
                <p className="text-sm text-gray-500 font-normal">
                    Counterfactual fiscal comparison under simplified assumptions
                </p>
            </div>

            {/* Comparative Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Revenue Deficit Comparison */}
                <div className="p-8 rounded-xl border border-gray-100 bg-gray-50/50">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
                        {isSimple ? "Government Earning vs Spending" : "Revenue Deficit"}
                    </h3>
                    <div className="space-y-6">
                        <div className="flex justify-between items-end">
                            <span className="text-xs text-gray-500 font-medium">Current</span>
                            <span className="text-2xl font-bold text-primary">{formatCurrency(budgetData.revenueDeficit)} Cr</span>
                        </div>
                        <div className="flex justify-between items-end">
                            <span className="text-xs text-gray-500 font-medium">Without Scheme</span>
                            <span className="text-2xl font-bold text-gray-600">{formatCurrency(metrics.revenueDeficitWithoutScheme)} Cr</span>
                        </div>
                        <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Potential Reduction</span>
                            <span className="text-sm font-bold text-accent">-{formatPercentage(metrics.revenueDeficitReductionPercent)}</span>
                        </div>
                    </div>
                </div>

                {/* Fiscal Deficit Comparison */}
                <div className="p-8 rounded-xl border border-gray-100 bg-gray-50/50">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
                        {isSimple ? "Total Money Needed to Borrow" : "Fiscal Deficit"}
                    </h3>
                    <div className="space-y-6">
                        <div className="flex justify-between items-end">
                            <span className="text-xs text-gray-500 font-medium">Current</span>
                            <span className="text-2xl font-bold text-primary">{formatCurrency(budgetData.fiscalDeficit)} Cr</span>
                        </div>
                        <div className="flex justify-between items-end">
                            <span className="text-xs text-gray-500 font-medium">Without Scheme</span>
                            <span className="text-2xl font-bold text-gray-600">{formatCurrency(metrics.fiscalDeficitWithoutScheme)} Cr</span>
                        </div>
                        <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Potential Reduction</span>
                            <span className="text-sm font-bold text-accent">-{formatPercentage(metrics.fiscalDeficitReductionPercent)}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dual-Column Explanation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10 border-t border-gray-100">
                <div>
                    <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
                        Government Fiscal Impact
                    </h4>
                    <div className="text-sm text-gray-600 leading-relaxed space-y-4 font-normal">
                        {isSimple ? (
                            <>
                                <p>• Sarkar ki total kamai aur kharche ke beech ka farak kam ho sakta hai.</p>
                                <p>• Naye loan lene ki zaroorat (borrowing) kam hogi, jisse rajya ki arthvyavastha par dabav kam ho sakta hai.</p>
                                <p>• Dusre infrastructure projects jaise roads aur bridges ke liye zyada fund bach sakta hai.</p>
                            </>
                        ) : (
                            <>
                                <p>• Removal of the allocation would lead to an immediate compression of the revenue deficit, potentially improving the state's credit trajectory.</p>
                                <p>• Fiscal space expansion would allow for higher capital expenditure or direct debt retirement.</p>
                                <p>• Reduced borrowing requirements lowers the interest burden in subsequent fiscal cycles.</p>
                            </>
                        )}
                    </div>
                </div>
                <div>
                    <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
                        Household Income Impact
                    </h4>
                    <div className="text-sm text-gray-600 leading-relaxed space-y-4 font-normal">
                        {isSimple ? (
                            <>
                                <p>• Lagbhag 2 crore mahilaon ko milne wala ₹1,500 prati mahina ka direct support band ho jayega.</p>
                                <p>• Gharon mein rozana ki zarooraton ke liye aane wala extra paisa kam hoga, jisse bazaar mein kharidari par asar pad sakta hai.</p>
                                <p>• Kam aamdani wale parivaron ke liye yeh ek bada arthik nuksan ho sakta hai.</p>
                            </>
                        ) : (
                            <>
                                <p>• Discontinuation would result in a direct withdrawal of ₹36,000 Cr from household consumption pools across the state.</p>
                                <p>• Loss of predictable liquidity for approximately 2 crore beneficiaries could impact local retail and micro-consumption sectors.</p>
                                <p>• Socio-economic support buffers for lower-income groups would be removed, potentially increasing reliance on other welfare safety nets.</p>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-12 pt-8 border-t border-gray-100 text-center">
                <p className="text-[10px] text-gray-400 font-medium italic">
                    Note: This simplified scenario assumes full removal of scheme expenditure without behavioral or economic adjustments.
                </p>
            </div>
        </div>
    );
};

export default ScenarioAnalysis;
