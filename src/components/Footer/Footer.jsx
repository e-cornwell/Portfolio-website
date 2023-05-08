import React from "react";
import QB_white from "../../assets/img/logos/QB_white-logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#12141e] pt-12">
      {/* __________ FOOTER TOP __________ */}

      <div className="container">
        <div className="items-center justify-between sm:flex md:gap-8">
          <div className="w-full sm:w-1/2">
            <div className="flex flex-wrap items-center gap-4 mt-10 md:gap-8">
              <span className="text-gray-300 font-[600] text-[15px]">
                Professional Links:
              </span>

              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://www.linkedin.com/in/ethan-cornwell/"
                  className="text-gray-300 text-[18px] font-[500]"
                >
                  <i class="ri-linkedin-fill"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://github.com/e-cornwell"
                  className="text-gray-300 text-[18px] font-[500]"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://twitter.com/EthanCornwell11"
                  className="text-gray-300 text-[18px] font-[500]"
                >
                  <i class="ri-twitter-fill"></i>
                </a>
              </span>
            </div>
          </div>
        </div>

        <div>
          <ul className="flex items-center justify-center gap-10 mt-10">
            <li>
              <a className="text-gray-400 font-[600]" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600]" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600]" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600]" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* __________FOOTER TOP END ____________ */}

      {/* __________ FOOTER BOTTOM START __________ */}
      <div className="bg-[#1b1e29] py-5 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span className="w-[50px] h-[50px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center">
                  <figure className="flex items-center justify-center">
                    <img src={QB_white} alt="" />
                  </figure>
                </span>

                <div className="leading-[20px]">
                  <h2 className="text-gray-400 font-robo font-[300] text-[18px]">
                    Quickbeam Studios
                  </h2>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-400 font-robo text-[14px]">
                Copyright {year} Quickbeam Studios - All rights reserved.
              </p>
              <p className="font-robo text-gray-400 text-[14px]">
                Logo designed and created by Maya Cornwell - All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* __________ FOOTER BOTTOM END __________ */}
    </footer>
  );
};

export default Footer;
