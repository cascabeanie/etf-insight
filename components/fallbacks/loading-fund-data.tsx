import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { Search } from "lucide-react";

export default function LoadingFundData({ query }: { query: string }) {
  return (
    <>
      <div className="flex w-full justify-center">
        <Card className="m-5 w-full max-w-5xl">
          <CardHeader>
            <div className="flex flex-col items-center gap-4">
              <span className="animate-pulse rounded-full bg-zinc-800 p-3">
                <Search className="h-7 w-7" />
              </span>
              <CardTitle className="text-center text-2xl font-bold">
                Searching for ETF...
              </CardTitle>

              <span className="flex items-center gap-2 text-lg">
                Looking up{" "}
                <div className="rounded bg-zinc-500 px-2 font-mono">
                  {query}
                </div>
              </span>

              <div className="w-full">
                <div className="h-4 w-full overflow-hidden rounded-full bg-zinc-100">
                  <div className="animate-progress h-full w-full origin-left bg-blue-600"></div>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
