import React from 'react'
import landingImg from '../../Static/Images/landingImg.jpg'
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <div className="w-[80%] mx-auto h-[90%] my-[40px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] flex">
        <div className="h-[100%] flex-1">
          <img src={landingImg} alt="" className="w-[100%] h-[100%]" />
        </div>
        <div className="flex-1 px-[30px] py-[20px]">
          <div className=" flex flex-col text-center text-[#9b09b5] items-center w-[70%] m-auto">
            <h1 className="text-[60px] m-[10px]">
              Keep Tabs On Your Favourite Websites With Utmost Ease!
            </h1>
            <p className="text-xl leading-4 m-[10px]">
              Start bookmarking like the pro you are
            </p>
            <Link to="/signup">
              <button className="mt-[50px] bg-[#9b09b5] hover:bg-[#c688d1] h-[60px] w-[200px] rounded text-xl font-bold text-[#f3dcf7] hover:text-[#f3dcf7]">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing