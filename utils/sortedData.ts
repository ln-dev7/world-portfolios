import addIdToData from "./addIdToData";
import type CountryData from "@/interfaces/countryData.interface";

const sortedData = (data: CountryData[]) => {
  const dataWithId = addIdToData(data);

  const sorted = dataWithId.sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  );

  return sorted;
};

export default sortedData;
