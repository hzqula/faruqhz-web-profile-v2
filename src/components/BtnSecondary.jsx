import React from "react";

const BtnSecondary = ({ content = "Kirim", path }) => {
  return (
    <a className="mb-0 btn-secondary" href={path}>
      {content}
    </a>
  );
};

export default BtnSecondary;
