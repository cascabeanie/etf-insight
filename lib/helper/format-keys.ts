export type dataType = Array<{
  [key: string]: number | undefined;
  realestate?: number;
  consumer_cyclical?: number;
  basic_materials?: number;
  consumer_defensive?: number;
  technology?: number;
  communication_services?: number;
  financial_services?: number;
  utilities?: number;
  industrials?: number;
  energy?: number;
  healthcare?: number;
}>;

export function formatKeys(data: dataType = []) {
  const flattenedKeys = data
    .map((e) => {
      return Object.keys(e);
    })
    .flat();

  const formattedKeys = flattenedKeys.map((e) => {
    if (e === "realestate") {
      e = "real_estate";
    }

    if (e.includes("_")) {
      const underscoreIndex = e.indexOf("_");
      const secondWordIndex = e.indexOf("_") + 1;

      const firstWord = e.charAt(0).toUpperCase() + e.slice(1, underscoreIndex);
      const secondWord =
        e.charAt(secondWordIndex).toUpperCase() + e.slice(secondWordIndex + 1);

      return firstWord.concat(" ", secondWord);
    } else {
      const wordCapitalised = e.charAt(0).toUpperCase() + e.slice(1);
      return wordCapitalised;
    }
  });

  return formattedKeys;
}
