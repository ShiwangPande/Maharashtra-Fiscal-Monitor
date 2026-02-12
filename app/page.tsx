"use client";

import React, { useState } from 'react';
import Header from "@/components/Header";
import StatCard from "@/components/StatCard";
import BurdenIndicator from "@/components/BurdenIndicator";
import FiscalChart from "@/components/FiscalChart";
import DeficitTrendChart from "@/components/DeficitTrendChart";
import RevenueDonutChart from "@/components/RevenueDonutChart";
import SectorExpenditureChart from "@/components/SectorExpenditureChart";
import MoneySourceChart from "@/components/MoneySourceChart";
import RupeeBar from "@/components/RupeeBar";
import ScenarioAnalysis from "@/components/ScenarioAnalysis";
import ReallocationSimulation from "@/components/ReallocationSimulation";
import Disclaimer from "@/components/Disclaimer";
import { budgetData } from "@/lib/data";
import { calculateMetrics } from "@/lib/calculations";

type DashboardMode = 'analyst' | 'simple';

export default function Home() {
  const [mode, setMode] = useState<DashboardMode>('analyst');
  const metrics = calculateMetrics();

  const isSimple = mode === 'simple';

  return (
    <main className="min-h-screen bg-white pb-32">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
        {/* Data Source Badge - Repositioned for Mobile */}
        <div className="flex justify-center sm:block">
          <div className="mt-8 sm:mt-0 sm:absolute sm:top-12 sm:right-8 flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
              Source: MH Budget 2025-26 (PRS)
            </span>
          </div>
        </div>
        {/* Mode Switcher */}
        <div className="flex justify-center mt-8 sm:mt-12">
          <div className="bg-white p-1 rounded-full border border-gray-300 shadow-sm flex items-center w-full max-w-[320px] sm:w-auto">
            <button
              onClick={() => setMode('analyst')}
              className={`flex-1 sm:flex-none px-4 sm:px-8 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all ${mode === 'analyst' ? 'bg-primary text-white shadow-md' : 'text-gray-400 hover:text-primary'}`}
            >
              Analyst
            </button>
            <button
              onClick={() => setMode('simple')}
              className={`flex-1 sm:flex-none px-4 sm:px-8 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all ${mode === 'simple' ? 'bg-primary text-white shadow-md' : 'text-gray-400 hover:text-primary'}`}
            >
              Simple
            </button>
          </div>
        </div>

        {/* Section 1: Key Statistics */}
        <section className="py-12 sm:py-24">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">
            {isSimple ? "Government Ki Kamai aur Kharcha (₹ Cr)" : "Key Expenditure & Revenue (₹ Cr)"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <StatCard
              label={isSimple ? "Sarkar ka total kharcha" : "Total Expenditure"}
              value={budgetData.totalExpenditure}
              description={isSimple ? "Maharashtra sarkar jitna paisa kharch karti hai" : "Aggregated state budget outflow"}
            />
            <StatCard
              label={isSimple ? "Sarkar ki total kamai" : "Revenue Receipts"}
              value={budgetData.revenueReceipts}
              description={isSimple ? "Tax aur central funds se aane wala paisa" : "Total projected revenue collections"}
            />
            <StatCard
              label="Ladki Bahin Allocation"
              value={budgetData.ladkiBahinAllocation}
              description="Dedicated female welfare scheme funding"
            />
          </div>
        </section>
      </div>

      {/* Alternative Background for Health Overview */}
      <div className="bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <section className="py-12 sm:py-24">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">
              {isSimple ? "Sarkar par loan kitna hai?" : "Fiscal Health Overview"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <StatCard
                label={isSimple ? "Hume kitna loan lena padega?" : "Fiscal Deficit"}
                value={budgetData.fiscalDeficit}
                description={isSimple ? "Kamai aur kharche ke beech ka farak" : "Gap between total income and expenditure"}
              />
              <StatCard
                label={isSimple ? "Kamai se kitna zyada kharcha" : "Revenue Deficit"}
                value={budgetData.revenueDeficit}
                description={isSimple ? "Sarkar kamai se kitna zyada kharch kar rahi hai" : "Gap between revenue income and expenditure"}
              />
              <StatCard
                label={isSimple ? "Borrowing as % of State Economy" : "Deficit % of GSDP"}
                value={metrics.fiscalDeficitGsdpRatio}
                description={isSimple ? "State ki income ke mukable kitna borrow kiya" : "Revenue gap as share of state economy"}
                isPercentage={true}
              />
              <StatCard
                label={isSimple ? "Total Loan vs Yearly Income" : "Debt % of GSDP"}
                value={metrics.debtGsdpRatio}
                description={isSimple ? "Rajya ki total kamai aur loan ka comparison" : "Total outstanding debt relative to GSDP"}
                isPercentage={true}
              />
            </div>
          </section>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Simple Mode Exclusive: Money Distribution */}
        {isSimple && (
          <>
            <section className="py-16">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-10 text-center">
                Kamai aur Yojana ka Bojh (Deep Dive)
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <RupeeBar schemePercentage={metrics.percentOfRevenue} />
                <MoneySourceChart data={metrics.moneySourceComposition} />
              </div>
            </section>
            <div className="border-t border-gray-200" />
          </>
        )}

        {/* Section 3: Fiscal Burden Indicators */}
        <section className="py-12 sm:py-24">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-12 text-center">
            {isSimple ? "Scheme ka sarkari tijori par asar" : "Scheme Fiscal Burden Analysis"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <BurdenIndicator
              label={isSimple ? "Budget ka kitna % kharch" : "% of Total Budget"}
              value={metrics.percentOfBudget}
            />
            <BurdenIndicator
              label={isSimple ? "Kamai ka kitna % kharch" : "% of Revenue Receipts"}
              value={metrics.percentOfRevenue}
            />
            <BurdenIndicator
              label={isSimple ? "Deficit mein scheme ka share" : "% of Revenue Deficit"}
              value={metrics.percentOfRevenueDeficit}
            />
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-500 text-sm leading-relaxed font-normal opacity-80">
              {isSimple
                ? "Maharashtra sarkar har ₹100 kamati hai. Usme se lagbhag ₹6 is yojana par kharch hote hain. Iska matlab yeh scheme rajya ke total kharch ka ek chhota lekin mahatvapurna hissa hai."
                : "The fiscal burden analysis evaluates the Majhi Ladki Bahin Yojana's weight against key state financial pillars. Allocating ₹36,000 Cr represents a significant commitment of revenue receipts, requiring careful calibration of the state's revenue deficit targets to maintain long-term fiscal stability."
              }
            </p>
          </div>
        </section>
      </div>

      <div className="bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* New Section 4: Beneficiary Metrics */}
          <section className="py-12 sm:py-24">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">
              {isSimple ? "Citizen par kitna bojh?" : "Beneficiary Metrics & Cost Analysis"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <StatCard
                label={isSimple ? "Har citizen par annual bojh" : "Annual Cost Per Citizen"}
                value={metrics.costPerCitizen}
                description={isSimple ? "Pure population mein har insaan par kitna kharcha pad raha hai" : "Based on 13 Cr state population"}
              />
              <StatCard
                label={isSimple ? "Har Labharthi ko kitna milega" : "Annual Cost Per Beneficiary"}
                value={metrics.costPerBeneficiary}
                description="Calculated based on 2.0 Cr total beneficiaries"
              />
              <StatCard
                label={isSimple ? "Total Salana Kharch" : "Total Annual Scheme Cost"}
                value={metrics.totalAnnualSchemeCost}
                description="Projected annual expenditure for scheme"
              />
            </div>
          </section>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section 5: Visual Analytics & Deep Dives */}
        {!isSimple && (
          <section className="py-12 sm:py-24">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">
              Deep-Dive Visual Analytics
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Historical Deficit Path</h3>
                <DeficitTrendChart />
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Revenue Stream Diversification</h3>
                <RevenueDonutChart />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Sectoral Expenditure Outlay</h3>
                <SectorExpenditureChart />
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Scheme Allocation Context</h3>
                <FiscalChart />
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Scenario Analysis with darker background */}
      <div className="bg-[#f1f5f9] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <section className="py-12 sm:py-24">
            <ScenarioAnalysis mode={mode} metrics={metrics} />
          </section>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section 7: Reallocation Simulation */}
        <section className="py-12 sm:py-24">
          <ReallocationSimulation reallocationImpact={metrics.reallocationImpact} />
        </section>
      </div>

      <Disclaimer />

      <footer className="max-w-7xl mx-auto px-4 sm:px-8 mt-12 py-12 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-[10px] sm:text-xs uppercase tracking-widest font-semibold gap-6 text-center md:text-left">
          <p>
            &copy; 2026 Maharashtra Fiscal Monitor
          </p>
          <p>
            Data Source: Maharashtra Budget 2025-26 (PRS Legislative Research)
          </p>
        </div>
      </footer>
    </main>
  );
}
