import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function NoDataUI({
  title,
  description,
  status,
}: {
  title?: string | undefined;
  description?: string | undefined;
  status?: string | undefined;
}) {
  return (
    <>
      <div className="flex w-full justify-center">
        <Card className="m-5 w-full max-w-3xl">
          <CardHeader>
            <CardTitle>{title ? title : <h2>No Input yet </h2>}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            {status === "Input Error" ? (
              <div className="flex flex-col gap-2">
                <span className="flex gap-1">
                  Valid tickers can be found
                  <a
                    href="https://finance.yahoo.com/lookup/"
                    className="text-blue-300"
                  >
                    here
                  </a>
                </span>
              </div>
            ) : status === "Error" ? (
              <p>Try a new search above</p>
            ) : (
              <p>Enter a search term to get started</p>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
