import React from "react";
function TitleP({ title, paragraph }) {
  return (
    <>
      <h3>{title}</h3>
      <p style={{ opacity: ".8" }}>{paragraph}</p>
    </>
  );
}

export default TitleP;
