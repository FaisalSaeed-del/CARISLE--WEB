import React from "react";

const Rectangle = () => {
  return (
    <div className="box-bg">
      <section className="container p-16">
        <div className="flex flex-row  justify-around">
          <div className="flex flex-row text-[28px] text-white">
            <h3 className="font-bold">We will be on the Digital Bau -</h3>
            <span>Hall 1.2 - on 31.05.2022</span>
          </div>
          <div className="box-btn  ">
            <button className=" px-2 text-white text-[28px]">
              MORE DETAILS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rectangle;
