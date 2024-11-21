/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Notewrapper from "./notewrapper";
import { useState, useRef } from "react";
import Backbutton from "./backbutton";
import Editfooter from "./editfooter";
import { Plus } from "react-bootstrap-icons";
export default function Tododoc({
  closehandler, task, todotitle, tododate, target, setnote
}) {
  const newcheckpointref = useRef()
  
  function editmodeactive() {
    seteditmode(true)
  }
  const [newdata, setnewdata] = useState({
    target: target,
    task: task,
    newtitle: todotitle
  })
  const [editmode, seteditmode] = useState(false)
  const totaltask = newdata.task.length
  const successtask = newdata.task.filter(e => e.done).length
  async function updatenote(targetchange) {
    setnewdata(item => ({
      ...item, task: item.task.map((item, idx) =>
        idx === targetchange ? { ...item, done: true } : item
      ),
    }))
    setnote(prevNotes => {
      if (Array.isArray(prevNotes)) {
        return prevNotes.map(project => {
          if (project && project._id) {
            return project._id === target
              ? {
                ...project, list: project.list.map((item, idx) =>
                  idx === targetchange ? { ...item, done: true } : item
                ), agenda: newdata.newtitle
              }
              : project;
          }
        });
      }
    })
  }
  async function editprojectname(targetchange, text) {
    await setnewdata(item => ({
      ...item, task: item.task.map((item, idx) =>
        idx === targetchange ? { ...item, task: text } : item
      )
    }))
    await setnote(prevNotes => {
      if (Array.isArray(prevNotes)) {
        return prevNotes.map(project => {
          if (project && project._id) {
            return project._id === target
              ? {
                ...project, list: project.list.map((item, idx) =>
                  idx === targetchange ? { ...item, task: text } : item
                )
              }
              : project;
          }
        });
      }
    })
  }
  function addproject(text) {
    setnote(prevNotes => {
      if (Array.isArray(prevNotes)) {
        return prevNotes.map(project => {
          if (project && project._id) {
            return project._id === target
              ? {
                ...project,
                list: [
                  ...project.list,
                  { task: text, done: false }
                ]
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
      task: [
        ...item.task,
        { task: text, done: false }
      ]
    }))
    seteditmode(false)
  }
    return (
      <Notewrapper
        notecolor="bg-blue-500"
      >
        <Backbutton closehandler={() => closehandler(newdata)} />
        <div className="w-full mb-2 border-b-black border-b-2 grid grid-cols-2 items-center content-between justify-between" >
          {" "}
          <h1 className="text-2xl font-poppins font-semibold" > {newdata.newtitle} </h1>
          <h2 className="text-2xl font-poppins font-medium justify-self-end">
            <span className="text-red-600" >{successtask}</span>/{totaltask}
          </h2>
          <p className="text-lg font-poppins font-light" > {tododate} </p>
        </div>
        <ul>
          {newdata.task.map((e, i) =>
            !editmode ?
              <li key={e.task} className="mt-2" >
                <label key={e.task} htmlFor={i} className=" ml-4 inline-block" >
                  <span className={`text-xl ${e.done ? "line-through" : ""} font-inter font-semibold`} > {e.task} </span>
                  <input onChange={() => updatenote(i)} className="bg-black/0 opacity-0" checked={!e.done} id={i} disabled={e.done} type="checkbox" value={e.task} />
                </label>
              </li> :
              <li className="mb-2" >
                <label className="text-base font-inter font-medium" htmlFor={i}> edit task </label>
                <input value={e.task} onChange={(e) => editprojectname(i, e.target.value)} className="py-1 ml-1 outline-none rounded-md border-2 border-black" data-id={i} type="text" name="editcheckpoint" id={i} />
              </li>
          )}
          {editmode &&
          <form className="flex justify-center  flex-col" >
            <label className="flex justify-centers" htmlFor="newcheckpoint">
              <h1 className="text-xl font-inter text-red-500 font-bold " >new task</h1>
              <input type="text" autoFocus className="py-1 ml-1 outline-none rounded-md border-2 border-black" ref={newcheckpointref} name="newcheckpoint" id="newcheckpoint" />
              <button className="w-max bg-slate-100 ml-2 text-3xl py-1 px-1 shadow-[1px_1px_0_black]" onClick={(e) => {e.preventDefault();addproject(newcheckpointref.current.value)}} > <Plus /> </button>
            </label>
          </form>}
        </ul>
        <Editfooter editmode={editmode} updatenote={() => seteditmode(false)} editmodeactive={editmodeactive} />
      </Notewrapper>
    );
  }
