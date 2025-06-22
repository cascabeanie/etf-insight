import { marketChangeCalculator } from "./market-change-calculator";

import { TrendingUp, TrendingDown, Minus } from "lucide-react";

describe("Market change calculator function", () => {
  it("should return correct results for positive market change", () => {
    const {
      marketChange,
      changeSign,
      marketChangePercent,
      graphColour,
      TrendIcon,
    } = marketChangeCalculator(109.4, 109);

    expect(marketChange).toBe("0.40");
    expect(changeSign).toBe("+");
    expect(marketChangePercent).toBe("0.37");
    expect(graphColour).toBe("#74b385");
    expect(TrendIcon).toBe(TrendingUp);
  });

  it("should return correct results for negative market change", () => {
    const {
      marketChange,
      changeSign,
      marketChangePercent,
      graphColour,
      TrendIcon,
    } = marketChangeCalculator(107, 110);

    expect(marketChange).toBe("-3.00");
    expect(changeSign).toBe("");
    expect(marketChangePercent).toBe("-2.73");
    expect(graphColour).toBe("#d67d75");
    expect(TrendIcon).toBe(TrendingDown);
  });

  it("should return correct results for no market change", () => {
    const {
      marketChange,
      changeSign,
      marketChangePercent,
      graphColour,
      TrendIcon,
    } = marketChangeCalculator(109, 109);

    expect(marketChange).toBe("0.00");
    expect(changeSign).toBe("");
    expect(marketChangePercent).toBe("0.00");
    expect(graphColour).toBe("#8a8a8a");
    expect(TrendIcon).toBe(Minus);
  });
});
