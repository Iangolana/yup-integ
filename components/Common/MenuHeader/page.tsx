"use client";

import LogoHeader from "@/components/icons/LogoHeader";
import LogoHeaderMobile from "@/components/icons/LogoHeaderMobile";
import AccountButton from "../Button/AccountButton/page";
import EmergencyButton from "../Button/EmergencyButton/page";
import MenuButton from "../Button/MenuButton/page";
import SubscribeButton from "../Button/SubscribeButton/page";

const MenuHeader = () => {
  return (
    <>
      <div className='flex fixed w-screen xl:w-auto top-[52px] xl:top-0 left-0 px-[32px] xl:p-4  z-20 flex-col space-y-4'>
        <div className='rounded-[10px] xl:rounded-30 z-10 bg-primary-orange flex xl:flex-col justify-between items-center text-white px-[26px]  py-[12px] xl:px-2 xl:py-6 xl:w-[81px] h-[55px] xl:h-[287px]'>
          <span className='hidden xl:block'>
            <LogoHeader />
          </span>
          <span className='xl:hidden order-[1] min-w-[70%] xl:min-w-fit'>
            <LogoHeaderMobile />
          </span>
          <span className='order-3 xl:order-[2]'>
            <MenuButton />
          </span>
          <span className='order-2 xl:order-[3]'>
            <AccountButton />
          </span>
        </div>
        <div className='rounded-30 bg-primary-yellow hidden xl:flex flex-col justify-center items-center text-primary-black px-2 py-2 w-[81px] h-[90px]'>
          <EmergencyButton />
        </div>
        <div className='rounded-30 bg-primary-green hidden xl:flex flex-col justify-center items-center text-white px-2 py-2 w-[81px] h-[163px]'>
          <SubscribeButton />
        </div>
      </div>
    </>
  );
};

export default MenuHeader;
