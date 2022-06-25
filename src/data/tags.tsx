import profiles from "./profiles";

const tags = profiles.reduce((tagsList: string[], profile) => {
  profile.tags.forEach((tag) => {
    if (!tagsList.includes(tag)) {
      tagsList.push(tag);
    }
  });
  return tagsList;
}, []);

export default tags;
