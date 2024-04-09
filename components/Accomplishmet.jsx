"use client";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import AccomplishmentDex from "./AccomplishmentDex";
import Image from "next/image";
import { client } from "@/Utils/GlobalApi";

function Accomplishmet() {
  const [accomplishment, setAccomplishment] = useState([]);

  const cleanUpAccomplishment = useCallback((rawData) => {
    const cleanAccomplishment = rawData.map((item) => {
      const { sys, fields } = item;
      const { id } = sys;
      const title = fields.title;
      const image = fields.image.fields.file.url;
      const update = { id, title, image };
      return update;
    });
    setAccomplishment(cleanAccomplishment);
  }, []);

  const getAccomplishContent = useCallback(async () => {
    try {
      const resp = await client.getEntries({ content_type: "accomplishments" });
      const responce = resp.items;
      if (responce) {
        cleanUpAccomplishment(responce);
      } else setAccomplishment([]);
    } catch (error) {
      console.log(error);
    }
  }, [cleanUpAccomplishment]);

  useEffect(() => {
    getAccomplishContent();
  }, [getAccomplishContent]);

  return (
    <section
      className="pt-24 lg:pt-20 px-5 xl:px-24 sm:px-16 lg:h-full pb-20 relative large_accomplishment"
      id="accomplishment"
    >
      <div className="dark:text-white">
        <div className="mb-10 relative z-20">
          <p className="text-base relative after:w-10 after:h-0.5 dark:text-white text-black after:bg-primary after:absolute after:top-1/2 after:-right-16 w-fit">
            Here are some of my accomplishments
          </p>
        </div>
        <AccomplishmentDex Accomplishments={accomplishment} />
        <div className="lg:hidden">
          <ul className="flex flex-col gap-2 md:grid grid-cols-2">
            {accomplishment.map((acomplish, index) => {
              return (
                <li
                  key={index}
                  className="h-64 relative overflow-hidden flex items-end"
                >
                  <div className="absolute h-full w-full z-0 top-0 left-0 right-0 bottom-0">
                    <Image
                      src={"https:" + acomplish.image}
                      className="object-cover object-center"
                      fill={true}
                      sizes="100%"
                      alt="Accomlishments"
                    />
                    <div className="absolute z-10 h-full w-full bg-gradient-to-r from-black/70 from-5% to-black/20 to-100% top-0 left-0 right-0 bottom-0" />
                  </div>

                  <h3 className="relative z-20 flex gap-4 text-xl mx-4 my-6 text-white">
                    <span className="tracking-wide">0{index + 1}</span>
                    <p>{acomplish.title}</p>
                  </h3>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-20 relative z-10">
          <Link
            href={"/project"}
            className="h-28 w-28 text-white dark:lg:text-white lg:text-black lg:hover:bg-primaryReduced lg:hover:border-0 transition duration-400 text-sm  group/link font-body ease-in-out lg:border-2 dark:border-white/20 lg:hover:text-white flex items-center justify-center rounded-full lg:mx-0 mx-auto bg-primaryReduced lg:bg-transparent relative z-10"
          >
            <span class="animate-ping group-hover/link:animate-none group-hover/link:bg-none absolute inline-flex h-full w-full rounded-full -z-10 bg-primary opacity-30"></span>
            See more
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Accomplishmet;
