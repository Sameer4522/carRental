import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../src/assets/logo.png";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import ColoredButton from "./partials/ColoredButton";

const navItems = [
  {
    name: "Home",
    tag: "/",
  },
  {
    name: "About",
    tag: "/about",
  },
  {
    name: "Vehicle Models",
    tag: "/models",
  },
  {
    name: "Testimonials",
    tag: "/testimonials",
  },
  {
    name: "Our Team",
    tag: "/team",
  },
  {
    name: "Contact",
    tag: "/contact",
  },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  return (
    <>
      <nav className="rubik absolute left-0 right-0 top-0 z-50 mx-auto flex h-auto w-full max-w-[84.5rem] flex-row items-center justify-between bg-transparent px-5 py-7 lg:px-8">
        <div className="w-[9rem] cursor-pointer">
          <Link to="/">
            <img src={Logo} alt="logo" className="h-full w-full" />
          </Link>
        </div>

        <ul className="hidden gap-[1.35rem] text-base font-medium lg:flex">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.tag}
                className="text-black transition duration-200 hover:text-[#ff4d30]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden gap-6 lg:flex">
          <button className="bg-transparent text-base font-medium hover:text-[#ff4d30]">
            Sign in
          </button>

          <ColoredButton text="Register" classes="py-3 px-[1.85rem]" />
        </div>

        <div onClick={handleMobileMenu} className="lg:hidden">
          <BiMenu size={35} className="hover:text-[/ff4d30]" />
        </div>
      </nav>

      {/* mobile nav */}
      <div
        className={`fixed left-0 top-0 z-[100] flex h-[100vh] w-full select-none flex-col items-center justify-center overflow-hidden bg-white text-center transition-all duration-300 ease-out ${
          mobileMenu ? "left-0" : "left-[-100%]"
        }`}
      >
        <div
          className="absolute right-8 top-[2.3rem]"
          onClick={handleMobileMenu}
        >
          <IoClose size={35} className="hover:text-[/ff4d30]" />
        </div>

        <ul className="z-30 my-10 mt-[-1rem] flex cursor-pointer flex-col items-center text-2xl font-semibold">
          {navItems.map((item, index) => (
            <li className="py-4 hover:text-[#ff4d30]" key={index}>
              <Link to={item.tag} onClick={handleMobileMenu}>
                {item.name}
              </Link>
            </li>
          ))}

          <div className="absolute bottom-16 mx-auto flex items-center justify-center gap-4">
            <ColoredButton
              onClick={handleMobileMenu}
              text="Sign in"
              classes="px-8 py-3 w-full text-xl items-center justify-center"
            />

            <ColoredButton
              onClick={handleMobileMenu}
              text="Register"
              classes="px-8 py-3 w-full text-xl items-center justify-center"
            />
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
