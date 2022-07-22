import React from 'react'
import logo from "../Static/Images/logo.jpg"

const Header = () => {
  return (
    <>
      <div className="h-[85px] w-[100%] absolute top-0 bg-[#9b09b5] px-[5%] py-[10px] flex justify-between items-center">
        <div className="flex flex-2">
          <img src={logo} alt="logo" className="h-[60px] w-[60px] rounded mr-[1px]" />
          <span className="flex items-end text-2xl text-white font-bold">ookmarker App</span>
        </div>
        <nav className="w-[40%]">
          <ul className="flex justify-between">
            <li className="cursor-pointer">
              <a
                href=""
                className="text-xl text-white font-bold hover:text-[#f3dcf7]"
              >
                Home
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                href=""
                className="text-xl text-white font-bold hover:text-[#f3dcf7]"
              >
                About
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                href=""
                className="text-xl text-white font-bold hover:text-[#f3dcf7]"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button className="bg-[#f3dcf7] hover:bg-[#c688d1] h-[60px] w-[150px] rounded text-xl font-bold text-[#9b09b5] hover:text-[#f3dcf7]">
          Log in
        </button>
      </div>
    </>
  );
}

export default Header