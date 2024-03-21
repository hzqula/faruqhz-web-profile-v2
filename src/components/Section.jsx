import React from "react";
import BtnPrimary from "./BtnPrimary";
import H1 from "./H1";

const Section = ({
  imagePath,
  path,
  imageAlt,
  title,
  content,
  order,
  justifyImg,
}) => {
  return (
    <section className="pt-48">
      <div className="flex items-center justify-between w-4/5 m-auto">
        {order === 1 ? (
          <>
            <div className={`w-1/2 flex justify-${justifyImg}`}>
              <img src={imagePath} alt={imageAlt} className={`w-[75%]`} />
            </div>
            <div className="w-1/2">
              <H1 content={title} />
              <p className="text-paragraph font-paragraph text-secondary tracking-[0.8px]">
                {content}
              </p>
              <BtnPrimary content="Lihat selengkapnya" path={path} />
            </div>
          </>
        ) : (
          <>
            <div className="w-1/2">
              <H1 content={title} />
              <p className="text-paragraph font-paragraph text-secondary tracking-[0.8px]">
                {content}
              </p>
              <BtnPrimary content="Lihat selengkapnya" path={path} />
            </div>
            <div className={`w-1/2 flex justify-${justifyImg}`}>
              <img src={imagePath} alt={imageAlt} className={`w-[75%]`} />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Section;
