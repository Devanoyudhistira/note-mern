/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Check } from "react-bootstrap-icons";
import Deletenote from "./deletenote";

/* eslint-disable react/prop-types */
export default function Projectlist({
  projectdesc,
  title,
  percentage,
  clickhandler,
  objectid,
  closehandler,
  setnotedata
}) {
  const [projectTrack, setprojecttrack] = useState(percentage === 100);
  return (
    <div 
    data-id={objectid}
      onClick={clickhandler}
      className={`w-60 ${
        projectTrack ? "border-green-500" : "border-black"
      } border-2 box-content cursor-pointer rounded-xl flex flex-col px-3 py-1 bg-orange-200/50 text-left overflow-hidden  h-18 text-black`}
    >
      <Deletenote target={objectid} setfulldata={setnotedata} closehandler={closehandler} />
      <div className="w-full flex justify-between">
        <h1 className=" text-xl font-bold font-inter truncate"> {title} </h1>
        <h3 className=" text-lg font-bold font-inter ">
          {" "}
          {projectTrack ? (
            <Check className="inline-block text-green-500" />
          ) : (
            `${percentage}%`
          )}{" "}
        </h3>
      </div>
      <p className="text-md font-inter truncate font-medium ">
        {" "}
        {projectTrack ? (
          <span className="text-green-400 font-inter font-bold capitalize">
            project done
          </span>
        ) : (
          projectdesc
        )}{" "}
      </p>
    </div>
  );
}
