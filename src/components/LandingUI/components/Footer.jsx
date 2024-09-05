import React, { Fragment } from "react";
import img1 from "../../../assets/icons/Group 1000002515.svg";
import img2 from "../../../assets/icons/Group 1000002516.svg";
import img3 from "../../../assets/icons/Group 1000002518.svg";

const data = [
  {
    name: "AI model submissions",
    val: "100K+",
    icon: img1,
  },
  {
    name: "Data Scientists",
    val: "50K+",
    icon: img2,
  },
  {
    name: "AI Challenges hosted",
    val: "100+",
    icon: img3,
  },
];
const Footer = () => {
  return (
    <div className="bg-darkBlue flex gap-3 justify-evenly py-10 text-white px-6">
      {data.map((d, idx) => (
        <Fragment key={d.name}>
          <div className="flex gap-4">
            <div>
              <img src={d.icon} alt="" />
            </div>
            <div>
              <div className="font-bold text-lg">{d.val}</div>
              <div>{d.name}</div>
            </div>
          </div>
          {
            idx < data.length - 1 &&
            <div className="h-14 border-[0.3px] border-l opacity-60"></div>
          }
        </Fragment>
      ))}
    </div>
  );
};

export default Footer;
