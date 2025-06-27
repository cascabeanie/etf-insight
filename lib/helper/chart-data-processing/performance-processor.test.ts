import { performanceProcessor } from "./performance-processor";

const mockOne = {
  returns: [
    { year: new Date("2024-01-01"), annualValue: 0.24885151 },
    { year: new Date("2023-01-01"), annualValue: 0.2618955 },
    { year: new Date("2022-01-01"), annualValue: -0.1817168 },
    { year: new Date("2021-01-01"), annualValue: 0.2874506 },
  ],
  returnsCat: [
    { year: new Date("2024-01-01"), annualValue: 0.2144601 },
    { year: new Date("2023-01-01"), annualValue: 0.2231864 },
    { year: new Date("2022-01-01"), annualValue: -0.1695545 },
    { year: new Date("2021-01-01"), annualValue: 0.2606759 },
    { year: new Date("2020-01-01"), annualValue: 0.1582748 },
    { year: new Date("2019-01-01"), annualValue: 0.2877649 },
    { year: new Date("2018-01-01"), annualValue: -0.0626928 },
  ],
};

const mockTwo = {
  returns: [
    { year: new Date("2024-01-01"), annualValue: 0.24885151 },
    { year: new Date("2023-01-01"), annualValue: 0.2618955 },
    { year: new Date("2022-01-01"), annualValue: -0.1817168 },
    { year: new Date("2021-01-01"), annualValue: 0.2874506 },
  ],
  returnsCat: [],
};

const expectedReturnOne = [
  {
    year: new Date("2024-01-01"),
    annualValue: 0.24885151,
    catAnnualValue: 0.2144601,
    formattedYear: "2024",
  },
  {
    year: new Date("2023-01-01"),
    annualValue: 0.2618955,
    catAnnualValue: 0.2231864,
    formattedYear: "2023",
  },
  {
    year: new Date("2022-01-01"),
    annualValue: -0.1817168,
    catAnnualValue: -0.1695545,
    formattedYear: "2022",
  },
  {
    year: new Date("2021-01-01"),
    annualValue: 0.2874506,
    catAnnualValue: 0.2606759,
    formattedYear: "2021",
  },
];

const expectedReturnTwo = [
  {
    year: new Date("2024-01-01"),
    annualValue: 0.24885151,
    catAnnualValue: undefined,
    formattedYear: "2024",
  },
  {
    year: new Date("2023-01-01"),
    annualValue: 0.2618955,
    catAnnualValue: undefined,
    formattedYear: "2023",
  },
  {
    year: new Date("2022-01-01"),
    annualValue: -0.1817168,
    catAnnualValue: undefined,
    formattedYear: "2022",
  },
  {
    year: new Date("2021-01-01"),
    annualValue: 0.2874506,
    catAnnualValue: undefined,
    formattedYear: "2021",
  },
];

describe("Performance data processor function", () => {
  it("should return one array containing year, annualValue, catAnnualValue, and formattedYear", () => {
    expect(performanceProcessor(mockOne)).toEqual(expectedReturnOne);
  });

  it("should return one array containing year, annualValue, and formattedYear, but catAnnualValue,should be undefined", () => {
    expect(performanceProcessor(mockTwo)).toEqual(expectedReturnTwo);
  });
});
