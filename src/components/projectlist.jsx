/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Check } from "react-bootstrap-icons";

/* eslint-disable react/prop-types */
export default function Projectlist({ projectdesc, title, percentage }) {
  const [projectTrack, setprojecttrack] = useState(percentage === 100);
  return (
    <div
      className={`w-60 ${
        projectTrack ? "border-green-400" : "border-black"
      } border-2 box-content  rounded-3xl flex flex-col px-3 py-1 bg-orange-400 text-left overflow-hidden  h-16 text-black`}
    >
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
          <span className="text-green-400 font-inter font-bold">
            project done
          </span>
        ) : (
          projectdesc
        )}{" "}
      </p>
    </div>
  );
}
