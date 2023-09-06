import {BsFillPlayFill} from 'react-icons/bs'

export const ButtonPlay = () => {
  return (
    <button className="h-[35px] w-[35px] rounded-full bg-[#fff] overflow-hidden">
      <i className="flex justify-center items-center text-3xl w-full h-full text-black">
        <BsFillPlayFill className='relative '/>
      </i>
    </button>
  );
};
