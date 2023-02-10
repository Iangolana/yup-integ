"use client";

import Newsletter from "../Common/Newsletter/page";
import SocialNetwork from "../Common/SocialNetwork/page";
import ForThePlanet from "../icons/ForThePlanet";
import LogoRose from "../icons/LogoRose";
import Bandeau from "./Bandeau/page";
import Copyright from "./Copyright/page";
import MenuFooterBottom from "./MenuFooterBottom/page";
import MenuFooterTop from "./MenuFooterTop/page";

const Footer = () => {
  return (
    <>
      <div className="bg-primary-green text-white pt-[43px]">
        <div className=" px-9 lg:px-0">
          <div className="w-[98%] max-w-[1290px] space-x-0 xl:space-x-10 space-y-6 xl:space-y-2 mx-auto rounded-30 py-5 px-4 xl:px-10 bg-[#ffffff1a] flex flex-wrap flex-col xl:flex-row items-center justify-center xl:justify-between">
            <div className="text-base text-center lg:text-xl font-canelaText font-medium">
              Votre assurance fait du bien à la planète
            </div>
            <div className="uppercase max-w-[236px] leading-4 text-center lg:text-left text-sm">
              lorem ipsum dolor sit amet consectur adip
            </div>

            <div className="flex flex-wrap w-full items-center justify-center xl:justify-between xl:flex-1 flex-col-reverse md:flex-row space-x-0 md:space-x-10 space-y-6 space-y-reverse md:space-y-0 mx-auto">
              <button
                type="button"
                className="min-w-[190px] max-w-[398px] py-1 px-11 bg-white rounded-[100px] flex justify-center"
              >
                <ForThePlanet />
              </button>
              <button
                type="button"
                className="min-w-[190px] max-w-[398px] btn text-primary-black whitespace-nowrap bg-primary-yellow rounded-[100px] flex justify-center"
              >
                nos engagements
              </button>
            </div>

          </div>
        </div>
        <div className="text-center py-8 lg:py-11 px-2 lg:px-0">
          <a href="#" title="Go home" className="inline-block">
            <LogoRose />
          </a>
        </div>
        <div className="text-center px-9 lg:px-0">
          <div className="max-w-[436px] mx-auto ">
            <Newsletter />
          </div>

          <div className="pt-8 pb-3">
            <div className="w-6 h-1 bg-white mx-auto"></div>
          </div>

          <div className="max-w-[436px] mx-auto ">
            <SocialNetwork />
          </div>
        </div>

        <div className="bg-[#ffffff1a] pt-[76px] pb-[51px] px-9 lg:px-0">
          <div className="max-w-[1290px] mx-auto px-2">
            <Bandeau />
          </div>
        </div>

        <div className="py-11 px-9 lg:px-0">
          <MenuFooterTop />
        </div>

        <div className="py-6 bg-white flex flex-col space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:grid-row-3 px-9 lg:px-0">
          <div className="col-start-3 row-start-2">
            <MenuFooterBottom />
          </div>
          <div className="col-start-2 col-end-3 row-start-2">
            <Copyright />
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
[];
