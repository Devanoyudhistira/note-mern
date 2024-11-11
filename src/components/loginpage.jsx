import { ArrowRight } from "react-bootstrap-icons";
import {motion} from "framer-motion"

/* eslint-disable react/prop-types */
export default function Loginpage({ loginWithRedirect }) {
  return (
    <div className="w-screen h-screen grid place-content-center" >
      <div className="flex flex-col w-[90vw] overflow-hidden h-max border-2 bg-gray-300/50 border-gray-100 px-2 py-5 rounded-xl items-center justify-center" >
        <h1 className="text-2xl font-inter font-extrabold text-sky-400 capitalize tracking-wider -mt-2" > welcome  </h1>
        <div className=" w-[340px]" >
          <p className="font-inter text-center text-base font-medium">
            stop talking start writing<span className="font-bold text-blue-500 block" > join us </span>
          </p>
        </div>
        <button type="submit" onClick={(e) => { loginWithRedirect(); e.preventDefault() }} className="bg-blue-500 rounded-xl w-[320px] text-white font-inter mt-2 px-5 py-1 text-2xl" >
          Sign Up <ArrowRight className="inline-block text-lg" />
        </button>
      </div>
    </div>
  )
}

