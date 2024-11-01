/* eslint-disable react/prop-types */

// import { Plus } from "react-bootstrap-icons";


export default function Addbutton({background}){
    return(
        <button className={`rounded-full ${background} self-end w-6 h-6 p-1`} >
            <h1 className="font-black text-xl " >+</h1>
        </button>
    )
}