import { fetchFundData } from "@/lib/actions/fetch-fund-data";

import Search from "@/components/header/search";
import Summary from "@/components/main/summary";
import HandledErrorUI from "@/components/error/handle-error-ui";

import { inputType, chartDataType } from "@/types/types";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<inputType>;
}) {
  const params = await searchParams;

  const response: chartDataType = await fetchFundData(params);

  /* For testing */
  /*  throw new Error(); */
  console.log(response);

  return (
    <>
      <header className="flex justify-center">
        <Search />
      </header>

      {/*  {response.data ? (
        <main>
          <Summary res={response} />
        </main>
      ) : (
        <HandledErrorUI res={response} />
      )} */}

      {response.code === 200 ? (
        <main>
          <Summary res={response} />
        </main>
      ) : (
        <HandledErrorUI res={response} />
      )}
    </>
  );
}
