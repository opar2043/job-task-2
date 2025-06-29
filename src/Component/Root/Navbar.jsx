import React from "react";
import { FaArrowCircleRight, FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";

const Navbar = () => {
  const link = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Portfolio</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 md:px-3">
        <div className="navbar-start  ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl uppercase">Devlop.ME</a>
        </div>
         <div className=" hidden lg:flex lg:justify-end w-full justify-end">
        <div className="flex justify-between ">
          <div className="navbar-end ">
            <ul className="flex gap-2 justify-end ">{link}</ul>
          </div>
          <div className="navbar-end ">
            <button className="py-2 rounded-3xl  flex  items-center gap-2">
              <FaRegArrowAltCircleRight /> Start Project
            </button>
          </div>
        </div>
         </div>
      </div>
    </div>
  );
};

export default Navbar;


// menu menu-horizontal px-1 justify-end border-2
