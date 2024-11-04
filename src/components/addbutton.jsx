/* eslint-disable react/prop-types */

import { Plus } from "react-bootstrap-icons";

export default function Addbutton() {
  return (
    <button className={`rounded-full -mt-12 mr-2 justify-self-end bg-slate-950 text-center self-end w-12 h-12 p-1`}>
      <h1 className="font-black text-4xl ml-1">
        {" "}
        <Plus className="text-white" />{" "}
      </h1>
    </button>
  );
}
