import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
      <div className="w-[30%] mx-auto h-[60%] my-[70px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] flex">
        <form action="" className="w-[95%] h-[90%] m-auto text-[#9b09b5]  ">
          <div className="w-[100%] m-[20px] ">
            <label htmlFor="" className="text-2xl font-bold leading-4 my-[10px]">
              Email:
            </label>
            <input
              type="email"
              placeholder="Input your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-[90%] h-[50px] p-[10px] rounded bg-[#f3dcf7] border-[#9b09b5] border-[2px] outline-none text-xl font-bold"
            />
          </div>
          <div className="w-[100%] m-[20px] ">
            <label htmlFor="" className="text-2xl font-bold leading-4 my-[10px]">
              Password:
            </label>
            <input
              type="text"
              placeholder="Choose a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-[90%] h-[50px] p-[10px] rounded bg-[#f3dcf7] border-[#9b09b5] border-[2px] outline-none text-xl font-bold "
            />
          </div>

          <div className="w-[100%] mx-[20px] mt-[40px] mb-[10px] ">
            <Link to="/bookmark">
              <button className="mt-[] bg-[#9b09b5] hover:bg-[#c688d1] h-[60px] w-[90%] mx-auto rounded text-xl font-bold text-[#f3dcf7] hover:text-[#f3dcf7]">
                Log in
              </button>
            </Link>
          </div>
          <p>{email}</p>
          <p>{password}</p>
        </form>
      </div>
    </>
  );
}

export default Login