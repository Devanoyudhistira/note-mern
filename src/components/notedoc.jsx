/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import {  ChevronBarRight } from "react-bootstrap-icons";

export default function Notedoc({closehandler}) {
  return (
    <motion.div className="w-screen h-screen fixed z-50 top-0 bg-red-300">
      <div className="flex justify-end w-screen h-8" >
       <button onClick={closehandler} > <ChevronBarRight className="text-2xl" /></button>
      </div>
      <div>
        {" "}
        <h1>judul note</h1>
        <p> tanggal </p>
      </div>
      <div>membuat alat untuk membantu keluarga dan teman </div>
    </motion.div>
  );
}
