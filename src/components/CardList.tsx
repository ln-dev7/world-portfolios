import Card from "./Card";

const CardList = ({
  filteredData,
}: {
  filteredData: {
    name: string;
    link: string;
    tags: string[];
  }[];
}) => (
  <>
    {filteredData.map((item, index) => (
      <Card
        key={index}
        name={item.name}
        link={item.link}
        tags={item.tags.map((tag) => tag.toLowerCase())}
      />
    ))}
    {filteredData.length === 0 && <h2>No portfolios found ...</h2>}
  </>
);

export default CardList;
