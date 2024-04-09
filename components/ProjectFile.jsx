"use client";
import { client } from "@/Utils/GlobalApi";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";

function ProjectFile() {
  const [project, setProject] = useState([]);

  const getProjects = useCallback(async () => {
    try {
      const resp = await client.getEntries({ content_type: "project" });
      const responce = resp.items;
      setProject(responce);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <section className="px-5 mb-32 xl:px-24 sm:px-16 pt-20 md:pt-0">
      <h3 className="text-3xl md:text-4xl">Projects Successfully Completed</h3>
      <div className="mt-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {project.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border-2 pb-5 dark:border-white/20 drop-shadow-xl bg-white dark:bg-black border-black/20"
            >
              <div className="h-80 w-full relative">
                <Image
                  className="h-full w-full object-cover"
                  src={"https:" + item.fields.featuredImage.fields.file.url}
                  size="100%"
                  fill={true}
                  alt="Project Image"
                />
              </div>
              <div className="p-4">
                <h3 className="text-2xl">{item.fields.title}</h3>
                <p className="mb-8">{item.fields.description.substring(0, 180) + '...'}</p>
                <Link
                  href={`/project-details/${item.fields.slug}`}
                  className="bg-primary text-white hover:bg-primaryReduced transition duration-300 py-3 px-6 rounded-lg text-base w-full text-center sm:w-fit sm:text-lg"
                >
                  View Project 🪄
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectFile;