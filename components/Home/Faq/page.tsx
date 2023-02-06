import LogoNoir from "@/components/icons/LogoNoir";
import MasqueFaq from "@/components/images/MasqueFaq";

const Faq = () => {
  return (
    <>
      {/* <div className="h-full flex flex-col space-y-8 justify-center">
        <div className="w-full max-w-[calc(100%-170px)] pl-[36%] pr-6 py-[70px] mr-auto relative after:absolute after:top-0 after:left-0 after:content-[' '] after:w-full after:h-full after:bg-[#E2F6D2] after:rounded-tr-30 after:rounded-br-30">
          <div className="flex flex-col relative z-10">
            <h2 className="titre-section">
              Vous avez des <span>questions ?</span>
            </h2>

            <div className="">
              <div className="my-6">
                <div className="uppercase block">
                  lorem ipsum dolor sit amet
                </div>
                <div className="text-primary-orange font-canelaText font-medium block">
                  (consectur adicpising)
                </div>
              </div>
              <div className="py-5">
                <button className="btn bg-primary-orange">
                  Consultez notre FAQ
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[calc(100%-280px)] pl-[36%] pr-6 py-[70px] ml-auto relative after:absolute after:top-0 after:left-0 after:content-[' '] after:w-full after:h-full after:bg-primary-pink after:rounded-tl-30 after:rounded-bl-30">
          <div className="flex flex-col relative z-10">
            <div className="mb-4">
              <LogoNoir />
            </div>
            <h2 className="titre-section flex flex-col">
              vous aide à construire{" "}
              <span className="black w-fit">votre voyage</span>
            </h2>

            <div className="flex flex-row">
              <div className="my-6">
                <div className="uppercase block">
                  lorem ipsum dolor sit amet
                </div>
                <div className="font-canelaText font-medium block">
                  (consectur adicpising)
                </div>
              </div>
              <div className="py-5 ml-[25%]">
                <button className="btn bg-primary-black">
                  quelle destination ?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="pt-[250px] pb-[200px] overflow-hidden relative grid grid-cols-[20%_15%_15%_38%_12%] grid-rows-[5px_auto_5px_30px_5px_auto_5px">
        
        <div className="row-start-1 row-end-6 col-start-1 col-end-6 w-full h-full after:absolute after:inline-block after:top-0 after:left-0 after:content-[' '] after:h-full after:w-full after:bg-masqueFaq after:bg-no-repeat after:bg-cover">
          {/* <MasqueFaq / >*/}
        </div>

        <div className="bg-[#E2F6D2] row-start-1 row-end-2 col-start-1 col-end-5 rounded-tr-30 rounded-br-30"></div>
        <div className="py-[48px] flex flex-col relative z-10 col-start-3 col-end-5 row-start-1">
          <h2 className="titre-section">
            Vous avez des <span>questions ?</span>
          </h2>

          <div className="">
            <div className="my-6">
              <div className="uppercase block">lorem ipsum dolor sit amet</div>
              <div className="text-primary-orange font-canelaText font-medium block">
                (consectur adicpising)
              </div>
            </div>
            <div className="py-5">
              <button className="btn bg-primary-orange">
                Consultez notre FAQ
              </button>
            </div>
          </div>
        </div>
        <div className="row-start-4 row-end-5 p-2">&nbsp;</div>
        <div className="bg-primary-pink row-start-5 col-start-2 col-end-6 rounded-tl-30 rounded-bl-30"></div>
        <div className="py-[53px] flex flex-col relative z-10 row-start-5 col-start-4">
          <div className="mb-4">
            <LogoNoir />
          </div>
          <h2 className="titre-section flex flex-col">
            vous aide à construire{" "}
            <span className="black w-fit">votre voyage</span>
          </h2>

          <div className="flex flex-row">
            <div className="my-6">
              <div className="uppercase block">lorem ipsum dolor sit amet</div>
              <div className="font-canelaText font-medium block">
                (consectur adicpising)
              </div>
            </div>
            <div className="py-5 ml-[25%]">
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
