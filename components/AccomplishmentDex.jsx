"use client";
import Image from "next/image";
import React, { useState } from "react";

function AccomplishmentDex({ Accomplishments }) {
  const [hovering, setHovering] = useState(-1);
  return (
    <div className="hidden lg:block mt-20">
      <ul className="flex flex-col gap-20">
        {Accomplishments.map((acomplish, index) => {
          return (
            <li key={index} className="flex items-end">
              <div
                className={`absolute ${
                  hovering === index ? "opacity-100" : "opacity-0"
                }  h-full w-full z-0 top-0 left-0 right-0 bottom-0 transition duration-500 delay-150 ease-in-out`}
              >
                <Image
                  src={"https:" + acomplish.image}
                  className="object-cover object-center"
                  alt="Accomlishments"
                  fill={true}
                  sizes="100%"
                />
                <div className="absolute z-10 h-full w-full bg-gradient-to-tr from-black/40 top-0 left-0 right-0 bottom-0" />
              </div>

              <h3
                className={`relative ${index === 1 && "left-32"} ${
                  index === 2 && "left-64"
                } ${
                  index === 3 && "left-32"
                }  transition duration-500 delay-150 ease-in-out peer ${
                  hovering === index
                    ? "text-white"
                    : "text-black dark:text-black"
                } z-20 ${
                  hovering === -1 && "dark:text-white"
                } flex gap-4 text-4xl hover:cursor-pointer`}
                onMouseEnter={() => setHovering(index)}
                onMouseLeave={() => setHovering(-1)}
              >
                <span
                  className={`tracking-wide transition duration-500 delay-150 ease-in-out ${
                    hovering === index
                      ? "text-white dark:text-white/50"
                      : "dark:text-white/25 text-black/60"
                  } `}
                >
                  0{index + 1}.
                </span>
                <p className="max-w-md">{acomplish.title}</p>
              </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AccomplishmentDex;

// =================== Accomplishments =========================
export const Accomplishments = [
  {},
  {
    margin: "left-32",
  },
  {
    margin: "left-64",
  },
  {
    margin: "left-32",
  },
];
