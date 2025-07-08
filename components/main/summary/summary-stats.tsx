import { APIDataType } from "@/types/types";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

export default function SummaryStats({ res }: { res: APIDataType }) {
  const chartData = res.chartData;
  const summaryDetail = res.quoteSummaryData?.summaryDetail;
  const fundProfile = res.quoteSummaryData?.fundProfile;

  const TER = fundProfile?.feesExpensesInvestment?.annualReportExpenseRatio;
  const processedTER =
    typeof TER === "number" && TER > 0 ? (TER * 100).toFixed(2) + "%" : "N/A";

  const totalAssets = summaryDetail?.totalAssets;
  const processedTA =
    totalAssets && typeof totalAssets === "number"
      ? new Intl.NumberFormat("en-GB", {
          notation: "compact",
          compactDisplay: "long",
        }).format(totalAssets)
      : "N/A";

  return (
    <>
      <Separator className="my-4" />

      <div className="flex flex-col items-center text-center lg:flex-row lg:justify-center lg:text-left">
        <div>
          <Table className="lg:border-r-1">
            <TableBody>
              <TableRow>
                <TableHead className="w-40 lg:w-36">Open</TableHead>
                <TableCell className="w-40 lg:w-28">
                  {chartData?.quotes[0]?.open?.toFixed(2)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="w-40 lg:w-36">Close</TableHead>
                <TableCell className="w-40 lg:w-28">
                  {chartData?.meta.chartPreviousClose?.toFixed(2)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="w-40 lg:w-36">High</TableHead>
                <TableCell className="w-40 lg:w-28">
                  {chartData?.meta.regularMarketDayHigh}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="w-40 lg:w-36">Low</TableHead>
                <TableCell className="w-40 lg:w-28">
                  {chartData?.meta.regularMarketDayLow}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div>
          <Table className="lg:border-r-1">
            <TableBody>
              <TableRow>
                <TableHead className="w-40 lg:w-36">52-wk high</TableHead>
                <TableCell className="w-40 lg:w-28">
                  {chartData?.meta.fiftyTwoWeekHigh}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="w-40 lg:w-36">52-wk ligh</TableHead>
                <TableCell className="w-40 lg:w-28">
                  {chartData?.meta.fiftyTwoWeekLow}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="w-40 lg:w-36">Total Assets</TableHead>
                <TableCell className="w-40 lg:w-28">{processedTA}</TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="w-40 lg:w-36">NAV</TableHead>
                <TableCell className="w-40 lg:w-28">
                  {summaryDetail?.navPrice}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div>
          <Table className="lg:border-r-1">
            <TableBody>
              <TableRow>
                <TableHead className="w-40 lg:w-36">Exch</TableHead>
                <TableCell className="w-40 lg:w-28">
                  {chartData?.meta.exchangeName}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="w-40 lg:w-36">CCY</TableHead>
                <TableCell className="w-40 lg:w-28">
                  {chartData?.meta.currency}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="w-40 lg:w-36">Volume</TableHead>
                <TableCell className="w-40 lg:w-28">
                  {chartData?.meta.regularMarketVolume?.toLocaleString()}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="w-40 lg:w-36">Yield</TableHead>
                <TableCell className="w-40 lg:w-28">
                  {summaryDetail?.yield}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div>
          <Table>
            <TableBody>
              <TableRow>
                <TableHead className="w-40 lg:w-36">Category</TableHead>
                <TableCell className="w-40 lg:w-28">
                  {fundProfile?.categoryName}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="w-40 lg:w-36">Fund Family</TableHead>
                <TableCell className="w-40 text-xs whitespace-break-spaces lg:w-28">
                  {fundProfile?.family}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="w-40 lg:w-36">Legal Type</TableHead>
                <TableCell className="w-40 text-xs whitespace-break-spaces lg:w-28">
                  {fundProfile?.legalType}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="w-40 lg:w-36">TER</TableHead>
                <TableCell className="w-40 lg:w-28">{processedTER}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
