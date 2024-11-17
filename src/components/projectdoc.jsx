/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
 
import { ChevronLeft } from "react-bootstrap-icons";
import Notewrapper from "./notewrapper";
import { useState } from "react";
import Backbutton from "./backbutton";
import Editfooter from "./editfooter";
export default function Projectdoc({
  closehandler,
  projecttext,
  projecttitle,
  projectdate,
  projectpercent,
  checkpoint,
  target,
  setnote
}) {

  const [newdata, setnewdata] = useState({
    target: target,
    newtitle: projecttitle,
    "checkpoint": checkpoint,
    percentage: projectpercent
  })

  const [editmode, seteditmode] = useState(false)
  async function updatenote(targetchange) {
    await setnewdata(item => ({
      ...item, percentage: newdata.percentage + percentage, checkpoint: item.checkpoint.map((item, idx) =>
        idx === targetchange ? { ...item, done: true } : item
      ),
    }))
    await setnote(prevNotes => {
      if (Array.isArray(prevNotes)) {
        return prevNotes.map(project => {
          if (project && project._id) {
            return project._id === target
              ? {
                ...project, checkpoint: project.checkpoint.map((item, idx) =>
                  idx === targetchange ? { ...item, done: true } : item
                ), percentage: newdata.percentage + percentage, agenda: newdata.newtitle
              }
              : project;
          }
        });
      }
    })
  }

  function editproject() {
    
    setnote(prevNotes => {
      if (Array.isArray(prevNotes)) {
        return prevNotes.map(project => {
          if (project && project._id) {
            return project._id === target
              ? {
                ...project, checkpoint: [
                  ...project.checkpoint,
                  { task: "done", done: false }
                ]
              }
              : project;
          }
        });
      }
    })
    setnewdata(item => ({
      ...item,
      checkpoint: [
        ...item.checkpoint,
        { task: "done", done: false }
      ]
    }));
  }



  function editmodeactive() {
    seteditmode(true)
  }


  const task = newdata.checkpoint.length
  const percentage = 100 / task
  const totalpercent = Math.ceil(newdata.percentage >= 100 ? 100 : newdata.percentage)
  console.log(totalpercent >= 100)
  return (
    <Notewrapper
      notecolor="bg-orange-300"
    >
      <Backbutton closehandler={() => closehandler(newdata)} />
      <div className="w-full mb-2 border-b-black border-b-2 grid grid-cols-2 items-center content-between justify-between" >
        {" "}
        <h1 className="text-2xl font-poppins font-semibold" > {newdata.newtitle} </h1>
        <h2 className="text-2xl font-poppins font-medium justify-self-end" >{totalpercent}% </h2>
        <p className="text-lg font-poppins font-light" > {projectdate} </p>
      </div>
      <div className="text-lg font-inter" >{projecttext} </div>
      <ul className="" >
        {newdata.checkpoint.map((e, i) => {
          return (
            <li key={e.task} className="mt-2" >
              <label htmlFor={e.task} className={` ml-8 inline-block duration-300 w-[92%] border-4 shadow-[3px_3px_10px_black] ${e.done ? "border-green-500" : "border-red-600"} px-3 py-1`} >
               <span className={`text-xl ${e.done ? "text-green-500" : "text-red-600"} font-inter font-semibold`} > {e.task} </span>
                <input onChange={() => updatenote(i)} id={e.task} disabled={e.done} type="checkbox" value={e.task} />
              </label>
            </li>)
        })}
      </ul>
      <div className="w-[90vw] mt-3 ml-6  overflow-hidden h-14 bg-slate-400/50 rounded-xl" >
        <div style={{ width: `${newdata.percentage}%` }} className={`duration-300 h-full ${totalpercent < 100 ? "bg-red-500" : "bg-green-500"} `}>
        </div>
      </div>
      {
      totalpercent < 100 && <Editfooter editmode={editmode} editmodeactive={editmodeactive} updatenote={editproject} />
      }
    </Notewrapper>
  );
}
