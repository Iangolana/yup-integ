import { ReactHTMLElement } from "react";

interface FakeInputProps {
  label: string;
  children: any;
}
const FakeInput = ({ label, children }: FakeInputProps) => {
  return (
    <div className="fake-input flex-1 px-2 relative flex flex-col items-center last:after:bg-transparent after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-[#BFA892] after:content-[`' '`] after:inline-block">
      <div className="max-w-content">
        <div className="text-8 uppercase leading-3 text-left">
            {label}
        </div>
        <div className="mt-1 grow flex text-primary-black uppercase text-10 leading-3 font-bold tracking-widest">{children}</div>
      </div>
    </div>
  );
};

export default FakeInput;
