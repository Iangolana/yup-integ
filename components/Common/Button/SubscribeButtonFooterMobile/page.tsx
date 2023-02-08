"use client";

import SubscribeBlack from "@/components/icons/SubscribeBlack";

const SubscribeButtonFooterMobile = () => {
  return (
    <button
      type='button'
      className='logo-menu flex flex-col items-center justify-center space-y-3 font-bold'
    >
      <SubscribeBlack />
      <span className='uppercase font-hurmeSans1 text-[9px] leading-3 tracking-widest'>
        Souscrire
      </span>
    </button>
  );
};

export default SubscribeButtonFooterMobile;
