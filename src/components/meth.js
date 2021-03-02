import React, { useState } from "react";
import "../utils/css/components/meth.scss";
import MethodologyCard from "../components/methCard";
import MethodologyData from "../components/methData";
import { motion } from "framer-motion";
// import { graphql, useStaticQuery } from "gatsby";
// import Img from "gatsby-image";

const defaultBackground = " ";

function MethodologyBoard() {
  const [currentCard, setCurrentCard] = useState(defaultBackground);
  const focusStyle = {
    outline: "solid 2px pink"
  };

  // const image = useStaticQuery(graphql`
  //   query {
  //     design: file(relativePath: { eq: "methBackgrounds/design.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1000) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `);
  // const defaultBackground = () => {
  //   return (
  //     <div>
  //       <Img fluid={image.design.childImageSharp.fluid} />
  //     </div>
  //   );
  // };

  return (
    <div id="board" className="board">
      <h2 className="methHeader">methodology.</h2>
      <div>{currentCard}</div>
      <motion.div className="methContainer" id="methContainer">
        {MethodologyData.length &&
          MethodologyData.map(({ title, standfirst, icon, background }) => {
            return (
              <div
                onMouseOver={() => setCurrentCard(background)}
                onFocus={focusStyle}
                onMouseLeave={() => setCurrentCard(defaultBackground)}
              >
                <MethodologyCard
                  icon={icon}
                  title={title}
                  standfirst={standfirst}
                />
              </div>
            );
          })}
      </motion.div>
    </div>
  );
}

export default MethodologyBoard;
