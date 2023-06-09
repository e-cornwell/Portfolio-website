import React, { useRef, useEffect } from "react";
import QB_white from "../../assets/img/logos/QB_white-logo.png";

const Header = (props) => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const showModal = props.showModal;

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
      if (showModal) {
        headerRef.current.classList.remove("sticky__header");
      }
    };
    const handleClick = () => {
      if (showModal) {
        headerRef.current.classList.remove("sticky__header");
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClick);
    };
  }, [showModal]);

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
                QUICKBEAM STUDIOS
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
