import React from "react";

function Featured({ bannerImg }) {
  return (
    <section className="py-20">
      <div className="lg:h-[500px] md:h-80 h-56 overflow-hidden relative">
        <img
          className="h-full w-full object-cover object-center"
          src={bannerImg.attributes?.banner?.data?.attributes?.url}
          alt="Relaxation"
        />
        <div className="absolute z-10 h-full w-full bg-gradient-to-t from-black/30 inset-y-0 inset-x-0" />
      </div>
    </section>
  );
}

export default Featured;
