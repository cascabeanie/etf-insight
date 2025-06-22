import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export function marketChangeCalculator(
  marketPrice: number,
  previousClose: number | undefined = marketPrice,
) {
  const marketChange = marketPrice - previousClose;
  const marketChangePercent = ((marketChange / previousClose) * 100).toFixed(2);
  const changeSign = marketChange > 0 ? "+" : "";
  const graphColour =
    marketChange > 0 ? "#74b385" : marketChange < 0 ? "#d67d75" : "#8a8a8a";
  const TrendIcon =
    marketChange > 0 ? TrendingUp : marketChange < 0 ? TrendingDown : Minus;

  return {
    marketChange: marketChange.toFixed(2),
    changeSign,
    marketChangePercent,
    graphColour,
    TrendIcon,
  };
}
