import {BsPlayBtn} from 'react-icons/bs'
import {TbMicrophone2} from 'react-icons/tb'
import {TfiAlignJustify} from 'react-icons/tfi'
import {BsDeviceHdd} from 'react-icons/bs'
import {IoMdVolumeHigh} from 'react-icons/io'
import './vol.css'
export const Vol = () => {
  return (
    <div className='flex flex-grow justify-end px-3 items-center'>
       <div className='flex gap-x-3'>
        <button>
            <i className="text-xl text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white"><BsPlayBtn/></i>
        </button>
        <button>
            <i className="text-xl text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white"><TbMicrophone2/></i>
        </button>
        <button>
            <i className="text-xl text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white"><TfiAlignJustify/></i>
        </button>
        <button>
            <i className="text-xl text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white"><BsDeviceHdd/></i>
        </button>
        <button>
            <i className="text-xl text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white"><IoMdVolumeHigh/></i>
        </button>
        <div className='flex justify-center items-center'>
            <input type="range" className='range-vol'/>
        </div>
       </div>
    </div>
  )
}
