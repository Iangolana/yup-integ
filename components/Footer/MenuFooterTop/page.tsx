const menuTop = [
  { id: 1, link: "#", text: "yupwego" },
  { id: 2, link: "#", text: "blog" },
  { id: 3, link: "#", text: "faq" },
  { id: 4, link: "#", text: " aide et urgences" },
];

const MenuFooterTop = () => {
  return (
    <>
      <div className="flex flex-wrap space-y-5 lg:space-y-0 lg:space-x-5 justify-center items-center">
        <div className="flex flex-wrap flex-col lg:flex-row px-2 space-y-5 lg:space-y-0 lg:space-x-5 justify-center">
          {menuTop.map(({ id, link, text }) => (
            <div key={id} className="flex-1 text-center ">
              <a
                className="inline-block tracking-widest  uppercase font-bold text-[10px] text-white whitespace-nowrap"
                href={link}
              >
                {text}
              </a>
            </div>
          ))}
        </div>
        <button
          type="button"
          className=" tracking-widest font-bold text-[10px] text-white border border-white rounded-[100px] p-5 uppercase hover:bg-primary-yellow hover:text-primary-black hover:border-primary-black"
        >
          réaliser une simulation
        </button>
      </div>
    </>
  );
};

export default MenuFooterTop;
