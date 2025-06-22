"use client";

import { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { dateFormatConverter } from "@/lib/helper/date-format-converter";

import {
  Area,
  AreaChart,
  /* LineChart,
  Line, */
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

import { chartDataType } from "@/types/types";
import { marketChangeCalculator } from "@/lib/helper/market-change-calculator";
import NoDataUI from "../error/no-data-ui";

const chartConfig = {
  close: {
    label: "Close",
    color: "#74b385",
  },
} satisfies ChartConfig;

export default function Summary({ res }: { res: chartDataType }) {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathName = usePathname();
  const { replace } = useRouter();

  const [timeRange, setTimeRange] = useState("1d");
  const chartData = res.data;

  if (!chartData) {
    return <NoDataUI />;
  }

  const {
    marketChange,
    changeSign,
    marketChangePercent,
    graphColour,
    TrendIcon,
  } = marketChangeCalculator(
    chartData.meta.regularMarketPrice,
    chartData.meta.chartPreviousClose,
  );

  const highDomain = chartData.quotes.reduce(
    (accumulator: any, currentValue: any) => {
      return currentValue.high > accumulator ? currentValue.high : accumulator;
    },
    0,
  );

  const lowDomain = chartData.quotes.reduce(
    (accumulator: any, currentValue: any) => {
      return currentValue.low < accumulator ? currentValue.low : accumulator;
    },
    Infinity,
  );

  useEffect(() => {
    const { p1, interval } = dateFormatConverter(timeRange, chartData);

    params.set("p1", p1);
    params.set("interval", interval);

    replace(`${pathName}?${params.toString()}`);
  }, [timeRange]);

  const processedData = chartData.quotes.map((e: any) => ({
    ...e,
    formattedDate: e.date.toString(),
  }));

  return (
    <>
      {chartData && (
        <Card className="mt-5">
          <CardHeader className="gap-2 border-b border-zinc-700">
            <CardTitle>{chartData.meta.longName}</CardTitle>
            <CardDescription>{chartData.meta.symbol}</CardDescription>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">
                  {chartData.meta.regularMarketPrice}
                </span>
                <span>{chartData.meta.currency}</span>
              </div>
              <div
                className="flex items-center gap-2"
                style={{ color: graphColour }}
              >
                <span>
                  {changeSign}
                  {marketChange}
                </span>
                <span>({marketChangePercent}%)</span>
                <TrendIcon size={18} />
              </div>
              <span className="text-xs">
                As of:{" "}
                {chartData.meta.regularMarketTime.toLocaleString("en-GB")}
              </span>
            </div>
            <CardAction>
              <ToggleGroup
                type="single"
                value={timeRange}
                onValueChange={setTimeRange}
                variant="outline"
              >
                <ToggleGroupItem value="1d">1D</ToggleGroupItem>
                <ToggleGroupItem value="5d">5D</ToggleGroupItem>
                <ToggleGroupItem value="1m">1M</ToggleGroupItem>
                <ToggleGroupItem value="6m">6M</ToggleGroupItem>
                <ToggleGroupItem value="ytd">YTD</ToggleGroupItem>
                <ToggleGroupItem value="1y">1Y</ToggleGroupItem>
                <ToggleGroupItem value="5y">5Y</ToggleGroupItem>
                <ToggleGroupItem value="max">Max</ToggleGroupItem>
              </ToggleGroup>
            </CardAction>
          </CardHeader>

          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[1rem]">
              <AreaChart accessibilityLayer data={processedData}>
                <CartesianGrid vertical={false} opacity={0.5} />
                <YAxis hide dataKey="close" domain={[lowDomain, highDomain]} />
                <XAxis
                  dataKey="formattedDate"
                  interval={"preserveEnd"}
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => {
                    if (timeRange === "1d") {
                      return new Date(value).toLocaleTimeString("en-UK", {
                        timeStyle: "short",
                      });
                    } else if (
                      timeRange === "5d" ||
                      timeRange === "1m" ||
                      timeRange === "6m"
                    ) {
                      return new Date(value).toLocaleDateString("en-UK", {
                        month: "short",
                        day: "numeric",
                      });
                    } else {
                      return new Date(value).toLocaleDateString("en-UK");
                    }
                  }}
                />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleString("en-GB");
                  }}
                />

                <defs>
                  <linearGradient id="colour" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor={graphColour}
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor={graphColour}
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>

                <Area
                  dataKey="close"
                  type="natural"
                  dot={false}
                  fill="url(#colour)"
                  fillOpacity={0.5}
                  stroke={graphColour}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      )}
    </>
  );
}
