import React from "react";
import BOX7 from "../assets/images/details.png";

const Details = () => {
  return (
    <div className="bg-white">
      <section className="container">
        <div className="py-20 px-56 ">
          <div className="bg-white ">
            <div className="w-[1200px] p-20 shadwo-xl shadow-black  bg-gray-300  ">
              <div className="flex flex-row  space-x-20 ">
                <div>
                  <img src={BOX7} alt="" />
                </div>
                <div>
                  <h1 className="heading">Das Multitalent für jedes Dach</h1>
                  <div className="w-[550px] text-[16px] ">
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
