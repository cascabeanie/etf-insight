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

export type responseType = {
  status: string;
  code: number;
  data: unknown | null;
  message: string;
  error?: unknown;
};
