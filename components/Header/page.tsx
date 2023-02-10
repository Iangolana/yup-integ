"use client";

import ChatButton from "../Common/Button/ChatButton/page";
import ForThePlanetButton from "../Common/Button/ForThePlanetButton/page";
import MenuHeader from "../Common/MenuHeader/page";

const Header = () => {
  return (
    <>
      <div className="fixed z-10 w-full overflow-hidden header">
        <div className="top-0 w-full h-full p-4">
          <div className="top-0 left-0 z-20 w-full h-full">
            <MenuHeader />
            <div className="fixed z-20 right-4 bottom-4">
              <ChatButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
