import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Mobilenavigate = ({ showMenu, active }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div>
      <div className="flex justify-between">
        <div className="mt-10">
          <a href="">
            <img src={Logo} alt="" />
          </a>
        </div>
        <button className="mr-10" onClick={toggleDrawer}>
          <GiHamburgerMenu />
        </button>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
      >
        <div className="nav-items py-4">
          <ul className="py-5 px-5 cursor-pointer flex flex-col space-y-3  text-[14px]">
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
        <div className="ml-4 btn flex justify-center py-3  text-[14px] font-bold text-white">
          <a href="">SOLUTIONS FINDER</a>
        </div>
      </Drawer>
    </div>
  );
};

export default Mobilenavigate;
