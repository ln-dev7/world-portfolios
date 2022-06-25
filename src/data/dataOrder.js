import data from "./data";

export default data.sort((a, b) => (a.name < b.name) ? -1 : (a.name > b.name ? 1 : 0));
