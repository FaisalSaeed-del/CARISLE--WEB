import React from "react";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-white mt-10">
      <section className="container">
        <div className=" flex flex-row justify-around">
          <div>
            <a href="">
              <img src={Logo} alt="" />
            </a>
          </div>
          <div className="nav-items py-4">
            <ul className="flex flex-row flex-wrap text-[14px] space-x-3">
              <li>
                <Link to="">OUR SOLUTIONS</Link>
              </li>
              <li>
                <Link to="">PRODUCTS & BRANDS</Link>
              </li>
              <li>
                <Link to="">CASE STUDIES</Link>
              </li>
              <li>
                <Link to="">SERVICE PORTAL</Link>
              </li>
              <li>
                <Link to="">ACADEMY</Link>
              </li>
              <li>
                <Link to="">ABOUT CCM</Link>
              </li>
            </ul>
          </div>
          <div className=" btn flex justify-center py-3  text-[14px] font-bold text-white">
            <a href="">SOLUTIONS FINDER</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nav;
