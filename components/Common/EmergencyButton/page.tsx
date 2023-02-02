"use client";

import Emergency from "@/components/icons/Emergency";

const EmergencyButton = () => {
  return (
      <button type="button" className="logo-menu flex flex-col items-center justify-center space-y-3 font-bold">
        <Emergency />
        <span className="uppercase font-hurmeSans1 text-[9px] leading-3 tracking-widest">Urgences</span>
      </button>
  );
};

export default EmergencyButton;
