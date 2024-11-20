/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ChevronLeft } from "react-bootstrap-icons";
import Notewrapper from "./notewrapper";
import { useState } from "react";
import Backbutton from "./backbutton";
import Editfooter from "./editfooter";
export default function Tododoc({
  closehandler, task, todotitle, tododate, target
}) {
  const [newdata,setnewdata] = useState({
    target:target,
    task:task,
    newtitle:todotitle
  })
  const totaltask = newdata.task.length
  const successtask = newdata.task.filter(e => e.done).length
  return (
    <Notewrapper
      notecolor="bg-blue-500"
    >
      <Backbutton closehandler={closehandler} />
      <div className="w-full mb-2 border-b-black border-b-2 grid grid-cols-2 items-center content-between justify-between" >
        {" "}
        <h1 className="text-2xl font-poppins font-semibold" > {newdata.newtitle} </h1>
        <h2 className="text-2xl font-poppins font-medium justify-self-end" >
         <span className="text-red-600" >{successtask}</span>/{totaltask} 
        </h2>
        <p className="text-lg font-poppins font-light" > {tododate} </p>
      </div>
      <ul>
        {newdata.task.map((e, i) =>
          <label key={e.task} htmlFor={i} className={` ml-4 inline-block duration-300 w-[92%] border-4 shadow-[3px_3px_10px_black] ${e.done ? "border-green-500" : "border-red-600"} px-3 py-1`} >
            <span className={`text-xl ${e.done ? "text-green-500" : "text-red-600"} font-inter font-semibold`} > {e.task} </span>
            <input className="bg-black/0 opacity-0" checked={!e.done} id={i} disabled={e.done} type="checkbox" value={e.task} />
          </label>
        )}
      </ul>
      <Editfooter />
    </Notewrapper>
  );
}
