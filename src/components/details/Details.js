import React from "react";
import BOX7 from "../assets/images/details.png";

const Details = () => {
  return (
    <div className="bg-white">
      <section className="container">
        <div className=" p-16">
          <div className=" bg-white ">
            <div className="shadwo-xl shadow-black  bg-gray-300">
              <div className="py-5 px-5 flex flex-row space-x-[44px]">
                <div>
                  <img src={BOX7} alt="" />
                </div>
                <div className="">
                  <h1 className="text-[24px] text-blue-900 mb-[20px] max-w-[337px]">
                    Das Multitalent für jedes Dach
                  </h1>
                  <div className="max-w-[550px] text-[16px] ">
                    <p>
                      RESITRIX® ist die einzige Dichtungsbahn, die in einer
                      beispiellosen Materialkombination aus dem
                      Synthesekautschuk EPDM und hochwertigem
                      polymermodifizierten Bitumen die Vorteile beider
                      Werkstoffe vereint. Lorem ipsum dolor sit amet...
                    </p>
                  </div>
                  <div className="py-10">
                    <button className="sol-btn text-white text-2xl">
                      MORE DETAILS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
