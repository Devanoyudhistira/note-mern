import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Github, Instagram } from "react-bootstrap-icons";

/* eslint-disable react/prop-types */
export default function Navbar({ logout, name, image }) {
  const [isshownav, setishownav] = useState(false)
  return (
    <nav className=" w-screen box-border h-auto relative flex items-center justify-between px-2 py-1">
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {isshownav && <motion.div initial={{ opacity:0,scaleY:0 }} animate={{ opacity:1,scaleY:1 }} exit={{ opacity:0,scaleY:0 }} className="absolute flex flex-col gap-2 right-4 top-8 w-max h-max px-4 py-2 bg-white shadow-[2px_2px_8px_black] z-50" >
          <h1>{name}</h1>
          <ul>
            <li className="listicon" > <Instagram className="inline-block mr-2 " /> <a href="https://www.instagram.com/devano15.08/?next=%2F">instagram</a></li>
            <li className="listicon" > <Github className="inline-block mr-2 text-black" /> <a href="https://github.com/Devanoyudhistira"> github</a></li>
          </ul>
          <button onClick={logout} className=" font-inter text-xl px-2 py-1 rounded-xl bg-red-600">logout</button>
        </motion.div>}
      </AnimatePresence>
      <h1 className="font-bebas ml-1 text-2xl tracking-wider" >good morning {name} </h1>
      <img
        onClick={() => setishownav(!isshownav)}
        src={image}
        alt="face-profile"
        className="rounded-full w-7 h-7 object-cover object-center"
      />
    </nav>
  );
}
