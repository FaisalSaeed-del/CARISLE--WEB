import React from "react";
import BOX5 from "../assets/images/case.jpg";
const Cases = () => {
  return (
    <div>
      <section className="container">
        <div className="flex flex-row justify-around">
          <div>
            <img src={BOX5} alt="" />
          </div>
          <div>
            <div className="heading">
              <h1>We are Carlisle</h1>
            </div>
            <div className="w-[500px]">
              <p className="para">
                While enhancing your skills at the CARLISLE® Academy, you will
                learn about our RESITRIX®, HERTALAN®, ALUTRIX®, HARDCAST® and
                ECOLAN® products. We will teach you the tried-and-tested
                benefits of EPDM solutions on and around roofs, façades and
                construction and offer you valuable tips for your daily business
                operations.
              </p>
            </div>
            <div className="py-10">
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
