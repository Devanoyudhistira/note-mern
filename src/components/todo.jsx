/* eslint-disable no-unused-vars */
import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Todo({ list, title,clickhandler }) {
  const [taskdone,settaskdone] = useState(list.filter((e) => e.done).length)
  const [totaltask,settotaltask] =useState( list.length)
  const tasklist = taskdone === 0;
  return (
    <ol onClick={clickhandler} className="text-left cursor-pointer bg-blue-300/60 mt-1 w-40 h-14 border-2 box-content border-black px-2 py-1 marker:text-red-500  overflow-hidden font-inter list-disc text-black flex flex-col justify-evenly rounded-xl font-semibold">
      <div className="w-full flex justify-self-start -mt-4 self-start items-center align-center justify-between ">
        <h1 className="truncate text-xl ">{title}</h1>
        {tasklist ? (
         ""
        ) : (
          <p className="text-lg font-inter font-extrabold">
            <span className="text-green-600">{taskdone}/</span>
            <span className="text-red-600">{totaltask}</span>{" "}
          </p>
        )}
      </div>
      { tasklist ? <span className="text-green-400 text-md -mt-4 capitalize font-inter font-bold"> task done</span> : list.map((e, i) => {
        if (i === 0) {
          return (
            <li
              className="list-disc ml-1 before:inline-block before:rounded-full before:animate-pulse before:w-2 before:-mt-1 before:text-center before:h-2 before:bg-red-700 text-md -mt-3 font-medium  text-black font-inter mb-[3px] truncate "
              key={e.task}
            >
              {" "}
              {e.task}
            </li>
          );
        }
      })}
    </ol>
  );
}
