'use client'
import Search from "@/components/Home/Search/page";
import Avis from "@/components/Home/Avis/page";
import Faq from "@/components/Home/Faq/page";

export default function Home() {
  return (
    <>
      <div
        id='search'
        className='mb-[75px] lg:mb-0 lg:h-screen pt-0 lg:p-4 lg:absolute top-0 w-full'
      >
        <Search />
      </div>
      <div id="slider" className="lg:h-screen lg:py-4 w-full">
        <Avis />
      </div>
      <div id="faq" className="relative lg:min-h-screen py-0 lg:py-4 w-full">
        <Faq />
      </div>
    </>
  );
}
