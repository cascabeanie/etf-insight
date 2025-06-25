import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Holdings from "./holdings/holdings";
import Performance from "./performance/performance";
import Assets from "./assets/assets";

import { APIDataType } from "@/types/types";

export default function Profile({ res }: { res: APIDataType }) {
  const quoteSummaryData = res.quoteSummaryData;

  return (
    <>
      <Separator className="my-4" />

      <div className="flex w-full max-w-6xl justify-center">
        <Tabs defaultValue="holdings" className="w-full items-center">
          <TabsList className="w-xs sm:w-md">
            <TabsTrigger value="holdings">Holdings</TabsTrigger>
            <TabsTrigger value="assets">Assets</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="holdings" className="mt-2 w-full">
            <Holdings data={quoteSummaryData} />
          </TabsContent>
          <TabsContent value="assets" className="w-full">
            <Assets />
          </TabsContent>
          <TabsContent value="performance" className="w-full">
            <Performance />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
