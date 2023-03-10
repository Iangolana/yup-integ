const menuTop = [
    { id: 1, link: "#", text: "Conditions générales de vente" },
    { id: 2, link: "#", text: "Mentions légales" },
    { id: 3, link: "#", text: "Politique de confidentialité" },
  ];

  const MenuFooterBottom = () => {
    return (
      <>
        <div className="flex space-x-5 justify-center items-center">
          <div className="flex px-2 justify-center divide-x divide-black">
            {menuTop.map(({ id, link, text }) => (
                <a
                key={id} 
                  className="inline-block px-4 leading-[10px] uppercase text-8 text-black whitespace-nowrap tracking-widest"
                  href={link}
                >
                  {text}
                </a>
            ))}
          </div>
        </div>
      </>
    );
  };
  
  export default MenuFooterBottom;
  