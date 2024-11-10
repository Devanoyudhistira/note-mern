/* eslint-disable react/prop-types */
import { PencilSquare } from "react-bootstrap-icons";
import Notewrapper from "./notewrapper";
import Backbutton from "./backbutton";

export default function Notedoc({
  closehandler,
  notetext,
  notetitle,
  notedate,
}) {
  return (
    <Notewrapper notecolor="bg-red-300" >
      <Backbutton closehandler={closehandler} />
      <div className="w-full flex items-center border-b-2 border-b-black justify-between">
        {" "}
        <h1 className="font-poppins text-3xl font-bold ">
          {notetitle}
          <p className="font-inter text-sm  font-medium" >
          {notetext.length} character
          </p>
        </h1>
        <p className="font-inter text-sm  font-medium">
          {" "}
          {notedate}  {" "}
        </p>
      </div>
      <div className="ml-1" >
        <p className="text-lg font-inter " >{notetext} </p>
      </div>
      <div className="justify-self-end self-end absolute bottom-0 px-2 py-1 h-12 w-screen border-t-2 border-black bg-slate-500/20 flex justify-end " >
          <button className="text-center rounded-full -mt-6 p-3 w-max h-max bg-blue-400 border-2 border-black" > 
              <PencilSquare className="text-2xl " />
           </button>
      </div>
    </Notewrapper>
  );
}
