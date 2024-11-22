/* eslint-disable react/prop-types */
import { useState } from "react";
import { Trash2Fill } from "react-bootstrap-icons";
import toast from "react-hot-toast";

export default function Deletenote({ target,setfulldata,closehandler}) {
    const [deleteclick,setdeleteclic] = useState(false)
    async function deletebutton(id) {
        setdeleteclic(true)
        closehandler(false)
        await fetch("https://noteapi-pink.vercel.app/deletenote", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "target": id })
        }).then(res => res.json()).then(() => {
            closehandler(false)
            setfulldata(fulldata => (fulldata.filter(e => e["_id"] !== target)))
            setdeleteclic(false)
        })
    }
    async function alertdelete(id) {        
        await toast.promise(deletebutton(id), {
            loading:"deleting...",
            success: "note deleted",
            error: "delete failed",
        }, { className: "p-3 text-2xl font-bebas bg-blue-300" })
    }
    return (<div className="w-[60%] z-[60] relative left-0 flex px-1 box-border items-center -ml-3 rounded-br-3xl -mt-2 h-6 py-3 bg-white border-black border-2" >
        <button disabled={deleteclick} onClick={(e) => {e.stopPropagation();alertdelete(target)}}>
            <Trash2Fill className="txt-red-600 text-xl" />
        </button>
    </div>)
}