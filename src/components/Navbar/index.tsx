import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import ThemeSwitchLight from "../../assets/svg/theme/ThemeSwitchLight.svg";
import ThemeSwitchDark from "../../assets/svg/theme/ThemeSwitchDark.svg";
import style from "./navbar.module.css";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [selectedOption, setSelectedOption] = useState("RU");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const navLinkStyles =
    "relative font-Rubik Variable text-[#000000] dark:text-white hover:text-gradient hover:dark:text-gradient active:text-gradient active:dark:text-gradient focus:text-gradient focus:dark:text-gradient font-medium group";

  return (
    <div className="hidden lg:flex lg:w-full relative">
      <div className="relative text-[16px] xl:text-lg 3xl:text-3xl 3xl:px-96 flex 3xl:grow justify-between items-center gap-4 xl:gap-16 mx-auto">
        <a href="#mission" className={`${navLinkStyles} ${style.navbar__link}`}>
          Наша миссия
        </a>
        <a
          href="#how_it_works"
          className={`${navLinkStyles} ${style.navbar__link}`}
        >
          Принцип работы
        </a>
        <a href="#roadmap" className={`${navLinkStyles} ${style.navbar__link}`}>
          Дорожная карта
        </a>
        <a
          href="#community"
          className={`${navLinkStyles} ${style.navbar__link}`}
        >
          Сообщество
        </a>
        <a href="#faq" className={`${navLinkStyles} ${style.navbar__link}`}>
          FAQ
        </a>
      </div>

      <div className="flex items-center gap-2 xl:gap-10 ">
        <div className="relative text-left">
          <div>
            <button
              type="button"
              className="inline-flex justify-center gap-x-1.5 rounded-md bg-white dark:bg-black-50 px-2 py-2 text-[16px] xl:text-lg font-Rubik font-medium text-[#000000] dark:text-white ring-1 ring-transparent focus:ring-[#FF4C8C] dark:focus:ring-[#FFAE4E] hover:ring-[#FF4C8C] dark:hover:ring-[#FFAE4E]"
              id="menu-button"
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
              onClick={toggleDropdown}
            >
              {selectedOption}
              <svg
                className={`my-auto transform transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                width="7"
                height="4"
                viewBox="0 0 7 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.99919 0H0.918945L3.95907 4L6.99919 0Z"
                  fill="url(#paint0_linear_1163_600)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1163_600"
                    x1="6.99919"
                    y1="0"
                    x2="3.32597"
                    y2="5.58351"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.243506" stopColor="#FFAE4E" />
                    <stop offset="0.859185" stopColor="#FF4C8C" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>

          {isDropdownOpen && (
            <div
              className="absolute z-10 mt-2 origin-top-right rounded-md bg-white dark:bg-black-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex={-1}
            >
              <div className="py-1" role="none">
                <button
                  className="block w-full text-left px-3 py-2 text-sm text-[#000000] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-0"
                  onClick={() => handleOptionClick("RU")}
                >
                  RU
                </button>
                <button
                  className="block w-full text-left px-3 py-2 text-sm text-[#000000] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                  onClick={() => handleOptionClick("ENG")}
                >
                  ENG
                </button>
                <button
                  className="block w-full text-left px-3 py-2 text-sm text-[#000000] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-2"
                  onClick={() => handleOptionClick("CHT")}
                >
                  CHT
                </button>
              </div>
            </div>
          )}
        </div>

        <img
          className="w-6 h-6 cursor-pointer ml-auto my-auto"
          src={theme ? ThemeSwitchLight : ThemeSwitchDark}
          alt="theme"
          onClick={toggleTheme}
        />
      </div>
    </div>
  );
}
