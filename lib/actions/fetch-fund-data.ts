import yahooFinance from "yahoo-finance2";

import { inputType } from "@/types/types";

export async function fetchFundData(input: inputType) {
  "use server";
  const { q, p1, interval } = input;

  const query = q;

  /*  const queryOptions = {
    period1: p1,
    interval: interval,
  }; */

  /* For testing */
  const queryOptions: any = {
    period1: "2025-06-19",
    interval: "5m",
  };

  if (query === undefined) {
    console.log("No input yet.");
    return {
      success: false,
      data: null,
      message: "Input is empty",
    };
  }

  try {
    const result = await yahooFinance.chart(query, queryOptions);

    if (result.meta.instrumentType !== "ETF") {
      return {
        success: false,
        data: null,
        message: "That ticker does not much a valid exchange traded fund (ETF)",
      };
    }

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      data: null,
      message: "An error occured",
      error: error,
    };
  }
}
