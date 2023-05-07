import React from "react";
import singleArrow from "../../assets/img/singleArrow.png"; 
import doubleArrow from "../../assets/img/doubleArrow.png";
import vip from "../../assets/img/vip.png";
import database from "../../assets/img/database.png";

import emblems from "../../assets/data/emblemData";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            Skills
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7 ">
            My current software and web developement abilities have been tailored towards full stack web applications or ecommerce websites. Utilizing the PERN stack (PostgreSQL, Express.js, React, Node.js) I have built frontend applications as well as backend servers and databases.
          </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full px-2 py-3 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-sm antialiased font-semibold text-grey-700">
              {/*------Verticle line through middle------*/}
              <div className="absolute hidden w-1 h-full transform -translate-x-1/2 sm:block bg-primaryColor left-1/2"></div>

              {/* ---left card frontend--- */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex flex-col items-center sm:flex-row">
                  <div className="flex items-center justify-start w-full mx-auto">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="1400"
                        className="p-4 duration-150 ease-in bg-white rounded shadow cursor-pointer group hover:bg-primaryColor"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Frontend Developement
                        </h3>

                        <p className="text-[15] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Creating fun, interactive UI/UX expirience for the clients using JavaScript, React.js, CSS6, HTML5 and Tailwind CSS.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 border-4 border-white rounded-full bg-primaryColor left-1/2 sm:translate-y-0">
                    <figure>
                      <img src={vip} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/*---right card backend---  */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex flex-col items-center sm:flex-row">
                  <div className="flex items-center justify-end w-full mx-auto">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className="p-4 duration-150 ease-in bg-white rounded shadow cursor-pointer group hover:bg-primaryColor"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Backend Developement
                        </h3>

                        <p className="text-[15] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Developing quality, secure servers and databases 
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 border-4 border-white rounded-full bg-primaryColor left-1/2 sm:translate-y-0">
                    <figure>
                      <img src={database} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* ---left card proficient--- */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex flex-col items-center sm:flex-row">
                  <div className="flex items-center justify-start w-full mx-auto">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="1400"
                        className="p-4 duration-150 ease-in bg-white rounded shadow cursor-pointer group hover:bg-primaryColor"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Proficient Technologies
                        </h3>
                        <div className="flex flex-wrap items-row">
                          {emblems.profEmblems?.map((emblem, idx) => (
                            <div key={idx}>
                              <figure>
                                <img
                                  className="w-[50px] h-[50px]"
                                  src={emblem}
                                  alt="X"
                                />
                              </figure>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 border-4 border-white rounded-full bg-primaryColor left-1/2 sm:translate-y-0">
                    <figure>
                      <img src={doubleArrow} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/*---right card knowledgeable---  */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex flex-col items-center sm:flex-row">
                  <div className="flex items-center justify-end w-full mx-auto">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1500"
                        className="p-4 duration-150 ease-in bg-white rounded shadow cursor-pointer group hover:bg-primaryColor"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Knowledgeable Technologies
                        </h3>
                        <div className="flex flex-wrap items-row">
                          {emblems.knowEmblems?.map((emblem, idx) => (
                            <div key={idx}>
                              <figure>
                                <img
                                  className="w-[50px] h-[50px]"
                                  src={emblem}
                                  alt="X"
                                />
                              </figure>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 border-4 border-white rounded-full bg-primaryColor left-1/2 sm:translate-y-0">
                    <figure>
                      <img src={singleArrow} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
