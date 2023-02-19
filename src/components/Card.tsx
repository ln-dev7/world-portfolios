import Link from "next/link";

const cleanUrl = (link: string) => {
  return (
    link
      .replace(/^https?:\/\//, "")
      .replace(/\/$/, "")
      .slice(0, 29) + (link.length > 29 ? "..." : "")
  );
};

const Card = ({
  name,
  link,
  tags,
}: {
  name: string;
  link: string;
  tags: string[];
}) => (
  <div className="card">
    <div className="card-container">
      <h2>{name}</h2>
      <Link href={link} target="_blank">
        {cleanUrl(link)}
      </Link>
    </div>
    <div className="card-tags">
      {tags.map((tag, index) => (
        <span key={index}>{tag}</span>
      ))}
    </div>
  </div>
);

export default Card;
