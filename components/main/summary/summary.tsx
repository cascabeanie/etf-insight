import SummaryChart from "./summary-chart";
import SummaryStats from "./summary-stats";

import { chartDataType } from "@/types/types";

export default function Summary({ res }: { res: chartDataType }) {
  return (
    <>
      <SummaryChart res={res} />

      <SummaryStats res={res} />
    </>
  );
}
