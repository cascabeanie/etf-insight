import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LandingUI from "./landing-ui";

import { ChartNoAxesCombined, KeyboardOff, OctagonAlert } from "lucide-react";
import ErrorUI from "./error-ui";

export default function NoDataUI({
  message,
  status,
}: {
  message?: string | undefined;
  status?: string | undefined;
}) {
  return (
    <>
      <div className="flex w-full justify-center">
        <Card className="m-5 w-full max-w-5xl">
          <CardHeader>
            <div className="flex flex-col items-center gap-4">
              {status === "Input Error" ? (
                <>
                  <span className="rounded-full bg-zinc-800 p-3">
                    <KeyboardOff className="h-7 w-7" />
                  </span>
                  <CardTitle className="text-center text-2xl font-bold">
                    An Input Error Has Occured
                  </CardTitle>
                </>
              ) : status === "Error" ? (
                <>
                  <span className="rounded-full bg-red-400/75 p-3">
                    <OctagonAlert className="h-7 w-7" />
                  </span>
                  <CardTitle className="text-center text-2xl font-bold">
                    An Error Has Occured
                  </CardTitle>
                </>
              ) : (
                <>
                  <span className="rounded-full bg-zinc-800 p-3">
                    <ChartNoAxesCombined className="h-7 w-7" />
                  </span>
                  <CardTitle className="text-center text-2xl font-bold">
                    Welcome to ETF Insight
                  </CardTitle>
                </>
              )}
            </div>
          </CardHeader>

          <CardContent>
            {status === "Input Error" ? (
              <ErrorUI errorType="Input Error" message={message} />
            ) : status === "Error" ? (
              <ErrorUI errorType="General Error" message={message} />
            ) : (
              <LandingUI />
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
