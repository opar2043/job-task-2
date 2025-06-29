import React from "react";
import { FaArrowDown } from "react-icons/fa";

const About = () => {
  return (
    <div className="relative max-h-[888px] w-full bg-gradient-to-r from-white via-[#ecf9ff] to-[#bbf1d4] overflow-hidden mb-4">

      <div className="max-w-screen-xl  mx-auto px-6 md:px-20 py-20 flex flex-col justify-center">
        <div className="flex items-center gap-1 justify-end w-10/12 pb-5">
          <button className=" border border-black rounded-full p-1">
            <FaArrowDown></FaArrowDown>
          </button>
          <button className="px-4 border border-black rounded-full p-1 ">
            About
          </button>
        </div>
        <h1 className="text-[32px] text-center md:text-7xl font-bold md:leading-[80px] text-black">
          I've been{" "}
          <span className="inline-block bg-black text-white px-2 py-1 rounded-lg mb-2">
            Developing
          </span>{" "}
          <br />
          Websites Since{" "}
          <span className="inline-block bg-black text-white px-2 py-1 rounded-lg my-2">
            2013
          </span>
        </h1>
        <p className="max-w-5xl text-center mt-6 text-gray-900">
          We start every new client interaction with an in-depth discovery call
          where we get <br /> to know each other and recommend the best course
          of action.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-2 justify-around mt-3 md:mt-7">
          <h2 className="font-bold text-lg md:text-3xl">
            Previously <br /> Worked On
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <button className="md:rotate-12  border border-black p-2 px-6 bg-black text-white font-semibold rounded-full ">
              awwwards
            </button>

            <button className="md:-rotate-6 border border-black p-2 px-6 font-semibold rounded-full ">
              Facebook
            </button>
            <button className="md:rotate-6 border border-black p-2 px-6 font-semibold rounded-full ">
              CSS Inner
            </button>
            <button className=" border border-black p-2 px-6 font-semibold rounded-full ">
              /thoughtworks
            </button>
            <button className="md:-rotate-12 border border-black p-2 px-6 font-semibold rounded-full ">
              Autodesk
            </button>
            <button className=" border border-black p-2 px-6 font-semibold rounded-full ">
              CSS<span className="font-bold">Design</span>Awards
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
