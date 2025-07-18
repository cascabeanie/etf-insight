import { fetchFundData } from "@/lib/actions/fetch-fund-data";

import Summary from "./summary/summary";
import Profile from "./profile/profile";
import NoDataUI from "../fallbacks/no-data-ui";

import { APIDataType, inputType } from "@/types/types";

export default async function FundDataContent({
  params,
}: {
  params: inputType;
}) {
  const query = params.q;

  const response: APIDataType | null = query
    ? await fetchFundData(params)
    : null;

  return (
    <>
      {response?.chartData ? (
        <>
          <Summary res={response} />
          <Profile res={response} />
        </>
      ) : (
        <NoDataUI message={response?.message} status={response?.status} />
      )}
    </>
  );
}
