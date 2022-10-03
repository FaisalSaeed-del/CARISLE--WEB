import React from "react";
import BOX3 from "../assets/images/solution.png";
import Rec from "../assets/images/Rec.png";
const Soluiton = () => {
  return (
    <div>
      <section className="container">
        <div className="px-10">
          <div className="p-20 grid lg:grid-cols-2 sm:grid-cols-1 py-10 ">
            <div className="py-10">
              <div className="max-w-[495px]">
                <h2 className=" text-[42px]">
                  A complete waterproofing solution for your entire building
                </h2>

                <p className="para mt-[34px]">
                  Whether it be high up on a flat roof or down in an underground
                  garage, our EPDM products and sealants offer a wide range of
                  applications. Let us inspire you!
                </p>

                <div className="mt-[54px]">
                  <button className="sol-btn  text-[16px] text-white">
                    DISCOVER OUR SOLUTIONS
                  </button>
                </div>
              </div>
            </div>
            <div>
              <img src={BOX3} alt="" className="h-[400px]" />
              <div className="relative  ">
                <img src={Rec} alt="" className="  relative bottom-[200px] " />
                <span className="max-w-[115px] px-10 py-10 text-white text-[24px] absolute bottom-60">
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
