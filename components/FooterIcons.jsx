import Link from "next/link";
import React from "react";
import { BsLinkedin, BsInstagram, BsFacebook, BsMedium } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailUnread } from "react-icons/io5";

const FooterIcons = () => {
  return (
    <div className="flex items-center gap-4 lg:text-xl text-lg">
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
      <Link
        href="/"
        className="hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
      >
        <IoMailUnread />
      </Link>
      <Link
        href="/"
        className="hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
      >
        <BsMedium />
      </Link>
    </div>
  );
};

export default FooterIcons;
