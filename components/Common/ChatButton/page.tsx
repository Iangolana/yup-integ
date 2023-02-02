"use client";

import Chat from "@/components/icons/Chat";

const ChatButton = () => {
  return (
    <div className="rounded-30 bg-primary-yellow flex flex-col justify-center items-center text-black px-2 py-2 w-[81px] h-[90px]">
      <button type="button" className="logo-menu flex flex-col items-center justify-center space-y-3 font-bold">
        <Chat />
        <span className="uppercase font-hurmeSans1 text-[9px] leading-3 tracking-widest">Urgences</span>
      </button>
    </div>
  );
};

export default ChatButton;
