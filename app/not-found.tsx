import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Signpost, House } from "lucide-react";

import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex w-full justify-center">
        <Card className="m-5 w-full max-w-5xl">
          <CardHeader>
            <div className="flex flex-col items-center gap-4">
              <>
                <span className="rounded-full bg-zinc-800 p-3">
                  <Signpost className="h-7 w-7" />
                </span>
                <CardTitle className="text-center text-2xl font-bold">
                  Not Found
                </CardTitle>
              </>
            </div>
          </CardHeader>

          <CardContent>
            <div className="flex flex-col items-center gap-y-8 rounded-xl border-2 bg-zinc-900/50 p-6 text-center">
              <p>The page or resource you are looking for cannot be found.</p>
              <Button
                asChild
                variant="outline"
                className="w-full max-w-sm bg-transparent"
              >
                <Link href="/">
                  <House className="mr-2 h-4 w-4" />
                  Return Home
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
