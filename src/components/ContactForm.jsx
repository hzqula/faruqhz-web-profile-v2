import React from "react";
import BtnSecondary from "./BtnSecondary";
import H1 from "./H1";

const ContactForm = ({ btnPath, btnContent }) => {
  return (
    <section id="contact" className="pt-48 pb-[2.5rem]">
      <div className="flex items-center justify-between w-4/5 m-auto">
        <div className="w-1/2">
          <H1 content="Kontak Saya" />
          <p className="text-paragraph font-paragraph text-secondary tracking-[0.8px]">
            Silakan, jangan ragu untuk menghubungi saya &#8212; walaupun hanya
            sekadar "Hai!"
          </p>
          <p className="text-primary font-[600 italic mt-4">
            ilooqstrasi@gmail.com
          </p>
          <p className="text-primary font-[600]">
            Jl. Garuda Sakti KM. 2,5 &#8212; Pekanbaru, Riau
          </p>
          <div className="w-1/2 mt-4">
            <a
              href="https://facebook.com/hzqula"
              target="_blank"
              className="text-primary text-[2.5rem] mr-4 transition-all duration-[400ms]
              hover:text-secondary hover:transition-all hover:duration-[400ms]"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a
              href="https://github.com/FaruqHZ"
              target="_blank"
              className="text-primary text-[2.5rem] mr-4 transition-all duration-[400ms]
              hover:text-secondary hover:transition-all hover:duration-[400ms]"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </div>
        </div>
        <form
          action=""
          className="w-2/5 my-12 mt-[3rem] mb-[auto] mr-[0] pr-8 h-[85%]"
        >
          <div className="flex justify-between">
            <div className="flex flex-col mb-8 w-[48%]">
              <label
                htmlFor="name"
                className="block text-subTitle font-subTitle text-primary"
              >
                Nama
              </label>
              <input
                type="text"
                id="name"
                placeholder="Fulan bin Fulan"
                className="rounded-[0.25rem] border-2 border-solid border-primary outline-none p-[16px] w-full h-12 bg-transparent text-paragraph font-paragraph text-[1rem]"
              />
            </div>
            <div className="flex flex-col mb-8 w-[48%]">
              <label
                htmlFor="email"
                className="block text-subTitle font-subTitle text-primary"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="fulan@gmail.com"
                className="rounded-[0.25rem] border-2 border-solid border-primary outline-none p-[16px] w-full h-12 bg-transparent text-paragraph font-paragraph text-[1rem]"
              />
            </div>
          </div>
          <div className="full">
            <label
              htmlFor="message"
              className="block text-subTitle font-subTitle text-primary"
            >
              Pesan
            </label>
            <textarea
              className="bg-transparent rounded-[0.25rem] border-2 border-solid border-primary outline-none py-3 px-4 w-full h-24 text-[17px] resize-none"
              name=""
              id="message"
              placeholder="Pesan disini..."
            ></textarea>
          </div>
          <div className="text-center action">
            <BtnSecondary content={btnContent} path={btnPath} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
