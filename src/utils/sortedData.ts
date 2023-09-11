import addIdToData from "./addIdToData";
import type UserProfile from "@/interfaces/userProfile.interface";

const sortedData = (data: UserProfile[]) => {
  const dataWithId = addIdToData(data);

  const sorted = dataWithId.sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  );

  return sorted;
};

export default sortedData;
