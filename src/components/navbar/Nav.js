import React from "react";
import Logo from "../assets/images/logo.png";

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
            <ul className="flex flex-row flex-wrap space-x-3">
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
          <div className="btn text-center py-3  font-bold text-white">
            <a href="">SOLUTIONS FINDER</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nav;
