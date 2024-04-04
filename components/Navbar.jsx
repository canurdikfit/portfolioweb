"use client";
import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { SectionButton } from "./SectionButton";
import SectionLinks from "./SectionLinks";

function Navbar() {
  const [clicked, setClicked] = useState(true);
  const changeToggle = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="max-w-full w-full backdrop-blur bg-reserved fixed z-50">
      <div className="mx-auto py-6 px-10 xl:px-24 sm:px-16">
        <div className="flex items-center justify-between">
          <div className="uppercase text-sm tracking-[1.5rem] sm:w-1/3 text-white">
            <Link href="/">isi</Link>
          </div>
          {clicked ? (
            <div className="lg:hidden text-white" onClick={changeToggle}>
              <FaBarsStaggered />
            </div>
          ) : (
            <div className="lg:hidden text-white" onClick={changeToggle}>
              <IoClose />
            </div>
          )}
          <div className="hidden lg:block w-full">
            <div className="flex items-center justify-between">
              <ul className="flex items-center justify-start xl:gap-14 gap-11">
                {NavLinks.map((link, key) => (
                  <li key={key} className="text-sm text-white font-medium">
                    <Link
                      className="opacity-50 hover:opacity-100 hover:text-primary"
                      href={link.url}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-7">
                <SectionButton />
                <SectionLinks />
              </div>
            </div>
          </div>
          <div className={!clicked ? "navbar_sm" : "navbar_lg"}>
            <div className="flex flex-col sm:justify-start justify-between h-full pt-24 px-5 sm:px-10 pb-40">
              <ul className="flex flex-col items-center justify-start gap-5">
                {NavLinks.map((link, key) => (
                  <li
                    key={key}
                    className="text-sm text-white text-left w-full font-medium"
                  >
                    <Link
                      className="hover:opacity-100 hover:bg-primary opacity-50 w-full px-4 py-3 rounded-md block"
                      href={link.url}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col items-center gap-7 mt-14">
                <SectionButton />
                <SectionLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// =================== NavLinks =========================

const NavLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Profile",
    url: "/profile",
  },
  {
    name: "Project",
    url: "/project",
  },
  // {
  //   name: "Courses",
  //   url: "/Courses",
  // },
  {
    name: "Contact",
    url: "/contact",
  },
];
