"use client";

import Image from "next/legacy/image";
import React from "react";
import ArrowDown from "../icons/ArrowDown";

const SearchActu = () => {
  const [showFilters, setShowFilters] = React.useState(false);
  const onClickFilterButton = () => setShowFilters((current) => !current);
  return (
    <>
      <div className='ml-[30px] mr-[30px] xl:mx-0'>
        <form
          className='py-[24px] px-[38px] xl:px-[55px] bg-white rounded-[35px] w-[100%] xl:w-[720px] xl:mx-[auto] h-[55px] xl:h-[auto]'
          style={{
            height: showFilters ? "auto" : "55px",
            overflow: showFilters ? "visible" : "hidden",
          }}
        >
          <div className='flex justify-between mb-[14px]'>
            <h2 className='text-[10px] text-primary-orange font-[700] uppercase mb-0 '>
              recherche par filtres
            </h2>
            <div className='flex items-center'>
              <span className='text-[10px] text-primary-orange font-[700] uppercase mb-0 underline cursor-pointer'>
                effacer
              </span>
              <span
                className='block xl:hidden ml-[25px] cursor-pointer'
                onClick={onClickFilterButton}
              >
                <ArrowDown />
              </span>
            </div>
          </div>
          <h3 className='text-[10px] text-primary-black font-[700] uppercase mb-[14px] '>
            PAR TYPES D’ACTUALITé :
          </h3>
          <div className='flex flex-wrap mb-[18px]'>
            <label
              htmlFor='check-type-1'
              className='flex items-center custom-checkbox bg-primary-vertClaire rounded-[7px] py-[6px] px-[9px] leading-[1.2] mr-[20px] mb-[10px]'
            >
              <input
                type='checkbox'
                className='hidden'
                id='check-type-1'
                name='activity-type'
              />
              <span className='checkmark'></span>
              <span className='text-[10px] uppercase text-[#1E391F] pl-[8px]'>
                GUIDE ASSURANCE VOYAGE
              </span>
            </label>

            <label
              htmlFor='check-type-2'
              className='flex items-center custom-checkbox bg-primary-vertClaire rounded-[7px] py-[6px] px-[9px] leading-[1.2] mr-[20px] mb-[10px]'
            >
              <input
                type='checkbox'
                className='hidden'
                id='check-type-2'
                name='activity-type'
              />
              <span className='checkmark'></span>
              <span className='text-[10px] uppercase text-[#1E391F] pl-[8px]'>
                DESTINATION
              </span>
            </label>

            <label
              htmlFor='check-type-3'
              className='flex items-center custom-checkbox bg-primary-vertClaire rounded-[7px] py-[6px] px-[9px] leading-[1.2] mr-[20px] mb-[10px]'
            >
              <input
                type='checkbox'
                className='hidden'
                id='check-type-3'
                name='activity-type'
              />
              <span className='checkmark'></span>
              <span className='text-[10px] uppercase text-[#1E391F] pl-[8px]'>
                COVID-19
              </span>
            </label>

            <label
              htmlFor='check-type-4'
              className='flex items-center custom-checkbox bg-primary-vertClaire rounded-[7px] py-[6px] px-[9px] leading-[1.2] mr-[20px] mb-[10px]'
            >
              <input
                type='checkbox'
                className='hidden'
                id='check-type-4'
                name='activity-type'
              />
              <span className='checkmark'></span>
              <span className='text-[10px] uppercase text-[#1E391F] pl-[8px]'>
                Pratique en voyage
              </span>
            </label>
          </div>
          <div className='md:grid grid-cols-3'>
            <div>
              <h3 className='text-[10px] text-primary-black font-[700] uppercase mb-[14px] '>
                PAR ZONE Géographique :{" "}
              </h3>
            </div>
            <div>
              <h3 className='text-[10px] text-primary-black font-[700] uppercase mb-[14px] '>
                par pays :
              </h3>
            </div>
            <div>
              <h3 className='text-[10px] text-primary-black font-[700] uppercase mb-[14px] '>
                PAR DATE :{" "}
              </h3>
            </div>
          </div>
        </form>

        <div className='flex items-center mt-[30px] mb-[50px] xl:mb-[70px] w-[100%] xl:w-[720px] xl:mx-[auto]'>
          <input
            type='text'
            className='h-[37px] xl:h-[55px] rounded-tl-[100px] rounded-bl-[100px] bg-white px-[30px] py-[20px] placeholder:text-[10px] placeholder:font-[700] placeholder:text-[#363636] placeholder:uppercase w-[100%] focus-visible:outline-none'
            placeholder='RECHERCHE PAR MOTS-clés '
          />
          <button className='btn bg-primary-orange h-[37px] xl:h-[55px] w-[37px] xl:w-[55px] rounded-tl-[0px] rounded-bl-[0px] rounded-tr-[100px] rounded-br-[100px] pl-[10px] pr-[12px] py-[12px] flex items-center justify-center'>
            <Image
              alt='image'
              src='/images/searchiconembark.svg'
              width='26'
              height='27'
            />
          </button>
        </div>
      </div>
    </>
  );
};
export default SearchActu;
