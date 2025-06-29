import React from "react";

const Footer = () => {
  return (
    <div className=" bg-black py-10">
      <div className="flex flex-col md:flex-row justify-between w-10/12 mx-auto items-center">
        <h2 className="text-[#b8e994] font-bold text-lg md:text-2xl">
          DEVLOP.ME
        </h2>
        <p className="text-[48px] font-semibold text-center text-white">
          AS You Can
        </p>
        <div></div>
      </div>
      <footer className="footer sm:footer-horizontal bg-black text-white p-10">
        <aside className="md:w-[300px]"></aside>
        <nav>
          <h6 className="footer-title text-xs">Say Hello</h6>
          <a className="link link-hover">HELLO@DEVLOP.ME.COM</a>
          <a className="link link-hover">MAHBUBUL@ME.COM</a>
          <nav>
            <h6 className="footer-title text-xs">Call</h6>
            <a className="link link-hover">01814482832</a>
          </nav>
        </nav>
        <nav>
          <h6 className="footer-title uppercase text-xs">Menu</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Portfolio</a>
          <a className="link link-hover">Blog</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xs">Social</h6>
          <a className="link link-hover">INSTRAGRAM</a>
          <a className="link link-hover">FACEBOOK</a>
          <a className="link link-hover">BEHANCE</a>
          <a className="link link-hover">DREBBLE</a>
        </nav>
      </footer>
      <div className="flex justify-between px-10 items-center">
        <p className="text-white font-bold md:text-xl">BESNIK</p>
        <p className="text-gray-400 text-xs font-semibold">@devlop.me-2022</p>
        <p className="text-gray-400 text-xs font-semibold">PRIVACY - TERMS</p>
      </div>
    </div>
  );
};

export default Footer;
