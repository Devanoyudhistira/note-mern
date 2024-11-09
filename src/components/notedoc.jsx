/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { ChevronLeft, PencilSquare } from "react-bootstrap-icons";

export default function Notedoc({
  closehandler,
  notetext,
  notetitle,
  notedate,
}) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      exit={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1 }}
      className="w-screen h-screen flex flex-col fixed overflow-hidden z-50 top-0 bg-red-300"
    >
      <div className="flex justify-start bg-slate-100/10 border-black px-2 py-1 box-border border-b-2">
        <button onClick={closehandler}>
          {" "}
          <ChevronLeft className="text-4xl" />
        </button>
      </div>
      <div className="w-full flex items-center justify-between">
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
      <div className="ml-1" >
        <p className="text-lg font-inter " >{notetext} </p>
      </div>
      <div className="justify-self-end self-end absolute bottom-0 px-2 py-1 h-12 w-screen border-t-2 border-black bg-slate-500/20 flex justify-end " >
          <button className="text-center rounded-full -mt-6 p-3 w-max h-max bg-blue-400 border-2 border-black" > 
              <PencilSquare className="text-2xl " />
           </button>
      </div>
    </motion.div>
  );
}
