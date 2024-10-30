/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/navbar";
import Input from "./components/input";
import Mainnote from "./components/mainnote";
import Cardnote from "./components/cardnote";

function App() {
  const [notedata, setnotedata] = useState([
    {
      agenda: "belajar ts",
      type: "to-do-list",
      list:["type checking","object orientation programing","make simple project"],
      "date-created": "12-12-24",
      "bg-light":"bg-sky-400",
      "bg-dark":"bg-sky-800"
    },
    {
      agenda: "belajar assembly",
      type: "to-do-list",
      list:["type checking","object orientation programing","make simple project"],
      "date-created": "12-12-24",
      "bg-light":"bg-sky-400",
      "bg-dark":"bg-sky-800"
    },
    {
      agenda: "belajar php",
      type: "project",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quod consectetur beatae magnam unde dolores aut ipsam fugiat rem voluptatibus? dbadjdha bd dahdhdad  hdaodhoadha",
      percentage:`${20}%`,
      "date-created": "12-12-24",
      "date-target": "20-12-24",
      "bg-light":"bg-orange-400",
      "bg-dark":"bg-orange-800"
    },
    {
      agenda: "tawarkan jasa",
      type: "project",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quod consectetur beatae magnam unde dolores aut ipsam fugiat rem voluptatibus? dbadjdha bd dahdhdad  hdaodhoadha",
      percentage:`${20}%`,
      "date-created": "12-12-24",
      "date-target": "20-12-24",
      "bg-light":"bg-orange-400",
      "bg-dark":"bg-orange-800"
    },
    {
      agenda: "belajar golang",
      type: "note",
      blog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quod consectetur beatae magnam unde dolores aut ipsam fugiat rem voluptatibus?",
      "date-created": "12-12-24",
      "bg-light":"bg-green-400",
      "bg-dark":"bg-green-800"
    },
    {
      agenda: "belajar laravel",
      type: "note",
      blog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quod consectetur beatae magnam unde dolores aut ipsam fugiat rem voluptatibus?",
      "date-created": "12-12-24",
      "bg-light":"bg-green-400",
      "bg-dark":"bg-green-800"
    },
    {
      agenda: "belajar ruby",
      type: "to-do-list",
      list:["array","intger","ruby object","ruby on rails "],
      "date-created": "12-12-24",
      "bg-light":"bg-sky-400",
      "bg-dark":"bg-sky-800"
    },
  ]);
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Input
        identity="searchnote"
        labeltext="search"
        inputType="search"
        style="py-2 bg-sky-500/20 outline-none border-2 border-sky-600/60 rounded-2xl px-1 text-xl w-full h-full"
      />
      <Mainnote>
        {notedata.map((e) => 
          <Cardnote
            key={e.agenda}
            noteType={e.type}
            list={e.list}
            textblog={e.blog}
            bglight={e["bg-light"]}
            datecreated={e["date-created"]}
            dateended={e["date-target"]}
            projectdesc={e.description}
            texttitle={e.agenda}
          />
        )}
      </Mainnote>
    </div>
  );
}

export default App;
