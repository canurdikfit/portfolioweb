import React from "react";
import Image from "next/image";
import DIcon from "../imgs/icons/3D.png";
import Round from "../imgs/icons/round_icon.png";
import LargerImg from "../imgs/speaking_event.jpg";
import SmallerImg from "../imgs/Posture.jpg";
import Link from "next/link";

const About = () => {
  return (
    <section className="pt-20 px-5 xl:px-24 sm:px-16 pb-20 md:mb-28 md:pt-40">
      <div className="flex flex-col lg:grid md:grid-cols-2 md:gap-20 lg:items-center gap-12 lg:gap-3">
        <div className="md:hidden block">
          <h2 className="relative text-2xl after:absolute after:w-16 after:h-1 after:bg-primary after:left-0 after:bottom-0 pb-4 mb-3">
            Accomplished, passionate and dedicated Senior Consultant
          </h2>
          <p className="text-sm  text-secondary">
            Business Coach, Social Entrepreneur, TedX Speaker, Migration Expert,
            Government-NGO Liaison, Senior Strategy Consultant
          </p>
        </div>
        <div className="relative h-[500px] w-full max-w-lg mx-auto">
          <div className="absolute h-full w-3/4 right-0 rounded-3xl overflow-hidden z-10 lg:right-16 lg:w-80">
            <Image
              className="object-cover object-[-150px] h-full w-full"
              src={LargerImg}
              alt="Isimeme Whyte"
            />
          </div>
          <div className="absolute z-20 bottom-0 lg:-bottom-16 h-64 w-2/4 rounded-3xl overflow-hidden left-0 lg:w-52 lg:h-72">
            <Image
              className="object-cover object-center h-full w-full"
              src={SmallerImg}
              alt="Isimeme Whyte"
            />
          </div>
          <div className="absolute z-30 -bottom-10 -left-6 lg:-bottom-24">
            <Image src={DIcon} alt="Icon" />
          </div>
          <div className="absolute z-30 -top-10 -left-10 lg:-bottom-20 lg:top-auto lg:left-auto lg:-right-20 dark:invert-0 invert">
            <Image src={Round} alt="Icon" />
          </div>
        </div>
        <div className="font-normal">
          <div className="hidden md:block mb-8">
            <h2 className="relative text-4xl after:absolute after:w-16 after:h-1 after:bg-primary after:left-0 after:bottom-0 pb-4 mb-3">
              Accomplished, passionate and dedicated Senior Consultant
            </h2>
            <p className="text-sm text-secondary">
              Business Coach, Social Entrepreneur, TedX Speaker, Migration
              Expert, Government-NGO Liaison, Senior Strategy Consultant
            </p>
          </div>
          <p className="text-base mb-5">
            Isimeme Whyte, An Accomplished, passionate and dedicated Senior
            Consultant/Advocate of Human rights with over 18 years of extensive
            experience (including a stint with the World Bank) and a superior
            record of successful community engagement, volunteer initiatives and
            programs, research, institutional campaigns, teaching at-risk young
            people, as well as institutions and community-based organizations
            that provides services to young people.
          </p>
          <p className="text-base">
            She Serves as a liaison, bridging gaps between scientific, medical,
            socio-economic and governmental communities, demonstrating astute
            experience as an administrator in crisis management, personnel
            management, policy development, community engagement, field and data
            coordination, research monitoring and evaluation, development of
            modelling techniques, operational improvement processes and
            international collaborations.
          </p>
          <Link
            href="/profile"
            className="hover:bg-primaryReduced transition text-white  duration-300 bg-primary hidden lg:inline-block px-7 py-3 rounded-lg text-sm mt-10"
          >
            Explore further 🥰
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
