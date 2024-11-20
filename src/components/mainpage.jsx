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
import toast from "react-hot-toast";
import Tododoc from "./tododoc";
import Backdrop from "./backdrop";



export default function Mainpage({ image, name, logout, notedata, setnote }) {
    const [noteopen, setnoteopen] = useState(false);
    const [projectopen, setprojectopen] = useState(false);
    const [todoopen, settodoopen] = useState(false);
    const [isformopen, setformopen] = useState(false);
    function notedocopen(text, title, date, id) {
        setnoteopen(true);
        setnotetype({ text: text, title: title, date: date, target: id });
    }
    function projectdocopen(text, title, date, percentage, checkpoint, id) {
        setprojectopen(true);
        setprojectdata({ text: text, title: title, date: date, checkpoint: checkpoint, percentage: percentage, target: id });
    }
    function tododocopen(title, date, task, id) {
        settodoopen(true);
        settododata({ title: title, date: date, task: task, target: id });
    }
    async function projectput(newdata) {
        setprojectopen(false)
        await fetch("https://noteapi-pink.vercel.app/updateproject/", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newdata)
        }).then(res => {
            return res.json()
        })
    }
    async function todoupdate(newdata) {
        settodoopen(false)
        await fetch("https://noteapi-pink.vercel.app/updateproject/", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newdata)
        }).then(res => {
            return res.json()
        })
    }
    const [projectdata, setprojectdata] = useState({ text: "", title: "", date: "", percentage: "", checkpoint: "", target: 1 });
    const [tododata, settododata] = useState({ title: "", date: "", task: "", target: 1 });
    const [notetype, setnotetype] = useState({ text: "", title: "", date: "", target: 1 });
    return (
        <>
            <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
                {isformopen &&
                    <Backdrop onclose={() => setformopen(false)}>
                        <Noteform setform={setformopen} newdata={setnote} closehandler={(e) => { setformopen(false); e.stopPropagation }}
                        />
                    </Backdrop>}
                {noteopen && (
                    <Notedoc
                        notetext={notetype.text}
                        notetitle={notetype.title}
                        notedate={notetype.date}
                        closehandler={() => setnoteopen(false)}
                        target={notetype.target}
                        setnote={setnote}
                    />
                )}
                {projectopen && (
                    <Projectdoc
                        projecttext={projectdata.text}
                        projecttitle={projectdata.title}
                        projectdate={projectdata.date}
                        projectpercent={projectdata.percentage}
                        checkpoint={projectdata.checkpoint}
                        closehandler={projectput}
                        target={projectdata.target}
                        setnote={setnote}
                    />
                )}
                {
                    todoopen && (
                        <Tododoc
                            closehandler={todoupdate}
                            task={tododata.task}
                            tododate={tododata.date}
                            todotitle={tododata.title}
                            target={tododata.target}
                        />
                    )
                }
            </AnimatePresence>
            <Navbar logout={logout} image={image} name={name} />
            <Mainnote data={notedata} identity={name} >

                <Sectionnote
                    setnote={setnote}
                    closehandler={() => setnoteopen(false)}
                    clickhandler={tododocopen}
                    notedata={notedata}
                    icon={<Star className="inline-block" fill="gold" color="gold" />}
                    type={"to-do-list"}
                />
                <Sectionnote
                    setnote={setnote}
                    closehandler={setprojectopen}
                    clickhandler={projectdocopen}
                    notedata={notedata}
                    type={"project"}
                    icon={<Pencil className="inline-block" />}
                />
                <Sectionnote
                    closehandler={setnoteopen}
                    setnote={setnote}
                    clickhandler={notedocopen}
                    notedata={notedata}
                    type={"note"}
                    icon={<Pencil className="inline-block" />}
                />
            </Mainnote>
            <Footer>
                <Addbutton openedit={setformopen} />
            </Footer>
        </>
    )
}