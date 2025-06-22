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

export type ResponseType<Data> = {
  status: string;
  code: number;
  data?: Data;
  message: string;
  error?: unknown;
};

export type ChartData = {
  meta: {
    currency: string;
    symbol: string;
    instrumentType: string;
    firstTradeDate: Date | null;
    regularMarketTime: Date;
    regularMarketPrice: number;
    chartPreviousClose?: number;
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

export type chartDataType = ResponseType<ChartData>;
