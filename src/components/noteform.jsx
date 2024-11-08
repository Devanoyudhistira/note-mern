import { XCircle } from "react-bootstrap-icons";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
export default function Noteform({ closehandler }) {
  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0, opacity: 0 }} className="flex flex-col fixed px-2 py-1 top-[10%] z-[100] bg-green-400 border-2 border-black w-[85vw] h-[70vh] " >
      <button onClick={closehandler} > <XCircle className="text-3xl text-red-600" /> </button>
      <h1 className="text-xl capitalize font-inter font-semibold self-start justify-self-start" >create note</h1>
      <form action="">
        <div className="relative w-full font-poppins p-2 mt-2 h-max">
          <input
            type="text"
            id="input"
            className="peer w-full p-2 border-b-2 border-l-2 rounded-sm border-black focus:outline-none focus:border-blue-500 placeholder-transparent"
          />
          <label
            htmlFor="input"
            className="absolute left-5 top-3 font-inter text-lg text-black transition-all duration-200 ease-in-out 
               peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg 
               peer-focus:-top-3 peer-focus:text-base peer-focus:text-blue-500"
          >
            Title
          </label>
        </div>

        <div className="w-max h-max flex flex-col" >
          <label htmlFor="notetext">type your first note</label>
          <textarea name="value" className="w-[370px] border-2 border-black outline-none resize-none h-40 bg-red-600/0" id="notetext">
          </textarea>
        </div>
        <button type="submit" onClick={(e) => e.preventDefault()} className="border-blue-700 text-xl mt-2 font-inter rounded-xl justify-self-end self-end font-bold border-2 px-2 py-1" > Create </button>
      </form>
    </motion.div>
  );
}
