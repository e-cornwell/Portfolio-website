import React from "react";
import projects from "../../assets/data/projectData";

const Modal = ({ activeId, setShowModal }) => {
  const project = projects.find((project) => project.id === activeId);

  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
      <div className="w-11/12 md:max-w-[700px] md:w-full absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
        <div>
          <figure>
            <img className="rounded-[8px]" src={project.img} alt="" />
          </figure>
        </div>

        <div>
          <h2 className="text-2xl text-headingColor font-[700] my-3">
            {project.title}
          </h2>
          <p className="text-[14px] leading-7 text-smallTextColor">
            {project.description}
          </p>

          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <h4 className="text-headingColor text-[18px] text-[700]">
              Technologies:
            </h4>
            {project.technologies.map((item, idx) => (
              <span
                key={idx}
                className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex items-center">
            <a href={project.siteURL} target="_blank" rel="noreferrer">
              <button className="bg-primaryColor text-white py-2 px-4 my-8 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300">
                Web Link
              </button>
            </a>
            <a
              href={project.gitURL}
              className="text-smallTextColor text-[30px] font-[600] py-2 px-2"
              target="_blank"
              rel="noreferrer"
            >
              <i class="ri-github-fill"></i>
            </a>
          </div>
        </div>

        <button
          onClick={() => setShowModal(false)}
          className="w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
