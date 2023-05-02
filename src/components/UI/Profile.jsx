import React from "react";
import Headshot_1 from "../../assets/img/Headshot_1.jpg";
import CountUp from "react-countup";

const Profile = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* _____ PERSONAL LEFT CONTENT _____ */}
          <div className="w-full md: basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hello,
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Ethan Cornwell <br />a Web Developer
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
              <span>
                <i class="ri-apps-2-line"></i>
              </span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              perspiciatis repudiandae non cupiditate enim. Quasi, ipsam
              excepturi! Odio unde, vitae facilis quam vero quos molestiae
              consequatur, illum, iure accusamus totam?
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
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={Headshot_1} alt="" />
            </figure>
          </div>
          {/* == PERSONAL IMG END == */}

          {/* == PERSONAL CONTENT RIGHT == */}
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={1} end={1} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[700] text-[18px]">
                Years of expirience
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
