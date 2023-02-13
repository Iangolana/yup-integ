"use client";

import SubscribeBlack from "@/components/icons/SubscribeBlack";

const SubscribeButtonFooterMobile = () => {
  return (
    <button
      type='button'
      className='flex flex-col items-center justify-center space-y-3 font-bold relative after:hidden after:absolute after:-top-[14px] lg:after:hidden after:w-[60px] after:h-[60px] after:rounded-full after:bg-primary-yellow after:z-0'
    >
      <div className="relative z-10 flex flex-col items-center justify-center space-y-[10px] ">
      <SubscribeBlack />
      <span className='uppercase font-hurmeSans1 text-[9px] leading-3 tracking-widest'>
        Souscrire
      </span>
      </div>
    </button>
  );
};

export default SubscribeButtonFooterMobile;
