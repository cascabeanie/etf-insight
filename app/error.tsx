"use client";

import { useEffect } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { OctagonAlert, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex w-full justify-center">
      <Card className="m-5 w-full max-w-5xl">
        <CardHeader>
          <div className="flex flex-col items-center gap-4">
            <>
              <span className="rounded-full bg-red-400/75 p-3">
                <OctagonAlert className="h-7 w-7" />
              </span>
              <CardTitle className="text-center text-2xl font-bold">
                An Unexpected Error Has Occured
              </CardTitle>
            </>
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col items-center gap-y-8 rounded-xl border-2 border-red-300/75 bg-zinc-900/50 p-6 text-center">
            <p>Please try again.</p>
            <Button
              variant="outline"
              className="w-full max-w-xs bg-transparent"
              onClick={() => reset()}
            >
              <RefreshCcw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
