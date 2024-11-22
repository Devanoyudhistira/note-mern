/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { X } from "react-bootstrap-icons";

/* eslint-disable no-unused-vars */
export default function Confirmpopup({ text, confirmhandler, cancelhandler }) {
    return (
        <motion.div 
        initial={{ scale: 0 }}
        exit={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1 }}
         className="bg-white flex flex-col w-[90vw] left-[5%] py-2 px-3 border-4 shadow-[4px_4px_0_black] absolute z-[100] top-2/4 border-red-600 " >
            <button className="text-lg -ml-3 -mt-1 w-min px-1 py-1 rounded-full bg-red-600" onClick={cancelhandler}> <X /> </button>
            <div className="flex flex-col" >
                <h1 className="text-xl font-bold font-inter" >{text}</h1>
                <div className="flex gap-3 w-full mt-3 justify-center font-inter font-semibold text-xl" >
                    <button onClick={confirmhandler} className="mr-3 bg-sky-500 px-2 py-1" >confirm</button>
                    <button onClick={cancelhandler} className="mr-3 bg-white px-2 py-1 border-red-600 border-2"  >cancel</button>
                </div>
            </div>
        </motion.div>
    )
}