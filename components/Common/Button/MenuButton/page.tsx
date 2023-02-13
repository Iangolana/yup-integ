"use client";

import HamburgerMenu from "@/components/icons/HamburgerMenu";

const MenuButton = () => {
  return (
      <button type="button" className="logo-menu flex flex-col items-center justify-center space-y-3 font-bold">
        <HamburgerMenu />
        <span className="hidden lg:block uppercase font-hurmeSans1 text-[9px] leading-3 tracking-widest">Menu</span>
      </button>
  );
};

export default MenuButton;
