"use client";

import ChatButton from "../Common/Button/ChatButton/page";
import ForThePlanetButton from "../Common/Button/ForThePlanetButton/page";
import MenuHeader from "../Common/MenuHeader/page";

const Header = () => {
  return (
    <>
      <div className="header w-full lg:h-screen overflow-hidden">
        <div className="p-4 top-0 w-full h-full">
          <div className="z-20 w-full h-full left-0 top-0">
            <MenuHeader />
            <div className="hidden lg:block fixed z-20 right-4 bottom-4">
              <ChatButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
