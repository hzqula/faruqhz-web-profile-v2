import React from "react";
import prestasi1 from "../assets/prestasi-1.png";
import prestasi2 from "../assets/prestasi-2.png";
import prestasi3 from "../assets/prestasi-3.png";

const Prestasi = () => {
  return (
    <section className="pt-8 timeline">
      <ul className="timeline-wrapper">
        <li className="list-none relative w-[6px] my-0 mx-auto pt-[50px] bg-primary timeline-items">
          <div className="relative bottom-0 w-[400px] p-[15px] bg-secondary rounded-[0.25rem] timeline-items">
            <time className="block mb-4 font-bold text-subTitle text-primary">
              26 Oktober 2022
            </time>
            <img
              src={prestasi1}
              className="w-full rounded-[0.25rem] border-[0.25rem] border-solid border-primary my-2"
            />

            <p className="text-customWhite text-paragraph font-paragraph">
              Terbaik pertama pada sayembara desain kaos FST.
            </p>
          </div>
        </li>
        <li className="list-none relative w-[6px] my-0 mx-auto pt-[50px] bg-primary timeline-items">
          <div className="relative bottom-0 w-[400px] p-[15px] bg-secondary rounded-[0.25rem] timeline-items">
            <time className="block mb-4 font-bold text-subTitle text-primary">
              05 Desember 2023
            </time>
            <img
              src={prestasi2}
              className="w-full rounded-[0.25rem] border-[0.25rem] border-solid border-primary my-2"
            />
            <p className="text-customWhite text-paragraph font-paragraph">
              Juara 2 lomba desain UI/UX mobile app dalam rangka milad Teknik
              Informatika UIR yang ke-18 dengan tema "Enhancing The
              Intellectuality of Future Developers To Envolyein The Highly Era".
            </p>
          </div>
        </li>

        <li className="list-none relative w-[6px] my-0 mx-auto pt-[50px] bg-primary timeline-items">
          <div className="relative bottom-0 w-[400px] p-[15px] bg-secondary rounded-[0.25rem] timeline-items">
            <time className="block mb-4 font-bold text-subTitle text-primary">
              6 Maret 2024
            </time>
            <img
              src={prestasi3}
              className="w-full rounded-[0.25rem] border-[0.25rem] border-solid border-primary my-2"
            />
            <p className="text-customWhite text-paragraph font-paragraph">
              Finalis lomba Front-end WebDev Competition Infinity 2.0
              Universitas Gunadarma.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Prestasi;
