import React from "react";

const Rectangle = () => {
  return (
    <div className="box-bg lg:mt-10 md:mt-72 sm:mt-[400px]">
      <section className="container">
        <div className="flex flex-row p-6 justify-around">
          <div className="  flex flex-row sm:flex-2 text-[28px] text-white">
            <h3 className="font-bold">We will be on the Digital Bau -</h3>
            <span>Hall 1.2 - on 31.05.2022</span>
          </div>
          <div className="">
            <button className="box-btn max-w-[150px] text-white  text-[14px]">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rectangle;
