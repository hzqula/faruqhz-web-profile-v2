import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import PrestasiPage from "./pages/PrestasiPage";
import PortofolioPage from "./pages/PortofolioPage";
import BlogPage from "./pages/BlogPage";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutMePage />} />
      <Route path="/prestasi" element={<PrestasiPage />} />
      <Route path="/portofolio" element={<PortofolioPage />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  );
};

export default App;
