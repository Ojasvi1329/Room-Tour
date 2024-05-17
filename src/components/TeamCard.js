// src/components/TeamCard.js

import React from "react";
import "./TeamCard.css";

const TeamCard = ({ image, name, position, linkedin }) => {
  return (
    <div className="team-card">
      <img src={image} alt={`${name}`} className="team-card-image" />
      <h3>{name}</h3>
      <p>{position}</p>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-button"
      >
        in
      </a>
    </div>
  );
};

export default TeamCard;
