import { dateFormatConverter } from "./date-format-converter";

const mock = {
  meta: { firstTradeDate: new Date("2019-07-25T07:00:00.000Z") },
};

describe("Date format converter function", () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date("2025-06-20"));
  });

  it("should return most recent open market day as YYYY-MM-DD format when timeRange is 1d", () => {
    const expectedDate = "2025-06-20";
    expect(dateFormatConverter("1d", mock)).toEqual({
      p1: expect.stringMatching(expectedDate),
      interval: "5m",
    });
  });

  it("should return most recent open market day from 5 days ago as YYYY-MM-DD format when timeRange is 5d", () => {
    const fiveDaysAgo = "2025-06-16";
    expect(dateFormatConverter("5d", mock)).toEqual({
      p1: expect.stringMatching(fiveDaysAgo),
      interval: "30m",
    });
  });

  it("should return most recent open market day from 1 month ago as YYYY-MM-DD format when timeRange is 1m", () => {
    const oneMonthAgo = "2025-05-21";
    expect(dateFormatConverter("1m", mock)).toEqual({
      p1: expect.stringMatching(oneMonthAgo),
      interval: "1d",
    });
  });

  it("should return most recent open market day from 6 months ago as YYYY-MM-DD format when timeRange is 6m", () => {
    const sixMonthsAgo = "2024-12-23";
    expect(dateFormatConverter("6m", mock)).toEqual({
      p1: expect.stringMatching(sixMonthsAgo),
      interval: "1d",
    });
  });

  it("should return most recent open market day from 1 year ago as YYYY-MM-DD format when timeRange is 1y", () => {
    const oneYearAgo = "2024-06-20";
    expect(dateFormatConverter("1y", mock)).toEqual({
      p1: expect.stringMatching(oneYearAgo),
      interval: "1d",
    });
  });

  it("should return most recent open market day from 5 years ago as YYYY-MM-DD format when timeRange is 5y", () => {
    const fiveYearsAgo = "2020-06-22";
    expect(dateFormatConverter("5y", mock)).toEqual({
      p1: expect.stringMatching(fiveYearsAgo),
      interval: "1d",
    });
  });

  it("should return first day of current year as YYYY-MM-DD format when timeRange is ytd", () => {
    const ytd = new Date(new Date().getFullYear(), 0, 1).toLocaleDateString(
      "en-CA",
    );
    expect(dateFormatConverter("ytd", mock)).toEqual({
      p1: expect.stringMatching(ytd),
      interval: "1d",
    });
  });
  it("should return firstTradeDate as YYYY-MM-DD format when timeRange is max", () => {
    const max = mock.meta.firstTradeDate.toLocaleDateString("en-CA");
    expect(dateFormatConverter("max", mock)).toEqual({
      p1: expect.stringMatching(max),
      interval: "1d",
    });
  });

  afterAll(() => {
    jest.useRealTimers();
  });
});
