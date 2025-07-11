import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import PerformanceBarChart from "./performance-bar-chart";

import { APIDataType } from "@/types/types";

export default function Performance({ res }: { res: APIDataType }) {
  return (
    <>
      <Card className="h-full">
        <CardHeader className="pb-0">
          <div className="flex justify-center">
            <CardTitle>Annual Total Return</CardTitle>
          </div>
          <Separator className="mt-4" />
        </CardHeader>
        <CardContent className="flex flex-col px-2 lg:flex-row lg:items-center lg:px-6">
          <div className="w-full">
            <PerformanceBarChart data={res} />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
