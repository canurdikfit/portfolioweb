import Link from "next/link";
import React from "react";

function ProjectNav({ final, page }) {

  return (
    <section className="px-5 xl:px-24 sm:px-16 pb-32 md:mb-40">
      <div className="md:border-t-2 md:border-b-2 font-body border-secondary/60 grid grid-cols-2">
        <div className=" flex items-center justify-center gap-10 md:py-36">
          <Link
            className=" md:h-36 md:w-36 h-28 w-28 text-white dark:lg:text-white lg:text-black lg:hover:bg-primaryReduced lg:hover:border-0 transition duration-400 text-sm  group/link font-body ease-in-out border-2 dark:border-white/20 lg:hover:text-white flex items-center justify-center rounded-full lg:mx-0 mx-auto lg:bg-transparent relative z-10"
            href={`/project-details/${
              Number(page) === 1 ? final.length : page - 1
            }`}
          >
            <span class="animate-ping group-hover/link:animate-none group-hover/link:bg-none absolute inline-flex h-full w-full rounded-full -z-10 bg-primary opacity-30"></span>
            Previous Project
          </Link>

        </div>
        <div className="text-end justify-center flex items-center gap-10 md:border-l-2 border-secondary/60 md:py-36">


          <Link
            className="md:w-36 md:h-36 h-28 w-28 text-white dark:lg:text-white lg:text-black lg:hover:bg-primaryReduced lg:hover:border-0 transition duration-400 text-sm  group/link font-body ease-in-out border-2 dark:border-white/20 lg:hover:text-white flex items-center justify-center rounded-full lg:mx-0 mx-ahref lg:bg-transparent relative z-10"
            href={`/project-details/${
              Number(page) === final.length ? 1 : Number(page) + 1
            }`}
          >
            <span class="animate-ping group-hover/link:animate-none group-hover/link:bg-none absolute inline-flex h-full w-full rounded-full -z-10 bg-primary opacity-30"></span>
            Next Project
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectNav;
