import React from "react";
import BOX1 from "../assets/images/group.png";
import BOX2 from "../assets/images/group1.png";
import BOX3 from "../assets/images/group2.png";
import BOX4 from "../assets/images/bg.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const Box = () => {
  return (
    <div className="relative">
      <section className="container">
        <div className=" py-72 px-32">
          <div className="hero-bg  absolute  bottom-16 mr-14">
            <div className="p-7 gap-8 grid grid-cols-3">
              <div>
                <div className="col-span-1">
                  <div className=" box-bg text-white max-w-[293px] mb-[26px] ">
                    <h2 className="text-[32px] font-bold ml-4">
                      EPDM solutions for flat roofs, façades and buildings
                    </h2>
                  </div>
                  <div className="max-w-[293px] mb-[50px] ml-[16px]">
                    <p>
                      Whether it be a roof terrace, living roof or stylish
                      façade, waterproofing of buildings or a garden pond – EPDM
                      products from CARLISLE® CM Europe are as diverse as your
                      construction projects.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="text-[24px] font-bold py-10">
                  <h1 className="text-center">What is Your Project</h1>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-flow-col-dense  realtive ">
                  <div className="m-3 flex justify-around">
                    <img src={BOX4} alt="" className="" />

                    <img
                      src={BOX1}
                      alt=""
                      className=" absolute bottom-1 top-56"
                    />
                  </div>
                  <div className=" m-3 flex justify-around">
                    <img src={BOX4} alt="" className="" />

                    <img
                      src={BOX2}
                      alt=""
                      className=" absolute botom-1 top-56"
                    />
                  </div>
                  <div className="m-3 flex justify-around">
                    <img src={BOX4} alt="" className="" />

                    <img
                      src={BOX3}
                      alt=""
                      className=" absolute botom-1 top-56"
                    />
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
