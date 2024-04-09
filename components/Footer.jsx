import Link from "next/link";
import React from "react";
import FooterIcons from "./FooterIcons";

const Footer = () => {
  return (
    <footer>
      <div className="px-7 xl:px-24 sm:px-16 py-16 bg-footerOne text-white">
        <div className="uppercase text-primary text-sm tracking-[1.5rem] mb-12">
          isi
        </div>
        <div className="grid md:grid-cols-2 items-center gap-16 md:gap-4">
          <div className="flex flex-col gap-10">
            <p className="relative flex items-center text-secondary">
              Open for <br /> collaboration{" "}
              <span className="relative left-6 md:left-8 sm:inline-block w-16 md:w-24 h-px bg-secondary -translate-y-1/2 before:absolute before:h-3 before:w-3 before:rounded-full before:bg-primary before:bottom-0 before:translate-y-1/2 before:-left-2" />
            </p>
            <FooterIcons />
          </div>
          <div className="flex lg:flex-row flex-col gap-16 md:gap-10 md:items-end justify-between md:row-start-auto row-start-1 ">
            <div className="flex items-start gap-12 text-base">
              <ul className="flex flex-col gap-5">
                {FooterLinks.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className="hover:text-primary transition-all duration-300 hover:-translate-x-1 "
                    >
                      <Link href={link.to}>{link.name}</Link>
                    </li>
                  );
                })}
              </ul>
              <ul className="flex flex-col gap-5">
                <li className="hover:text-primary transition-all duration-300 hover:-translate-x-1">
                  <Link href={'/'} rel="noopener noreferrer">
                    Awards and Honors
                  </Link>
                </li>
                <li className="hover:text-primary transition-all duration-300 hover:-translate-x-1">
                  <Link href={'/'} rel="noopener noreferrer">
                    Career
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:text-end">
              <p className="mb-3 text-sm">Need Link Business mentor?</p>
              <Link
                className="py-3 px-5 bg-primaryReduced rounded-lg md:inline-block block text-center hover:bg-primary text-base transition-all duration-500"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule an appointment 🥳
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-footerTwo p-4 flex items-center justify-center gap-8 md:gap-12">
        <Link href={'/'} className="underline text-secondary">Privacy</Link>
        <Link href={'/'} className="underline text-secondary">Terms and Condition</Link>
      </div>
    </footer>
  );
};

export default Footer;

// =================== Footer =========================
const FooterLinks = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Profile",
    to: "/profile",
  },
  {
    name: "Project",
    to: "/projects",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];
