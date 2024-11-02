/* eslint-disable react/prop-types */
export default function Projectlist({ projectdesc, title ,percentage}) {
  return (
    <div className="w-60 border-2 box-content border-black rounded-3xl flex flex-col px-3 py-1 bg-orange-400 text-left overflow-hidden  h-16 text-black">
      <div className="w-full flex justify-between" >
        <h1 className=" text-xl font-bold font-inter truncate"> {title} </h1>
        <h3 className=" text-lg font-bold font-inter " >  {percentage} </h3>
      </div>
      <p className="text-md font-inter truncate font-medium ">
        {" "}
        {projectdesc}{" "}
      </p>
    </div>
  );
}
