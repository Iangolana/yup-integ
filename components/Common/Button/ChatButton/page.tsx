"use client";

import Chat from "@/components/icons/Chat";

const ChatButton = () => {
  return (
    <div className='lg:rounded-30 lg:bg-primary-yellow flex flex-col justify-center items-center text-primary-black lg:px-2 lg:py-2 lg:w-[81px] lg:h-[90px]'>
      <button
        type='button'
        className='logo-menu flex flex-col items-center justify-center space-y-3 font-bold'
      >
        <Chat />
        <span className='uppercase font-hurmeSans1 text-[9px] leading-3 tracking-widest'>
          Chat
        </span>
      </button>
    </div>
  );
};

export default ChatButton;
