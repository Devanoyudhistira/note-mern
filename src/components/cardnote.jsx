/* eslint-disable react/prop-types */
export default function Cardnote({ texttitle, datecreated, textblog,bglight }) {
  return (
    <div className={`${bglight} rounded-md shadow-[2px_2px_5px_black] border-2 border-black w-44 h-52 gap-2 justify-between flex flex-col p-2 text-center justify-self-center`}>
      <strong className="self-start font-inter text-lg" >{texttitle}</strong>
      <div className="w-full text-left -mt-8 overflow-hidden h-24 text-white">
        <p className="text-base font-inter font-light text-ellipsis"> {textblog} </p>
      </div>
      <div className="flex w-full justify-between" >
      <p className="justify-self-start text-md font-poppins text-white font-extralight mt-2 self-start"> {datecreated} </p>
      </div>
    </div>
  );
}
