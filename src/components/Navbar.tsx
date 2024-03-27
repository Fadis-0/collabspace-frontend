import React from 'react';
import { NavLink } from 'react-router-dom';

import { 
  AiOutlineSetting,
  AiOutlineBell,

} from 'react-icons/ai';

import { 
  MdArrowDropDown,

} from 'react-icons/md';


const Navbar: React.FC = () => {
  
  return (
    <nav className="fixed w-full bg-white px-16 shadow-sm" aria-label="Navbar">
      <div className="bg-white py-2.5 max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between">
          <div>
          </div>
          <ul className="flex gap-4 items-center">
            <li className="">
              <AiOutlineBell className="text-2xl text-gray-400 hover:text-gray-600 transition-all duration-200 cursor-pointer" />
            </li>

            <li className="flex items-center gap-0.5 cursor-pointer transition-all duration-200">
              <div className="font-semibold text-sm text-lime-700 hover:bg-lime-200 transition-all duration-200 bg-lime-100 px-4 py-1 rounded-3xl">
                Fadis
              </div>
              <MdArrowDropDown className="text-xl text-gray-400 hover:text-gray-600 transition-all duration-200" />
            </li>
          </ul>
        </div> 
      </div>
    </nav>
  )
}

export default Navbar