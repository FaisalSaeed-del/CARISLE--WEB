import React, { useState } from "react";
import B1 from "../assets/images/brand1.png";
import B2 from "../assets/images/brand2.png";
import B3 from "../assets/images/brand3.png";
import B4 from "../assets/images/brand4.png";
import b1 from "../assets/images/b1.png";
import b2 from "../assets/images/b2.png";
import b3 from "../assets/images/b3.png";
import b4 from "../assets/images/b4.png";
import { BsFillCaretUpFill } from "react-icons/bs";
import { Flipper, Flipped } from "react-flip-toolkit";

const Brands = () => {
  // ***********************Dynamic Data *******************
  const [brands, setBrands] = useState({
    id: "1",
    name: "HERTIX",
    Image: B1,
    Image2: b1,
    para: "RE SITRIX® ist die einzige Dichtungsbahn, die in einer beispiellosen Materialkombination aus dem Synthesekautschuk EPDM und hochwertigem polymermodifizierten Bitumen die Vorteile beider Werkstoffe vereint. Lorem ipsum dolor sit amet...",
  });

  //************************************ */ Mapping ****************************************//

  const Branddata = [
    {
      id: "1",
      Image: B1,
      name: "Hertix",
      Image2: b1,
      para: "RESITRIX® ist die einzige Dichtungsbahn, die in einer beispiellosen Materialkombination aus dem Synthesekautschuk EPDM und hochwertigem polymermodifizierten Bitumen die Vorteile beider Werkstoffe vereint. Lorem ipsum dolor sit amet...",
    },
    {
      id: "2",
      Image: B2,
      name: "Aertix",
      Image2: b2,
      para: "HESITRIX® ist die einzige Dichtungsbahn, die in einer beispiellosen Materialkombination aus dem Synthesekautschuk EPDM und hochwertigem polymermodifizierten Bitumen die Vorteile beider Werkstoffe vereint. Lorem ipsum dolor sit amet...",
    },
    {
      id: "3",
      Image: B3,
      name: "Lertix",
      Image2: b3,
      para: "ESITRIX® ist die einzige Dichtungsbahn, die in einer beispiellosen Materialkombination aus dem Synthesekautschuk EPDM und hochwertigem polymermodifizierten Bitumen die Vorteile beider Werkstoffe vereint. Lorem ipsum dolor sit amet...",
    },
    {
      id: "4",
      Image: B4,
      name: "ECOLAN",
      Image2: b4,
      para: "LESITRIX® ist die einzige Dichtungsbahn, die in einer beispiellosen Materialkombination aus dem Synthesekautschuk EPDM und hochwertigem polymermodifizierten Bitumen die Vorteile beider Werkstoffe vereint. Lorem ipsum dolor sit amet...",
    },
  ];

  // **************** Hover Effect *************
  const Mouseover = (detail, id) => {
    setBrands({
      id: detail.id,
      Image: detail.Image,
      para: detail.para,
      name: detail.name,
    });
    setActiveCard(detail.id);
  };
  const [activeCard, setActiveCard] = useState();
  const [disabled, setDisabled] = useState(false);

  // ********************** Brands Section ********************* //
  return (
    <div>
      <section className="container">
        <div className="py-20 px-36">
          <h1 className="text-[42px] font-bold text-black">OUR BRANDS</h1>
          <div className="max-w-[630px]">
            <p className="text-xl text-black text-[16px] ">
              Lorem ipsum dolor sit amet, coctetur adipiscing elit. Aenean
              euismod bibendum laoreet.
            </p>
          </div>
        </div>
        <Flipper flipKey={activeCard} spring="wobbly">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 p-10 gap-6">
            {Branddata.map((detail, id) => {
              return (
                <div>
                  <div>
                    <img
                      src={detail.Image}
                      onMouseOver={() => Mouseover(detail, id)}
                      alt=""
                    />
                  </div>
                  <div className="relative left-5 bottom-12">
                    <img src={detail.Image2} alt />
                  </div>
                  <div className="cardIcon relative top-12 left-28 text-gray-100 text-md">
                    <Flipped flipId="square">
                      {activeCard === detail.id && <BsFillCaretUpFill />}
                    </Flipped>
                  </div>
                </div>
              );
            })}
          </div>
        </Flipper>

        {/* Details Section */}

        <div className=" clip py-1 px-36">
          <div className=" bg-white ">
            <div className="bg-gray-100">
              <div className="py-14 px-5 flex flex-row justify-between">
                <div>
                  <img src={brands.Image} alt="" />
                </div>
                <div className="font-roboto">
                  <h1 className="text-[24px] mt-[38px] text-blue-900 mb-[20px] ">
                    {brands.name}
                  </h1>
                  <div className=" flex flex-wrap flex-row max-w-[550px] text-[16px]">
                    <p>{brands.para}</p>
                  </div>
                  <div className="py-10">
                    <button className="sol-btn text-white text-[14px]">
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

export default Brands;
