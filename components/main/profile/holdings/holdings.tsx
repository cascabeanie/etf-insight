import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import HoldingsPieChart from "./holdings-pie-chart";
import { Separator } from "@/components/ui/separator";

export default function Holdings({ data }: any) {
  return (
    <>
      <Card className="h-full">
        <CardHeader className="pb-0">
          <div className="flex justify-center">
            <CardTitle>Portfolio Allocation by Holdings</CardTitle>
          </div>
          <Separator className="mt-4" />
        </CardHeader>
        <CardContent className="flex flex-col px-2 lg:flex-row lg:items-center lg:px-6">
          <div className="w-full">
            <HoldingsPieChart data={data} />
          </div>

          <Table className="mt-4 lg:mt-0">
            <TableCaption>
              Top 10 holdings as a per cent of portfolio.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Symbol</TableHead>
                <TableHead className="whitespace-normal">
                  Holding Weight
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.topHoldings.holdings.map((holding: any) => (
                <TableRow key={holding.holdingName}>
                  <TableCell className="font-medium">
                    {holding.holdingName}
                  </TableCell>
                  <TableCell>{holding.symbol}</TableCell>
                  <TableCell>
                    {(holding.holdingPercent * 100).toFixed(2)}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
