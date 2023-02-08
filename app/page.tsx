"use client";
import Search from "@/components/Home/Search/page";
import Avis from "@/components/Home/Avis/page";
import Faq from "@/components/Home/Faq/page";
import GoodHands from "@/components/GoodHands/page";
import FixedFooterMobile from "@/components/Common/FixedFooterMobile/pages";

export default function Home() {
  return (
    <>
      <div
        id='search'
        className='mb-[112px] lg:mb-0 lg:h-screen pt-0 lg:p-4 lg:absolute top-0 w-full'
      >
        <Search />
      </div>

      <GoodHands />
      <div id='slider' className='h-screen p-4 w-full'>
        <Avis />
      </div>
      <div id="faq" className="min-h-screen py-4 w-full">
        <Faq />
      </div>
    </>
  );
}
