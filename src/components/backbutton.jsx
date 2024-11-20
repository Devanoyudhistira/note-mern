/* eslint-disable react/prop-types */
import { ChevronLeft } from "react-bootstrap-icons";

export default function Backbutton({closehandler}){
return(<div className="flex justify-start border-b-2 border-black px-2 py-1 box-border">
    <button onClick={closehandler}>
      {" "}
      <ChevronLeft className="text-4xl" />
    </button>
  </div>)
}