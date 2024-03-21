import React from "react";
import heroImg from "../assets/hero-img.png";
import H1 from "./H1";
import BtnPrimary from "./BtnPrimary";

const Hero = ({ content }) => {
  return (
    <section className="pt-[9.5rem]">
      <div className="flex items-center justify-between w-4/5 m-auto">
        <div className="w-1/2">
          <h3 className="text-subTitle font-subTitle text-secondary">
            Muhammad Faruq
          </h3>
          <H1 content={content} />
          <p className="p-bold">Assalamu'alaikum &#8212; Hai</p>
          <p>
            Pada tahun 2022, alhamdulillah resmi menjadi mahasiswa Teknik
            Informatika UIN Suska Riau, dan bangga menjadi bagian dari Pemuda
            Hijrah TIF A 2022. Juga seorang mahasiswa yang bingung memilih
            antara fokus ke dunia desain atau dunia pemrograman. Dan akhirnya
            memutuskan untuk fokus pada keduanya.
          </p>
          <p className="p-ibold">Fokus akhiratnya kapan??</p>
          <BtnPrimary content="Get in touch" />
        </div>
        <div className="flex justify-end w-1/2">
          <img src={heroImg} alt="hero" className="w-3/5" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
