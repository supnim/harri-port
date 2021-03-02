import React from "react";

const videoBox = ({ description, url, style }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "16px 0"
    }}
  >
    <iframe
      style={style}
      title="videosComponent"
      src={url}
      width="100%"
      height="450"
      loading="lazy"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen="true"
    ></iframe>
    <p style={{ textAlign: "center", padding: "32px" }}>{description}</p>
  </div>
);

export default videoBox;
