/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { ChevronRight } from "react-bootstrap-icons";

export default function Projectdoc({
  closehandler,
  projecttext,
  projecttitle,
  projectdate,
}) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      exit={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1 }}
      className="w-screen h-screen fixed z-50 top-0 bg-red-300"
    >
      <div className="flex justify-end w-screen h-8">
        <button onClick={closehandler}>
          {" "}
          <ChevronRight className="text-2xl" />
        </button>
      </div>
      <div>
        {" "}
        <h1> {projecttitle} </h1>
        <p> {projectdate} </p>
      </div>
      <div> {projecttext} </div>
    </motion.div>
  );
}
