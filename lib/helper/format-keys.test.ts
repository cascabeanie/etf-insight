import { formatKeys } from "./format-keys";

const mock = [
  { realestate: 0.0234 },
  { consumer_cyclical: 0.1041 },
  { basic_materials: 0.0354 },
  { consumer_defensive: 0.063200004 },
  { technology: 0.24430001 },
  { communication_services: 0.0829 },
  { financial_services: 0.17909999 },
  { utilities: 0.0273 },
  { industrials: 0.1029 },
  { energy: 0.0372 },
  { healthcare: 0.1001 },
];

const expectedReturn = [
  "Real Estate",
  "Consumer Cyclical",
  "Basic Materials",
  "Consumer Defensive",
  "Technology",
  "Communication Services",
  "Financial Services",
  "Utilities",
  "Industrials",
  "Energy",
  "Healthcare",
];

describe("Function to format keys", () => {
  it("should return the keys with a capital first letter", () => {
    expect(formatKeys([{ hello: 1, goodbye: 2 }])).toEqual([
      "Hello",
      "Goodbye",
    ]);
  });

  it("should return the keys with a capital first and second letters and replace underscores with spaces", () => {
    expect(formatKeys(mock)).toEqual(expectedReturn);
  });
});
