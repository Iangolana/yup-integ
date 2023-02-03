import GoodHands from "@/components/GoodHands/page";
import Search from "@/components/Home/Search/page";

export default function Home() {
  return (
    <>
      <div className='fullpage'>
        <div id='search' className='h-screen p-4 absolute top-0 w-full'>
          <Search />
        </div>
        <GoodHands />
      </div>
    </>
  );
}
