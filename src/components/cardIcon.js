import React from "react";
import "../utils/css/components/card.scss";

const Card = ({ icon, title, description }) => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      {icon}
      <div className="content" style={{ margin: "auto", paddingTop: "4rem" }}>
        <h6 className="title">{title}</h6>
        <p className="paragraph">{description}</p>
      </div>
    </div>
  );
};

export default Card;
