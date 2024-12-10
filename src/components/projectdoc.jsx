/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { ChevronLeft, Plus } from "react-bootstrap-icons";
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
  const [showconfirmedit, setshowconfirmedit] = useState(false)

  const [newdata, setnewdata] = useState({
    target: target,
    newtitle: projecttitle,
    "checkpoint": checkpoint,
    percentage: projectpercent
  })

  const [editmode, seteditmode] = useState(false)
  async function updatenote(targetchange) {
     setnewdata(item => ({
      ...item, percentage: newdata.percentage + percentage, checkpoint: item.checkpoint.map((item, idx) =>
        idx === targetchange ? { ...item, done: true } : item
      ),
    }))
     setnote(prevNotes => {
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
  
  async function editprojectname(targetchange,text) {
    await setnewdata(item => ({
      ...item,checkpoint: item.checkpoint.map((item, idx) =>
        idx === targetchange ? { ...item, task: text } : item
      )
    }))
    await setnote(prevNotes => {
      if (Array.isArray(prevNotes)) {
        return prevNotes.map(project => {
          if (project && project._id) {
            return project._id === target
              ? {
                ...project, checkpoint: project.checkpoint.map((item, idx) =>
                  idx === targetchange ? { ...item, task: text } : item
                )
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
  function addproject(text) {
    setnote(prevNotes => {
      if (Array.isArray(prevNotes)) {
        return prevNotes.map(project => {
          if (project && project._id) {
            return project._id === target
              ? {
                ...project,
                checkpoint: [
                  ...project.checkpoint,
                  { task: text, done: false }
                ], percentage: 0
              }
              : project;
          }
          return project; 
        });
      }
      return prevNotes; 
    });

    setnewdata(item => ({
      ...item,
      checkpoint: [
        ...item.checkpoint,
        { task: text, done: false }
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
  function editproject(text) {
    if (datalength.length === 0) {
      addproject(text)
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
      notecolor="bg-orange-300 dark:bg-orange-500"
    >
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null} >
        {
          showconfirmedit && <Confirmpopup text={"doing this will reset the progress of your project proceed ?"} confirmhandler={() => addproject(newcheckpointref.current.value)} cancelhandler={() => setshowconfirmedit(false)} />
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
      <ul className="document  py-2 px-1 overflow-sroll" >
        {newdata.checkpoint.map((e, i) => {
          return (
            !editmode ? <li key={e.task} className="mt-2" >
              <label htmlFor={i} className={` ml-4 inline-block duration-300 w-[92%] border-4 shadow-[3px_3px_10px_black] ${e.done ? "border-green-500" : "border-red-600"} px-3 py-1`} >
                <span className={`text-xl ${e.done ? "text-green-500" : "text-red-600"} font-inter font-semibold`} > {e.task} </span>
                <input onChange={() => updatenote(i)} className="bg-black/0 opacity-0" checked={!e.task} id={i} disabled={e.done} type="checkbox" value={e.task} />
              </label>
            </li> :
              <li className="mb-2" >
                <label className="text-base font-inter font-medium"  htmlFor={i}> edit checkpoint </label>
                <input value={e.task} onChange={(e) => editprojectname(i,e.target.value)} className="py-1 px-2 pr-4 ml-1 outline-none rounded-md border-2 border-black" data-id={i} type="text" name="editcheckpoint" id={i} />
              </li>
          )
        })}
        {editmode &&
          <form className="flex justify-center  flex-col" >
            <label className="flex justify-centers" htmlFor="newcheckpoint">
              <h1 className="text-xl font-inter text-red-500 font-bold " >new checkpoint</h1>
              <input type="text" autoFocus className="py-1 px-2 ml-1 outline-none rounded-md border-2 border-black" ref={newcheckpointref} name="newcheckpoint" id="newcheckpoint" />
              <button className="w-max bg-slate-100 ml-2 text-3xl py-1 px-1 shadow-[1px_1px_0_black]" onClick={(e) => {e.preventDefault();editproject(newcheckpointref.current.value)}} > <Plus /> </button>
            </label>
          </form>}
      </ul>
      {!editmode && <div className="w-[90vw] mt-3 ml-[17px] overflow-hidden h-14 bg-slate-400/50 rounded-xl" >
        <div style={{ width: `${newdata.percentage}%` }} className={`duration-300 h-full ${totalpercent < 100 ? "bg-red-500" : "bg-green-500"} `}>
        </div>
      </div>}
      <Editfooter editmode={editmode} updatenote={() => seteditmode(false) } editmodeactive={editmodeactive} />
    </Notewrapper>
  );
}
