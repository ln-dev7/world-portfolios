import React from "react";
import "./../styles/card.scss";

const Card = ({ name, link, tags }) => {
  return (
    <div className="card">
      <div className="card-container">
        <h2>{name}</h2>
        <a href={link} target="_blank">
          {link}
        </a>
      </div>
    </div>
  );
};

export default Card;
