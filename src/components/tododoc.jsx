/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ChevronLeft } from "react-bootstrap-icons";
import Notewrapper from "./notewrapper";
import { useState } from "react";
import Backbutton from "./backbutton";
export default function Tododoc({
    closehandler
}) {
  const [count,setcount] = useState(20)
  const percentage =  100
  return (
    <Notewrapper
    notecolor="bg-orange-300"
    >
      <Backbutton closehandler={closehandler} />
      <div className="w-full mb-2 border-b-black border-b-2 grid grid-cols-2 items-center content-between justify-between" >
        {" "}
        <h1 className="text-2xl font-poppins font-semibold" > {"judul"} </h1>
        <h2 className="text-2xl font-poppins font-medium justify-self-end" >{20}% </h2>
        <p className="text-lg font-poppins font-light" > tanggal </p>
      </div>
      <div className="text-lg font-inter" >dadda </div>
      <ul>
      </ul>
      <div className="w-[90vw] ml-6  overflow-hidden h-14 bg-slate-400/50 rounded-xl" >
        <div style={{ width:`${count}%` }} className= {`duration-300 h-full bg-red-500 `} >
        </div>
      </div>
    </Notewrapper>
  );
}
