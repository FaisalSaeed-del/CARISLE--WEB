import React from "react";
import BOX5 from "../assets/images/case.jpg";
const Cases = () => {
  return (
    <div>
      <section className="container">
        <div className="p-14 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div>
            <img src={BOX5} alt="" />
          </div>
          <div className="py-10">
            <div className="max-w-[289x] text-[42px] ml-[187px] font-bold">
              <h1>We are Carlisle</h1>
            </div>
            <div className="max-w-[600px] ml-[187px]">
              <p className="para">
                While enhancing your skills at the CARLISLE® Academy, you will
                learn about our RESITRIX®, HERTALAN®, ALUTRIX®, HARDCAST® and
                ECOLAN® products. We will teach you the tried-and-tested
                benefits of EPDM solutions on and around roofs, façades and
                construction and offer you valuable tips for your daily business
                operations.
              </p>
            </div>
            <div className="py-10 ml-[187px]">
              <button className="sol-btn text-white text-xl">
                VIEW ALL CASES
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cases;
