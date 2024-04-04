import React from "react";
import Ballon from "../imgs/icons/ballon.svg";
import Image from "next/image";
import FooterIcons from "./FooterIcons";

const FooterFeedback = () => {
  return (
    <section className="pt-48">
      <div className="px-5 mb-32 xl:px-24 sm:px-16 grid gap-16 sm:gap-0 sm:grid-cols-2 items-center">
        <div>
          <h2 className="lg:text-4xl sm:text-3xl text-2xl">
            Hey! 👋 I would love to hear from you.
          </h2>
          <div className="mt-4 pt-3 relative after:w-20 after:h-px after:bg-primary after:absolute after:left-0 after:top-0 max-w-xl">
            <p className="text-sm ">
              Thank you for taking the time to visit my website. Your presence
              is greatly appreciated, and I hope you found valuable information
              and insights during your visit. Please feel free to reach out if
              you have any questions or if there's anything else I can assist
              you with. I look forward to collaborating with you in the future
              🥰.
            </p>
            <div className="flex items-center gap-5 lg:gap-3 xl:text-sm lg:text-xs mt-6 md:mt-10">
              <FooterIcons />
            </div>
          </div>
        </div>
        <div>
          <div className="relative mx-auto w-fit">
            <Image
              className="h-full w-full"
              src={Ballon}
              priority={true}
              alt="Ballon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterFeedback;
