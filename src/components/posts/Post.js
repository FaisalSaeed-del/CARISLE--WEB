import React from "react";
import POST1 from "../assets/images/post1.png";
import POST2 from "../assets/images/post2.png";
import POST3 from "../assets/images/post3.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Post = () => {
  return (
    <div className="blog">
      <section className="container">
        <div>
          <div className="p-32 flex flex-row flex-wrap justify-between ">
            <div className="w-[400px] ">
              <img src={POST1} alt="" />
              <div className="bg-white p-10">
                <div>
                  <h1 className="text-2xl font-bold">
                    CARLISLE welcomes delegates at the Schools & Academies Show
                  </h1>
                </div>
                <div className="para">
                  <p>
                    Team CARLISLE CM Europe are welcoming delegates attending
                    the Schools & Academies Show at the NEC, Birmingham..
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
            <div className="w-[400px] ">
              <img src={POST2} alt="" />
              <div className="bg-white p-10">
                <div>
                  <h1 className="text-2xl font-bold">
                    CARLISLE welcomes delegates at the Schools & Academies Show
                  </h1>
                </div>
                <div className="para">
                  <p>
                    Team CARLISLE CM Europe are welcoming delegates attending
                    the Schools & Academies Show at the NEC, Birmingham..
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
            <div className="w-[400px] sm:mt-3  ">
              <img src={POST3} alt="" />
              <div className="bg-white p-10">
                <div>
                  <h1 className="text-2xl font-bold">
                    CARLISLE welcomes delegates at the Schools & Academies Show
                  </h1>
                </div>
                <div className="para">
                  <p>
                    Team CARLISLE CM Europe are welcoming delegates attending
                    the Schools & Academies Show at the NEC, Birmingham..
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
          </div>
        </div>
        <div className="flex justify-center">
          <button className="sol-btn text-white text-xl">VIEW ALL POSTS</button>
        </div>
      </section>
    </div>
  );
};

export default Post;
