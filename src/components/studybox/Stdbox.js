import React from "react";
import BLOG from "../assets/images/blog.png";
import POST1 from "../assets/images/post1.png";
import POST2 from "../assets/images/post2.png";
import POST3 from "../assets/images/post3.png";
import Date from "../assets/images/date.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Stdbox = () => {
  return (
    <div className="blog">
      <section className="container">
        <div className="study-box">
          <div className="relative bottom-36 max-w-[1230px]  m-auto p-10">
            <div className="bg-white p-10 ">
              <h1 className="text-[20px] font-bold mb-2">
                Horticultural Show Schwäbisch Gmün
              </h1>
              <div className="flex  flex-row justify-between">
                <div className="lg:max-w-[900px] sm:max-w-[305px]">
                  <p>
                    Teaching and research at the Institute for Computational
                    Design (ICD) at the University of Stuttgart focus on
                    computer-based design processes and digital production
                    methods in..
                  </p>
                </div>
                <div className="">
                  <button className="box-btn max-w-[150px] text-white  text-[16px]">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* ===================   NEW AND BLOG =============== */}
            <div className="mt-[175px]">
              <section>
                <div className="text-center text-[42px] text-black ">
                  <div className="mb-[55px]">
                    <h1>NEWS & BLOGS</h1>
                  </div>
                </div>
                <div>
                  <div className="md:grid-cols-1 grid lg:grid-cols-5 bg-white">
                    <div className="relative col-span-3">
                      <img src={BLOG} alt="" className="image" />
                      <div className="absolute bottom-[300px]">
                        <img src={Date} alt="" />
                      </div>
                    </div>

                    <div className="col-span-2 mt-[63px] mr-[68px]">
                      <div className="max-w-[376px]">
                        <h1 className="text-[24px] mb-5 ">
                          CARLISLE welcomes delegates at the Schools & Academies
                          Show
                        </h1>
                      </div>
                      <div className="max-w-[375px]">
                        <p>
                          Team CARLISLE CM Europe are welcoming delegates
                          attending the Schools & Academies Show at the NEC,
                          Birmingham. It is one of the UK’s leading education
                          policy and best-practice events.
                        </p>
                      </div>
                      <div>
                        <button className="study-btn mt-10 text-white text-[14px]">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/* FINISHING LINE NEWS SECTION */}
            <div className="mt-[32px]">
              {/* ==================== POSET SECTION============ */}
              <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-x-2 ">
                <div className="max-w-[390px] ">
                  <div className="relative">
                    <img src={POST1} alt="" />
                    <div className="absolute bottom-44">
                      <img src={Date} alt="" />
                    </div>
                  </div>
                  <div className="bg-white p-10">
                    <div className="max-w-[340px]">
                      <h1 className="text-[18px] font-bold">
                        CARLISLE welcomes delegates at the Schools & Academies
                        Show
                      </h1>
                      <p className="text-[16px] text-justify mt-3">
                        Team CARLISLE CM Europe are welcoming delegates
                        attending the Schools & Academies Show at the NEC,
                        Birmingham..
                      </p>
                    </div>

                    <div className="flex flex-row">
                      <span className="text-blue-800 text-xl">Read More</span>
                      <a href="" className="text-blue-800 py-2 px-2 text-xl">
                        <HiOutlineArrowNarrowRight />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="max-w-[390px] ">
                  <div className="relative">
                    <img src={POST2} alt="" />
                    <div className="absolute bottom-44">
                      <img src={Date} alt="" />
                    </div>
                  </div>
                  <div className="bg-white p-10">
                    <div className="max-w-[340px]">
                      <div>
                        <h1 className="text-[18px] font-bold">
                          CARLISLE welcomes delegates at the Schools & Academies
                          Show
                        </h1>
                      </div>
                      <div>
                        <p className="text-[16px] text-justify mt-3">
                          Team CARLISLE CM Europe are welcoming delegates
                          attending the Schools & Academies Show at the NEC,
                          Birmingham..
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-row">
                      <span className="text-blue-800 text-xl">Read More</span>
                      <a href="" className="text-blue-800 py-2 px-2 text-xl">
                        <HiOutlineArrowNarrowRight />
                      </a>
                    </div>
                  </div>
                </div>
                <div className=" max-w-[390px]  ">
                  <div className="relative">
                    <img src={POST3} alt="" className="w-full" />
                    <div className="absolute bottom-44">
                      <img src={Date} alt="" />
                    </div>
                  </div>
                  <div className="bg-white p-10">
                    <div className="max-w-[340px]">
                      <h1 className="text-[18px] font-bold">
                        CARLISLE welcomes delegates at the Schools & Academies
                        Show
                      </h1>
                      <p className="text-[16px] text-justify mt-3">
                        Team CARLISLE CM Europe are welcoming delegates
                        attending the Schools & Academies Show at the NEC,
                        Birmingham..
                      </p>
                    </div>
                    <div className="max-w-[340px]"></div>
                    <div className="flex flex-row">
                      <span className="text-blue-800 text-xl">Read More</span>
                      <a href="" className="text-blue-800 py-2 px-2 text-xl">
                        <HiOutlineArrowNarrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-[55px]">
              <button className="sol-btn text-white text-[14px] font-bold">
                VIEW ALL POSTS
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stdbox;
