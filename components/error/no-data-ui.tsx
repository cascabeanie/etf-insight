import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NoDataUI() {
  return (
    <>
      <div className="flex justify-center">
        <Card className="m-5 w-full max-w-3xl">
          <CardHeader>
            <CardTitle>No Data</CardTitle>
          </CardHeader>
          <CardContent>No chart data available</CardContent>
        </Card>
      </div>
    </>
  );
}
