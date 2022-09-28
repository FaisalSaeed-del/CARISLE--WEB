import React from "react";
import BLOG from "../assets/images/blog.png";

const Blog = () => {
  return (
    <div className="blog">
      <section>
        <div className="text-center text-[42px] text-black">
          <div>
            <h1>NEWS & BLOGS</h1>
          </div>
        </div>
      </section>
      <div className="py-10 px-32 ">
        <div className="grid grid-cols-2 h-[390px]  bg-white border-white border-4 rounder-full">
          <div className="w-[700px] ">
            <img src={BLOG} alt="" />
          </div>
          <div className="px-28 py-20">
            <h1 className="text-[24px] mb-5 ">
              CARLISLE welcomes delegates at the Schools & Academies Show
            </h1>
            <p className="para">
              Team CARLISLE CM Europe are welcoming delegates attending the
              Schools & Academies Show at the NEC, Birmingham. It is one of the
              UK’s leading education policy and best-practice events.
            </p>
            <div className="mt-10">
              <button className="sol-btn text-white text-xl">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
