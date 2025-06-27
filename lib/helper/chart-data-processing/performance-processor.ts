type dataType =
  | {
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
    }
  | undefined;

export function performanceProcessor(data: dataType) {
  if (!data) {
    return [];
  }

  const { returns, returnsCat } = data;

  const combined = returns.slice(0, 10).map((e) => {
    const matchingCatReturn = returnsCat?.find((item) => {
      return item.year.toLocaleString() === e.year.toLocaleString();
    });

    return {
      ...e,
      formattedYear: new Date(e.year).getFullYear().toString(),
      catAnnualValue: matchingCatReturn?.annualValue,
    };
  });
  return combined;
}
