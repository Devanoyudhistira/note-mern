import { XCircle } from "react-bootstrap-icons";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
export default function Noteform({closehandler}) {
  return (
    <motion.div initial={{ scale:0 }} animate={{scale:1 }} exit={{ scale:0,opacity:0 }} className="flex flex-col fixed px-2 py-1 top-[10%] z-[100] bg-green-400 border-2 border-black w-[85vw] h-[70vh] " >
      <button onClick={closehandler} > <XCircle className="text-3xl text-red-600" /> </button>
      <form action=""></form>
    </motion.div>
  );
}
