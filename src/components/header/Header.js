import React from "react";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div>
      <section className="container">
        <div className="main-headerc flex flex-row justify-between border-b-2 flex-wrap">
          <div className="bg-white"></div>
          <div>
            <navbar>
              <div className="flex flex-row bg-gray-200  space-x-3 py-1 ">
                <ul className="header-text flex flex-row justify-between space-x-5  px-3 py-2 ">
                  <li>
                    <a href="">Contacts \</a>
                  </li>
                  <li>
                    <a href="">Jobs & Careers \</a>
                  </li>
                  <li>
                    <a href="">New Blogs</a>
                  </li>
                </ul>
                <input
                  type="search"
                  id="first_name"
                  class=" bg-white border border-gray-300 text-gray-900 text-sm rounded-sm w-56 p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Search..."
                  required
                />
                <div className="relative right-10 top-3">
                  <a href="">
                    <FiSearch />
                  </a>
                </div>
                <div className="pr-3">
                  <button className="bg-white p-2 border-4 border-gray-200 w-[88px] ">
                    ENG
                  </button>
                </div>
              </div>
            </navbar>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
