import React from "react";
import "../utils/css/components/card.scss";
import Img from "gatsby-image";

const Card = ({ image, title, description }) => {
  return (
    <div className="container">
      {image && <Img className="img" fluid={image} />}
      <div className="content">
        <h4 className="title">{title}</h4>
        <p className="paragraph">{description}</p>
      </div>
    </div>
  );
};

export default Card;
