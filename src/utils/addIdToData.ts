import type CountryData from "@/interfaces/countryData.interface";

const formatUrl = (url: string) => url.replace(/https:\/\/|\.|\/|:/g, "");

const addIdToData = (data: CountryData[]) => {
  const dataWithId = data.map((item, index) => ({
    ...item,
    id: formatUrl(item.link),
  }));

  return dataWithId;
};

export default addIdToData;
