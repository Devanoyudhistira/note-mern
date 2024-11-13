
/* eslint-disable react/prop-types */
export default function Note({textblog,datenote,title,clickhandler,objectid}){
    return (
    <div onClick={clickhandler} data-id={objectid} className="w-44 cursor-pointer h-44 px-2 py-1 border-2 border-black text-left bg-red-200 overflow-hidden text-black">
      <h1 className="text-xl mb-2 font-bold truncate" > {title} </h1>
      <div className="h-[95px] overflow-hidden" >
        <p className="text-md font-inter font-normal truncate">
          {textblog} 
        </p>
        </div>
        <p>{datenote}</p>
      </div>)
}