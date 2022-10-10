import React from "react";

const Rectangle = () => {
  return (
    <div className="box-bg">
      <section className="container">
        <div className="sm:mt-[300px] md:mt-1 flex flex-row p-6 justify-around">
          <div className="  flex flex-row text-[28px] text-white">
            <h3 className="font-bold">We will be on the Digital Bau - </h3>
            <span>Hall 1.2 - on 31.05.2022</span>
          </div>
          <div>
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
