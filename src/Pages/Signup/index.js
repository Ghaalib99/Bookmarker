import React from 'react'

const Signup = () => {
  return (
    <>
      <div className="w-[30%] mx-auto h-[90%] my-[40px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] flex">
        <form action="" className="w-[95%] h-[90%] m-auto text-[#9b09b5]  ">
          <div className="w-[100%] m-[20px] ">
            <label htmlFor="" className="text-xl font-bold leading-4 my-[10px]">
              Username:
            </label>
            <input
              type="text"
              placeholder="Choose a username"
              className="block w-[90%] h-[50px] p-[10px] rounded bg-[#f3dcf7] border-[#9b09b5] border-[2px] outline-none "
            />
          </div>
          <div className="w-[100%] m-[20px] ">
            <label htmlFor="" className="text-xl font-bold leading-4 my-[10px]">
              Email:
            </label>
            <input
              type="email"
              placeholder="Input youe email"
              className="block w-[90%] h-[50px] p-[10px] rounded bg-[#f3dcf7] border-[#9b09b5] border-[2px] outline-none "
            />
          </div>
          <div className="w-[100%] m-[20px] ">
            <label htmlFor="" className="text-xl font-bold leading-4 my-[10px]">
              Password:
            </label>
            <input
              type="text"
              placeholder="Choose a password"
              className="block w-[90%] h-[50px] p-[10px] rounded bg-[#f3dcf7] border-[#9b09b5] border-[2px] outline-none "
            />
          </div>
          <div className="w-[100%] m-[20px] ">
            <label htmlFor="" className="text-xl font-bold leading-4 my-[10px]">
              Confirm Password:
            </label>
            <input
              type="text"
              placeholder="Confirm password"
              className="block w-[90%] h-[50px] p-[10px] rounded bg-[#f3dcf7] border-[#9b09b5] border-[2px] outline-none "
            />
          </div>
          <div className="w-[100%] mx-[20px] mt-[40px] mb-[10px] ">
            <button className="mt-[] bg-[#9b09b5] hover:bg-[#c688d1] h-[60px] w-[90%] mx-auto rounded text-xl font-bold text-[#f3dcf7] hover:text-[#f3dcf7]">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup