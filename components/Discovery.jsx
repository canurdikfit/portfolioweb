import React from 'react'
import Img from "@/imgs/video.png";
import Image from 'next/image';

function Discovery() {
  return (
    <section className="px-5 xl:px-24 sm:px-16 md:h-[99vh] flex items-center justify-center py-20">
      <div className="grid md:grid-cols-2 xl:gap-16 gap-10">
        <div className="h-96 rounded-2xl order-2 md:order-1 overflow-hidden">
        <Image src={Img} className="h-full object-cover object-center" alt="Isimeme Whyte" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="course_font text-2xl lg:text-3xl xl:text-4xl mt-6 md:mb-5 tracking-wide">Welcome to 'Uncovering <span className="font-thin">You</span><span className="text-primary">*</span></h2>
         <div className="flex flex-col gap-4 text-base text-secondary">
         <p>
            Reforming and Transformation' – a compelling series dedicated to
            guiding you through the profound journey of personal reform and
            transformation. Join us as we unravel the layers, inspiring positive
            change and unlocking the limitless potential within you."
          </p>
          <p>
            Embark on a path of clarity and efficient navigation, nurture your
            potential, unhash your true self, and become the best version of
            you.
          </p>
         </div>
        </div>
      </div>
    </section>
  )
}

export default Discovery