"use client";

import Card from "./Card";

const CardList = ({
  filteredData,
}: {
  filteredData: {
    name: string;
    link: string | string[];
    tags: string[];
    socials: {
      twitter: string;
      github: string;
      linkedin: string;
    };
  }[];
}) => (
  <>
    {filteredData.map((item, index) => (
      <Card
        key={index}
        name={item.name}
        link={item.link}
        tags={item.tags.map((tag) => tag.toLowerCase())}
        socials={item.socials}
      />
    ))}
    {filteredData.length === 0 && <h2>No portfolios found ...</h2>}
  </>
);

export default CardList;
