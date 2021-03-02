import React from "react";
import "../utils/css/components/card.scss";
import Img from "gatsby-image";

const Card = ({ image, label, title, byline, description, imageStyle }) => {
  return (
    <div className="side">
      <div className="col-6" style={{ imageStyle }}>
        {image && <Img className="img" fluid={image} />}
      </div>
      <div className="content col-6">
        <p style={{ color: "#999", margin: "0" }}>
          <b>{label}</b>
        </p>
        <h3 className="titleAlt">{title}</h3>
        <h6 className="byline">{byline}</h6>
        <p className="paragraphAlt">{description}</p>
      </div>
    </div>
  );
};
export default Card;
