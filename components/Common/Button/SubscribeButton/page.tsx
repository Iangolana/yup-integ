"use client";

import Subscribe from "@/components/icons/Subscribe";

const SubscribeButton = () => {
  return (
    <button
      type='button'
      className='logo-menu flex flex-col items-center justify-center space-y-3 font-bold'
    >
      <Subscribe />
      <span className='uppercase font-hurmeSans1 text-[9px] leading-3 tracking-widest'>
        Souscrire
      </span>
    </button>
  );
};

export default SubscribeButton;
