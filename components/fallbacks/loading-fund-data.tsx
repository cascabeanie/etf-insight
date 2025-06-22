import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { Loader } from "lucide-react";

export default function LoadingFundData() {
  return (
    <>
      <div className="flex justify-center">
        <Card className="m-5 w-full max-w-3xl">
          <CardHeader>
            <CardTitle className="flex animate-pulse items-center gap-2 text-xl">
              <h2>Loading... </h2>
              <Loader size={35} className="animate-spin" />
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
