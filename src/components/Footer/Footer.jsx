import React from "react";

const Footer = () => {
    return <footer className="bg-[#12141e] pt-12">

    {/* __________ FOOTER TOP __________ */}

    <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
            <div className="w-full sm:w-1/2">
                <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
                    Footer
                </h2>
                <a href="#contact">
                <button
                  className="bg-primaryColor text-white font-[500] flex items-center gap-2
                hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"
                >
                  <i class="ri-mail-line"></i>
                  Contact
                </button>
              </a>
            </div>
        </div>
    </div>

    {/* __________ FOOTER BOTTOM __________ */}

    </footer>
}

export default Footer;