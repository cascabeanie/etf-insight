import yahooFinance from "yahoo-finance2";

import { inputType } from "@/types/types";

export async function fetchFundData(input: inputType) {
  "use server";

  const { q, p1, interval } = input;

  const query = q;

  const queryOptions = {
    period1: new Date(p1),
    interval: interval,
  };

  /* For testing */
  /* const queryOptions: any = {
    period1: "2025-06-19",
    period2: "2025-06-20",
    interval: "5m",
  }; */

  try {
    const chartResult = await yahooFinance.chart(query, queryOptions);

    const quoteSummaryResult = await yahooFinance.quoteSummary(query, {
      modules: [
        "fundProfile",
        "fundPerformance",
        "summaryDetail",
        "topHoldings",
      ],
    });

    /*  For testing */
    /* throw new Error(); */

    if (chartResult.meta.instrumentType !== "ETF") {
      return {
        status: "Input Error",
        code: 403,
        message: "The ticker does not match a valid exchange traded fund (ETF)",
      };
    }

    return {
      status: "Success",
      code: 200,
      chartData: chartResult,
      quoteSummaryData: quoteSummaryResult,
      message: "Successful request",
    };
  } catch (error: unknown) {
    console.log({ error });
    if (
      error instanceof Error &&
      error.message === "No data found, symbol may be delisted"
    ) {
      return {
        status: "Input Error",
        code: 404,
        message: error.message,
        error: error,
      };
    } else if (error instanceof yahooFinance.errors.InvalidOptionsError) {
      return {
        status: "Error",
        code: 406,
        message: "The query options are not valid",
        error: error,
      };
    } else if (error instanceof yahooFinance.errors.HTTPError) {
      return {
        status: "Error",
        code: 500,
        message: "An unexpected server error occured",
        error: error,
      };
    } else {
      return {
        status: "Error",
        code: 400,
        message: "An unexpected error occured",
        error: error,
      };
    }
  }
}
