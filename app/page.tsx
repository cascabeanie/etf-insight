import Search from "@/components/header/search";
import FundDataContent from "@/components/main/fund-data-content";
import NoDataUI from "@/components/fallbacks/no-data-ui";

import { inputType } from "@/types/types";
import { Suspense } from "react";
import LoadingFundData from "@/components/fallbacks/loading-fund-data";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<inputType>;
}) {
  const params = await searchParams;

  return (
    <>
      <header className="flex justify-center">
        <Search />
      </header>

      <main className="m-2">
        {params.q ? (
          <Suspense key={params.q} fallback={<LoadingFundData />}>
            <FundDataContent params={params} />
          </Suspense>
        ) : (
          <NoDataUI />
        )}
      </main>
    </>
  );
}
