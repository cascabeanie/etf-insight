import { fetchFundData } from "@/lib/actions/fetch-fund-data";

import Summary from "./summary/summary";
import Profile from "./profile/profile";
import NoDataUI from "../fallbacks/no-data-ui";

import { APIDataType, inputType } from "@/types/types";

import { dummyData } from "@/data/dummy-data";

export default async function FundDataContent({
  params,
}: {
  params: inputType;
}) {
  const query = params.q;

  /* const response: APIDataType | null = query
    ? await fetchFundData(params)
    : null; */

  /* For testing */
  /* console.log(response); */
  const response: APIDataType = dummyData;

  return (
    <>
      {response?.chartData ? (
        <>
          <Summary res={response} />
          <Profile res={response} />
        </>
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
