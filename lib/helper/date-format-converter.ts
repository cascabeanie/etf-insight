export function dateFormatConverter(
  timeRange: string,
  data: { meta: { firstTradeDate: Date | null } },
) {
  const todaysDate = new Date();
  let startDate: string;
  let interval = "5m";

  const adjustForTradingDay = (date: Date, targetDay: "Monday" | "Friday") => {
    const resultDate = new Date(date);
    const dayOfWeek = resultDate.getDay();

    // If today is Sat or Sun then returns nearest Fri
    // Else returns today's date
    if (targetDay === "Friday") {
      if (dayOfWeek === 6) {
        resultDate.setDate(resultDate.getDate() - 1);
      } else if (dayOfWeek === 0) {
        resultDate.setDate(resultDate.getDate() - 2);
      }
    } else if (targetDay === "Monday") {
      if (dayOfWeek === 6) {
        resultDate.setDate(resultDate.getDate() + 2);
      } else if (dayOfWeek === 0) {
        resultDate.setDate(resultDate.getDate() + 1);
      }
    }

    return resultDate;
  };

  if (timeRange === "ytd") {
    const year = todaysDate.getFullYear();
    startDate = new Date(year, 0, 1).toLocaleDateString("en-CA");
    interval = "1d";
  } else if (timeRange === "max") {
    interval = "1d";
    if (!data.meta.firstTradeDate) {
      startDate = new Date("2000-01-01").toLocaleDateString("en-CA");
    } else {
      startDate = data.meta.firstTradeDate.toLocaleDateString("en-CA");
    }
  } else {
    const referenceDate = adjustForTradingDay(todaysDate, "Friday");
    let daysToSubtract = 0;

    switch (timeRange) {
      case "1d":
        daysToSubtract = 0;
        interval = "5m";
        break;
      case "5d":
        daysToSubtract = 5;
        interval = "30m";
        break;
      case "1m":
        daysToSubtract = 30;
        interval = "1d";
        break;
      case "6m":
        daysToSubtract = 180;
        interval = "1d";
        break;
      case "1y":
        daysToSubtract = 365;
        interval = "1d";
        break;
      case "5y":
        daysToSubtract = 1825;
        interval = "1d";
        break;
      default:
        break;
    }

    const calculatedDate = new Date(referenceDate);
    calculatedDate.setDate(calculatedDate.getDate() - daysToSubtract);

    const adjustedStartDate = adjustForTradingDay(calculatedDate, "Monday");
    startDate = adjustedStartDate.toLocaleDateString("en-CA");
  }

  return {
    p1: startDate,
    interval: interval,
  };
}
