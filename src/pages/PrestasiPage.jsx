import React from "react";
import Header from "../components/Header";
import Prestasi from "../components/Prestasi";
import Headline from "../components/Headline";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const PrestasiPage = () => {
  return (
    <>
      <Header />
      <Headline
        title="Prestasi"
        textContent="Tempat dimana saya bisa mengukur sejauh mana keberanian saya dalam hal desain dan pemrograman."
        textContentWidth="20%"
        contentWidth={2}
      />
      <Prestasi />
      <ContactForm />
      <Footer />
    </>
  );
};

export default PrestasiPage;
