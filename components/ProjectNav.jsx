import { client } from "@/Utils/GlobalApi";
import React, { useEffect, useState, useCallback } from "react";
import ProjectNavLinks from "./ProjectNavLinks";

function ProjectNav({ page }) {
  const [nav, setNav] = useState([]);
  const slug = page;
  const position = nav.findIndex(item => item.slug == slug);

  const cleanUpNav = useCallback((rawData) => {
    const cleanNav = rawData.map((item) => {
      const { sys, fields } = item;
      const { id } = sys;
      const title = fields.title;
      const slug = fields.slug;
      const update = { id, title, slug };
      return update;
    });
    setNav(cleanNav);
  }, []);

  const getNav = useCallback(async () => {
    try {
      const resp = await client.getEntries({ content_type: "project" });
      const responce = resp.items;
      if (responce) {
        cleanUpNav(responce);
      } else setNav([]);
    } catch (error) {
      console.log(error);
    }
  }, [cleanUpNav]);

  useEffect(() => {
    getNav();
  }, [getNav]);

  return (
    <section className="px-5 xl:px-24 sm:px-16 pb-32 md:mb-40">
      <div className="md:border-t-2 md:border-b-2 font-body border-secondary/60 grid grid-cols-2">
        <ProjectNavLinks nav={nav} page={position}/>
      </div>
    </section>
  );
}

export default ProjectNav;
