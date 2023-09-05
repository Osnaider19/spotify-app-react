import { IoIosArrowForward  , IoIosArrowBack} from "react-icons/io";
export const ButtonNavegation = () => {
  return (
    <div className="py-3  flex gap-x-2">
      <button>
        <i className="h-[35px] cursor-pointer w-[35px] text-[#ffffff80] hover:text-[#fff]  rounded-full flex flex-col justify-center items-center text-2xl bg-[rgba(255,255,255,0.1)]">
          <IoIosArrowBack />
        </i>
      </button>
      <button>
        <i className="h-[35px] cursor-pointer w-[35px] text-[#ffffff80] hover:text-[#fff]  rounded-full flex flex-col justify-center items-center text-2xl bg-[rgba(255,255,255,0.1)]">
          <IoIosArrowForward />
        </i>
      </button>
    </div>
  );
};
