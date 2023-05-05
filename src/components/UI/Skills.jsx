import React from "react";
import frontendIcon from "../../assets/img/frontendIcon.png";
import backendIcon from "../../assets/img/backendIcon.png";
import thumbsUp from "../../assets/img/thumbsUp.png";
import graduation from "../../assets/img/graduation.png";
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iusto
            laudantium possimus, neque cum et provident similique ipsum adipisci
            beatae rerum delectus tenetur corrupti exercitationem, id
            perspiciatis dolorum consequuntur iste.
          </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-grey-700 antialiased text-sm font-semibold">
              {/*------Verticle line through middle------*/}
              <div className="hidden absolute w-1 sm:block bg-primaryColor h-full left-1/2 transform -translate-x-1/2"></div>

              {/* ---left card frontend--- */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="1400"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Frontend Developement
                        </h3>

                        <p className="text-[15] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat numquam quidem aut.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontendIcon} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/*---right card backend---  */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Backend Developement
                        </h3>

                        <p className="text-[15] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat numquam quidem aut.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={backendIcon} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* ---left card proficient--- */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="1400"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Proficient Technologies
                        </h3>
                        {emblems?.slice(0)?.map((emblem, idx) => (
                          <div key={idx}>
                            <figure>
                              <img className="rounded-[8px]" src={emblem.uRLS}/>
                            </figure>
                          </div>
                        ))}

                        {/* <p className="text-[15] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat numquam quidem aut.
                        </p> */}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={thumbsUp} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/*---right card knowledgeable---  */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1500"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Knowledgeable Technologies
                        </h3>

                        <p className="text-[15] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat numquam quidem aut.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={graduation} alt="" />
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
