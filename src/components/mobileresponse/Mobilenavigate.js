import React from "react";
import { GrFormClose } from "react-icons/gr";
import Logo from "../assets/images/logo.png";

const Mobilenavigate = ({ showMenu, active }) => {
  return (
    <div>
      <div
        className={active ? "flex flex-col items-center md:hidden" : "hidden"}
      >
        <div>
          <GrFormClose onClick={showMenu} />
        </div>
        <div>
          <a href="">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="nav-items py-4">
          <ul className="flex flex-row flex-wrap text-[14px] space-x-3">
            <li>
              <a href="">OUR SOLUTIONS</a>
            </li>
            <li>
              <a href="">PRODUCTS & BRANDS</a>
            </li>
            <li>
              <a href="">CASE STUDIES</a>
            </li>
            <li>
              <a href="">SERVICE PORTAL</a>
            </li>
            <li>
              <a href="">ACDEMY</a>
            </li>
            <li>
              <a href="">ABOUT CCM</a>
            </li>
          </ul>
        </div>
        <div className=" btn flex justify-center py-3  text-[14px] font-bold text-white">
          <a href="">SOLUTIONS FINDER</a>
        </div>
      </div>
    </div>
  );
};

export default Mobilenavigate;
