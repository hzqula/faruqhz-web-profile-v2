import React from "react";

const FeaturedBy = ({ names }) => {
  return (
    <div>
      {names.map((name) => (
        <span key={name} class="p-bold">
          {name}
        </span>
      ))}
    </div>
  );
};

export default FeaturedBy;
