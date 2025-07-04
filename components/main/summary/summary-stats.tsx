import { APIDataType } from "@/types/types";
import { Separator } from "@/components/ui/separator";

export default function SummaryStats({ res }: { res: APIDataType }) {
  const chartData = res.chartData;

  return (
    <>
      <Separator className="my-4" />

      <div className="grid grid-cols-1 grid-rows-1 gap-2 text-gray-200 sm:grid-cols-3">
        <div className="flex flex-col gap-2 sm:border-r sm:border-zinc-800">
          <div className="mx-3 flex justify-between">
            <p>Open</p>
            <p>{chartData?.quotes[0].open?.toFixed(2)}</p>
          </div>
          <div className="mx-3 flex justify-between">
            <p>High</p>
            <p>{chartData?.meta.regularMarketDayHigh}</p>
          </div>
          <div className="mx-3 flex justify-between">
            <p>Low</p>
            <p>{chartData?.meta.regularMarketDayLow}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:border-r sm:border-zinc-800">
          <div className="mx-3 flex justify-between">
            <p>Close</p>
            <p>{chartData?.meta.chartPreviousClose?.toFixed(2)}</p>
          </div>
          <div className="mx-3 flex justify-between">
            <p>CCY</p>
            <p>{chartData?.meta.currency}</p>
          </div>
          <div className="mx-3 flex justify-between">
            <p>Volume</p>
            <p>{chartData?.meta.regularMarketVolume?.toLocaleString()}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="mx-3 flex justify-between">
            <p>52-wk high</p>
            <p>{chartData?.meta.fiftyTwoWeekHigh}</p>
          </div>
          <div className="mx-3 flex justify-between">
            <p>52-wk low</p>
            <p>{chartData?.meta.fiftyTwoWeekLow}</p>
          </div>
          <div className="mx-3 flex justify-between">
            <p>Exch</p>
            <p>{chartData?.meta.exchangeName}</p>
          </div>
        </div>
      </div>
    </>
  );
}
