import React from "react";
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaRegArrowAltCircleRight,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className=" bg-gradient-to-r from-white via-[#ecf9ff] to-[#bbf1d4] overflow-hidden mb-4">
        <div className="w-10/12 mx-auto pt-10">
          <div className="flex flex-col md:flex-row justify-between  mx-auto items-center">
            {/* Upper sectuion -1  */}
            <div className="flex flex-col mt-4">
              <div className="flex items-center gap-1">
                <button className=" border border-black rounded-full p-1">
                  <FaArrowDown></FaArrowDown>
                </button>
                <button className="px-4 border border-black rounded-full p-1 text-xs">
                  Contact
                </button>
              </div>

              <div className="">
                <h1 className="text-[32px] text-left md:text-7xl font-bold md:leading-[80px] text-black">
                  Intrested In <br />
                  <span className="inline-block bg-black text-white px-2 py-1 rounded-lg mb-2">
                    Work
                  </span>{" "}
                  Togather
                </h1>
                <p className="max-w-5xl text-left mt-2 text-gray-900">
                  We start every new client interaction with an in-depth
                  discovery call where we get <br /> to know each other and
                  recommend the best course of action.
                </p>

                <button className="bg-white mt-4 border border-black hover:border-black transition px-6 py-3 rounded-full flex items-center gap-2 text-base shadow-sm">
                  <FaRegArrowAltCircleRight className="text-xl" />
                  Schedule a Call
                </button>
              </div>
            </div>
            {/* Upper section 2 */}
            <div>
              <div className=" w-full  bg-black text-white mt-10 md:mt-0 md:ml-8 p-8 rounded-2xl shadow-2xl space-y-6">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-transparent border-b border-gray-400 py-2 outline-none placeholder:text-white"
                />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-transparent border-b border-gray-400 py-2 outline-none placeholder:text-gray-400"
                />
                <textarea
                  placeholder="Describe your project"
                  className="w-full bg-transparent border-b border-gray-400 py-2 outline-none placeholder:text-gray-400 resize-none"
                ></textarea>
                <div className="flex items-center space-x-4">
                  <button className="px-5 py-2 rounded-full border border-gray-400 hover:bg-white hover:text-black transition">
                    Gmail
                  </button>
                  <button className="px-5 py-2 rounded-full border border-white bg-white text-black font-semibold hover:bg-gray-200 transition">
                    Contact me
                  </button>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-gray-400">@williamrey</span>
                  <div className="flex space-x-4 text-white text-xl">
                    <FaFacebook className="hover:text-blue-500 cursor-pointer" />
                    <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                    <FaTwitter className="hover:text-sky-400 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
