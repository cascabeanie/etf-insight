"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { ExternalLink, RefreshCcw } from "lucide-react";

export default function ErrorUI({
  errorType,
  message,
}: {
  errorType: "Input Error" | "General Error";
  message?: string | undefined;
}) {
  const router = useRouter();

  if (errorType === "Input Error") {
    return (
      <div className="flex flex-col items-center gap-y-8 rounded-xl border-2 bg-zinc-900/50 p-6 text-center">
        <p>{message}</p>
        <Button
          asChild
          variant="outline"
          className="w-full max-w-xs bg-transparent"
        >
          <a
            href="https://uk.finance.yahoo.com/research-hub/screener/etf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Find Valid Tickers
          </a>
        </Button>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center gap-y-8 rounded-xl border-2 border-red-300/75 bg-zinc-900/50 p-6 text-center">
        <p>An unexpected error has occured. Please try again.</p>
        <Button
          variant="outline"
          className="w-full max-w-xs bg-transparent"
          onClick={() => router.push("/")}
        >
          <RefreshCcw className="mr-2 h-4 w-4" />
          Try Again
        </Button>
      </div>
    );
  }
}
