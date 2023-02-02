"use client";

import Image from "next/legacy/image";
import ChatButton from "../Common/ChatButton/page";
import ForThePlanetButton from "../Common/ForThePlanetButton/page";
import MenuHeader from "../Common/MenuHeader/page";
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
          {/* <Image src="/images/mask1.svg" width="1920" height="1280" objectFit="cover" /> */}
          <div className="absolute w-full h-full z-9 top-0 left-0 mask-wrapper after:content-[' '] after:inline-block after:w-full after:h-full after:absolute after:bg-masque1 after:bg-position-mask1 after:bg-no-repeat after:bg-cover"></div>
        </div>
        <div className="fixed z-10 p-4 top-0 w-full h-full">
          <div className="w-full h-full relative">
            <MenuHeader />
            <div className="absolute right-0 top-0">
              <ForThePlanetButton />
            </div>
            <div className="absolute right-0 bottom-0">
              <ChatButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
