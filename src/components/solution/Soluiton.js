import React from "react";
import BOX3 from "../assets/images/solution.png";
import Rec from "../assets/images/Rec.png";
const Soluiton = () => {
  return (
    <div>
      <section className="container">
        <div className="px-10">
          <div className="flex flex-row justify-around py-10 ">
            <div>
              <span className="heading">
                A complete waterproofing solution for your entire building
              </span>

              <div className="w-[500px]">
                <p className="para">
                  Whether it be high up on a flat roof or down in an underground
                  garage, our EPDM products and sealants offer a wide range of
                  applications. Let us inspire you!
                </p>
              </div>
              <div className="py-10">
                <button className="sol-btn py-2 text-white">
                  DISCOVER OUR SOLUTIONS
                </button>
              </div>
            </div>
            <div>
              <img src={BOX3} alt="" />
              <div className="relative  w-[200px] ">
                <img src={Rec} alt="" className=" relative bottom-[200px] " />
                <span className=" w-[115px] px-10 py-10 text-white text-[24px] absolute bottom-60">
                  Interactive Product World <br />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Soluiton;
