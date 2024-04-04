import Carousel from "@/components/Carousel";
import Discovery from "@/components/Discovery";
import ProjectFile from "@/components/ProjectFile";
import React from "react";

function Project() {
  return (
    <main>
      <Carousel pageName={"Project"} />
      <Discovery />
      <ProjectFile />
    </main>
  );
}

export default Project;
