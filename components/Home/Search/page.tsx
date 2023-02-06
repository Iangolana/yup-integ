"use client";

import FormSeach from "@/components/Common/FormSeach/page";
import ScrollButton from "@/components/Common/Button/ScrollButton/page";
import Logo from "@/components/icons/Logo";
import ForThePlanetButton from "@/components/Common/Button/ForThePlanetButton/page";

import Image from "next/legacy/image";

const Search = () => {
  return (
    <>
      <div className="absolute image-wrapper h-screen w-screen">
        <Image
          src="/images/park.jpg"
          width="1920"
          height="1280"
          objectFit="cover"
        />
        <div className="absolute w-full h-full z-9 top-0 left-0 mask-wrapper after:content-[' '] after:inline-block after:w-full after:h-full after:absolute after:bg-masque1 after:bg-position-mask1 after:bg-no-repeat after:bg-cover"></div>
      </div>

      <div className="ml-[91px] pt-6 flex flex-col h-full relative z-10">
        <a href="#" title="homepage" className="inline-block w-fit">
          <Logo />
        </a>
        <div className="relative grow flex flex-col justify-center w-full max-w-[calc(100%-223px)] mx-auto">
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
