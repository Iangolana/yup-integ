import LogoNoir from "@/components/icons/LogoNoir";
import MasqueFaq from "@/components/images/MasqueFaq";

const Faq = () => {
  return (
    <>
      <div className="relative px-9 lg:px-0 pt-[90px] lg:pt-[250px] pb-[125px] lg:pb-[200px] overflow-hidden lg:relative grid grid-cols-[20%_15%_15%_38%_12%] grid-rows-[5px_auto_5px_30px_5px_auto_5px">
        
        <div className="row-start-1 row-end-6 col-start-1 col-end-6 w-full h-full after:absolute after:inline-block after:top-0 after:left-0 after:content-[' '] after:h-full after:w-full after:bg-masqueFaq0 lg:after:bg-masqueFaq after:bg-no-repeat after:bg-contain lg:after:bg-cover">
          {/* <MasqueFaq / >*/}
        </div>

        <div className="bg-[#E2F6D2] row-start-1 row-end-2 col-start-1 col-end-6 lg:col-end-5 rounded-30 lg:rounded-tl-none lg:rounded-bl-none"></div>
        <div className="rounded-30 p-6 lg:px-0 lg:py-[48px] flex flex-col  justify-center lg:justify-start  relative z-10 col-start-1 lg:col-start-3 col-end-6 lg:col-end-5 row-start-1">
          <h2 className="titre-section text-xl lg:text-3xl text-center lg:text-left">
            Vous avez des <span>questions ?</span>
          </h2>

          <div className="text-sm lg:text-base leading-4">
            <div className="my-6 text-center lg:text-left">
              <div className="uppercase block ">lorem ipsum dolor sit amet</div>
              <div className="text-primary-orange font-canelaText font-medium block">
                (consectur adicpising)
              </div>
            </div>
            <div className=" text-center lg:text-left">
              <button className="btn bg-primary-orange">
                Consultez notre FAQ
              </button>
            </div>
          </div>
        </div>
        <div className="row-start-4 row-end-5 p-2">&nbsp;</div>
        <div className="bg-primary-pink row-start-5 col-start-1 lg:col-start-2 col-end-6 rounded-30 lg:rounded-tr-none lg:rounded-br-none"></div>
        <div className="rounded-30 p-6 lg:px-0 lg:py-[53px] flex flex-col justify-center lg:justify-start relative z-10 row-start-5 col-start-1 lg:col-start-4 col-end-6">
          <div className="mb-4 flex justify-center lg:justify-start">
            <LogoNoir/>
          </div>
          <h2 className="titre-section text-xl lg:text-3xl text-center lg:text-left">
            vous aide à construire{" "}
            <span className="black w-fit mx-auto lg:ml-0">votre voyage</span>
          </h2>

          <div className="flex flex-col justify-center lg:justify-start lg:flex-row text-sm lg:text-base leading-4">
            <div className="my-6 text-center lg:text-left">
              <div className="uppercase block">lorem ipsum dolor sit amet</div>
              <div className="font-canelaText font-medium block">
                (consectur adicpising)
              </div>
            </div>
            <div className="pb-0 lg:py-5 lg:ml-[25%] text-center">
              <button className="btn bg-primary-black">
                quelle destination ?
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
