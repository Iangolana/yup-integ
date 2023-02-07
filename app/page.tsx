"use client";
import Search from "@/components/Home/Search/page";
import Avis from "@/components/Home/Avis/page";
import Faq from "@/components/Home/Faq/page";
import GoodHands from "@/components/GoodHands/page";

export default function Home() {
  return (
    <>
      <div
        id='search'
        className='lg:h-screen pt-0 lg:p-4 lg:absolute top-0 w-full'
      >
        <Search />
      </div>
      <GoodHands />
      <div id='slider' className='h-screen p-4 w-full'>
        <Avis />
      </div>
      <div id='faq' className='h-screen py-4 w-full'>
        <Faq />
      </div>
    </>
  );
}
