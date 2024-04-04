import Link from "next/link";
import React from "react";
import CareerImg from "./CareerImg";

function Career() {
  return (
    <section className="py-32" id="career">
      <div>
        <h2
          className="text-center lg:text-4xl sm:text-3xl text-2xl"
          data-aos="fade-up"
        >
          My Career
        </h2>
      </div>
      <CareerImg />
      <div className="flex justify-center">
        <Link href={'/project'} className="bg-primary text-white hover:bg-primaryReduced transition duration-300 py-3 px-6 rounded-lg text-base w-full text-center sm:w-fit mx-5 sm:text-lg">
          View Projects 🪄
        </Link>
      </div>
    </section>
  );
}

export default Career;
