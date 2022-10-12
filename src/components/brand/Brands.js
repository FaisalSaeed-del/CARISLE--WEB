import React from "react";
import { useState } from "react";
import B1 from "../assets/images/brand1.png";
import B2 from "../assets/images/brand2.png";
import B3 from "../assets/images/brand3.png";
import B4 from "../assets/images/brand4.png";
import b1 from "../assets/images/b1.png";
import b2 from "../assets/images/b2.png";
import b3 from "../assets/images/b3.png";
import b4 from "../assets/images/b4.png";

const Brands = () => {
  // const [isHovering, setIsHovering] = useState(false);

  // const handleMouseOver = () => {
  //   setIsHovering(true);
  // };

  // const handleMouseOut = () => {
  //   setIsHovering(false);
  // };

  // return (
  //   <div>
  //     <div>
  //       <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
  //         Hover me
  //       </div>

  //       {isHovering && <h2>Hello world</h2>}
  //     </div>
  //   </div>
  // );

  // Map

  const Branddata = [
    {
      id: "1",
      Image: B1,
      Image2: b1,
      para: "RESITRIX® ist die einzige Dichtungsbahn, die in einer beispiellosen Materialkombination aus dem Synthesekautschuk EPDM und hochwertigem polymermodifizierten Bitumen die Vorteile beider Werkstoffe vereint. Lorem ipsum dolor sit amet...",
    },
    {
      id: "2",
      Image: B2,
      Image2: b2,
      para: "RESITRIX® ist die einzige Dichtungsbahn, die in einer beispiellosen Materialkombination aus dem Synthesekautschuk EPDM und hochwertigem polymermodifizierten Bitumen die Vorteile beider Werkstoffe vereint. Lorem ipsum dolor sit amet...",
    },
    {
      id: "3",
      Image: B3,
      Image2: b3,
      para: "RESITRIX® ist die einzige Dichtungsbahn, die in einer beispiellosen Materialkombination aus dem Synthesekautschuk EPDM und hochwertigem polymermodifizierten Bitumen die Vorteile beider Werkstoffe vereint. Lorem ipsum dolor sit amet...",
    },
    {
      id: "4",
      Image: B4,
      Image2: b4,
      para: "RESITRIX® ist die einzige Dichtungsbahn, die in einer beispiellosen Materialkombination aus dem Synthesekautschuk EPDM und hochwertigem polymermodifizierten Bitumen die Vorteile beider Werkstoffe vereint. Lorem ipsum dolor sit amet...",
    },
  ];

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
        <div className="grid grid-cols-4 p-10 gap-6">
          {Branddata.map((detail) => {
            return (
              <div className="show-hide">
                <div>
                  <img src={detail.Image} alt="" />
                </div>
                <div className="relative left-5 bottom-12">
                  <img src={detail.Image2} alt />
                </div>
                <div className=" para show-hide text-justify p-1">
                  <p>{detail.para}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Brands;
