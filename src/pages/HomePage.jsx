import React from "react";
import bioImg from "../assets/biodata-img.png";
import prestasiImg from "../assets/prestasi-img.png";
import portfolioImg from "../assets/portofolio-img.png";
import blogImg from "../assets/blog-img.png";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Section from "../components/Section";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero content="So(k) Front-end Dev" />
      <Section
        imagePath={bioImg}
        path="/"
        imageAlt="ilustrasi"
        title="Tentang Saya"
        content="Sekilas tentang saya &#8212; siapa saya, ngapain saya, dimana saya, kapan dan bagaimana."
        order={1}
        justifyImg="start"
      />
      <Section
        imagePath={prestasiImg}
        path="/"
        imageAlt="prestasi"
        title="Prestasi"
        content="Beberapa hal — yang sebenarnya tidak begitu berharga"
        order={2}
        justifyImg="end"
      />
      <Section
        imagePath={portfolioImg}
        // imgWidth="70%"
        path="/"
        imageAlt="portofolio"
        title="Portofolio"
        content="Proyek-proyek yang pernah dikerjakan — baik itu berupa program atau desain."
        order={1}
        justifyImg="start"
      />
      <Section
        imagePath={blogImg}
        path="/"
        imageAlt="blog"
        title="Blog"
        content="Sekumpulan tulisan so(k) bijak saya — yang pantas untuk dibaca pada saat waktu luang."
        order={2}
        justifyImg="end"
      />
      <ContactForm btnContent="Kirim" btnPath="/" />
      <Footer />
    </>
  );
};

export default HomePage;
