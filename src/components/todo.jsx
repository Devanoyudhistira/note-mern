/* eslint-disable react/prop-types */
export default function Todo({ list, title }) {
  const taskdone = list.filter((e) => e.done).length;
  const totaltask = list.length
  console.log(taskdone);
  return (
    <ol className="text-left bg-blue-400 w-40 h-20 border-2 box-content border-sky-700/30 px-1 py-1 marker:text-blue-500  overflow-hidden font-inter list-disc text-black flex flex-col justify-evenly rounded-xl font-semibold">
      <div className="w-full flex justify-self-start self-start items-center align-center justify-between ">
        <h1 className="truncate text-xl ">{title}</h1>
        <p className="text-lg font-bold" ><span className="text-green-400" >{taskdone}/</span><span className="text-red-600" >{totaltask}</span> </p>
      </div>
      {list.map((e, i) => {
        if (i === 0) {
          return (
            <li
              className="list-disc ml-1 text-md -mt-3 font-medium text-black font-inter mb-[3px] truncate "
              key={e.task}
            >
              {" "}
              {e.task}
            </li>
          );
        }
      })}
    </ol>
  );
}
