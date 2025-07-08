import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";

import { ChartCandlestick, Search, ExternalLink } from "lucide-react";

export default function LandingUI() {
  return (
    <>
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 rounded-xl border-2 bg-zinc-900/50 p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-200">
            What are Exchange-Traded Funds (ETFs)?
          </h3>
          <p className="mx-auto max-w-3xl leading-relaxed text-gray-300">
            An exchange-traded fund (ETF) is a fund that tracks an index, such
            as the FTSE 100 or S&P 500, and trades like a share. ETFs offer
            diversification, low costs, and the flexibility of stock trading.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <Card className="flex-1 gap-3 border-2 border-blue-200/50 bg-zinc-900/50 transition-colors hover:border-blue-200">
            <CardHeader>
              <div className="flex items-center gap-2">
                <ChartCandlestick className="h-5 w-5" />
                <CardTitle className="text-lg text-gray-200">
                  London Stock Exchange ETFs
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-gray-300">
                Browse ETFs listed on the London Stock Exchange.
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full bg-transparent"
              >
                <a
                  href="https://www.londonstockexchange.com/live-markets/market-data-dashboard/price-explorer?categories=ETFS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-1 h-4 w-4" />
                  View LSE ETFs
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="flex-1 gap-3 border-2 border-green-200/50 bg-zinc-900/50 transition-colors hover:border-green-200">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                <CardTitle className="text-lg text-gray-200">
                  Yahoo Finance Ticker Search
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-gray-300">
                Find valid ETF ticker symbols to use for searching.
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full bg-transparent"
              >
                <a
                  href="https://uk.finance.yahoo.com/research-hub/screener/etf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-1 h-4 w-4" />
                  Search Tickers
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-y-4 rounded-xl border-2 bg-zinc-900/50 p-6 text-center">
          <h4 className="text-lg font-semibold text-gray-200">
            Ready to Get Started?
          </h4>
          <p className="text-center text-gray-200">
            Enter an ETF ticker symbol in the search box at the top of the page
            to view market data.
          </p>
        </div>

        <div>
          <Separator className="mb-4" />
          <p className="text-center text-xs leading-relaxed text-zinc-500">
            <strong>Disclaimer:</strong> ETF Insight is intended for
            informational and educational purposes only. The information
            provided does not constitute financial advice or a recommendation
            and should not be considered as such. Always consult with a
            qualified financial advisor before making investment decisions.
          </p>
        </div>
      </div>
    </>
  );
}
