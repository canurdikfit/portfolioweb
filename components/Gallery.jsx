"use client";
import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import Vector from "@/imgs/Vector.png";

function Gallery({ values }) {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);

  return (
    <section
      ref={targetRef}
      className="overflow-visible lg:h-[500vh] h-fit pt-16 pb-40"
    >
      <div className="sticky top-0 h-screen lg:flex hidden place-items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex items-center gap-3 pl-5 sm:pl-16 flex-shrink-0 w-[4000px]"
        >
          <div className="flex gap-5 items-center relative w-fit lg:items-start flex-shrink-0 mr-8">
            <div className="h-28 w-28 border-[5px] relative border-[#D9D9D9] rounded-full overflow-hidden">
              <Image
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1522938974444-f12497b69347?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2909&q=80"
                fill={true}
                sizes="100%"
                alt="Profile"
              />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl">
                Pictures from <br className="hidden lg:block" /> event.
              </h1>
              <p className="dark:text-secondary text-sm lg:text-base">
                These pictures are copy <br className="hidden lg:block" />{" "}
                righted!
              </p>
            </div>
            <div
              className="h-3 absolute right-8 -top-3 lg:-top-10 lg:right-4"
              data-aos="fade-up-"
              data-aos-easing="ease-in-sine"
              data-aos-duration="800"
            >
              <Image src={Vector} width={30} height={30} alt="Vector" />
            </div>
          </div>
          {values.map((card, index) => {
            return (
              <div key={index} className='flex items-start gap-3 flex-shrink-0 w-full'>
                {card.fields.gallery.map((items, _) => (
                  <div key={_} className="h-80 overflow-hidden md:max-w-md w-full relative flex-shrink-0 group/hori">
                    <Image
                      className="h-full w-full object-cover group-hover/hori:scale-125 group-hover/hori:rotate-6 transition duration-500"
                      src={"https:" + items.fields.file.url}
                      fill={true}
                      sizes="100%"
                      alt="Event"
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row items-center sticky lg:h-screen lg:hidden w-full">
        <div className="flex gap-5 items-center relative w-fit lg:items-start flex-shrink-0">
          <div className="h-28 w-28 border-[5px] border-[#D9D9D9] rounded-full overflow-hidden relative">
            <Image
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1522938974444-f12497b69347?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2909&q=80"
              fill={true}
              sizes="100%"
              alt="Profile"
            />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl">
              Pictures from <br className="hidden lg:block" /> event.
            </h1>
            <p className="dark:text-secondary text-sm lg:text-base">
              These pictures are copy <br className="hidden lg:block" />
              righted!
            </p>
          </div>
          <div className="h-3 absolute right-8 -top-3 lg:-top-10 lg:right-4">
            <Image src={Vector} width={30} height={30} alt="Vector" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-3 w-full">
          {values.map((residue, index) => {
            return (
              <div key={index}>
                {residue.fields.gallery.map((items, _) => (
                  <div key={_} className="h-80 overflow-hidden lg:max-w-md w-full flex-shrink-0 relative">
                    <Image
                      className="h-full w-full object-cover"
                      src={"https:" + items.fields.file.url}
                      fill={true}
                      sizes="100%"
                      alt="Event"
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
