const Newsletter = () => {
  return (
    <>
      <div className="newsletter flex flex-col space-y-4">
        <div className="font-canelaText text-xl font-medium">
          Abonnez-vous à notre newsletter
        </div>
        <form
          action=""
          className="bg-white rounded-[100px] overflow-hidden flex flex-nowrap items-stretch"
        >
          <input
            placeholder="Votre email"
            type="text"
            name="newsletter"
            className="py-4 px-5 flex-1 font-bold text-primary-black text-[10px] tracking-widest placeholder:uppercase placeholder:text-primary-black placeholder:tracking-widest focus:outline-0"
          />
          <button
            type="submit"
            className="px-5 uppercase font-bold text-[10px] text-primary-black bg-primary-pink"
          >
            Ok
          </button>
        </form>
      </div>
    </>
  );
};

export default Newsletter;
