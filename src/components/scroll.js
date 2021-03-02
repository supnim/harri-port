import React from "react";
import "../utils/css/components/theme.scss";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="37"
      viewBox="0 0 18 37"
    >
      <g fill="none" transform="translate(1 1)">
        <rect
          width="16"
          height="25"
          strokeWidth="2"
          className="stroke"
          rx="7.2"
        ></rect>
        <rect width="2" height="5" x="7" y="4" className="fill" rx="1"></rect>
        <path
          strokeLinejoin="round"
          d="M5 33L8 36 11 33"
          className="stroke"
        ></path>
      </g>
    </svg>
  );
}

export default Icon;
