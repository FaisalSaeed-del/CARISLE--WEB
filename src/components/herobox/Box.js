import React from "react";
import BOX1 from "../assets/images/roof-type-other.svg";
import BOX2 from "../assets/images/Group (1).svg";
import BOX3 from "../assets/images/Group.svg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const Box = () => {
  return (
    <div className="relative h-[800px] md:h-[70vh]">
      <section className="container relative">
        <div className="hero-bg p-7 left-4 md:left-10 right-4 md:right-10 absolute top-[-40px] lg:top-[-200px] ">
          <div>
            <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
              <div>
                <div className="col-span-1">
                  <div className=" box-bg text-white md:max-w-[293px] mb-[26px] ">
                    <h2 className="text-[32px] font-bold ml-4">
                      EPDM solutions for flat roofs, façades and buildings
                    </h2>
                  </div>
                  <div className="md:max-w-[293px] mb-[50px] ml-[16px]">
                    <p>
                      Whether it be a roof terrace, living roof or stylish
                      façade, waterproofing of buildings or a garden pond – EPDM
                      products from CARLISLE® CM Europe are as diverse as your
                      construction projects.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="text-[24px] font-bold py-10">
                  <h1 className="text-center">What is Your Project</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5  realtive ">
                  <div className="bg-slate-200 p-4">
                    <div className="flex  justify-center">
                      <img src={BOX1} alt="" className="h-28 w-28 mb-8" />
                    </div>
                    <h1 className="text-xl font-medium text-center">
                      Flat Roof
                    </h1>
                  </div>
                  <div className="bg-slate-200 p-4">
                    <div className="flex  justify-center">
                      <img src={BOX2} alt="" className="h-28 w-28 mb-8" />
                    </div>
                    <h1 className="text-xl font-medium text-center">
                      Flat Roof
                    </h1>
                  </div>
                  <div className="bg-slate-200 p-4">
                    <div className="flex  justify-center">
                      <img src={BOX3} alt="" className="h-28 w-28 mb-8" />
                    </div>
                    <h1 className="text-xl font-medium text-center">
                      Flat Roof
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="gap-x-2 flex flex-row justify-between ml-10 space-x-[30px] ">
                <span>01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>
                <span>06</span>
                <span>07</span>
                <div className="gap-x-4 flex flex-row mt-1 ">
                  <a href="">
                    <HiOutlineArrowNarrowLeft />
                  </a>
                  <a href="">
                    <HiOutlineArrowNarrowRight />
                  </a>
                </div>
              </div>
              <div className="mr-10 mb-2  flex justify-center orange-btn">
                <button className="text-white  text-[16px] ">
                  Find Solution
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Box;
