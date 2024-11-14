import { XCircle } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import toast from "react-hot-toast"
import Typeradio from "./typeradio";

// eslint-disable-next-line react/prop-types
export default function Noteform({ closehandler, newdata, setform }) {
  const id = sessionStorage.getItem("id")
  const titleref = useRef()
  const [newnote, setnewnote] = useState({
    agenda: "",
    type: "note",
    date_created: new Date().toISOString(),
    description: "example project 1",
    checkpoint: [{ task: "example project 1", done: false }],
    blog: "example  note 1",
    list: [{ task: "task 1", done: true }, { task: "task 2", done: true }, { task: "task 3", done: false }],
    percentage: 5,
    sender: id
  })

  const titleinput = (e) => {
    setnewnote(item => ({ ...item, agenda: e.target.value }))
  }

  async function drafdata(e) {
    e.preventDefault();
    setnewnote(item => ({ ...item, agenda: titleref.current.value }))
    const postdata = await fetch("https://noteapi-pink.vercel.app/postnote/note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newnote)
    }).then(e => e.json()).then(result => {
      console.log(result)
      newdata(item => [...item, result])
      setform(false)
    })
    return postdata
  }
  const handleSubmit = async (e) => {
    await toast.promise(
      drafdata(e),
      {
        loading: "please wait",
        success: `${newnote.agenda} successfully created`,
        error: "error occurred",
      },
      {
        className: "p-3 text-2xl font-bebas bg-blue-300"
      }
    );
  };

  return (
    <motion.div animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} exit={{ opacity: 0, scale: 0 }} className="flex flex-col fixed top-[10%] z-[100] bg-white border-2 rounded-2xl border-green-400 w-[85vw] h-[80vh] px-3 py-5">
      <button onClick={closehandler} > <XCircle className="text-3xl text-red-600" /> </button>
      <>
        <h1 className="text-xl capitalize font-inter font-semibold self-start justify-self-start" >create note</h1>
        <form action="" className="flex flex-col justify-center">
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
              className={`absolute ${newnote.agenda.length === 0 ? "left-5 top-3" : "-top-3"}  font-inter text-lg text-black transition-all duration-200 ease-in-out left-3 peer-focus:-top-3 peer-focus:text-base peer-focus:text-blue-500`}
            >
              Title
            </label>
          </div>

          <div className="w-max h-full flex items-center justify-center flex-col" >
            <label htmlFor="notetext">what your document type</label>
            <div className="w-full justify-center items-center flex flex-col gap-3" >
              <Typeradio onchange={(e) => setnewnote(item => ({ ...item, type: e.target.value }))} identityvalue="project" />
              <Typeradio onchange={(e) => setnewnote(item => ({ ...item, type: e.target.value }))} identityvalue="to-do-list" />
              <Typeradio onchange={(e) => setnewnote(item => ({ ...item, type: e.target.value }))} identityvalue="note" />
            </div>
          </div>

          <button type="submit" onClick={handleSubmit} className="border-blue-700 text-xl mt-2 font-inter rounded-xl justify-self-center self-center font-bold border-2 px-2 py-1" > Create </button>

        </form>
      </>
    </motion.div>
  );
}
