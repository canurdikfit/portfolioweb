"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import AnkaraImg from "@/imgs/ankara.png";
import Testimonia from "@/imgs/icons/testimonial.svg";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { client } from "@/Utils/GlobalApi";

function Testimonial() {
  const [testimon, setTestimon] = useState([]);
  const [slideBegOrNot, handleSlideByState] = useState({
    isFirst: true,
    isLast: false,
  });
  const SlideRef = useRef();

  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };

  const onSlideChange = (swiper) => {
    handleSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
  };

  const cleanUpTestimon = useCallback((rawData) => {
    const cleanTestimon = rawData.map((item) => {
      const { sys, fields } = item;
      const { id } = sys;
      const comment = fields.comment;
      const person = fields.person;
      const update = { id, comment, person };
      return update;
    });
    setTestimon(cleanTestimon);
  }, []);

  const getTestimonialContent = useCallback(async () => {
    try {
      const resp = await client.getEntries({ content_type: "testimonial" });
      const responce = resp.items;
      if (responce) {
        cleanUpTestimon(responce);
      } else setTestimon([]);
    } catch (error) {
      console.log(error);
    }
  }, [cleanUpTestimon]);

  useEffect(() => {
    getTestimonialContent();
  }, [getTestimonialContent]);

  return (
    <section className="pb-20">
      <div className="lg:h-96 md:h-fit h-fit overflow-hidden relative">
        <Image
          className="h-full w-full object-cover object-center"
          src="https://images.unsplash.com/photo-1688637079152-92cb74fc7e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80"
          alt="Relaxation"
          size="100%"
          fill={true}
        />
        <div className="relative z-10 h-full w-screen bg-gradient-to-br from-black/80 inset-y-0 inset-x-0 grid items-center md:grid-cols-3 px-5 xl:px-24 sm:px-16 md:gap-14 gap-5 py-20">
          <div className="md:col-span-1 md:border-r-2 border-white text-center md:text-left">
            <p className="text-base text-white">
              Over 16,000 <br className="hidden md:block" /> impacted MSME’s
            </p>
            <h3 className="lg:mt-10 md:mt-6 mt-3 text-2xl md:text-4xl lg:text-5xl text-white">
              Testimonials
            </h3>
          </div>
          <div className="md:col-span-2 w-full">
            <div className="h-9 md:h-12 w-12 relative md:mb-10 mb-5 flex">
              <Image
                src={Testimonia}
                sizes="100%"
                fill={true}
                className="object-contain"
                alt="icon"
              />
            </div>
            <div className="w-full relative max-w-[90vw]">
              <Swiper
                spaceBetween={30}
                ref={SlideRef}
                onSlideChange={onSlideChange}
                centeredSlides={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper w-full"
              >
                {testimon.map((item, index) => (
                  <SwiperSlide key={index} className="text-base md:text-lg text-white">
                    {item.comment} - <b>{item.person}</b>
                  </SwiperSlide>
                ))}
                <SwiperSlide className="text-base md:text-lg text-white">
                  Isimeme Whyte consistently demonstrates an unwavering
                  commitment to excellence, setting a remarkable standard for
                  others to aspire to. - <b>Agbonyinma Ernest Nosakhare</b>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="text-xl flex items-center gap-5 mt-10 ms-auto w-fit">
              <button
                className="text-white cursor-pointer py-3 px-3  rounded-xl bg-[#0B0B0B]"
                onClick={() => handlePrev()}
              >
                <FaArrowLeftLong />
              </button>
              <button
                className="text-white cursor-pointer py-3 px-3  rounded-xl bg-[#0B0B0B]"
                onClick={() => handleNext()}
              >
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-6 md:h-9 overflow-hidden w-screen relative">
        <Image
          className="h-full w-full object-cover object-top"
          src={AnkaraImg}
          alt="Ankara"
          fill={true}
          sizes="100%"
        />
      </div>
    </section>
  );
}

export default Testimonial;
