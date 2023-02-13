"use client";

import Chat from "@/components/icons/Chat";

const ChatButton = () => {
  return (
    <div className="rounded-30 lg:bg-primary-yellow flex flex-col justify-center items-center text-primary-black px-2 lg:py-2 w-[81px] lg:h-[90px] relative after:hidden after:absolute after:-top-[13px] lg:after:hidden after:w-[60px] after:h-[60px] after:rounded-full after:bg-primary-yellow after:z-0">
      <button type="button" className="relative z-10 logo-menu flex flex-col items-center justify-center space-y-2 font-bold">
        <Chat />
        <span className="uppercase font-hurmeSans1 text-[9px] leading-3 tracking-widest">Chat</span>
      </button>
    </div>
  );
};

export default ChatButton;
