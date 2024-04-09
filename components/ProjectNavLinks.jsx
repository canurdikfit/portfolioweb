import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";

function ProjectNavLinks({ nav, page }) {
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();

  const getPrevAndNext = useCallback(() => {
    setNext(page === nav.length - 1 ? nav[0] : nav[page + 1]);
    setPrev(page === 0 ? nav[nav.length - 1] : nav[page - 1]);
  }, [page]);

  useEffect(() => {
    getPrevAndNext();
  }, [getPrevAndNext]);

  return (
    <>
      <div className=" flex items-center justify-center gap-10 md:py-36">
        <Link
          className=" md:h-36 md:w-36 h-28 w-28 text-white dark:lg:text-white lg:text-black lg:hover:bg-primaryReduced lg:hover:border-0 transition duration-400 text-sm  group/link font-body ease-in-out border-2 dark:border-white/20 lg:hover:text-white flex items-center justify-center rounded-full lg:mx-0 mx-auto lg:bg-transparent relative z-10"
          href={`/project-details/${prev?.slug}`}
        >
          <span class="animate-ping group-hover/link:animate-none group-hover/link:bg-none absolute inline-flex h-full w-full rounded-full -z-10 bg-primary opacity-30"></span>
          Previous Project
        </Link>
        <p className="hidden lg:block text-lg font-medium">{prev?.title}</p>
      </div>
      <div className="text-end justify-center flex items-center gap-10 md:border-l-2 border-secondary/60 md:py-36">
        <p className="hidden lg:block text-lg font-medium">{next?.title}</p>
        <Link
          className="md:w-36 md:h-36 h-28 w-28 text-white dark:lg:text-white lg:text-black lg:hover:bg-primaryReduced lg:hover:border-0 transition duration-400 text-sm  group/link font-body ease-in-out border-2 dark:border-white/20 lg:hover:text-white flex items-center justify-center rounded-full lg:mx-0 mx-ahref lg:bg-transparent relative z-10"
          href={`/project-details/${next?.slug}`}
        >
          <span class="animate-ping group-hover/link:animate-none group-hover/link:bg-none absolute inline-flex h-full w-full rounded-full -z-10 bg-primary opacity-30"></span>
          Next Project
        </Link>
      </div>
    </>
  );
}

export default ProjectNavLinks;
