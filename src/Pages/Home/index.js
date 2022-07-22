import React from 'react'

const Home = () => {
  return (
    <>
      <div className="w-[80%] mx-auto h-[90%] my-[40px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] flex">
        <div className="h-[100%] py-[20px] flex-1 flex justify-center items-center border-r border-[#c688d1]">
          <form
            action=""
            className="w-[70%] h-[60%] p-[20px] bg-[#9b09b5] text-white "
          >
            <h1 className="text-[25px] ml-[22px] font-bold ">Add a Bookmark</h1>
            <div className="w-[100%] m-[20px] ">
              <label htmlFor="" className="text-2xl leading-4 my-[10px]">
                Choose a name for your link:
              </label>
              <input
                type="email"
                placeholder="My sample link"
                className="block w-[90%] h-[50px] p-[10px] rounded bg-[#f3dcf7] border-[#9b09b5] border-[2px] outline-none text-[#9b09b5] text-xl font-bold "
              />
            </div>
            <div className="w-[100%] m-[20px] ">
              <label htmlFor="" className="text-2xl leading-4 my-[10px]">
                Input link:
              </label>
              <input
                type="text"
                placeholder="https://link.com"
                className="block w-[90%] h-[50px] p-[10px] rounded bg-[#f3dcf7] border-[#9b09b5] border-[2px] outline-none text-[#9b09b5] text-xl font-bold "
              />
            </div>
            <div className="w-[100%] m-[20px] ">
              <button className="bg-[#c688d1] hover:bg-[#f3d7f7] h-[60px] w-[90%] rounded text-xl font-bold text-[#9b09b5]">
                Add
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1 px-[30px] py-[20px]">
          <div className=" flex flex-col text-center text-[#9b09b5] items-center w-[90%] h-[90%] m-auto overflow-auto">
            <div className="w-[90%] h-[100px] bg-[#9b09b5] hover:bg-[#c688d1] m-2 text-white hover:text-[#9b09b5] rounded p-4 text-left text-[35px] font-bold">
              <span>1. </span>
              <a href="" className=" mt-2 ml-3 underline ">
                My favourite link 1
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home