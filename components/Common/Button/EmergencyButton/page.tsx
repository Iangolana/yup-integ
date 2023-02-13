"use client";

import Emergency from "@/components/icons/Emergency";

const EmergencyButton = () => {
  return (
    <button
      type="button"
      className="logo-menu flex flex-col items-center justify-center space-y-3 font-bold relative after:inline-block after:absolute after:-top-[10px] lg:after:hidden after:w-[60px] after:h-[60px] after:rounded-full after:bg-primary-yellow after:z-0"
    >
      <div className="relative z-10 flex flex-col items-center justify-center space-y-3 ">
        <Emergency />
        <span className="uppercase font-hurmeSans1 text-[9px] leading-3 tracking-widest">
          Urgences
        </span>
      </div>
    </button>
  );
};

export default EmergencyButton;
