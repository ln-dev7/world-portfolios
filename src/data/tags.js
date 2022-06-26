import data from "./data";

const tags = data.reduce((acc, item) => {
  item.tags.forEach((tag) => {
    if (!acc.map((a) => a.toLowerCase()).includes(tag.toLowerCase())) {
      acc.push(tag.toLowerCase());
    }
  });
  return acc;
}, []);

export default tags;
