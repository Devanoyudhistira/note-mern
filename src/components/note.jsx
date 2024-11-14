import Deletenote from "./deletenote";

/* eslint-disable react/prop-types */
export default function Note({textblog,datenote,title,clickhandler,objectid,setnotedata,closehandler}){
    return (
    <div onClick={clickhandler} data-id={objectid} className="w-44 cursor-pointer h-44 px-2 py-1 shadow-[2px_2px_0_black] border-2 relative  box-border border-black text-left bg-red-500 overflow-hidden text-black">
      <Deletenote target={objectid}  setfulldata={setnotedata} closehandler={closehandler} />
      <h1 className="text-xl mb-2 font-bold truncate" > {title} </h1>
      <div className="h-[95px] overflow-hidden">
        <p className="text-md font-inter font-normal truncate">
          {textblog} 
        </p>
        </div>
        <p>{datenote}</p>
      </div>)
}