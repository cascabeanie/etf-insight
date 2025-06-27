"use client";

import { assetDataProcessor } from "@/lib/helper/chart-data-processing/asset-processor";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { APIDataType } from "@/types/types";

export default function AssetsBarChart({ data }: { data: APIDataType }) {
  const chartData = data.quoteSummaryData?.topHoldings?.sectorWeightings;
  const chartConfig = {
    weightingPercentage: {
      label: "Percentage Allocation",
    },
  } satisfies ChartConfig;

  const processedData = assetDataProcessor(chartData);

  console.log(processedData);

  return (
    <>
      <ChartContainer config={chartConfig} className="max-h-[300px] w-full">
        <BarChart
          accessibilityLayer
          data={processedData}
          layout="vertical"
          margin={{
            left: 0,
          }}
        >
          <YAxis
            dataKey="formattedName"
            type="category"
            tickLine={false}
            tickMargin={10}
            width={100}
            axisLine={false}
            interval={0}
            tickFormatter={(value) => {
              return value
                .replace("Consumer Cyclical", "Consumer Cycl")
                .replace("Basic Materials", "Basic Mats")
                .replace("Consumer Defensive", "Consumer Def")
                .replace("Technology", "Tech")
                .replace("Communication Services", "Comm Svc")
                .replace("Financial Services", "Financial Svc");
            }}
          />
          <XAxis dataKey="weightingPercentage" type="number" hide />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent className="w-[13rem]" />}
          />
          <Bar dataKey="weightingPercentage" layout="vertical" radius={5} />
        </BarChart>
      </ChartContainer>
    </>
  );
}
