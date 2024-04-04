"use client";
import GlobalApi from "@/app/Utils/GlobalApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Carousel({ pageName }) {
  const [current, setCurrent] = useState(2);
  const [slider, setSlider] = useState([]);

  const swipe = () => {
    setCurrent(current === 4 ? 0 : current + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      swipe();
    }, 5000);
  });

  useEffect(() => {
    getSliderContent();
  }, []);

  const getSliderContent = () => {
    GlobalApi.getSlider().then((resp) => {
      setSlider(resp.data.data);
    });
  };

  return (
    <section className="relative w-screen h-[85vh] md:h-[90vh] lg:h-screen overflow-hidden">
      {slider.map((item, key) => (
        <div
          className={`h-full ${
            item.attributes.pageName === pageName ? "" : "hidden"
          }`}
          key={key}
        >
          {item.attributes.pageName === pageName && (
            <div className="flex h-full w-screen after:absolute after:h-full after:w-full after:bg-gradient-to-r after:from-black/75 after:from-5% after:top-0 after:left-0 after:bottom-0 ">
              <div className="relative h-full w-full">
                {item.attributes.images.data.map((image, index) => {
                  return (
                    <div
                      key={index}
                      className={`${
                        index === current
                          ? "absolute opacity-1 scale-100"
                          : "absolute opacity-0 scale-125"
                      } h-full w-full pointer-events-auto transition ease-in-out duration-1000`}
                    >
                      <Image
                        className="object-cover object-center"
                        src={image.attributes?.url}
                        quality={100}
                        fill={true}
                        sizes="100%"
                        priority={true}
                        alt="Carousel Image"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="absolute bottom-7 sm:bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 z-10">
                {item.attributes.images.data.map((_, index) => {
                  return (
                    <div
                      key={index}
                      className={`rounded-2xl transition duration-1000 hover:scale-125 ${
                        index === current
                          ? "sm:h-[10px] sm:w-[30px] h-2 w-7 border sm:border-[2.5px] border-white"
                          : "sm:w-[10px]sm:w-[10px] h-1.5 w-1.5 bg-white"
                      }`}
                      onClick={() => setCurrent(index)}
                    ></div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="absolute sm:bottom-32 bottom-20 px-5 xl:px-24 sm:px-16">
        <div>
          <h1 className="lg:text-6xl md:text-5xl text-4xl text-white">
            Isimeme Whyte
          </h1>
          <p className="relative lg:text-lg text-base">
            <span className="max-w-xs text-secondary">
              Disciplined. Passionate. Consistent
            </span>
            <span className="relative left-6 md:left-8 hidden sm:inline-block w-28 h-0.5 bg-secondary -translate-y-1/2 before:absolute before:h-3 before:w-3 before:rounded-full before:bg-primary before:bottom-0 before:translate-y-1/2 before:-left-2"></span>
          </p>
        </div>
      </div>
      <div className="absolute text-white z-20 right-5 sm:right-16 md:right-24 bottom-40 tracking-wider h-full flex items-end">
        <h6 className="text-xl rotate-90 h-64">Isimeme Whyte</h6>
      </div>
    </section>
  );
}

export default Carousel;
