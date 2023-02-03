const Faq = () => {
  return (
    <>
      <div className="h-full flex flex-col justify-center">
        <div className="flex flex-col">
          <h2 className="titre-section">
            Vous avez des <span>questions ?</span>
          </h2>

          <div className="w-[236px]">
            <span className="uppercase">lorem ipsum dolor sit amet</span>
            <span className="text-primary-orange font-canelaText font-medium">(consectur adicpising)</span>
            <div className="py-5">
                <button className="btn bg-primary-orange">
                Consultez notre FAQ
                </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Faq;
