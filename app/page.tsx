import Search from "@/components/header/search";
import Summary from "@/components/main/summary";

import { inputType } from "@/types/types";
import { fetchFundData } from "@/lib/actions/fetch-fund-data";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<inputType>;
}) {
  const params = await searchParams;

  const response = await fetchFundData(params);

  return (
    <>
      <header className="flex justify-center">
        <Search />
      </header>

      <main>
        <Summary res={response} />
      </main>
    </>
  );
}
