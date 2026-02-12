export const budgetData = {
  totalExpenditure: 700020,
  revenueReceipts: 560964,
  fiscalDeficit: 136235,
  revenueDeficit: 45891,
  gsdP: 4939355,
  outstandingDebt: 824352, // Updated based on PRS 2024-25 analysis (~17-18% of GSDP)
  ladkiBahinAllocation: 36000,
  // Dynamic calculation: (Allocation in Cr * 1e7) / (1500 monthly * 12 months)
  ladkiBahinBeneficiaries: (36000 * 10000000) / (1500 * 12),
  statePopulation: 130000000, // 13 Cr approx
};

export const deficitTrend = [
  { year: '2023-24', fiscalDeficit: 111394, revenueDeficit: 19415 },
  { year: '2024-25', fiscalDeficit: 110355, revenueDeficit: 20124 },
  { year: '2025-26', fiscalDeficit: 136235, revenueDeficit: 45891 },
];

export const revenueBreakdown = [
  { name: 'State GST', value: 165000 },
  { name: 'State Excise', value: 24500 },
  { name: 'Stamp Duty', value: 50000 },
  { name: 'Central Transfers', value: 110000 },
  { name: 'Non-Tax Revenue', value: 25000 },
  { name: 'Other Taxes', value: 186464 },
];

export const sectorExpenditure = [
  { sector: 'Agriculture', amount: 45000 },
  { sector: 'Education', amount: 95000 },
  { sector: 'Health & FW', amount: 35000 },
  { sector: 'Social Welfare', amount: 65000 }, // Including Ladki Bahin in context
  { sector: 'Rural Dev.', amount: 48000 },
  { sector: 'Irrigation', amount: 42000 },
];

export type BudgetData = typeof budgetData;
