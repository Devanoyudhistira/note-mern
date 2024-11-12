import { XCircle } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Noteform({ closehandler, newdata,setform }) {

  const titleref = useRef()
  const typeref = useRef()
  const [newnote, setnewnote] = useState({
    agenda: "",
    type: "note",
    date_created: new Date().toISOString(),
    description:"",
    checkpoint:[],
    blog:"",
    list:[],
    percentage:5
  })

  const handleSelectChange = (event) => {
    setnewnote(item => ({ ...item, type: event.target.value }))
    if (newnote.type === "to-do-list") {
      setnewnote(item => ({...item,list:[]}))
      } else if (newnote.type === "note") {
        setnewnote(item => ({...item,blog:""}))
      } else if (newnote.type === "project") {
        setnewnote(item => ({...item,description:"",percentage:5}))
      }
  }

  const titleinput = (e) => {
    setnewnote(item => ({...item,agenda:e.target.value})) 
  }

  async function drafdata(e) {
    e.preventDefault();
    setnewnote(item => ({...item,agenda:titleref.current.value}))
    setTimeout(await fetch("https://noteapi-pink.vercel.app/postnote/note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newnote)
    }), 2000)
    newdata(item => [...item, newnote])
    setform(false)
  }


  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0, opacity: 0 }} className="flex flex-col fixed px-2 py-1 top-[10%] z-[100] bg-green-400 border-2 rounded-2xl border-black w-[85vw] h-[70vh] " >
      <button onClick={closehandler} > <XCircle className="text-3xl text-red-600" /> </button>

      <>
        <h1 className="text-xl capitalize font-inter font-semibold self-start justify-self-start" >create note</h1>
        <form action="">
          <div className="relative w-full font-poppins p-2 mt-2 h-max">
            <input
              type="text"
              id="title"
              onChange={titleinput}
              ref={titleref}
              className="peer w-full p-2 border-b-2 border-l-2 rounded-sm border-black focus:outline-none focus:border-blue-500 placeholder-transparent"
            />
            <label
              htmlFor="title"
              className="absolute left-5 top-3 font-inter text-lg text-black transition-all duration-200 ease-in-out 
               peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg 
               peer-focus:-top-3 peer-focus:text-base peer-focus:text-blue-500"
            >
              Title
            </label>
          </div>

          <div className="w-max h-max flex items-center justify-center flex-col" >
            <label htmlFor="notetext">what your document type</label>
            <select value={newnote.type} onChange={handleSelectChange} ref={typeref} className=" font-poppins text-xl" name="notetext" id="notetext">
              <option className="font-poppins text-xl" value="note">note</option>
              <option className="font-poppins text-xl" value="to-do-list"> to-do-list </option>
              <option className="font-poppins text-xl" value="project">project</option>
            </select>
          </div>

          <button type="submit" onClick={drafdata} className="border-blue-700 text-xl mt-2 font-inter rounded-xl justify-self-end self-end font-bold border-2 px-2 py-1" > Create </button>
        </form>
      </>
    </motion.div>
  );
}
