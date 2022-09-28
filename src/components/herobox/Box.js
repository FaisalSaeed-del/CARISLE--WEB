import React from "react";
import BOX1 from "../assets/images/group.png";
import BOX2 from "../assets/images/group1.png";
import NOISY from "../assets/images/noisy.png";

const Box = () => {
  return (
    <div className="">
      <section className="container">
        <div className=" p-20 ">
          <div className="hero-bg">
            <div className="grid grid-cols-2">
              <div>
                <div className=" relative">
                  <img src={NOISY} alt="" className="w-[350px] h-[300px]" />
                  <div className="text-white max-w-[293px] absolute bottom-36 ml-4 text-[32px]">
                    <h2>
                      EPDM solutions for flat roofs, façades and buildings
                    </h2>
                  </div>
                </div>
                <div></div>
              </div>
              <div>
                <div>
                  <h1>What About Your Project</h1>
                </div>
                <div className="grid grid-cols-3 px-14 py-10">
                  <div className="border-4 flex justify-center bg-white ">
                    <img src={BOX1} alt="" />
                  </div>
                  <div className="border-4 flex justify-center bg-gray-300 ">
                    <img src={BOX1} alt="" />
                  </div>
                  <div className="border-4 flex justify-center bg-gray-300 ">
                    <img src={BOX1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Box;
