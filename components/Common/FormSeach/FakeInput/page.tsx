import { ReactHTMLElement } from "react";

interface FakeInputProps {
  label: string;
  children: any;
}
const FakeInput = ({ label, children }: FakeInputProps) => {
  return (
    <div className='fake-input relative flex flex-col items-start  justify-center'>
      <div className='max-w-content'>
        <div className='text-8 uppercase leading-3 text-left'>{label}</div>
        <div className='mt-1 grow flex text-primary-black uppercase text-10 leading-3 font-bold tracking-widest'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default FakeInput;
