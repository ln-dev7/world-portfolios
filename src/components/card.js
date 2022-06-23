import React from "react";
import "./../styles/card.scss";

const Card = ({ name, link }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <a href={link} target="_blank">
        {link}
      </a>
    </div>
  );
};

export default Card;
