"use client";

import LogoHeader from "@/components/icons/LogoHeader";
import AccountButton from "../Button/AccountButton/page";
import EmergencyButton from "../Button/EmergencyButton/page";
import MenuButton from "../Button/MenuButton/page";
import SubscribeButton from "../Button/SubscribeButton/page";

const MenuHeader = () => {
  return (
    <>
      <div className='flex lg:fixed top-0 left-0 p-4  z-20  flex-col space-y-4'>
        <div className='rounded-30 z-10 bg-primary-orange flex lg:flex-col justify-between items-center text-white px-[26px]  py-[12px] lg:px-2 lg:py-6 lg:w-[81px] h-[55px] lg:h-[287px]'>
          <LogoHeader />
          <MenuButton />
          <AccountButton />
        </div>
        <div className='rounded-30 bg-primary-yellow hidden lg:flex flex-col justify-center items-center text-primary-black px-2 py-2 w-[81px] h-[90px]'>
          <EmergencyButton />
        </div>
        <div className='rounded-30 bg-primary-green hidden lg:flex flex-col justify-center items-center text-white px-2 py-2 w-[81px] h-[163px]'>
          <SubscribeButton />
        </div>
      </div>
    </>
  );
};

export default MenuHeader;
