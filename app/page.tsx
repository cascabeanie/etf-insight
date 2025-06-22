import Search from "@/components/header/search";
import FundDataContent from "@/components/main/fund-data-content";
import NoDataUI from "@/components/error/no-data-ui";

import { inputType } from "@/types/types";

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

      {params.q ? <FundDataContent params={params} /> : <NoDataUI />}
    </>
  );
}
