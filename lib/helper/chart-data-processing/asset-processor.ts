import { formatKeys } from "../format-keys";
import { dataType } from "../format-keys";

const fillColours = [
  "#f4f4f4",
  "#eeeeee",
  "#e4e4e4",
  "#d9d9d9",
  "#cfcfcf",
  "#c3c6c3",
  "#bccbbf",
  "#b2c4b4",
  "#a8bca8",
  "#9fb39f",
  "#96aa96",
];

export function assetDataProcessor(data: dataType = []) {
  const formattedKeys = formatKeys(data);

  const processedData = data?.map((e, i: number) => {
    const key = Object.keys(e)[0];

    if (e[key] != null) {
      return {
        ...e,

        formattedName: formattedKeys[i],
        weightingPercentage: e[key] * 100,
        fill: fillColours[i],
      };
    }
  });

  return processedData;
}
