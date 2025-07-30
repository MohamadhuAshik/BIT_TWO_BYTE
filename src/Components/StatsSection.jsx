import React from "react";
import star from "../assets/star.png";
import trofy from "../assets/Trofy.png";
import bulb from "../assets/bulb.png";
import side1 from "../assets/side1.jpg";
import groupFamily from "../assets/groupfamily.png";
import groupStarFamily from "../assets/groupstarfamily.png";
import starglow from "../assets/starglow.png";


const StatsSection = () => {
  return (
    <div className="p-10 space-y-3">
      <div className="grid grid-cols-6 gap-3">
        {}
        <div className="col-span-2">
          <div className="bg-white   h-72 rounded-xl flex flex-col p-4 justify-between">
            <div className="">
              <img src={trofy} alt="pic" />
            </div>
            <div className="space-y-2">
              <h1 className="text-[#484848] text-xl">Projects Completed</h1>
              <p className="text-7xl text-[#022354]">30+</p>
            </div>
          </div>
        </div>
        <div className="col-span-3 ">
          <div className="bg-[#042960] h-72 rounded-xl">
            <div className="max-w-xl w-full p-10">
              <h1 className="text-[#FEFEFE] text-3xl tracking-wide">
                GET TO KNOW US
                <br /> Driving into excellence & Innovation:
                <span className="text-[#96B3DE]">
                  Your trusted partner for sustainable business success
                </span>
              </h1>
            </div>
            <div className="flex justify-end p-2">
              <img src={bulb} alt="pic" loading="lazy" className="w-12" />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div
            style={{ backgroundImage: `url(${side1})` }}
            className={` bg-cover bg-center  w-full h-72 rounded-xl`}
          ></div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {}
        <div className="col-span-1">
          <div
            style={{ backgroundImage: `url(${groupFamily})` }}
            className="bg-cover flex items-end bg-center h-72 rounded-xl"
          >
            <div className="p-3 space-y-3">
              <img
                src={groupStarFamily}
                alt="groppeople"
                loading="lazy"
                className=""
              />
              <div className="max-w-52">
                <h1 className=" w-full text-2xl text-white">
                  We have 50+ happy customers
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className=" h-72 rounded-xl">
            <div className="bg-white   h-72 rounded-xl flex flex-col p-4 justify-between">
              <div className="">
                <img src={starglow} alt="pic" />
              </div>
              <div className="space-y-2">
                <h1 className="text-[#484848] text-xl">Projects Completed</h1>
                <div className="flex space-x-4 items-center">
                  <p className="text-7xl text-[#022354]">5+</p>{" "}
                  <p className="text-xl">Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className=" w-full h-72 rounded-xl">

            <div className="bg-white   h-72 rounded-xl flex flex-col p-4 justify-between">
              <div className="">
                <img src={star} alt="pic" />
              </div>
              <div className="space-y-2">
                <h1 className="text-[#484848] text-xl">Clutch Reviews</h1>
               
                  <p className="text-7xl text-[#022354]">20+</p>{" "}
                
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
