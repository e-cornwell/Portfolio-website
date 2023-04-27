import React, { useState, useEffect } from "react";
import data from "../../assets/data/projectData";
import Modal from "./Modal";

const Projects = () => {
  const [nextItems, setNextItems] = useState(6);
  const [projects, setProjects] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const handleLoadMore = () => {
    setNextItems((prev) => prev + 3);
    console.log(
      "Load More is a future feature that will be enabled once the list of projects grows"
    );
  };

  const handleShowModal = (id) => {
    setShowModal(true);
    setActiveId(id);
  };

  return (
    <section id="projects">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              Top Projects
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-12">
          {projects?.slice(0, nextItems)?.map((project, index) => (
            <div
              key={index}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="group max-w-full max-h-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
            >
              <figure>
                <img className="rounded-[8px]" src={project.img} alt="" />
              </figure>
              <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => handleShowModal(project.id)}
                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          {nextItems < projects.length && data.length > 6 && (
            <button
              onClick={handleLoadMore}
              className="text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
            >
              Load More
            </button>
          )}
        </div>
      </div>

      {showModal && <Modal setShowModal={setShowModal} activeId={activeId}/>}
    </section>
  );
};

export default Projects;
