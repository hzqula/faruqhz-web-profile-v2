import React from "react";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Headline from "../components/Headline";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const BlogPage = () => {
  return (
    <>
      <Header />
      <Headline
        title="Blog"
        textContent="Berusaha menulis tulisan bermanfaat — sehingga Anda bisa membaca bacaan yang bermanfaat pula"
        textContentWidth="20%"
        contentWidth={2}
      />
      <Blogs />
      <ContactForm />
      <Footer />
    </>
  );
};

export default BlogPage;
