import { XCircle } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

import toast from "react-hot-toast"
import Typeradio from "./typeradio";

// eslint-disable-next-line react/prop-types
export default function Noteform({ closehandler, newdata, setform }) {
  const id = localStorage.getItem("id")
  const titleref = useRef()
  const [isdisable, setisdisable] = useState(false)
  const [newnote, setnewnote] = useState({
    agenda: "",
    type: "note",
    date_created: new Date().toLocaleString("id-ID", { dateStyle: "full" }),
    description: "",
    checkpoint: [{ task: "example task", done: false }],
    blog: "",
    list: [{ task: "example task", done: false }],
    percentage: 0,
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
      setisdisable(true)
    })
    return postdata
  }
  const handleSubmit = async (e) => {
    setisdisable(true)
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
    <motion.div animate={{ opacity: 1, scale: 1 }} onClick={e => e.stopPropagation()} initial={{ opacity: 0, scale: 0 }} exit={{ opacity: 0, scale: 0 }} className="flex flex-col fixed top-[10%] z-[100] bg-white border-4 shadow-[6px_6px_0_black] rounded-2xl border-black w-[85vw] h-[80vh] px-3 py-5 dark:bg-slate-900 ">
      <button onClick={closehandler} > <XCircle className="text-3xl text-red-600" /> </button>
      <>
        <h1 onClick={e => e.stopPropagation()} className="text-xl dark:text-white capitalize font-inter font-semibold self-start justify-self-start" >create note</h1>
        <form onClick={e => e.stopPropagation()} className="flex flex-col dark:text-white justify-center">
          <div className="relative w-full font-poppins p-2 mt-2 h-max">
            <input
              autoFocus
              type="text"
              id="title"
              onChange={titleinput}
              ref={titleref}
              className="peer w-full p-2 dark:bg-black border-b-2 border-l-2 rounded-sm border-black focus:outline-none dark:focus:border-white focus:border-blue-500 placeholder-transparent"
            />
            <label
              htmlFor="title"
              className={`absolute ${newnote.agenda.length === 0 ? "left-5 top-3" : "-top-3"}  font-inter text-lg text-black transition-all duration-200 ease-in-out left-3 peer-focus:-top-3 peer-focus:text-base dark:text-black peer-focus:text-blue-500`}
            >
              Title
            </label>
          </div>

          <div className="w-max h-full flex items-center justify-center flex-col" >
            <label htmlFor="notetext" className="font-inter font-medium dark:text-white text-xl" >what your document type</label>
            <div className="w-full justify-center items-center flex flex-col gap-3" >
              <Typeradio labelstyle={`hover:shadow-[1px_0_8px_colors.orange.500]
       group  dark:has-[:checked]:shadow-[1px_0_8px_colors.orange.500] has-[:checked]:shadow-[1px_0_8px_colors.orange.500] hover:border-orange-500 hover:bg-orange-500/20 has-[:checked]:bg-orange-500/50 dark:has-[:checked]:bg-orange-500`}
                inputstyle={``}
                onchange={(e) => setnewnote(item => ({ ...item, type: e.target.value }))} identityvalue="project" />
              <Typeradio
                labelstyle={`hover:shadow-[1px_0_8px_colors.blue.500]
                group  dark:has-[:checked]:shadow-[1px_0_8px_colors.blue.500] has-[:checked]:shadow-[1px_0_8px_colors.blue.600] hover:border-blue-500 hover:bg-blue-500/20 has-[:checked]:bg-blue-500/50 dark:has-[:checked]:bg-blue-500`}
                inputstyle={``}
                onchange={(e) => setnewnote(item => ({ ...item, type: e.target.value }))} identityvalue="to-do-list" />
              <Typeradio 
              labelstyle={`hover:shadow-[1px_0_8px_colors.red.500]
                group  dark:has-[:checked]:shadow-[1px_0_8px_colors.red.500] has-[:checked]:shadow-[1px_0_8px_colors.red.600] hover:border-red-500 hover:bg-red-500/20 has-[:checked]:bg-red-500/50 dark:has-[:checked]:bg-red-500`}
                inputstyle={``}
              onchange={(e) => setnewnote(item => ({ ...item, type: e.target.value }))} identityvalue="note" />
            </div>
          </div>

          <button type="submit" onClick={handleSubmit} disabled={isdisable} className="border-black shadow-[3px_3px_0_black] disabled:bg-white text-xl mt-2 font-poppins tracking-wider bg-blue-500 rounded-xl justify-self-center self-center font-bold border-2 px-3 py-1" > {isdisable ? "Loading" : "Create"} </button>

        </form>
      </>
    </motion.div>
  );
}
