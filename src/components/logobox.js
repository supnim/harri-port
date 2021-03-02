import React from "react";
import Img from "gatsby-image";

const LogoBox = ({
  one,
  two,
  three,
  four,
  five,
  oneAlt,
  twoAlt,
  threeAlt,
  fourAlt,
  fiveAlt
}) => {
  return (
    <div className="row logobox">
      <Img fixed={one} title={oneAlt} />
      <Img fixed={two} title={twoAlt} />
      <Img fixed={three} title={threeAlt} />
      <Img fixed={four} title={fourAlt} />
      <Img fixed={five} title={fiveAlt} />
    </div>
  );
};

export default LogoBox;
