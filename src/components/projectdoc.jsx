/* eslint-disable react/prop-types */
import { ChevronLeft } from "react-bootstrap-icons";
import Notewrapper from "./notewrapper";
import { useState } from "react";
import Backbutton from "./backbutton";
export default function Projectdoc({
  closehandler,
  projecttext,
  projecttitle,
  projectdate,
  projectpercent,
  checkpoint
}) {
  const [taskstatus,settaskstatus] = useState(checkpoint)
  const [count,setcount] = useState(0)
  const task = taskstatus.length
  const percentage =  100 / task
  return (
    <Notewrapper
    notecolor="bg-orange-300"
    >
      <Backbutton closehandler={closehandler} />
      <div className="w-full mb-2 border-b-black border-b-2 grid grid-cols-2 items-center content-between justify-between" >
        {" "}
        <h1 className="text-2xl font-poppins font-semibold" > {projecttitle} </h1>
        <h2 className="text-2xl font-poppins font-medium justify-self-end" >{projectpercent}% </h2>
        <p className="text-lg font-poppins font-light" > {projectdate} </p>
      </div>
      <div className="text-lg font-inter" >{projecttext} </div>
      <ul>
      {checkpoint.map(e => {
        return <li key={e.task} onClick={() => setcount(count + percentage)} > <input type="checkbox" value={e.task} /> {e.task}</li>
      })}
      </ul>
      <div className="w-[90vw]  justify-self-center overflow-hidden h-14 bg-slate-400/50 rounded-xl" >
        <div style={{ width:`${count}%` }} className= {`duration-300 h-full bg-red-500 `} >
        </div>
      </div>
    </Notewrapper>
  );
}
