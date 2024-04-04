import Link from "next/link";
import React from "react";
import { BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const SectionLinks = () => {
  return (
    <div className="flex items-center gap-5 lg:gap-3 xl:text-sm lg:text-xs text-white">
      <Link
        href="/"
        className="hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
      >
        <BsLinkedin />
      </Link>
      <Link
        href="/"
        className="hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
      >
        <FaXTwitter />
      </Link>
      <Link
        href="/"
        className="hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
      >
        <BsInstagram />
      </Link>
      <Link
        href="/"
        className="hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
      >
        <BsFacebook />
      </Link>
    </div>
  );
};

export default SectionLinks;
