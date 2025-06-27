import { assetDataProcessor } from "./asset-processor";

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
  {
    realestate: 0.0234,
    formattedName: "Real Estate",
    weightingPercentage: 2.34,
    fill: "#f4f4f4",
  },
  {
    consumer_cyclical: 0.1041,
    formattedName: "Consumer Cyclical",
    weightingPercentage: 10.41,
    fill: "#eeeeee",
  },
  {
    basic_materials: 0.0354,
    formattedName: "Basic Materials",
    weightingPercentage: 3.54,
    fill: "#e4e4e4",
  },
  {
    consumer_defensive: 0.063200004,
    formattedName: "Consumer Defensive",
    weightingPercentage: 6.3200004000000005,
    fill: "#d9d9d9",
  },
  {
    technology: 0.24430001,
    formattedName: "Technology",
    weightingPercentage: 24.430001,
    fill: "#cfcfcf",
  },
  {
    communication_services: 0.0829,
    formattedName: "Communication Services",
    weightingPercentage: 8.290000000000001,
    fill: "#c3c6c3",
  },
  {
    financial_services: 0.17909999,
    formattedName: "Financial Services",
    weightingPercentage: 17.909999,
    fill: "#bccbbf",
  },
  {
    utilities: 0.0273,
    formattedName: "Utilities",
    weightingPercentage: 2.73,
    fill: "#b2c4b4",
  },
  {
    industrials: 0.1029,
    formattedName: "Industrials",
    weightingPercentage: 10.290000000000001,
    fill: "#a8bca8",
  },
  {
    energy: 0.0372,
    formattedName: "Energy",
    weightingPercentage: 3.7199999999999998,
    fill: "#9fb39f",
  },
  {
    healthcare: 0.1001,
    formattedName: "Healthcare",
    weightingPercentage: 10.01,
    fill: "#96aa96",
  },
];

describe("Asset chart data processor function", () => {
  it("should return an array of objects containing formatted name, weighting percentage, and colour fill", () => {
    expect(assetDataProcessor(mock)).toEqual(expectedReturn);
  });
});
