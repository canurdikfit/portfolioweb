"use client";

import { client } from "@/Utils/GlobalApi";
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";

function Awards() {
  const [award, setAward] = useState([]);
  const cleanUpAward = useCallback((rawData) => {
    const cleanAward = rawData.map((item) => {
      const { sys, fields } = item;
      const { id } = sys;
      const title = fields.title;
      const image = fields.image.fields.file.url;
      const update = { id, title, image };
      return update;
    });
    setAward(cleanAward);
  }, []);

  const getAward = useCallback(async () => {
    try {
      const resp = await client.getEntries({ content_type: "awards" });
      const responce = resp.items;
      if (responce) {
        cleanUpAward(responce);
      } else setAward([]);
    } catch (error) {
      console.log(error);
    }
  }, [cleanUpAward]);

  useEffect(() => {
    getAward();
  }, [getAward]);

  return (
    <section
      className="pt-44 pb-10 sm:pb-40 px-5 xl:px-24 sm:px-16"
      id="awards"
    >
      <div>
        <h3 className="lg:text-4xl sm:text-3xl text-2xl text-center">
          Award and Honors Received
        </h3>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-3 sm:gap-0 mt-10">
        {award.map((awardImg, index) => {
          return (
            <div
              key={index}
              className="h-40 sm:h-72 lg:h-52 overflow-hidden group/awards relative"
            >
              <Image
                className="h-full w-full object-cover object-center group-hover/awards:scale-125 transition duration-500 ease-out"
                src={'https:' + awardImg.image}
                alt="Awards Gotten"
                fill={true}
                size="100%"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Awards;

// =================== Awards =========================
const Award = [
  {
    image:
      "https://images.unsplash.com/photo-1646002193701-8b70ba23c92f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2767&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1632373564036-cc8b7ce520c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1676487030430-6cad55c86e8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2847&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1672215526579-50068ed4d896?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80",
  },
];
