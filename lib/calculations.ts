import { budgetData } from "./data";

export interface FiscalMetrics {
    percentOfBudget: number;
    percentOfRevenue: number;
    percentOfRevenueDeficit: number;
    fiscalDeficitGsdpRatio: number;
    debtGsdpRatio: number;
    costPerBeneficiary: number;
    totalAnnualSchemeCost: number;
    costPerCitizen: number;
    revenueDeficitWithoutScheme: number;
    fiscalDeficitWithoutScheme: number;
    revenueDeficitReductionPercent: number;
    fiscalDeficitReductionPercent: number;
    moneySourceComposition: Array<{ name: string; value: number }>;
    reallocationImpact: {
        education: { colleges: number; description: string };
        health: { hospitals: number; description: string };
        infrastructure: { expresswayKm: number; description: string };
    };
}

export function calculateMetrics(): FiscalMetrics {
    const {
        totalExpenditure,
        revenueReceipts,
        revenueDeficit,
        ladkiBahinAllocation,
        gsdP,
        outstandingDebt,
        ladkiBahinBeneficiaries
    } = budgetData;

    const percentOfBudget = (ladkiBahinAllocation / totalExpenditure) * 100;
    const percentOfRevenue = (ladkiBahinAllocation / revenueReceipts) * 100;
    const percentOfRevenueDeficit = (ladkiBahinAllocation / revenueDeficit) * 100;

    const fiscalDeficitGsdpRatio = (budgetData.fiscalDeficit / gsdP) * 100;
    const debtGsdpRatio = (outstandingDebt / gsdP) * 100;

    // Monthly to Annual calculation
    const costPerBeneficiary = (ladkiBahinAllocation * 10000000) / ladkiBahinBeneficiaries;
    const totalAnnualSchemeCost = ladkiBahinAllocation;

    // Per Citizen Calculation: (Allocation in Cr * 1e7) / Population
    const costPerCitizen = (ladkiBahinAllocation * 10000000) / budgetData.statePopulation;

    // Simplified assumption: scheme fully contributes to revenue expenditure
    // This simplified scenario assumes full removal of scheme expenditure without behavioral or economic adjustments.
    const revenueDeficitWithoutScheme = revenueDeficit - ladkiBahinAllocation;
    const fiscalDeficitWithoutScheme = budgetData.fiscalDeficit - ladkiBahinAllocation;

    const revenueDeficitReductionPercent = (ladkiBahinAllocation / revenueDeficit) * 100;
    const fiscalDeficitReductionPercent = (ladkiBahinAllocation / budgetData.fiscalDeficit) * 100;

    // Unit costs for reallocation simulation (approximate institutional estimates)
    const UNIT_COSTS = {
        DEGREE_COLLEGE: 150, // ₹150 Cr per college
        DISTRICT_HOSPITAL: 450, // ₹450 Cr per 500-bed hospital
        EXPRESSWAY_KM: 100, // ₹100 Cr per km of 6-lane expressway
    };

    const reallocationImpact = {
        education: {
            colleges: Math.floor(ladkiBahinAllocation / UNIT_COSTS.DEGREE_COLLEGE),
            description: "New Degree Colleges (Infrastructure & Initial Setup)"
        },
        health: {
            hospitals: Math.floor(ladkiBahinAllocation / UNIT_COSTS.DISTRICT_HOSPITAL),
            description: "Super-Specialty District Hospitals (500-bed capacity)"
        },
        infrastructure: {
            expresswayKm: Math.floor(ladkiBahinAllocation / UNIT_COSTS.EXPRESSWAY_KM),
            description: "Km of 6-lane Greenfield Expressway"
        }
    };

    // Money Source Composition for Simple Mode
    const moneySourceComposition = [
        { name: 'State Taxes (GST, Excise, etc.)', value: 165000 + 24500 + 50000 + 186464 },
        { name: 'Central Funds', value: 110000 },
        { name: 'Non-Tax Revenue', value: 25000 },
        { name: 'Borrowing Needed', value: budgetData.fiscalDeficit },
    ];

    return {
        percentOfBudget,
        percentOfRevenue,
        percentOfRevenueDeficit,
        fiscalDeficitGsdpRatio,
        debtGsdpRatio,
        costPerBeneficiary,
        totalAnnualSchemeCost,
        costPerCitizen,
        revenueDeficitWithoutScheme,
        fiscalDeficitWithoutScheme,
        revenueDeficitReductionPercent,
        fiscalDeficitReductionPercent,
        moneySourceComposition,
        reallocationImpact
    };
}

export function formatCurrency(value: number): string {
    // Assuming the values are in Crores as per typical Indian budget documents
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
    }).format(value).replace('₹', '₹ ');
}

export function formatPercentage(value: number): string {
    return value.toFixed(2) + "%";
}
