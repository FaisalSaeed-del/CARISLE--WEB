import React from "react";
import { FcPhone } from "react-icons/fc";
import { MdMarkEmailRead } from "react-icons/md";
import NOISY from "../assets/images/noisy.png";
import MEN from "../assets/images/men.png";
const Help = () => {
  return (
    <div>
      <section className="contianer">
        <div>
          <div className=" md:mt-[53px] ml-[170px] mr-[170px] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 space-x-[110px] ">
            <div>
              <div className="max-w-[289px] text-[42px]  text-blue-600">
                <h1>How can we help?</h1>
              </div>
              <div className="max-w-[290px] lg:mt-4 ">
                <p>
                  Waterproof EPDM solutions for flat roofs, façades and
                  buildings
                </p>
              </div>
            </div>
            <div className="sm:mt-5 ">
              <div className="text-[24px] ">
                <h2>Have any Question?</h2>
              </div>
              <p>if you have any question feel free to contact</p>
              <div className="mt-[40px] text-[16px] font-bold flex flex-wrap flex-row space-x-2">
                <a href="">
                  <FcPhone />
                </a>
                <span>+913xxxxxxxx-xx</span>
              </div>
              <div className="mt-[20px] text-[16px] font-bold flex flex-row space-x-2">
                <a href="">
                  <MdMarkEmailRead />
                </a>
                <span>xyz@gmail.com</span>
              </div>
            </div>
            <div>
              <div className="sm:mt-5">
                <div className="box-bg mb-5">
                  <div className="text-[24px] text-white p-3">
                    <p>NEED AN ADVICE?</p>
                  </div>
                </div>
                <div className="flex flex-row space-x-2">
                  <img src={MEN} alt="" />
                  <span>If you want advice feel free to contact</span>
                </div>
                <div className="mb-[100px] px-16 text-[14px] text-white">
                  <button className="box-btn">REQUEST ADVICE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;
