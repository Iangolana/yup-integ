"use client";

import ChatButton from "../Button/ChatButton/page";
import EmergencyButton from "../Button/EmergencyButton/page";
import SubscribeButtonFooterMobile from "../Button/SubscribeButtonFooterMobile/page";

const FixedFooterMobile = () => {
  return (
    <div className='fixed z-[10000] bg-[#ffffff] bottom-0 left-0 w-full flex justify-around h-[73px] pt-[15px] rounded-t-[100%]'>
      <EmergencyButton />
      <SubscribeButtonFooterMobile />
      <ChatButton />
    </div>
  );
};
export default FixedFooterMobile;
