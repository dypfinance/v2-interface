import React from "react";

const NoteIcon = ({ bgFill, svgFill }) => {
  return (
    <div>
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.12)', borderRadius: '0 0 18px'}}
      >
        <path
          d="M0 18C0 8.05888 8.05887 0 18 0H56V38C56 47.9411 47.9411 56 38 56H0V18Z"
          fill={bgFill}
        />
        <path
          d="M23 19H22C20.3431 19 19 20.3431 19 22V36C19 37.6569 20.3431 39 22 39H34C35.6569 39 37 37.6569 37 36V22C37 20.3431 35.6569 19 34 19H33"
          stroke={svgFill}
          strokeWidth="2"
        />
        <rect
          x="23"
          y="17"
          width="10"
          height="5"
          rx="2"
          stroke={svgFill}
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default NoteIcon;
