"use client";

import FormSeach from "@/components/Common/FormSeach/page";
import Logo from "@/components/icons/Logo";

const Search = () => {
  return (
    <>
      <div className="ml-[91px] pt-6 flex flex-col h-full relative z-10">
        <a href="#" title="homepage" className="inline-block">
          <Logo />
        </a>
        <div className="grow flex flex-col justify-center pl-[122px]">
          <h1 className="text-[50px] max-w-[450px] font-canelaText font-medium leading-[48px]">
            L’assurance voyage{" "}
            <span className="font-hurmeSans1 font-normal">proche de vous</span>
          </h1>
          <div className="text-xs leading-4 max-w-[274px] py-6">
            Moderne. Personnalisée. Au juste prix. Sans limite. Il était temps
            qu’on vienne vous assurer !
          </div>

          <div className="form-search-wrapper">
            <FormSeach />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
