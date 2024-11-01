
/* eslint-disable react/prop-types */
export default function Note({textblog,datenote,title}){
    return (
    <div className="w-30 h-24 text-left bg-red-500 overflow-hidden text-black">
      <h1> {title} </h1>
        <p className="text-base font-inter truncate font-normal text-ellipsis">
          {textblog} 
        </p>
        <p>{datenote}</p>
      </div>)
}