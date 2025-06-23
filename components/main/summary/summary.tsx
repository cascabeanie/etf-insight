import SummaryChart from "./summary-chart";
import SummaryStats from "./summary-stats";

import { chartDataType } from "@/types/types";

export default function Summary({ res }: { res: chartDataType }) {
  return (
    <>
      <div className="flex w-full flex-col lg:max-w-5xl">
        <SummaryChart res={res} />
        <SummaryStats res={res} />
      </div>
    </>
  );
}
