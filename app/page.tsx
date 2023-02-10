import Search from "@/components/Home/Search/page";
import Avis from "@/components/Home/Avis/page";
import Faq from "@/components/Home/Faq/page";

export default function Home() {
  return (
    <>
      <div
        id="search"
        className="absolute top-0 w-full h-screen p-4 overflow-hidden section-item"
      >
        <Search />
      </div>
      <div id="slider" className="w-full h-screen p-4 section-item">
        <Avis />
      </div>
      <div id="faq" className="w-full min-h-screen py-4 section-item">
        <Faq />
      </div>
    </>
  );
}
