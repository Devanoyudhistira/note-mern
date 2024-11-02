/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
import Navbar from "./components/navbar";
import Input from "./components/input";
import Mainnote from "./components/mainnote";
import Footer from "./components/footer";
import Addbutton from "./components/addbutton";
import Sectionnote from "./components/sectionnote";
import { Pencil, Star } from "react-bootstrap-icons";
function App() {
  const [notedata, setnotedata] = useState([
    {
      agenda: "belajar ts",
      type: "to-do-list",
      list: [
        { task: "type variable", done: true },
        { task: "array of object", done: true },
        { task: "belajar tsx", done: true },
        { task: "object oriented programn", done: false },
      ],
      "date-created": "12-12-24",
    },
    {
      agenda: "belajar php",
      type: "project",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quod consectetur beatae magnam unde dolores aut ipsam fugiat rem voluptatibus? dbadjdha bd dahdhdad  hdaodhoadha",
      percentage:20,
      "date-created": "12-12-24",
      "date-target": "20-12-24",
    },
    {
      agenda: "belajar laravel",
      type: "note",
      blog: "belahar laravel melalu video cahnnel youtube pak sandhika galih adipisicing elit. Cum quod consectetur beatae",
      "date-created": "12-12-24",
      "bg-light": "bg-green-400",
      "bg-dark": "bg-green-800",
    },
    {
      agenda: "belajar assembly",
      type: "note",
      blog: "belahar laravel melalu video cahnnel youtube pak sandhika galih adipisicing elit. Cum quod consectetur beatae",
      "date-created": "12-12-24",
      "bg-light": "bg-green-400",
      "bg-dark": "bg-green-800",
    },
    {
      agenda: "tawarkan jasa",
      type: "project",
      description:
        "membuat alat untuk membantu eluarga dan teman deat ibu saya budhe teman saya",
      percentage: 20,
      "date-created": "12-12-24",
      "date-target": "20-12-24",
    },
    {
      agenda: "already cleared",
      type: "project",
      description:
        "membuat alat untuk membantu eluarga dan teman deat ibu saya budhe teman saya",
      percentage: 100,
      "date-created": "12-12-24",
      "date-target": "20-12-24",
    },
    {
      agenda: "belajar ruby",
      type: "to-do-list",
      list: [
        { task: "ruby object", done: true },
        { task: "array", done: true },
        { task: "integer", done: false },
        { task: "ruby on rails", done: false },
      ],
      "date-created": "12-12-24",
    },
    {
      agenda: "belajar ruby",
      type: "to-do-list",
      list: [],
      "date-created": "12-12-24",
    },
  ]);
  return (
    <div className="flex flex-col h-[95vh] justify-start px-2 items-center">
      <Navbar />
      <Input
        identity="searchnote"
        labeltext="search"
        inputType="search"
        style="py-2 bg-sky-500/20 outline-none border-2 border-sky-600/60 rounded-2xl px-1 text-xl w-full h-full"
      />
      <Mainnote>
        <Sectionnote
          notedata={notedata}
          notetitle={"to-do-list"}
          icon={<Star className="inline-block" fill="red" color="red" />}
          type={"to-do-list"}
        />
        <Sectionnote
          notedata={notedata}
          notetitle={"project"}
          type={"project"}
          icon={<Pencil className="inline-block" />}
        />
        <Sectionnote
          notedata={notedata}
          notetitle={"note"}
          type={"note"}
          icon={<Pencil className="inline-block" />}
        />
      </Mainnote>
      <Footer>
        <Addbutton />
      </Footer>
    </div>
  );
}

export default App;
