import "./../styles/card.scss";


const cleanUrl = (link) => {
    return link
        .replace(/^https?:\/\//, '')
        .replace(/\/$/, '')
        .slice(0, 29)
            + (link.length > 29 ? "...": "");
}

const Card = ({ name, link, tags }) => (
    <div className="card">
      <div className="card-container">
        <h2>{name}</h2>
        <a href={link} target="_blank">
          {cleanUrl(link)}
        </a>
      </div>
      <div className="card-tags">
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div>
);

export default Card;
