import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import ButtonBread from "../../UI/ButtonBread";
import Wallet from "../../Wallet";
import illustrationDark from "../../../assets/svg/preview/IllustrationDark.svg";
import illustrationLight from "../../../assets/svg/preview/IllustrationLight.svg";

export default function Preview() {
  const { theme } = useTheme();

  return (
    <section id="preview" className="preview scroll-mt-[6rem]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col justify-start items-center sm:items-start  w-full sm:w-1/2 mb-auto pt-[3rem] text-center sm:text-start">
            <h1 className="w-full font-sans text-[#000000] dark:text-white text-[38px] lg:text-[40px] xl:text-6xl font-semibold 3xl:text-7xl">
              Социальная сеть Tail Talks
            </h1>
            <p className="font-Rubik text-[#000000] dark:text-[#F3F3F3] text-[18px] xl:text-xl 3xl:text-3xl font-light mt-5 lg:mt-8 xl:mt-10">
              Место, где каждый питомец заслуживает быть звездой
            </p>
            <div className="w-full block sm:hidden">
              <img
                className="w-full ml-auto mb-auto"
                src={theme ? illustrationDark : illustrationLight}
                alt="illustration"
              ></img>
            </div>
            <div className="flex gap-5 mt-5 lg:mt-8 xl:mt-[4rem] flex-col xl:flex-row">
              <a href="#how_it_works">
                <ButtonBread
                  name="Узнать подробнее"
                  className="w-[310px] lg:text-base h-[47px] lg:h-[50px] xl:text-lg xl:h-16"
                />
              </a>
              <Wallet />
            </div>
          </div>

          <div className="w-1/2 hidden sm:block">
            <img
              className="w-full ml-auto mb-auto"
              src={theme ? illustrationDark : illustrationLight}
              alt="illustration"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}
