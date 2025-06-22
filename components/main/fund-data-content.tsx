import { fetchFundData } from "@/lib/actions/fetch-fund-data";

import Summary from "./summary";
import NoDataUI from "../error/no-data-ui";

import { chartDataType, inputType } from "@/types/types";

export default async function FundDataContent({
  params,
}: {
  params: inputType;
}) {
  const query = params.q;

  /* For testing */
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Finished timeout");

  const response: chartDataType | null = query
    ? await fetchFundData(params)
    : null;

  /* For testing */
  console.log(response);

  return (
    <>
      {response?.data ? (
        <main>
          <Summary res={response} />
        </main>
      ) : (
        <NoDataUI
          title={response?.status}
          description={response?.message}
          status={response?.status}
        />
      )}
    </>
  );
}
