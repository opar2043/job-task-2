import React from "react";
import {
  FaArrowAltCircleRight,
  FaArrowCircleLeft,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaReact,
} from "react-icons/fa";

const Expert = () => {
  return (
    <div className="bg-black h-full text-white py-10">
      <div className="w-10/12 mx-auto pt-10">
        <div className="flex flex-col md:flex-row justify-between  mx-auto items-center">
          {/* Upper sectuion -1  */}
          <div className="flex flex-col mt-4">
            <div className="flex items-center gap-1">
              <button className=" border rounded-full p-1">
                <FaArrowDown></FaArrowDown>
              </button>
              <button className=" border rounded-full p-1 text-xs">
                Why Choose Us!
              </button>
            </div>
            <div className="text-[58px] font-semibold">
              <h2>
                My Extensive <br /> List of Skills
              </h2>
            </div>
          </div>
          {/* Upper section 2 */}
          <div>
            <div className="border-b border-gray-700 my-3">
              <p className="mb-3 text-gray-300 text-sm">
                Building the worlds best marketing Your <br /> trusted partner
                for strategy, design, and dev
              </p>
            </div>
            <div className="flex justify-between ">
              <div></div>
              <div>
                <button className=" border rounded-full p-1 mr-2">
                  <FaArrowLeft />
                </button>
                <button className="border  rounded-full p-1">
                  <FaArrowRight></FaArrowRight>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Section */}
        <div className="flex flex-col md:flex-row gap-2 pt-12">
          <div className="flex flex-col gap-2  rounded-xl p-3 bg-white/15 md:w-[430px] md:h-[230px]">
            <div className="md:text-8xl text-4xl">
              <FaReact></FaReact>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold">HTML X CSS</h2>
            </div>
            <div className="text-gray-300">
              <p className="text-gray-300 text-xs">
                Duis aute irure dolor in reprehenderit <br />
                in voluptate. Ut enim ad minim veniam, quis
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 bg-white/15 rounded-xl p-3 md:w-[430px] md:h-[230px] md:rotate-12">
            <div className="md:text-8xl text-4xl">
              <FaReact></FaReact>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Java Script</h2>
            </div>
            <div className="text-gray-300">
              <p className="text-gray-300 text-xs">
                Duis aute irure dolor in reprehenderit <br />
                in voluptate. Ut enim ad minim veniam, quis
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 bg-white/15 rounded-xl p-3  md:w-[430px] md:h-[230px]">
            <div className="md:text-8xl text-4xl">
              <FaReact></FaReact>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Webflow</h2>
            </div>
            <div className="text-gray-300">
              <p className="text-gray-300 text-xs">
                Duis aute irure dolor in reprehenderit <br />
                in voluptate. Ut enim ad minim veniam, quis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;
