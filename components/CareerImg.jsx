"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import People from "../imgs/icons/career-people.png";
import Trade from "../imgs/icons/career-trade.png";
import Dollar from "../imgs/icons/career-dollar-circle.png";
import GlobalApi from "@/app/Utils/GlobalApi";

const CareerImg = () => {
  const [career, setCareer] = useState([]);

  useEffect(() => {
    getCareer();
  }, []);

  const getCareer = () => {
    GlobalApi.getCareer().then((resp) => {
      setCareer(resp.data.data);
    });
  };

  return (
    <div className="my-12">
      <div className="grid lg:grid-cols-3">
        {career.map((careerImg, index) => {
          return (
            <div
              key={index}
              className="h-72 overflow-hidden relative flex flex-col items-center justify-center"
            >
              <div className="absolute inset-y-0 inset-x-0 z-0 h-full w-full transition-all duration-300 ease-linear">
                <Image
                   src={careerImg.attributes?.backImage?.data?.attributes?.url}
                  className="h-full w-full object-cover object-center"
                  fill={true}
                  alt="Career Images"
                />
                <div className="absolute z-10 h-full w-full bg-gradient-to-t from-black/75 to-black/20  inset-y-0 inset-x-0" />
              </div>

              <div className="relative z-20 text-center dark:lg:text-white lg:text-black text-white flex flex-col items-center justify-center max-w-xs">
                <div
                  className={`h-20 w-20 flex items-center justify-center rounded-full ${
                    index === 0 ? "bg-[#15f4791a]" : ""
                  } ${index === 1 ? "bg-[#f16c1a1a]" : ""} ${
                    index === 2 ? "bg-[#fab3001a]" : ""
                  } mb-5`}
                >
                  <Image src={careerImg.attributes?.icon?.data?.attributes?.url} alt="Career Icon" width={35} height={35}/>

                </div>
                <h2 className="text-3xl sm:text-4xl text-white transition-all duration-300 ease-linear">
                  {careerImg.attributes.value}
                  <sub className="text-base font-bold">{careerImg.sign}</sub>
                </h2>
                <p className="text-base text-white/90 transition-all duration-300 ease-linear">
                  {careerImg.attributes.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CareerImg;
