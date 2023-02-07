import Arrow from "@/components/icons/Arrow";

const ScrollButton = () => {

  const handleClickScroll = () => {
    const element = document.getElementById('slider');

    if(element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <>
      <button type="button" className="flex space-x-2" onClick={handleClickScroll}>
        <span className="uppercase font-hurmeSans1 text-[9px] text-primary-black leading-3 tracking-widest">
          Scroll
        </span>
        <Arrow />
      </button>
    </>
  );
};

export default ScrollButton;
