import Arrow from "@/components/icons/Arrow";

const ScrollButton = () => {
  return (
    <>
      <button type="button" className="flex space-x-2">
        <span className="uppercase font-hurmeSans1 text-[9px] text-primary-black leading-3 tracking-widest">
          Scroll
        </span>
        <Arrow />
      </button>
    </>
  );
};

export default ScrollButton;
