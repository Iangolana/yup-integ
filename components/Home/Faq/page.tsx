import LogoNoir from "@/components/icons/LogoNoir";

const Faq = () => {
  return (
    <>
      <div className="h-full flex flex-col space-y-8 justify-center">
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
                    quelle destnation ?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
