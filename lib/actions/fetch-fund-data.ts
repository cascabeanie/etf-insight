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

  if (query === undefined) {
    return {
      status: "success",
      code: 204,
      data: null,
      message: "Input is empty",
    };
  }

  try {
    const result = await yahooFinance.chart(query, queryOptions);

    /*  For testing */
    /*  throw new Error(); */

    if (result.meta.instrumentType !== "ETF") {
      return {
        status: "error",
        code: 403,
        data: null,
        message: "The ticker does not match a valid exchange traded fund (ETF)",
      };
    }

    return {
      status: "success",
      code: 200,
      data: result,
      message: "Successful request",
    };
  } catch (error: unknown) {
    console.log({ error });
    if (
      error instanceof Error &&
      error.message === "No data found, symbol may be delisted"
    ) {
      return {
        status: "error",
        code: 404,
        data: null,
        message: error.message,
        error: error,
      };
    } else if (error instanceof yahooFinance.errors.InvalidOptionsError) {
      return {
        status: "error",
        code: 406,
        data: null,
        message: "The query options are not valid",
        error: error,
      };
    } else if (error instanceof yahooFinance.errors.HTTPError) {
      return {
        status: "error",
        code: 500,
        data: null,
        message: "An unexpected server error occured",
        error: error,
      };
    } else {
      return {
        status: "error",
        code: 400,
        data: null,
        message: "An unexpected error occured",
        error: error,
      };
    }
  }
}
