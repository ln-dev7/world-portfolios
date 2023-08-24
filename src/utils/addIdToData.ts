import type CountryData from "@/interfaces/countryData.interface";

const formatUrl = (url: string) => url.replace(/https:\/\/|\.|\/|:/g, "");

const addIdToData = (data: CountryData[]) => {
  const dataWithId = data.map((item, index) => ({
    ...item,
    id: formatUrl(Array.isArray(item.link) ? item.link[0] : item.link),
  }));

  return dataWithId;
};

export default addIdToData;
