import React from "react";
import Logo from "../assets/images/logo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="box-bg">
      <section className="container">
        <div>
          <div className="p-14 flex flex-row justify-around">
            <div className="flex flex-col">
              <div>
                <img src={Logo} alt="" />
              </div>
              <div className="text-white text-xl  w-[240px] py-20 ">
                <h1 className="py-2">Construction Materials Ltd.</h1>
                <p className="text-gray-300">
                  Ground Floor, Lancaster House Fountain Court, Concorde Way
                  Millennium Business Park NG19 7DW Mansfield Nottinghamshire
                </p>
              </div>
              <div>
                <div className="text-2xl flex flex-row justify-between">
                  <a href="" className="bg-gray-300">
                    <FaLinkedinIn />
                  </a>
                  <a href="" className="bg-gray-300">
                    <AiOutlineYoutube />
                  </a>
                  <a href="" className="bg-gray-300">
                    <FiFacebook />
                  </a>
                  <a href="" className="bg-gray-300">
                    <FiTwitter />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5 ">
              <div className="flex flex-col p-10 ">
                <div className="text-white text-xl mb-5">
                  <h1>Go Direct to</h1>
                </div>
                <div className=" mb-5 flex flex-col text-gray-300 py-2">
                  <a href="">Find a dealer</a>
                  <a href="">Products</a>
                  <a href="">Downloads</a>
                </div>
                <div className="text-white text-xl mb-5">
                  <h1>PRODUCT TYPE</h1>
                </div>
                <div className="mb-5 flex flex-col text-gray-300 py-2">
                  <a href="">Find a dealer</a>
                  <a href="">Products</a>
                  <a href="">Downloads</a>
                </div>
              </div>
              {/* GRID 2 */}
              <div className="flex flex-col  p-10">
                <div className="text-white mb-5 text-xl">
                  <h1>SOLUTIONS</h1>
                </div>
                <div className="mb-5 flex flex-col text-gray-300 py-2">
                  <a href="">Find a dealer</a>
                  <a href="">Products</a>
                  <a href="">Downloads</a>
                </div>
                <div className="text-white mb-5 text-xl">
                  <h1>CARISLE COM</h1>
                </div>
                <div className="flex flex-col mb-5 text-gray-300 py-2">
                  <a href="">Find a dealer</a>
                  <a href="">Products</a>
                  <a href="">Downloads</a>
                </div>
              </div>
              {/* GRID 3 */}
              <div className="flex flex-col p-10 ">
                <div className="text-white mb-5 text-xl">
                  <h1>BRANDS</h1>
                </div>
                <div className="flex flex-col mb-5 text-gray-300 py-2">
                  <a href="">Find a dealer</a>
                  <a href="">Products</a>
                  <a href="">Downloads</a>
                </div>
                <div className="text-white mb-5 text-xl">
                  <h1>LEGAL</h1>
                </div>
                <div className="flex  mb-5 flex-col text-gray-300 py-2">
                  <a href="">Find a dealer</a>
                  <a href="">Products</a>
                  <a href="">Downloads</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
