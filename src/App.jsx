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
import Notedoc from "./components/notedoc";

function App() {
  const [noteopen, setnoteopen] = useState(false);
  const [notedata, setnotedata] = useState();
  useEffect(() => {
    async function getnote() {
      await fetch("https://noteapi-pink.vercel.app/getnote", {
        headers: { passkey: "devano yudhistira jago banget bjir" },
      })
        .then((res) => res.json())
        .then((result) => setnotedata(result));
    }
    getnote();
  }, []);
  return (
    <div className="flex flex-col h-[95vh] justify-start px-2 items-center">
      {noteopen && <Notedoc closehandler={() => setnoteopen(false)} />}
      <Navbar />
      <Input
        identity="searchnote"
        labeltext="search"
        inputType="search"
        style="py-2 bg-sky-500/20 outline-none border-2 border-sky-600/60 rounded-2xl px-1 text-xl w-full h-full"
      />
      <Mainnote>
        <Sectionnote
          clickhandler={() => setnoteopen(true)}
          notedata={notedata}
          notetitle={"to-do-list"}
          icon={<Star className="inline-block" fill="gold" color="gold" />}
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
