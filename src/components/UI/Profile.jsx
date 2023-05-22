import React, { useEffect, useState } from "react";
import Headshot_1 from "../../assets/img/Headshot_1.jpg";
import CountUp from "react-countup";

const Profile = () => {
  const[jobTitle, setJobTitle] = useState(0);
  const jobTitles = ["a Web Developer", "a Software Developer", "an Application Developer"];

  const currentYear = new Date().getFullYear();
  const yearsProg = currentYear - 2022;

  useEffect(()=>{
    let delay = 5400;

    const interval = setInterval(()=>{
      setJobTitle(currentIdx => (currentIdx + 1) % jobTitles.length);
      delay = 5400;
    }, delay);

    return () => {
      clearInterval(interval);
    }

  },[jobTitles.length])

  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="items-center justify-between md:flex sm:flex-col md:flex-row">
          {/* _____ PERSONAL LEFT CONTENT _____ */}
          <div className="w-full md: basis-1/2">
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-3"
            >
              I'm Ethan Cornwell
            </h1>
            <h1
              data-aos="fade-left"
              data-aos-duration="1500"
              className={`text-headingColor font-[800] text-[2.5rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-3 animate-jobTitle`}
            >
              {jobTitles[jobTitle]}
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button
                  className="bg-primaryColor text-white font-[500] flex items-center gap-2
                hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"
                >
                  <i class="ri-mail-line"></i>
                  Contact
                </button>
              </a>
              <a
                href="#projects"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                See Projects
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="2000"
              className="flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              I live in Northern Colorado with my wife and two children. In October 2021 I had the opportunity to leave my pharmaceutical career of 8+ years to pursue my passion and curiosity for software development. I spent the next year teaching myself the basics of coding. My love for games inspired me to start programming C# in the Unity engine. This eventually led to a greater interest and resolve in learning programming. September 2022 I was accepted into a Web Development bootcamp through CSU (Colorado State University) and Fullstack Academy. The next six months would be saturated with lectures and projects providing me with a thorough understanding of many new technologies and how to apply them. The course was quite challenging however with hard work, excellent teachers and dedicated peers, I successfully graduated the program in March 2023. I currently work out of my home office in Ault and am open to new opportunities as they arise.
            </p>

            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Follow Me:
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/ethan-cornwell/"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-linkedin-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/e-cornwell"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://twitter.com/EthanCornwell11"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-twitter-fill"></i>
                </a>
              </span>
            </div>
          </div>
          {/* == PERSONAL LEFT END == */}

          {/* == PERSONAL IMG == */}
          <div className="mt-10 basis-1/3 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img className="rounded-[8px]" src={Headshot_1} alt="" />
            </figure>
          </div>
          {/* == PERSONAL IMG END == */}

          {/* == PERSONAL CONTENT RIGHT == */}
          <div className="flex justify-between gap-3 mt-10 text-center md:basis-1/5 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="text-headingColor font-[700] text-[18px]">
              <h2>Experience:</h2>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={yearsProg} duration={4} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[700] text-[18px]">
                Years in Programming 
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={1} end={4} duration={6} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[700] text-[18px]">
                Years in Management
              </h4>
            </div> 
          </div>
          {/* == PERSONAL CONTENT RIGHT END == */}
        </div>
      </div>
    </section>
  );
};

export default Profile;
