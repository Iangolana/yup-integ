import Search from "@/components/Home/Search/page";
import Avis from "@/components/Home/Avis/page";
import Faq from "@/components/Home/Faq/page";

export default function Home() {
  return (
    <>
      <div id="search" className="h-screen p-4 absolute top-0 w-full">
        <Search />
      </div>
      <div id="slider" className="h-screen p-4 w-full">
        <Avis />
      </div>
      <div id="faq" className="h-screen p-4 w-full">
        <Faq />
      </div>
    </>
  );
}
