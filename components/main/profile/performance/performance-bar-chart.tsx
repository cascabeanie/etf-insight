"use client";

import { performanceProcessor } from "@/lib/helper/chart-data-processing/performance-processor";

import { Bar, BarChart, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { APIDataType } from "@/types/types";

export default function PerformanceBarChart({ data }: { data: APIDataType }) {
  const chartData = data.quoteSummaryData?.fundPerformance?.annualTotalReturns;
  const chartConfig = {
    annualValue: {
      label: "Fund Annual Value",
    },
    catAnnualValue: {
      label: "Benchmark Annual Value",
    },
  } satisfies ChartConfig;

  const processedData = performanceProcessor(chartData);

  return (
    <>
      <ChartContainer config={chartConfig} className="max-h-[500px] w-full">
        <BarChart accessibilityLayer data={processedData}>
          <XAxis dataKey="formattedYear" axisLine={false} interval={0} />
          <Bar dataKey="annualValue" fill="#A1C9F1" radius={[5, 5, 2, 2]} />
          <Bar dataKey="catAnnualValue" fill="#F7B7A3" radius={[5, 5, 2, 2]} />
          <ChartTooltip
            content={<ChartTooltipContent className="w-[12rem]" />}
            cursor={false}
          />
        </BarChart>
      </ChartContainer>
    </>
  );
}
