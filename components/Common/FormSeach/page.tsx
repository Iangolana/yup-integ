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
      <form action="" className="max-w-[950px]">
        <div className="flex rounded-49 border border-primary-orange overflow-hidden">
          <div className="pl-10 py-[15.5px] grow flex bg-[#FAFAF5]">
            <FakeInput label="Votre destination">
              <div className="flex items-center space-x-2">
                <div className="text-primary-black uppercase text-10 leading-3 font-bold tracking-widest">
                  Départ
                </div>
                <Avion />
                <button className="whitespace-nowrap flex items-center flex-nowrap border border-primary-orange rounded-lg px-2 py-1 text-primary-orange uppercase text-10 leading-3 font-bold tracking-widest">
                  ajoutez une destinaton
                  <span className="inline-block ml-2 w-2 h-2">
                    <Add />
                  </span>
                </button>
              </div>
            </FakeInput>
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
            className="flex space-x-3 items-center bg-primary-orange text-white px-6 hover:opacity-100 hover:bg-primary-orangeHover"
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
