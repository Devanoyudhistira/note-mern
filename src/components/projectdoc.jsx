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

  const [editmode, seteditmode] = useState(false)
  async function updatenote(targetchange) {
    setnewdata(item => ({...item,percentage:newdata.percentage + percentage,checkpoint: item.checkpoint.map((item, idx) =>
      idx === targetchange ? { ...item, done: true } : item
    ), }))
    setnote(prevNotes => {
      if (Array.isArray(prevNotes)) {
        return prevNotes.map(project => {
          if (project && project._id) {
            return project._id === target
              ? { ...project, checkpoint: project.checkpoint.map((item, idx) =>
                idx === targetchange ? { ...item, done: true } : item
              ), percentage:newdata.percentage + percentage ,agenda: newdata.newtitle }
              : project;
          }
        });
      }
    })
    // await fetch("https://noteapi-pink.vercel.app/updateproject/", {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(newdata)
    // }).then(res => {
    //   return res.json()
    // }).then(res => {
    //   setnewdata(res.data)
    // })
  }
  
  function editmodeactive() {
    seteditmode(true)
  }
  
  const [newdata, setnewdata] = useState({
    target: target,
    newtitle: projecttitle,
    "checkpoint": checkpoint,
    percentage: projectpercent
  })
  const task = newdata.checkpoint.length
  const percentage = 100 / task
  const totalpercent = Math.ceil(newdata.percentage >= 100 ? 100 : newdata.percentage)
  return (
    <Notewrapper
      notecolor="bg-orange-300"
    >
      <Backbutton closehandler={closehandler} />
      <div className="w-full mb-2 border-b-black border-b-2 grid grid-cols-2 items-center content-between justify-between" >
        {" "}
        <h1 className="text-2xl font-poppins font-semibold" > {newdata.newtitle} </h1>
        <h2 className="text-2xl font-poppins font-medium justify-self-end" >{totalpercent}% </h2>
        <p className="text-lg font-poppins font-light" > {projectdate} </p>
      </div>
      <div className="text-lg font-inter" >{projecttext} </div>
      <ul>
        {newdata.checkpoint.map((e,i) => {
          return <li key={e.task} > <input onChange={ () => updatenote(i)} disabled={e.done} type="checkbox" value={e.task} />{e.task}</li>
        })}
      </ul>
      <div className="w-[90vw] ml-6  overflow-hidden h-14 bg-slate-400/50 rounded-xl" >
        <div style={{ width: `${newdata.percentage}%` }} className={`duration-300 h-full bg-red-500 `}>
        </div>
      </div>
      <Editfooter editmode={editmode} editmodeactive={editmodeactive} updatenote={updatenote} />
    </Notewrapper>
  );
}
