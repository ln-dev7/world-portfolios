import Profile from "../models/profile";
import "./../styles/card.scss";

const Card = ({ name, link, tags }: Profile) => {
  return (
    <div className="card">
      <div className="card-container">
        <h2>{name}</h2>
        <a href={link} target="_blank">
          {link}
        </a>
      </div>
      {tags && (
        <div className="card-tags">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
