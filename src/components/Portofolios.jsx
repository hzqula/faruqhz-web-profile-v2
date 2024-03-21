import React from "react";
import Portofolio from "./Portofolio";
import portofolio1 from "../assets/portofolio-1a.png";
import portofolio2 from "../assets/portofolio-2a.png";
import portofolio3 from "../assets/portofolio-3a.png";
import portofolio4 from "../assets/portofolio-4a.png";
import portofolio5 from "../assets/portofolio-5a.png";

const Portofolios = () => {
  return (
    <>
      <Portofolio
        title="'Ilm"
        content={`Proyek lomba desain UI/UX Mobile App dengan tema "Enhancing The Intellectuality of Future Developers To Envolyein The Highly Era" dalam rangka menyambut milad yang ke-16 Teknik Informatika UIR — Featured by Gilang Ramadhan Indra, M. Nabil Dawami.`}
        btnContent="Lihat di Figma Community"
        imgPath={portofolio3}
        icons={
          <>
            <div className="logo">
              <a href="" target="_blank">
                <ion-icon name="logo-figma"></ion-icon>
              </a>
            </div>
          </>
        }
      />

      <Portofolio
        title="Scratch Library"
        content={`Proyek UAS Pemrograman Mahir — yang menerapkan konsep graf. Featured by M. Nabil Dawami, M. Rafly Wirayudha, Surya Hidayatullah F.`}
        btnContent="Lihat di Github"
        imgPath={portofolio1}
        icons={
          <>
            <div className="logo">
              <a href="" target="_blank">
                <ion-icon name="logo-css3"></ion-icon>
              </a>
              <a href="" target="_blank" className="teks-logo">
                Java
              </a>
              <a href="" target="_blank" className="teks-logo">
                JavaFX
              </a>
            </div>
          </>
        }
      />

      <Portofolio
        title="CollegeTIF"
        content={`Proyek Front-end WebDev Competition Infinity 2.0 Universitas Gunadarma — Featured by Hafidz Alhadid Rahman, Gilang Ramadhan Indra.`}
        btnContent="Lihat di Github"
        imgPath={portofolio2}
        icons={
          <>
            <div className="logo">
              <a href="">
                <ion-icon name="logo-html5"></ion-icon>
              </a>
              <a href="">
                <ion-icon name="logo-css3"></ion-icon>
              </a>
              <a href="" className="teks-logo">
                TailwindCSS
              </a>
              <a href="">
                <ion-icon name="logo-javascript"></ion-icon>
              </a>
            </div>
          </>
        }
      />

      <Portofolio
        title="Simple Calculator"
        content={`Proyek Simple Javascript — yang komputasinya menggunakan method .eval()`}
        btnContent="Lihat di Github"
        imgPath={portofolio4}
        icons={
          <>
            <div className="logo">
              <a href="">
                <ion-icon name="logo-html5"></ion-icon>
              </a>
              <a href="">
                <ion-icon name="logo-css3"></ion-icon>
              </a>
              <a href="">
                <ion-icon name="logo-javascript"></ion-icon>
              </a>
            </div>
          </>
        }
      />

      <Portofolio
        title="FaruqHZ | Web Profile"
        content={`Tugas 1 Pemrograman Web — berisi minimal lima halaman.`}
        btnContent="Lihat di Github"
        imgPath={portofolio5}
        icons={
          <>
            <div className="logo">
              <a href="">
                <ion-icon name="logo-html5"></ion-icon>
              </a>
              <a href="">
                <ion-icon name="logo-css3"></ion-icon>
              </a>
              <a href="">
                <ion-icon name="logo-javascript"></ion-icon>
              </a>
            </div>
          </>
        }
      />
    </>
  );
};

export default Portofolios;
