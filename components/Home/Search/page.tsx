"use client";

import FormSeach from "@/components/Common/FormSeach/page";
import ScrollButton from "@/components/Common/Button/ScrollButton/page";
import Logo from "@/components/icons/Logo";
import ForThePlanetButton from "@/components/Common/Button/ForThePlanetButton/page";

const Search = () => {
  return (
    <>
      <div className="ml-[91px] pt-6 flex flex-col h-full relative z-10">
        <a href="#" title="homepage" className="inline-block w-fit">
          <Logo />
        </a>
        <div className="relative grow flex flex-col justify-center max-w-[223px] mx-auto">
          <h1 className="text-[50px] max-w-[450px] font-canelaText font-medium leading-[48px]">
            L’assurance voyage{" "}
            <span className="font-hurmeSans1 font-normal">proche de vous</span>
          </h1>
          <div className="text-xs leading-4 max-w-[274px] py-6">
            Moderne. Personnalisée. Au juste prix. Sans limite. Il était temps
            qu’on vienne vous assurer !
          </div>

          <div className="form-search-wrapper">
            <FormSeach />
          </div>

          <div className="absolute z-20  right-4 -top-[4rem]">
              <ForThePlanetButton />
            </div>

          <div className="absolute z-20  w-fit inset-x-0 m-auto bottom-2">
              <ScrollButton />
            </div>
        </div>
      </div>
    </>
  );
};

export default Search;
