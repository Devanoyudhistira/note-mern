/* eslint-disable no-unused-vars */
import { useState } from "react";
import Deletenote from "./deletenote";
import { Check } from "react-bootstrap-icons";

/* eslint-disable react/prop-types */
export default function Todo({ list, objectid, title, clickhandler, closehandler, setnotedata }) {
  const [taskdone, settaskdone] = useState()
  const [totaltask, settotaltask] = useState(list.length)
  const tasklist = list.filter((e) => !e.done);
  return (
    <ol data-id={objectid} onClick={clickhandler} className="text-left cursor-pointer bg-blue-700 mt-1 w-40 h-20 border-2 box-content border-black px-2  marker:text-red-500  overflow-hidden font-inter list-disc text-black flex flex-col justify-evenly rounded-xl font-semibold shadow-[2px_2px_0_black] ">
      <Deletenote target={objectid} setfulldata={setnotedata} closehandler={closehandler} />
      <div className="w-full flex justify-self-start -mt-2 text-xl self-start items-center align-center justify-between ">
        <h1 className="truncate text-xl ">{title}</h1>
        {!tasklist.length === 0 ? (
          <p className="text-lg font-inter font-extrabold">
            <span className="text-green-400">{list.filter((e) => e.done).length}/</span>
            <span className="text-red-600">{list.length}</span>
          </p>
        ) : (
          <Check className="text-green-400" />
        )}
      </div>
      {tasklist.length === 0 ? <span className="text-green-400 text-md -mt-4 capitalize font-inter font-bold"> task done</span> : <li
        className="list-disc ml-1 before:inline-block before:rounded-full before:mr-1 before:animate-pulse before:w-2 before:-mt-1 before:text-center before:h-2 before:bg-red-700 text-md -mt-3 font-medium  text-black font-inter mb-[3px] truncate"
      > {tasklist[0].task} </li>}
    </ol>
  );
}
