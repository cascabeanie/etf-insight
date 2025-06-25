"use client";

import { Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export default function HoldingsPieChart({ data }: any) {
  const chartData = data.topHoldings.holdings;

  const chartConfig = {} satisfies ChartConfig;

  const fillColours = [
    "#d4d4d4",
    "#a3a3a3",
    "#737373",
    "#595959",
    "#484848",
    "#3a3a3a",
    "#323232",
    "#2c2c2c",
    "#2a2a2a",
    "#343434",
  ];

  const processedData = chartData.map((e: any, i: any) => ({
    ...e,
    formattedHoldingPercent: parseFloat((e.holdingPercent * 100).toFixed(2)),

    fill: fillColours[i],
  }));

  console.log(processedData);

  return (
    <>
      <ChartContainer
        config={chartConfig}
        className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[300px] w-full pb-0"
      >
        <PieChart>
          <ChartTooltip
            content={<ChartTooltipContent hideLabel className="w-[12rem]" />}
          />
          <Pie
            data={processedData}
            dataKey="formattedHoldingPercent"
            nameKey="symbol"
            label={(value) => {
              return `${(value.holdingPercent * 100).toFixed(2)}%`;
            }}
          />
        </PieChart>
      </ChartContainer>
    </>
  );
}
