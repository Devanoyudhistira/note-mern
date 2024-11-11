/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
// import { motion } from "framer-motion";
import Navbar from "./navbar";
import Input from "./input";
import Mainnote from "./mainnote";
import Footer from "./footer";
import Addbutton from "./addbutton";
import Sectionnote from "./sectionnote";
import { Pencil, Star } from "react-bootstrap-icons";
import Notedoc from "./notedoc";
import { AnimatePresence } from "framer-motion";
import Projectdoc from "./projectdoc";
import Noteform from "./noteform";

export default function Mainpage({ image, name, logout, notedata,setnote }) {
    const [noteopen, setnoteopen] = useState(false);
    const [projectopen, setprojectopen] = useState(false);
    const [isformopen, setformopen] = useState(false);
    function notedocopen(text, title, date) {
        setnoteopen(true);
        setnotetype({ text: text, title: title, date: date });
    }
    function projectdocopen(text, title, date,percentage,checkpoint) {
        setprojectopen(true);
        setprojectdata({ text: text, title: title, date: date,checkpoint:checkpoint,percentage:percentage });
    }
    const [projectdata, setprojectdata] = useState({ text: "", title: "", date: "" ,percentage:"",checkpoint:""});
    const [notetype, setnotetype] = useState({ text: "", title: "", date: "" });

    return (
        <>
            <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
                {isformopen && <Noteform newdata={setnote} closehandler={() => setformopen(false)} />}
                {noteopen && (
                    <Notedoc
                        notetext={notetype.text}
                        notetitle={notetype.title}
                        notedate={notetype.date}
                        closehandler={() => setnoteopen(false)}
                    />
                )}
                {projectopen && (
                    <Projectdoc
                        projecttext={projectdata.text}
                        projecttitle={projectdata.title}
                        projectdate={projectdata.date}
                        projectpercent={projectdata.percentage}
                        checkpoint={projectdata.checkpoint}
                        closehandler={() => setprojectopen(false)}
                    />
                )}
            </AnimatePresence>
            <Navbar logout={logout} image={image} name={name} />
            <Input
                identity="searchnote"
                labeltext="search"
                inputType="search"
                style="py-2 bg-white outline-none border-2 border-black rounded-2xl px-1 text-xl w-full h-full"
            />
            <Mainnote data={notedata} identity={name} >
                
                <Sectionnote
                    clickhandler={() => console.log("note")}
                    notedata={notedata}
                    notetitle={"to-do-list"}
                    icon={<Star className="inline-block" fill="gold" color="gold" />}
                    type={"to-do-list"}
                />
                <Sectionnote
                    clickhandler={projectdocopen}
                    notedata={notedata}
                    notetitle={"project"}
                    type={"project"}
                    icon={<Pencil className="inline-block" />}
                />
                <Sectionnote
                    clickhandler={notedocopen}
                    notedata={notedata}
                    notetitle={"note"}
                    type={"note"}
                    icon={<Pencil className="inline-block" />}
                />
            </Mainnote>
            <Footer>
                <Addbutton openedit={() => setformopen(true)} />
            </Footer>
        </>
    )
}