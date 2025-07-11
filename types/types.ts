export type inputType = {
  q: string;
  p1: string;
  interval:
    | "1m"
    | "2m"
    | "5m"
    | "15m"
    | "30m"
    | "60m"
    | "90m"
    | "1h"
    | "1d"
    | "5d"
    | "1wk"
    | "1mo"
    | "3mo"
    | undefined;
};

export type Quote = {
  date: Date;
  high: number | null;
  low: number | null;
  open: number | null;
  close: number | null;
};

export type ResponseType<APIChartData, APIQuoteSummaryData> = {
  status: string;
  code: number;
  chartData?: APIChartData;
  quoteSummaryData?: APIQuoteSummaryData;
  message: string;
  error?: unknown;
};

export type ChartData = {
  meta: {
    currency: string;
    symbol: string;
    exchangeName: string;
    instrumentType: string;
    fiftyTwoWeekHigh?: number;
    fiftyTwoWeekLow?: number;
    firstTradeDate: Date | null;
    regularMarketTime: Date;
    regularMarketPrice: number;
    chartPreviousClose?: number;
    regularMarketDayHigh?: number;
    regularMarketDayLow?: number;
    regularMarketVolume?: number;
    longName?: string;
  };
  quotes: Array<{
    date: Date;
    high: number | null;
    low: number | null;
    open: number | null;
    close: number | null;
  }>;
};

export type quoteSummaryData = {
  topHoldings?: {
    holdings: Array<{
      symbol: string;
      holdingName: string;
      holdingPercent: number;
    }>;
    sectorWeightings: Array<{
      [key: string]: number | undefined;
      realestate?: number;
      consumer_cyclical?: number;
      basic_materials?: number;
      consumer_defensive?: number;
      technology?: number;
      communication_services?: number;
      financial_services?: number;
      utilities?: number;
      industrials?: number;
      energy?: number;
      healthcare?: number;
    }>;
  };
  fundPerformance?: {
    annualTotalReturns?: {
      returns: Array<{
        [key: string]: unknown;
        year: number | Date;
        annualValue?: number;
        q1?: number;
        q2?: number;
        q3?: number;
        q4?: number;
      }>;
      returnsCat?: Array<{
        [key: string]: unknown;
        year: number | Date;
        annualValue?: number;
        q1?: number;
        q2?: number;
        q3?: number;
        q4?: number;
      }>;
    };
  };
  fundProfile?: {
    [key: string]: unknown;
    family: null | string;
    categoryName: null | string;
    legalType: null | string;
    feesExpensesInvestment?: {
      [key: string]: unknown;
      annualReportExpenseRatio?: number;
    };
  };
  summaryDetail?: {
    yield?: number;
    totalAssets?: number;
    navPrice?: number;
  };
};

export type APIDataType = ResponseType<ChartData, quoteSummaryData>;
