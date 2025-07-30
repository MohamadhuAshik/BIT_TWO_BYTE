import React, { useState } from "react";
import case_study_overview1 from "../assets/case_study_overview1.png";
import case_study_overview2 from "../assets/case_study_overview2.png";
import case_study_overview3 from "../assets/case_study_overview3.jpg";
import case_study_overview4 from "../assets/case_study_overview4.jpg";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";

const data = [
  {
    title: "Databricks Lakehouse for Healthcare Domain",
    img: case_study_overview1,
  },
  {
    title: "Snowflake Data Warehouse for Manufacturing Domain",
    img: case_study_overview2,
  },
  {
    title: "Website Development Case Study",
    img: case_study_overview3,
  },
  {
    title: "Why Businesses Are Embracing Digital Transformation",
    img: case_study_overview4,
  },
];
const HoverEffectGrid = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log("activeIndex", activeIndex);
  return (
    <div className="flex  gap-2 p-10 overflow-hidden ">
      {data.map((item, index) => (
        <div
          key={index}
          onMouseEnter={() => setActiveIndex(index)}
          className={`relative  ${
            activeIndex === index ? "w-1/2" : "w-72"
          } overflow-hidden transition-all duration-500  rounded-xl group`}
        >
          <img
            src={item.img}
            alt={item.title}
            className="object-cover w-full h-96 "
          />
          <div className="absolute bottom-4 left-4 right-4 text-white text-lg font-medium">
            <div className="flex justify-between items-center">
              <div>{item.title}</div>

              <div
                className={`${
                  activeIndex === index ? "" : "opacity-0"
                } group-hover:opacity-100 transition-opacity duration-300`}
              >
                <Button
                  cls="bg-white  gap-2 flex justify-center items-center  hover:bg-green-600 hover:text-white hover:ring-2 hover:text-green text-green-600 font-semibold px-5 py-2 rounded-full"
                  content="Learn More"
                  img={<ArrowUpRight />}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverEffectGrid;
