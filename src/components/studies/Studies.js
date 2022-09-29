import React from "react";
import Img2 from "../assets/images/studies.png";

const Studies = () => {
  return (
    <div className="">
      <section className="container">
        <div className="p-10 relative">
          <div className="">
            <h1 className="absolute left-1/2   text-[42px] font-bold ">
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
    </div>
  );
};

export default Studies;
