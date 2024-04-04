"use client";
import GlobalApi from "@/app/Utils/GlobalApi";
import Accomplish from "@/components/Accomplish";
import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Gallery from "@/components/Gallery";
import ProjectNav from "@/components/ProjectNav";
import React, { useEffect, useState } from "react";

function page({ params }) {
  const [productId, setProductId] = useState([]);
  const [project, setProject] = useState([]);
  useEffect(() => {
    getProductById();
    getProjectContent();
  }, [params?.projectId]);

  const getProductById = () => {
    GlobalApi.getProjectbyId(params?.projectId).then((resp) => {
      setProductId(resp.data.data);
    });
  };

  const getProjectContent = () => {
    GlobalApi.getProject().then((resp) => {
      setProject(resp.data.data);
    });
  };
  
  return (
    <main className="overflow-visible">
      <Banner headValues={productId} />
      <Featured bannerImg={productId} />
      <Accomplish individualValue={productId} />
      <Gallery images={productId} />
      <ProjectNav page={params?.projectId} final={project} />
    </main>
  );
}

export default page;
