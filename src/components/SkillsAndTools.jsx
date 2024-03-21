import React from "react";
import H1 from "./H1";

const SkillsAndTools = () => {
  return (
    <section id="biodata" className="flex flex-col">
      <div className="flex m-auto">
        <div className="flex flex-col items-center w-1/2">
          <h1 className="relative text-subTitle font-subTitle text-primary w-max">
            Skills
          </h1>
          <div className="decoration">
            <span className="line-1"></span>
            <span className="line-2"></span>
          </div>
          <div className="flex flex-wrap justify-center mt-4">
            <a
              href=""
              target="_blank"
              className="text-primary text-[2.5rem] mr-4 transition-all duration-[400ms]"
            >
              <ion-icon name="logo-html5"></ion-icon>
            </a>
            <span className="text-primary mr-4 transition-all duration-[400ms] text-[1.5rem] mt-1">
              |
            </span>
            <a
              href=""
              target="_blank"
              className="text-primary text-[2.5rem] mr-4 transition-all duration-[400ms]"
            >
              <ion-icon name="logo-css3"></ion-icon>
            </a>
            <span className="text-primary mr-4 transition-all duration-[400ms] text-[1.5rem] mt-1">
              |
            </span>
            <a
              href=""
              target="_blank"
              className="text-primary mr-4 transition-all duration-[400ms] text-[1.5rem] mt-1"
            >
              TailwindCSS
            </a>
            <span className="text-primary mr-4 transition-all duration-[400ms] text-[1.5rem] mt-1">
              |
            </span>
            <a
              href=""
              target="_blank"
              className="text-primary text-[2.5rem] mr-4 transition-all duration-[400ms]"
            >
              <ion-icon name="logo-javascript"></ion-icon>
            </a>
            <span className="text-primary mr-4 transition-all duration-[400ms] text-[1.5rem] mt-1">
              |
            </span>
            <a
              href=""
              target="_blank"
              className="text-primary mr-4 transition-all duration-[400ms] text-[1.5rem] mt-1"
            >
              Java
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center w-1/2">
          <h1 className="relative text-subTitle font-subTitle text-primary w-max">
            Tools
          </h1>
          <div className="decoration">
            <span className="line-1"></span>
            <span className="line-2"></span>
          </div>
          <div className="flex flex-wrap justify-center mt-4">
            <a
              href=""
              target="_blank"
              className="text-primary mr-4 transition-all duration-[400ms] text-[1.5rem] mt-1"
            >
              VS Code
            </a>
            <span className="text-primary mr-4 transition-all duration-[400ms] text-[1.5rem] mt-1">
              |
            </span>
            <a
              href=""
              target="_blank"
              className="text-primary mr-4 transition-all duration-[400ms] text-[1.5rem] mt-1"
            >
              Git
            </a>
            <span className="text-primary mr-4 transition-all duration-[400ms] text-[1.5rem] mt-1">
              |
            </span>
            <a
              href=""
              target="_blank"
              className="text-primary text-[2.5rem] mr-4 transition-all duration-[400ms]"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <span className="text-primary mr-4 transition-all duration-[400ms] text-[1.5rem] mt-1">
              |
            </span>

            <span className="text-primary mr-4 transition-all duration-[400ms] text-[1.5rem] mt-1">
              |
            </span>
            <a
              href=""
              target="_blank"
              className="text-primary text-[2.5rem] mr-4 transition-all duration-[400ms]"
            >
              <ion-icon name="logo-figma"></ion-icon>
            </a>
            <span className="text-primary mr-4 transition-all duration-[400ms] text-[1.5rem] mt-1">
              |
            </span>
            <a
              href=""
              target="_blank"
              className="text-primary mr-4 transition-all duration-[400ms] text-[1.5rem] mt-1"
            >
              Illustrator
            </a>
            <span className="text-primary mr-4 transition-all duration-[400ms] text-[1.5rem] mt-1">
              |
            </span>
            <a
              href=""
              target="_blank"
              className="text-primary mr-4 transition-all duration-[400ms] text-[1.5rem] mt-1"
            >
              IntelliJ Idea
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndTools;
