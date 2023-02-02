"use client";

import Image from "next/legacy/image";
import ChatButton from "../Common/ChatButton/page";
import ForThePlanetButton from "../Common/ForThePlanetButton/page";
import MenuHeader from "../Common/MenuHeader/page";
import ScrollButton from "../Common/ScrollButton/page";
import Mask1 from "../images/Mask1";

const Header = () => {
  return (
    <>
      <div className="header w-full h-screen overflow-hidden">
        <div className="relative image-wrapper h-screen w-screen">
          <Image
            src="/images/park.jpg"
            width="1920"
            height="1280"
            objectFit="cover"
          />
          <div className="absolute w-full h-full z-9 top-0 left-0 mask-wrapper after:content-[' '] after:inline-block after:w-full after:h-full after:absolute after:bg-masque1 after:bg-position-mask1 after:bg-no-repeat after:bg-cover"></div>
        </div>
        <div className="p-4 top-0 w-full h-full">
          <div className="fixed z-20 w-full h-full">
            <MenuHeader />
            <div className="fixed z-20  right-4 top-0">
              <ForThePlanetButton />
            </div>
            <div className="fixed z-20  right-4 bottom-4">
              <ChatButton />
            </div>
            <div className="fixed z-20  w-fit inset-x-0 m-auto bottom-10">
              <ScrollButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
