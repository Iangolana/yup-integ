"use client";

import LogoHeader from "@/components/icons/LogoHeader";
import AccountButton from "../AccountButton/page";
import EmergencyButton from "../EmergencyButton/page";
import MenuButton from "../MenuButton/page";
import SubscribeButton from "../SubscribeButton/page";

const MenuHeader = () => {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <div className="rounded-30 z-10 bg-primary-orange flex flex-col justify-between items-center text-white px-2 py-6 w-[81px] h-[287px]">
          <LogoHeader />
          <MenuButton />
          <AccountButton />
        </div>
        <div className="rounded-30 bg-primary-yellow flex flex-col justify-center items-center text-black px-2 py-2 w-[81px] h-[90px]">
          <EmergencyButton />
        </div>
        <div className="rounded-30 bg-primary-green flex flex-col justify-center items-center text-white px-2 py-2 w-[81px] h-[163px]">
          <SubscribeButton />
        </div>
      </div>
    </>
  );
};

export default MenuHeader;
