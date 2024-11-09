/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { ChevronLeft } from "react-bootstrap-icons";

export default function Projectdoc({
  closehandler,
  projecttext,
  projecttitle,
  projectdate,
  projectpercent,
  checkpoint
}) {
  console.log(checkpoint)
  return (
    <motion.div
      initial={{ scale: 0 }}
      exit={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1 }}
      className="w-screen h-screen fixed z-50 top-0 bg-orange-300"
    >
      <div className="flex justify-start w-screen h-8">
        <button onClick={closehandler}>
          {" "}
          <ChevronLeft className="text-2xl" />
        </button>
      </div>
      <div className="w-full mb-2 border-b-black border-b-2 grid grid-cols-2 items-center content-between justify-between" >
        {" "}
        <h1 className="text-2xl font-poppins font-semibold" > {projecttitle} </h1>
        <h2 className="text-2xl font-poppins font-medium justify-self-end" >{projectpercent}% </h2>
        <p className="text-lg font-poppins font-light" > {projectdate} </p>
      </div>
      <div className="text-lg font-inter" >{projecttext} </div>
    </motion.div>
  );
}
