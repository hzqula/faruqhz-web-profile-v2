import React from "react";

const BtnPrimary = ({ content, path }) => {
  return (
    <a href={path} className="btn-primary">
      {content}
      <ion-icon name="arrow-forward-sharp" class="icon"></ion-icon>
    </a>
  );
};

export default BtnPrimary;
