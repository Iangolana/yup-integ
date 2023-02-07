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
        <div className="max-w-[1290px] space-x-10 space-y-2 mx-auto rounded-30 py-5 px-10 bg-[#ffffff1a] flex flex-wrap items-center justify-between">
          <div className="text-xl font-canelaText font-medium">
            Votre assurance fait du bien à la planète
          </div>
          <div className="uppercase max-w-[236px] leading-4 text-xs">
            lorem ipsum dolor sit amet consectur adip
          </div>

          <button
            type="button"
            className="py-1 px-11 bg-white rounded-[100px] flex justify-center"
          >
            <ForThePlanet />
          </button>
          <button
            type="button"
            className="btn text-primary-black bg-primary-yellow rounded-[100px] flex justify-center"
          >
            nos engagements
          </button>
        </div>
        <div className="text-center py-11">
          <a href="#" title="Go home" className="inline-block">
            <LogoRose />
          </a>
        </div>
        <div className="text-center">
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

        <div className="bg-[#ffffff1a] pt-[76px] pb-[51px]">
          <div className="max-w-[1290px] mx-auto">
            <Bandeau />
          </div>
        </div>

        <div className="py-11">
            <MenuFooterTop />
        </div>

        <div className="py-6 bg-white grid grid-cols-3">
            <div className="col-start-2 col-end-3">
                <Copyright />
            </div>
            <div className="col-start-3">
            <MenuFooterBottom />
            </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
[];
