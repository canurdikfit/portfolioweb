"use client";
import { client } from "@/Utils/GlobalApi";
import Accomplish from "@/components/Accomplish";
import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Gallery from "@/components/Gallery";
import ProjectNav from "@/components/ProjectNav";
import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";

function page() {
  const [projects, setProjects] = useState([]);
  const params = useParams();

  const getProjects = useCallback(async () => {
    try {
      const resp = await client.getEntries({
        content_type: "project",
        "fields.slug": params.projectId,
      });
      const responce = resp.items;
      setProjects(responce)
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <main className="overflow-visible">
      <Banner headValues={projects} />
      <Featured bannerImg={projects} />
      <Accomplish individualValue={ projects} />
      <Gallery values={projects} />
      <ProjectNav 
      page={params?.projectId}
       />
    </main>
  );
}

export default page;
