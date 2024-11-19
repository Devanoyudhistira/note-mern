/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { ChevronLeft } from "react-bootstrap-icons";
import Notewrapper from "./notewrapper";
import { useRef, useState } from "react";
import Backbutton from "./backbutton";
import Editfooter from "./editfooter";
import Confirmpopup from "./confimpopup";
import { AnimatePresence } from "framer-motion";
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
  const newcheckpointref = useRef()
  const [editconfirm, seteditconfirm] = useState(false)
  const [showconfirmedit, setshowconfirmedit] = useState(false)
  
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
  const datalength = newdata.checkpoint.filter(e => {
    return e.done === true
  })
  function addproject() {
    setnote(prevNotes => {
      if (Array.isArray(prevNotes)) {
        return prevNotes.map(project => {
          if (project && project._id) {
            return project._id === target
              ? {
                ...project,
                checkpoint: [
                  ...project.checkpoint,
                  { task: "done", done: false }
                ]
              }
              : project;
          }
          return project; // Always return the project even if conditions are not met
        });
      }
      return prevNotes; // Return the original if it's not an array
    });

    setnewdata(item => ({
      ...item,
      checkpoint: [
        ...item.checkpoint,
        { task: "done", done: false }
      ],
      percentage: 0
    }));

    setnewdata(item => ({
      ...item,
      checkpoint: item.checkpoint.map(e => ({ ...e, done: false }))
    }));
    setshowconfirmedit(false)
    seteditmode(false)
  }
  function editproject() {
    if (datalength.length === 0) {
      addproject()
    } else {
      seteditmode(true)
      setshowconfirmedit(true)
    }

  }


  function editmodeactive() {
    seteditmode(true)
  }


  const task = newdata.checkpoint.length
  const percentage = 100 / task
  const totalpercent = Math.ceil(newdata.percentage >= 100 ? 100 : newdata.percentage)
  return (
    <Notewrapper
      notecolor="bg-orange-300"
    >
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null} >
        {
          showconfirmedit && <Confirmpopup text={"doing this will reset the progress of your project proceed ?"} confirmhandler={addproject} cancelhandler={() => setshowconfirmedit(false)} />
        }
      </AnimatePresence>
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
            !editmode ? <li key={e.task} className="mt-2" >
              <label htmlFor={e.task} className={` ml-4 inline-block duration-300 w-[92%] border-4 shadow-[3px_3px_10px_black] ${e.done ? "border-green-500" : "border-red-600"} px-3 py-1`} >
                <span className={`text-xl ${e.done ? "text-green-500" : "text-red-600"} font-inter font-semibold`} > {e.task} </span>
                <input onChange={() => updatenote(i)} className="bg-black/0" checked={!e.task} id={e.task} disabled={e.done} type="checkbox" value={e.task} />
              </label>
            </li> :
            
              <li className="mb-2" >
                <label htmlFor="newcheckpoint"> add new project </label>
                <input value={e.task} data-id={i} type="text" name="editcheckpoint" id="editcheckpoint" />
              </li>
          )
        })}
        <label htmlFor="newcheckpoint"> add new project </label>
        <input type="text" ref={newcheckpointref} name="newcheckpoint" id="newcheckpoint" />
      </ul>
      {editmode && <div className="w-[90vw] mt-3 ml-[17px] overflow-hidden h-14 bg-slate-400/50 rounded-xl" >
        <div style={{ width: `${newdata.percentage}%` }} className={`duration-300 h-full ${totalpercent < 100 ? "bg-red-500" : "bg-green-500"} `}>
        </div>
      </div>}
      <Editfooter editmode={editmode} updatenote={editproject} editmodeactive={editmodeactive} />
    </Notewrapper>
  );
}
