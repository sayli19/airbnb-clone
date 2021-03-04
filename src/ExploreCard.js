import React from "react";
import "./ExploreCard.css";
function ExploreCard({ src, title, description }) {
  return (
    <div className="exploreCard">
      <div className="exploreCard__info">
        <img className="exploreCard__img" src={src} alt="" />
        <div className="exploreCard__desc">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ExploreCard;
