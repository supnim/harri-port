import React from "react";
import "../utils/css/components/meth.scss";
import { motion } from "framer-motion";

const MethCard = props => (
  <motion.div
    className="methCard"
    whileHover={{ scale: 1.04, y: -4 }}
    whileTap={{ scale: 0.98, y: 0 }}
    transition={{ duration: 0.01 }}
  >
    <div className="methImg">{props.icon}</div>
    <h3 className="methTitle">{props.title}</h3>
    <p className="methParagraph">{props.standfirst}</p>
  </motion.div>
);

export default MethCard;
