import React from "react";
import data from "../../assets/data/projectData";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              Top Projects
            </h3>
          </div>

          <div className="flex gap-3">
            <button className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
              All
            </button>
          </div>
          <div className="flex gap-3">
            <button className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
              Web Design
            </button>
          </div>
          <div className="flex gap-3">
            <button className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
              App Development
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          {data?.map((project, index) => (
            <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]">
              <figure>
                <img className="rounded-[8px]" src={project.img} alt="" />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
