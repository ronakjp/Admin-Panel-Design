type YearlyData = {
  Revenue: number[];
  Expense: number[];
};

type FinancialData = {
  [year: string]: YearlyData;
};

export const lineChartData: FinancialData = {
  "2023": {
    Revenue: [
      45000, 52000, 48000, 61000, 55000, 67000, 72000, 69000, 75000, 80000,
      85000, 92000,
    ],
    Expense: [
      41000, 42000, 32000, 77000, 45000, 61000, 70000, 99000, 1000, 30000,
      81000, 85000,
    ],
  },
  "2022": {
    Revenue: [
      35000, 42000, 38000, 51000, 40000, 57000, 62000, 5900, 65000, 70000,
      75000, 82000,
    ],
    Expense: [
      33000, 32000, 66000, 88000, 400, 71000, 63000, 19000, 100000, 70000,
      22000, 35000,
    ],
  },
};

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
