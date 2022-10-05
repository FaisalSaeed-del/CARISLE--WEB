import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import Mobilenavigate from "../mobileresponse/Mobilenavigate";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="bg-white mt-10">
      <section className="container">
        <div className="md:hidden absolute right-8">
          <GiHamburgerMenu onClick={showMenu} />
        </div>
        <div className="hidden md:flex flex-row flex-wrap  justify-around">
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
          <Mobilenavigate showMenu={showMenu} active={active} />
        </div>
      </section>
    </div>
  );
};

export default Nav;
