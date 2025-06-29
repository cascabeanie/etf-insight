import { TabsContent } from "@/components/ui/tabs";

import Holdings from "./holdings/holdings";
import Performance from "./performance/performance";
import Assets from "./assets/assets";

import { APIDataType } from "@/types/types";
import TabSelector from "./tab-selector";

export default function Profile({ res }: { res: APIDataType }) {
  return (
    <>
      <TabSelector>
        <TabsContent value="holdings" className="mt-2 w-full">
          <Holdings res={res} />
        </TabsContent>
        <TabsContent value="assets" className="mt-2 w-full">
          <Assets res={res} />
        </TabsContent>
        <TabsContent value="performance" className="mt-2 w-full">
          <Performance res={res} />
        </TabsContent>
      </TabSelector>
    </>
  );
}
