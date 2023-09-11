import type UserProfile from "@/interfaces/userProfile.interface";

const formatUrl = (url: string) => url.replace(/https:\/\/|\.|\/|:/g, "");

const addIdToData = (data: UserProfile[]) => {
  return data.map((item, index) => ({
    ...item,
    id: formatUrl(Array.isArray(item.link) ? item.link[0] : item.link),
  }));
};

export default addIdToData;
