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

  try {
    const [chartResult, quoteSummaryResult] = await Promise.all([
      yahooFinance.chart(query, queryOptions),
      yahooFinance.quoteSummary(query, {
        modules: [
          "fundProfile",
          "fundPerformance",
          "summaryDetail",
          "topHoldings",
        ],
      }),
    ]);

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
      (error.message.toLowerCase().includes("delisted") ||
        error.message.toLowerCase().includes("not found"))
    ) {
      return {
        status: "Input Error",
        code: 404,
        message: error.message,
        error: error,
      };
    } else if (
      error instanceof yahooFinance.errors.FailedYahooValidationError
    ) {
      return {
        status: "Input Error",
        code: 422,
        message:
          "Invalid or incomplete data returned from Yahoo Finance. The symbol may be delisted, suspended, or have insufficient data.",
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
