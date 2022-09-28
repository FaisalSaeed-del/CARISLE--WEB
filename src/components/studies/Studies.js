import React from "react";
import Img2 from "../assets/images/studies.png";

const Studies = () => {
  return (
    <div className="blog">
      <section className="container">
        <div className="relative">
          <div className="">
            <h1 className="absolute left-1/2 top-32 text-[42px] font-bold ">
              Case Studies
            </h1>
            <p className="absolute left-[600px] top-48 ">
              Lorem ipsum dolor sit amet, coctetur adipiscing elit. Aenean
              euismod bibendum laoreet
            </p>
            <div>
              <img src={Img2} alt="" />
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="relative sm:flex-shrink bottom-44 w-[1200px] m-auto p-20">
          <div className="bg-white p-10 shadow-lg shadow-white  border-4 border-gray-100">
            <h1 className="text-xl font-bold mb-2">
              Horticultural Show Schwäbisch Gmünd{" "}
            </h1>
            <div className="flex flex-row justify-between">
              <div>
                <p>
                  Teaching and research at the Institute for Computational
                  Design (ICD) at the University of Stuttgart focus on
                  computer-based design processes and digital production methods
                  in..
                </p>
              </div>
              <div className="px-1">
                <button className="box-btn text-white  text-xl">
                  DETIALS FOR STUDIES{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studies;
