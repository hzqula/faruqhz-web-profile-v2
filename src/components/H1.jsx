import React from "react";

const H1 = ({ content }) => {
  return (
    <>
      <h1 className="relative text-title font-title text-primary w-max">
        {content}
      </h1>
      <div className="decoration">
        <span className="line-1"></span>
        <span className="line-2"></span>
      </div>
    </>
  );
};

export default H1;
