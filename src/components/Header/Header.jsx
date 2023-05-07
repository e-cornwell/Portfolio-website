import React, { useRef, useEffect, useState } from "react";
import QB_white from "../../assets/img/QB_white-logo.png";

const Header = () => {
  const [showButton, setShowButton] = useState(true);
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setShowButton(false);
      } else setShowButton(true);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (ev) => {
    ev.preventDefault();

    const targetAttr = ev.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex-items-center"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* == LOGO == */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[75px] h-[75px] bg-primaryColor rounded-full flex items-center justify-center">
              <figure className="flex items-center justify-center">
                <img src={QB_white} alt="" />
              </figure>
            </span>

            <div className="leading-[20px]">
              <h2 className="font-robo text-2xl text-smallTextColor font-[300]">
                Quickbeam Studios
              </h2>
            </div>
          </div>

          {/* == LOGO END == */}
          {/* == MENU START == */}
          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* == MENU END == */}

          {/* == MENU RIGHT == */}
          <div className="flex items-center gap-4">
            {showButton && (
              <a
                className="flex items-center gap-1 text-primaryColor font-[200] 
                border border-solid border-primaryColor py-2 px-3 rounded-[8px] max-h-[40px] hover:bg-primaryColor
                hover:text-white hover:font-[500] ease-in duration-300"
                href="#contact"
              >
                <i class="ri-send-plane-line"></i> Let's Talk
              </a>
            )}
            <span
              onClick={toggleMenu}
              className="text-2xl cursor-pointer text-smallTextColor md:hidden"
            >
              <i class="ri-menu-line"></i>
            </span>
          </div>
          {/* == MENU END == */}
        </div>
      </div>
    </header>
  );
};

export default Header;
