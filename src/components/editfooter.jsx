/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Check, PencilSquare } from "react-bootstrap-icons";

export default function Editfooter({editmode,editmodeactive,updatenote}){
    return(
    <div className="justify-self-end self-end absolute bottom-0 px-2 py-1 mt-3 h-max w-screen border-t-2 border-black bg-red-500 flex justify-end " >
        {!editmode && <button onClick={editmodeactive} className="text-center rounded-full -mt-6 p-3 w-max h-max bg-blue-400 border-2 border-black" >
          <PencilSquare className="text-4xl " />
        </button>}
        {editmode && <button onClick={updatenote} className="text-center rounded-full -mt-6 p-3 w-max h-max bg-blue-400 border-2 border-black" >
          <Check className="text-4xl" />
        </button>}
      </div>)
}
