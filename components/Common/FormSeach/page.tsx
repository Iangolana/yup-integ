import Add from "@/components/icons/Add";
import Avion from "@/components/icons/Avion";
import Calendar from "@/components/icons/Calendar";
import Loupe from "@/components/icons/Loupe";
import Settings from "@/components/icons/Settings";
import Traveler from "@/components/icons/Traveler";
import FakeInput from "./FakeInput/page";

const FormSeach = () => {
  return (
    <>
      <form action="" className="max-w-[950px] mx-auto xl:mx-0 px-9 lg:px-0">
        <div className="lg:hidden">
          <div className="text-xl font-canelaText leading-6 text-center font-medium">Votre offre sur-mesure</div>
          <div className="text-xs leading-4 text-center py-3">Parlez-nous de vous</div>
        </div>
        <div className="flex flex-col lg:flex-row rounded-28 lg:rounded-49 pt-6 lg:pt-0 border border-primary-orange overflow-hidden">
          <div className="pb-3 md:pb-0 px-9 max-w-full lg:pl-10 lg:py-[15.5px] grow flex flex-wrap bg-transparent lg:bg-[#FAFAF5]">
            <div className="w-full lg:w-auto">
              <FakeInput label="Votre destination">
                <div className="flex flex-wrap items-center space-x-2 space-y-2">
                  <div className="text-primary-black uppercase text-10 leading-3 font-bold tracking-widest">
                    Départ
                  </div>
                  <Avion />
                  <button className="whitespace-nowrap flex items-center flex-nowrap border border-primary-black rounded-lg px-2 py-1 text-primary-black uppercase text-10 leading-3 font-bold tracking-widest">
                    Liban
                  </button>
                  <button className="whitespace-nowrap flex items-center flex-nowrap border border-primary-orange rounded-lg px-2 py-1 text-primary-orange uppercase text-10 leading-3 font-bold tracking-widest">
                    ajoutez <span className="hidden lg:block">&nbsp;une destinaton</span>
                    <span className="inline-block ml-2 w-2 h-2">
                      <Add />
                    </span>
                  </button>
                </div>
              </FakeInput>
            </div>
            <FakeInput label="Date de départ">
              <div className="flex items-center space-x-2">
                <Calendar />
                <div className="text-primary-black uppercase text-10 leading-3 font-bold tracking-widest">
                  -- / -- / 2022
                </div>
              </div>
            </FakeInput>
            <FakeInput label="Qui voyage ?">
              <div className="flex items-center space-x-2">
                <Traveler />
                <div className="text-primary-black uppercase text-10 leading-3 font-bold tracking-widest">
                  1 Voyageur
                </div>
              </div>
            </FakeInput>
            <FakeInput label="Vos formules">
              <div className="flex items-center space-x-2">
                <Settings />
                <div className="text-primary-black uppercase text-10 leading-3 font-bold tracking-widest">
                  2 formules
                </div>
              </div>
            </FakeInput>
          </div>
          <button
            type="submit"
            className="flex justify-center rounded-28 lg:rounded-none py-5 space-x-3 items-center bg-primary-orange text-white px-6 hover:opacity-100 hover:bg-primary-orangeHover"
          >
            <span className="uppercase font-hurmeSans1 text-[9px] leading-3 tracking-widest">
              Rechercher
            </span>
            <Loupe />
          </button>
        </div>
      </form>
    </>
  );
};

export default FormSeach;
