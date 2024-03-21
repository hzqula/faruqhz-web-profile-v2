import React from "react";
import Header from "../components/Header";
import Portofolios from "../components/Portofolios";
import Headline from "../components/Headline";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const PortofolioPage = () => {
  return (
    <>
      <Header />
      <Headline
        title="Portofolio"
        textContent="Tempat dimana saya bisa mengukur sejauh mana keahlian saya dalam hal desain dan pemrograman."
        textContentWidth="20%"
        contentWidth={2}
      />
      <Portofolios />
      <ContactForm />
      <Footer />
    </>
  );
};

export default PortofolioPage;
