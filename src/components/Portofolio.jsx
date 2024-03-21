import React from "react";
import BtnPrimary from "./BtnPrimary";

const Portofolio = ({ title, content, btnContent, icons, imgPath }) => {
  return (
    <>
      <section className="pt-48">
        <div className="flex w-4/5 m-auto">
          <div className="flex items-center justify-start w-1/2">
            <img
              src={imgPath}
              alt="Hero Image"
              className="w-[90%] h-fit rounded-[0.25rem] border-[2px] border-solid border-primary"
            />
          </div>
          <div className="w-1/2 main-content">
            <h1 className="text-subTitle font-subTitle ml-[-0.2rem]">
              {title}
            </h1>
            <div className="decoration">
              <span className="line-1"></span>
              <span className="line-2"></span>
            </div>
            <p className="text-paragraph font-paragraph tracking-[0.8px]">
              {content}
            </p>
            <div className="flex w-full mt-4 logo">{icons}</div>
            <BtnPrimary content={btnContent} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portofolio;
