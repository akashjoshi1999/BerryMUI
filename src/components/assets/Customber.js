import React from "react";

const Customber = () => {
  return (
    <svg
      className="icon icon-tabler icon-tabler-basket"
      width="1.3rem"
      height="1.3rem"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    // style="margin-top: auto; margin-bottom: auto;"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <polyline points="7 10 12 4 17 10"></polyline>
      <path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z"></path>
      <circle cx="12" cy="15" r="2"></circle>
    </svg>
  );
};

export default Customber;
