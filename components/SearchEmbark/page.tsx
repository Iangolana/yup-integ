"use client";

import Image from "next/legacy/image";

const SearchEmbark = () => {
  return (
    <>
      <div className='pt-[65px] pb-[125px] xl:pt-[130px] xl:pb-[256px]'>
        <div className='flex xl:w-[80%] ml-[30px] mr-[30px] xl:mx-0 bg-[#F9D7D2] p-[30px] xl:pt-[60px] xl:pb-[75px] xl:px-[60px] rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] xl:rounded-tr-[0px] rounded-br-[30px] xl:rounded-br-[0px] xl:ml-[auto] xl:mr-0 relative'>
          <div className='hidden xl:block w-[35%]'>
            <div className='absolute left-[-200px] top-[45px]'>
              <Image
                alt='image'
                src='/images/searchembark.svg'
                width='535'
                height='422'
              />
            </div>
          </div>

          <div className='w-[100%] xl:w-[65%] xl:pr-[25%]'>
            <p className='font-canelaText text-[18px] xl:text-[20px] color-[#363636] xl:mb-[30px]'>
              L’équipe des Yupers travaille d’arrache pieds afin de trouver les
              informations pour tous les pays du monde. Oui oui, TOUS les
              pays... Revenez de temps en temps, de nouvelles fichesarriverons
              régulièrement.
            </p>
            <div className='xl:hidden h-[275px]'>
              <div className='absolute right-[-30px] '>
                <Image
                  alt='image'
                  src='/images/searchembarkMobile.svg'
                  width='405'
                  height='294'
                />
              </div>
            </div>

            <form action=''>
              <p className='text-[12px] mb-[12px]'>
                En attendant, souhaitez-vous relancer une recherche?
              </p>
              <div className='flex items-center'>
                <input
                  type='text'
                  className='h-[55px] rounded-tl-[100px] rounded-bl-[100px] bg-white px-[30px] py-[20px] placeholder:text-[10px] placeholder:font-[700] placeholder:text-[#363636] placeholder:uppercase w-[100%] xl:w-[320px] focus-visible:outline-none'
                  placeholder='Votre destination'
                />
                <button className='btn bg-primary-orange h-[55px] min-w-[55px] rounded-tl-[0px] rounded-bl-[0px] rounded-tr-[100px] rounded-br-[100px] p-[12px] flex items-center justify-center'>
                  <Image
                    alt='image'
                    src='/images/searchiconembark.svg'
                    width='26'
                    height='27'
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchEmbark;
