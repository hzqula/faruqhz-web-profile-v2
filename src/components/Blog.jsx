import React from "react";

const Blog = () => {
  return (
    <article className="card bg-white rounded-[0.25rem] overflow-hidden p-[1.25rem] relative duration-[0.15s] transition-[ease-in] custom-shadow">
      <figure className="rounded-[0.25rem] overflow-hidden">
        <img src="https://source.unsplash.com/360x200?code" />
      </figure>
      <div className="mt-[1.5rem] flex items-center justify-between card-header">
        <a
          href="/"
          className="font-[600] text-[1.375rem] leading-[1.25] pr-4 decoration-[none] text-inherit will-change-transform card"
        >
          How To Code A Program
        </a>
        <button className="icon-button border-none bg-white rounded-[50%] w-10 h-10 flex justify-center items-center shrink-0 text-[1.25rem] transition-[ease] duration-[250ms] custom-shadow z-[1] cursor-pointer text-[#565656]">
          <ion-icon name="heart-sharp"></ion-icon>
        </button>
      </div>
      <div className="mt-5 border-t border-solid border-[#ddd] pt-5 flex items-center flex-wrap">
        <div className="card-meta card-meta--views">
          <ion-icon name="eye-sharp" className="w-4 h-4"></ion-icon>
          2,465
        </div>
        <div className="card-meta card-meta--date">
          <ion-icon name="calendar-clear-sharp"></ion-icon>
          Mar 16, 2024
        </div>
      </div>
    </article>
  );
};

export default Blog;
