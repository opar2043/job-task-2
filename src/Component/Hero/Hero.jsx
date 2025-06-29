import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative md:max-h-[888px] w-full bg-gradient-to-r from-white via-[#ecf9ff] to-[#bbf1d4] overflow-hidden mb-4">
      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-20 py-20 flex flex-col justify-center">
        <h1 className="text-[32px] md:text-7xl font-bold md:leading-[80px] text-black">
          Trusted{" "}
          <span className="inline-block bg-black text-white px-2 py-1 rounded-lg mb-2">
            Partner
          </span>{" "}
          for <br />
          Your Website{" "}
          <span className="inline-block bg-black text-white px-2 py-1 rounded-lg my-2">
            Develop.
          </span>
        </h1>
        <div className="mt-8 flex gap-6 items-center">
          {/* Left Vertical Social */}
          <div className=" flex items-center space-y-4 text-gray-700 ">
            <p className="transform -rotate-90 font-semibold">@williamrey</p>
            <div className="flex flex-col space-y-2">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
          <div className="ml-8">
            <p className="my-6 max-w-2xl text-gray-700 text-lg">
              Building the world’s best marketing websites for over a decade.
              <br />
              Your trusted partner for strategy, design, and dev.
            </p>
            <button className="bg-white border border-gray-300 hover:border-black transition px-6 py-3 rounded-full flex items-center gap-2 text-base shadow-sm">
              <FaRegArrowAltCircleRight className="text-xl" />
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
