import React from "react";
import BtnPrimary from "./BtnPrimary";
import H1 from "./H1";

const Headline = ({ title, textContent, contentWidth }) => {
  return contentWidth === 1 ? (
    <>
      <section className="pt-48">
        <div className="max-w-[1200px] my-0 mx-auto flex items-center justify-center flex-col">
          <H1 content={title} />
          <p className="w-full text-paragraph font-paragraph">{textContent}</p>
          <BtnPrimary content="Get in touch" path="/" />
        </div>
      </section>
    </>
  ) : (
    <>
      <section className="pt-48">
        <div className="max-w-[1200px] my-0 mx-auto flex items-center justify-center flex-col">
          <H1 content={title} />
          <p className="w-1/2 text-paragraph font-paragraph">{textContent}</p>
          <BtnPrimary content="Get in touch" path="/" />
        </div>
      </section>
    </>
  );
};

export default Headline;
