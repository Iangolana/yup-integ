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
      <form action='' className='mx-auto xl:mx-0 max-w-[1094px]'>
        <div className='lg:hidden'>
          <div className='text-xl font-canelaText leading-6 text-center font-medium'>
            Votre offre sur-mesure
          </div>
          <div className='text-xs leading-4 text-center py-3'>
            Parlez-nous de vous
          </div>
        </div>
        <div className='flex flex-col xl:flex-row rounded-28 xl:rounded-49 xl:pt-0 border border-primary-orange overflow-hidden'>
          <div className='px-[10px] sm:px-[38px] xl:px-9 max-w-full lg:pl-10 pt-[23px] pb-[24px] xl:py-[15.5px] grow flex flex-col xl:flex-row bg-transparent xl:bg-[#FAFAF5]'>
            <div className='w-full lg:w-auto relative sm:last:after:bg-transparent after:absolute after:bottom-0'>
              <FakeInput label='Votre destination'>
                <div className='flex flex-nowrap xl:flex-wrap items-center'>
                  <div className='flex items-center pr-2'>
                    <div className='text-primary-black pr-[4px] uppercase text-10 leading-3 font-bold tracking-widest'>
                      Départ
                    </div>
                    <Avion />
                  </div>

                  <button className='whitespace-nowrap flex items-center flex-nowrap border border-primary-black rounded-lg px-2 py-1 text-primary-black uppercase text-10 leading-3 font-bold tracking-widest mr-2'>
                    Liban
                  </button>
                  <button className='whitespace-nowrap flex items-center flex-nowrap border border-primary-orange rounded-lg px-2 py-1 text-primary-orange uppercase text-10 leading-3 font-bold tracking-widest'>
                    ajoutez{" "}
                    <span className='hidden lg:block'>
                      &nbsp;une destinaton
                    </span>
                    <span className='inline-block ml-2 w-2 h-2'>
                      <Add />
                    </span>
                  </button>
                </div>
              </FakeInput>
            </div>
            <div className='h-[1px] w-[100%] xl:h-[100%] xl:w-[1px] bg-[#BFA892] lg:mx-[20px] xl:mx-[36px] mt-[19px] mb-[12px] xl:my-0'></div>
            <div className='flex align-center justify-between'>
              <FakeInput label='Date de départ'>
                <div className='flex items-center space-x-2'>
                  <Calendar />
                  <div className='text-primary-black uppercase text-10 leading-3 font-bold tracking-widest'>
                    -- / -- / 2022
                  </div>
                </div>
              </FakeInput>
              <div className='block min-h-[38px ]h-[100%] w-[1px] bg-[#BFA892] mx-[18px] lg:mx-[20px] xl:mx-[36px]'></div>
              <FakeInput label='Qui voyage ?'>
                <div className='flex items-center space-x-2'>
                  <Traveler />
                  <div className='text-primary-black uppercase text-10 leading-3 font-bold tracking-widest'>
                    1 Voyageur
                  </div>
                </div>
              </FakeInput>
            </div>
            <div className='xl:hidden h-[1px] w-[100%] xl:h-[100%] xl:w-[1px] bg-[#BFA892] lg:mx-[20px] xl:mx-[36px] mt-[12px] mb-[19px] xl:my-0'></div>
            <div className='h-[100%] w-[1px] bg-[#BFA892] lg:mx-[20px]  xl:mx-[36px]'></div>
            <FakeInput label='Vos formules'>
              <div className='flex items-center space-x-2'>
                <Settings />
                <div className='text-primary-black uppercase text-10 leading-3 font-bold tracking-widest'>
                  2 formules
                </div>
              </div>
            </FakeInput>
          </div>
          <button
            type='submit'
            className='flex justify-center rounded-28 xl:rounded-none py-5 space-x-3 items-center bg-primary-orange text-white px-6 hover:opacity-100 hover:bg-primary-orangeHover'
          >
            <span className='uppercase font-hurmeSans1 text-[9px] leading-3 tracking-widest'>
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
