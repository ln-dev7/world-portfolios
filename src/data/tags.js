import data from "./data";

const tags = data.reduce((acc, item) => {
  item.tags.forEach((tag) => {
    if (!acc.includes(tag)) {
      acc.push(tag);
    }
  });
  return acc;
}, []);

export default tags;
