import React from 'react'
import logo from "../Static/Images/logo.jpg"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <div className="h-[85px] w-[100%] absolute top-0 bg-[#9b09b5] px-[5%] py-[10px] flex justify-between items-center">
        <Link to="/">
          <div className="flex flex-2">
            <img
              src={logo}
              alt="logo"
              className="h-[60px] w-[60px] rounded mr-[1px]"
            />
            <span className="flex items-end text-2xl text-white font-bold">
              ookmarker App
            </span>
          </div>
        </Link>
        <nav className="w-[40%]">
          <ul className="flex justify-between">
            <li className="cursor-pointer">
              <Link
                to="/"
                className="text-2xl text-white font-bold hover:text-[#f3dcf7]"
              >
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="/bookmark"
                className="text-2xl text-white font-bold hover:text-[#f3dcf7]"
              >
                Bookmark
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="/about"
                className="text-2xl text-white font-bold hover:text-[#f3dcf7]"
              >
                About
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="/contact"
                className="text-2xl text-white font-bold hover:text-[#f3dcf7]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="/login">
          <button className="bg-[#f3dcf7] hover:bg-[#c688d1] h-[60px] w-[150px] rounded text-xl font-bold text-[#9b09b5] hover:text-[#f3dcf7]">
            Log in
          </button>
        </Link>
      </div>
    </>
  );
}

export default Header