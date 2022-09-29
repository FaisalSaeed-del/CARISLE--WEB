import React from "react";
import BOX1 from "../assets/images/group.png";
import BOX2 from "../assets/images/group1.png";
import BOX3 from "../assets/images/group2.png";
import NOISY from "../assets/images/noisy.png";
import R1 from "../assets/images/arr1.png";
import R2 from "../assets/images/arr2.png";

const Box = () => {
  return (
    <div className="relative">
      <section className="container">
        <div className=" p-32  ">
          <div className="hero-bg w-[1230px] absolute bottom-1 ">
            <div className=" flex flex-row">
              <div>
                <div className="relative">
                  <img src={NOISY} alt="" className="p-8" />
                  <div className="text-white absolute bottom-36 ml-4 ">
                    <h2 className="text-[28px]">
                      EPDM solutions for flat roofs, façades and buildings
                    </h2>
                  </div>
                  <div className="max-w-[293px] mb-[50px] ml-[24px]">
                    <p>
                      Whether it be a roof terrace, living roof or stylish
                      façade, waterproofing of buildings or a garden pond – EPDM
                      products from CARLISLE® CM Europe are as diverse as your
                      construction projects.
                    </p>
                  </div>
                  <div className="flex flex-row space-x-[20px] mb-10 px-5">
                    <span>01</span>
                    <span>02</span>
                    <span>03</span>
                    <span>04</span>
                    <span>05</span>
                    <span>06</span>
                    <span>07</span>
                  </div>
                </div>
                <div></div>
              </div>
              <div className="w-full">
                <div className="text-[24px] py-10">
                  <h1 className="text-center">What About Your Project</h1>
                </div>
                <div className="grid grid-cols-3 ">
                  <div className=" flex justify-center  ">
                    <img src={BOX1} alt="" />
                  </div>
                  <div className=" flex justify-center  ">
                    <img src={BOX2} alt="" />
                  </div>
                  <div className=" flex justify-center">
                    <img src={BOX3} alt="" />
                  </div>
                </div>
                <div className="flex flex-row flex-wrap justify-around">
                  <div className="py-14 flex flex-row space-x-[20px]">
                    <img src={R1} alt="" />
                    <img src={R2} alt="" />
                  </div>
                  <div className="flex justify-center orange-btn">
                    <button className="max-w-[95px] text-white text-[16px] ">
                      Find Solution
                    </button>
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
