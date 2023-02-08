"use client";

import FormSeach from "@/components/Common/FormSeach/page";
import ScrollButton from "@/components/Common/Button/ScrollButton/page";
import Logo from "@/components/icons/Logo";
import ForThePlanetButton from "@/components/Common/Button/ForThePlanetButton/page";

import Image from "next/legacy/image";
import HeaderHomeTitle from "@/components/Common/HeaderHomeTitle/Page";
import HeaderHomeText from "@/components/Common/HeaderHomeText/Page";
import FormSearchMobile from "@/components/Common/FormSearchMobile/page";

const Search = () => {
  return (
    <>
      <div className='absolute image-wrapper h-screen w-screen'>
        <Image
          src='/images/park.jpg'
          width='1920'
          height='1280'
          objectFit='cover'
        />
        <div className="hidden lg:block absolute w-full h-full z-9 top-0 left-0 mask-wrapper after:content-[' '] after:inline-block after:w-full after:h-full after:absolute after:bg-masque1 after:bg-position-mask1 after:bg-no-repeat after:bg-cover"></div>
      </div>

      <div className='lg:ml-[91px] lg:pt-6 flex flex-col h-full relative z-10'>
        <a href='#' title='homepage' className='hidden lg:inline-block w-fit'>
          <Logo />
        </a>
        <div className='mt-[100px] lg:mt-0 relative grow flex flex-col justify-center w-full lg:max-w-[calc(100%-223px)] mx-auto'>
          <HeaderHomeTitle />
          <div className='hidden lg:block'>
            <HeaderHomeText />
          </div>

          <div className='hidden lg:block form-search-wrapper'>
            <FormSeach />
          </div>
          <div className='block lg:hidden'>
            <FormSearchMobile />

            <div className='grid grid-cols-[20%_80%] grid-rows-[0px_1fr] lg:hidden mb-[39px]'>
              <div
                className='col-start-1 col-end-3 row-start-2 row-end-3 z-20'
                style={{
                  width: "100vw",
                  height: "337px",
                  position: "relative",
                }}
              >
                <Image
                  src='/images/mask1vertmobile.svg'
                  layout='fill'
                  objectFit='contain'
                />
              </div>
              <div
                className='col-start-1 col-end-3 row-start-1 row-end-3'
                style={{ width: "100%", height: "100%", position: "relative" }}
              >
                <Image
                  alt='image'
                  src='/images/forest.jpg'
                  layout='fill'
                  objectFit='cover'
                />
                <div className="absolute w-full h-full z-10000 top-0 right-0 mask-wrapper after:content-[' '] after:inline-block after:w-full after:h-full after:absolute after:bg-mask1mobile after:bg-position-mask1 after:bg-no-repeat after:bg-cover"></div>
              </div>
            </div>

            <div className='flex text-center justify-center lg:hidden uppercase'>
              <HeaderHomeText />
            </div>
          </div>

          <div className='hidden lg:block absolute z-20  right-4 -top-[4rem]'>
            <ForThePlanetButton />
          </div>

          <div className='absolute z-20  w-fit inset-x-0 m-auto bottom-2'>
            <ScrollButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
