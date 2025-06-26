import { assetDataProcessor } from "@/lib/helper/chart-data-processing/asset-processor";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import AssetsBarChart from "./assets-bar-chart";

import { APIDataType } from "@/types/types";

export default function Assets({ res }: { res: APIDataType }) {
  const chartData = res.quoteSummaryData?.topHoldings?.sectorWeightings;

  const processedData = assetDataProcessor(chartData);

  return (
    <>
      <Card className="h-full">
        <CardHeader className="pb-0">
          <div className="flex justify-center">
            <CardTitle>Asset Allocation by Sectors</CardTitle>
          </div>
          <Separator className="mt-4" />
        </CardHeader>

        <CardContent className="flex flex-col px-2 lg:flex-row lg:items-center lg:px-6">
          <div className="w-full">
            <AssetsBarChart data={res} />
          </div>

          <Table className="mt-4 lg:mt-0">
            <TableCaption>
              Sector weightings as a per cent of portfolio.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Sector</TableHead>
                <TableHead>Weightings</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {processedData?.map((sector: any, index: number) => {
                const [name, value]: any = Object.entries(sector)[0];

                return (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {sector.formattedName}
                    </TableCell>
                    <TableCell>{(value * 100).toFixed(2)}%</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
