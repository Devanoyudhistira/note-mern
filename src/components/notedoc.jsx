/* eslint-disable react/prop-types */
import { Check, PencilSquare } from "react-bootstrap-icons";
import Notewrapper from "./notewrapper";
import Backbutton from "./backbutton";
import { useRef, useState } from "react";

export default function Notedoc({
  closehandler,
  notetext,
  notetitle,
  target,
  notedate,
  setnote
}) {

  const [newdata, setnewdata] = useState({
    newtitle: notetitle,
    newnote: notetext,
    target: target
  })

  const noteedit = useRef()

  const [editmode, seteditmode] = useState(false)

  function editmodeactive(){
    seteditmode(true)
    noteedit.current.focus
  }

  async function updatenote() {
    seteditmode(false)
    setnote(prevNotes => {
      if (Array.isArray(prevNotes)) {
        return prevNotes.map(note => {
          if (note && note._id) {
            return note._id === target
              ? { ...note, blog: newdata.newnote, agenda: newdata.newtitle }
              : note;
          }
        });
      }
    })
    await fetch("https://noteapi-pink.vercel.app/updatenote/", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newdata)
    }).then(res => {
      return res.json()
    }).then(res => {
      setnewdata(res.data)})
  }
  return (
    <Notewrapper notecolor="bg-red-300" >
      <Backbutton closehandler={closehandler} />
      <div className="w-full flex items-center border-b-2 border-b-black justify-between">
        {" "}
        <h1 className="font-poppins text-3xl font-bold ">
          {notetitle}
          <p className="font-inter text-sm  font-medium" >
            {notetext.length} character
          </p>
        </h1>
        <p className="font-inter text-sm  font-medium">
          {" "}
          {notedate}  {" "}
        </p>
      </div>
     {!editmode && <div className="ml-1 w-screen text-start px-1 break-words" >
        <span className="text-lg font-inter text-start" >{newdata.newnote} </span>
      </div>}
      {editmode && <div>
        <textarea autoFocus value={newdata.newnote} ref={noteedit} className="w-[97%] ml-2 h-[80vh] justify-self-center resize-none border-none bg-black/0 outline-none" onChange={(e) => setnewdata(item => ({ ...item, newnote: e.target.value }))} name="text-edit" id="text-edit"></textarea>
      </div>}
      <div className="justify-self-end self-end absolute bottom-0 px-2 py-1 mt-3 h-max w-screen border-t-2 border-black bg-red-500 flex justify-end " >
        {!editmode && <button onClick={editmodeactive} className="text-center rounded-full -mt-6 p-3 w-max h-max bg-blue-400 border-2 border-black" >
          <PencilSquare className="text-4xl " />
        </button>}
        {editmode && <button onClick={updatenote} className="text-center rounded-full -mt-6 p-3 w-max h-max bg-blue-400 border-2 border-black" >
          <Check className="text-4xl" />
        </button>}
      </div>
    </Notewrapper>
  );
}
