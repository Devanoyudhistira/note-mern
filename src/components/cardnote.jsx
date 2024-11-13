import Note from "./note";
import Todo from "./todo";

/* eslint-disable react/prop-types */
export default function Cardnote({
  noteType,
  texttitle,
  list,
  datecreated,
  textblog,
  projectdesc,
  objectid,
  bglight,
}) {
  return (
    <div className={`${bglight} overflow-hidden p-4`} data-id={objectid}  >
      <div
        className={`${bglight}  rounded-md shadow-[2px_2px_5px_black] border-2 gap-2 border-black w-52 h-56 justify-between flex flex-col p-2 text-center justify-self-center `}
      >
        <div className="flex flex-col justify-start w-full justify-self-start mb-3">
          <div className="flex w-full h-auto justify-between items-center">
            <strong className="font-inter self-start truncate text-2xl">
              {texttitle}
            </strong>
            {noteType === "to-do-list" && (
              <span className="w-2 h-2 inline-block border-1 bg-green-400 rounded-full animate-ping">
                {" "}
              </span>
            )}
          </div>
          <h6 className="text-sm font-inter self-start -mt-1 font-light text-black">
            {noteType}
          </h6>
        </div>
        {noteType === "note" && <Note textblog={textblog} />}
        {noteType === "project" && <Note textblog={projectdesc} />}
        {list && <Todo list={list} />}
        <div className="flex w-full justify-between">
          <h1 className="justify-self-start text-md font-poppins text-black font-light -mt-4 self-start">
            {" "}
            {datecreated}{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}
