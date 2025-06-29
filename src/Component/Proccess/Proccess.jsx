import React from "react";
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaReact,
} from "react-icons/fa";

const Proccess = () => {
  return (
    <div className="bg-[#4b4b4b] py-14 text-white">
      <div className="w-10/12 mx-auto pt-10">
        <div className="flex flex-col md:flex-row md:justify-around md:items-center">
          <div>
            <div className="flex items-center gap-1">
              <button className=" border rounded-full p-1">
                <FaArrowDown></FaArrowDown>
              </button>
              <button className="px-3 border rounded-full p-1 text-xs">
                Work Proccess
              </button>
            </div>
          </div>

          <div className="text-[58px] font-semibold text-center">
            <h2>My Work Proccess</h2>
          </div>

          <div></div>
        </div>

        {/* Lower Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-12 md:w-10/12 mx-auto">

          <div className="flex flex-col gap-2 bg-black rounded-xl py-4 px-6 md:w-[430px] md:h-[230px]">
            <div className="flex justify-between">
              <button className="px-3 bg-teal-300  rounded-full p-1 text-black text-sm">
                Discovery
              </button>
              <a href="#" className="underline flex items-center gap-1">
                <FaArrowRight></FaArrowRight> Read More
              </a>
            </div>

            <p className="text-gray-300 pt-5">
              We start every new client interaction with an in-depth discovery
              call where we get to know each other, discuss your current and
              future objectives, and recommend the best course of action.
            </p>
          </div>

          <div className="flex flex-col gap-2 bg-[#b8e994] rounded-xl py-4 px-6 md:w-[430px] md:h-[230px] md:rotate-6">
            <div className="flex justify-between">
              <button className="px-3 bg-black  rounded-full p-1 text-white text-sm">
                Stratigy
              </button>
              <a href="#" className="underline flex items-center gap-1 text-black">
                <FaArrowRight></FaArrowRight> Read More
              </a>
            </div>

            <p className="text-black pt-5">
              We start every new client interaction with an in-depth discovery
              call where we get to know each other, discuss your current and
              future objectives, and recommend the best course of action.
            </p>
          </div>
          <div className="flex flex-col gap-2 bg-black rounded-xl py-4 px-6 md:w-[430px] md:h-[230px]">
            <div className="flex justify-between">
              <button className="px-3 bg-teal-300  rounded-full p-1 text-black text-sm">
                Discovery
              </button>
              <a href="#" className="underline flex items-center gap-1">
                <FaArrowRight></FaArrowRight> Read More
              </a>
            </div>

            <p className="text-gray-300 pt-5">
              We start every new client interaction with an in-depth discovery
              call where we get to know each other, discuss your current and
              future objectives, and recommend the best course of action.
            </p>
          </div>
          <div className="flex flex-col gap-2 bg-black rounded-xl py-4 px-6 md:w-[430px] md:h-[230px]">
            <div className="flex justify-between">
              <button className="px-3 bg-teal-300  rounded-full p-1 text-black text-sm">
                Discovery
              </button>
              <a href="#" className="underline flex items-center gap-1">
                <FaArrowRight></FaArrowRight> Read More
              </a>
            </div>

            <p className="text-gray-300 pt-5">
              We start every new client interaction with an in-depth discovery
              call where we get to know each other, discuss your current and
              future objectives, and recommend the best course of action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proccess;

//   <div className="flex flex-col mt-4">

//   </div>
