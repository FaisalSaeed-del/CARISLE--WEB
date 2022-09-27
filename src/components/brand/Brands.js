import React from "react";
import B1 from "../assets/images/brand1.png";
import B2 from "../assets/images/brand2.png";
import B3 from "../assets/images/brand3.png";
import B4 from "../assets/images/brand4.png";
import Sticker1 from "../assets/images/b1.png";
import Sticker2 from "../assets/images/b2.png";
import Sticker3 from "../assets/images/b3.png";
import Sticker4 from "../assets/images/b4.png";

const Brands = () => {
  return (
    <div>
      <section className="container">
        <div className="py-20 px-36">
          <h1 className="text-3xl font-bold text-black">OUR BRANDS</h1>
          <span className="text-xl text-black ">
            Lorem ipsum dolor sit amet, coctetur adipiscing elit. Aenean euismod
            bibendum laoreet.
          </span>
        </div>
        <div className="flex flex-wrap flex-row justify-around">
          <img src={B1} alt="" />

          <img src={B2} alt="" />
          <img src={B3} alt="" />
          <img src={B4} alt="" />
        </div>
        <div className="relative bottom-7 flex flex-row justify-around">
          <img src={Sticker1} alt="" />

          <img src={Sticker2} alt="" />
          <img src={Sticker3} alt="" />
          <img src={Sticker4} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Brands;
