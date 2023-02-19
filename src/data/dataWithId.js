import data from "./data";

const formatUrl = (url) => url.replace(/https:\/\/|\.|\/|:/g, "");

const dataWithId = data.map((item, index) => ({
  ...item,
  id: formatUrl(item.link),
}));

export default dataWithId;
