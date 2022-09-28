import React from "react";
import BOX1 from "../assets/images/group.png";
import BOX2 from "../assets/images/group1.png";

const Box = () => {
  return (
    <div className="bg-white max-w-[1230px]">
      <section>
        <div className="main-hero "></div>
      </section>
      <div className="p-40">
        <div className="bg-white  relative bottom-60 shadow-lg shadow-gray-500  border-gray-500 flex-row flex">
          <div className="flex flex-col max-w-[350px] py-5 px-5">
            <div className="box-bg text-[32px] w-[350px] px-4 text-white">
              <span>EPDM solutions for flat roofs, façades and buildings</span>
            </div>
            <p className=" max-w-[293px] py-3">
              Whether it be a roof terrace, living roof or stylish façade,
              waterproofing of buildings or a garden pond – EPDM products from
              CARLISLE® CM Europe are as diverse as your construction projects.
            </p>
          </div>
          <div>
            <div className=" py-10  px-32">
              <h1 className="text-2xl font-bold ">
                What Is Your Project About
              </h1>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 space-x-[24px]  border-blue-100 px-2 py-5 ">
                <div className=" ">
                  <img src={BOX1} alt="" />
                </div>
                <div className="">
                  <img src={BOX2} alt="" />
                </div>
                <div className="">
                  <img src={BOX1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
