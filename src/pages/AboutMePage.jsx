import React from "react";
import Header from "../components/Header";
import Headline from "../components/Headline";
import SkillsAndTools from "../components/SkillsAndTools";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const AboutMePage = () => {
  return (
    <>
      <Header />
      <Headline
        title="Tentang Saya"
        textContent="Intro-nya seperti di halaman awal... Awal minat saya pada pemrograman ini timbul sejak kelas 8 MTs, tentunya saya juga tertarik dalam dunia IT, ini dibuktikan dengan saya menjadi subscriber gadgetin pada saat itu juga. Saya juga pernah menjadi hengker yang dibuktikan dengan saya pernah nge-hack sekitar sepuluh lebih akun facebook dengan menggunakan termux yang script-nya saya comot di facebook juga."
        contentWidth={1}
      />
      <SkillsAndTools />
      <ContactForm />
      <Footer />
    </>
  );
};

export default AboutMePage;
