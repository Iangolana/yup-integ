"use client";

import { Select, Option } from "@material-tailwind/react";

const FormSearchMobile = () => {
  return (
    <form action=''>
      <div className='search-mobile'>
        <Select className='bg-[#ffffff]'>
          <Option disabled defaultValue='Où partez-vous ?'>
            Où partez-vous ?
          </Option>
          <Option>Lorem ipsum</Option>
          <Option>Lorem ipsum</Option>
        </Select>
      </div>
      <div className='w-[253px] min-w-[253px] my-[0px] mx-[auto]'>
        <button className=' h-[54px] bg-primary-orange rounded-[100px] text-[#ffffff] text-[10px] uppercase w-[100%]'>
          faire une simulation
        </button>
      </div>
    </form>
  );
};

export default FormSearchMobile;
