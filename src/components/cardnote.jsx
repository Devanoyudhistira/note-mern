/* eslint-disable react/prop-types */
export default function Cardnote({
  noteType,
  texttitle,
  list,
  datecreated,
  textblog,
  bglight,
}) {
  return (
    <div
      className={`${bglight} rounded-md shadow-[2px_2px_5px_black] border-2 border-black w-52 ${list ? "h-50" : "h-64" } gap-2 justify-between flex flex-col p-2 text-center justify-self-center `}
    >
      <div className="flex flex-col justify-start w-full justify-self-start mb-3">
        <strong className="font-inter self-start text-lg">{texttitle}</strong>
        <h6 className="text-[12px] font-inter self-start -mt-1 font-light text-black">
          {noteType}
        </h6>
      </div>
      {textblog && (
        <div className="w-full text-left -mt-6 overflow-hidden h-24 text-black">
          <p className="text-base font-inter font-light text-ellipsis">
            {" "}
            {textblog}{" "}
          </p>
        </div>
      )}
      {list && (
        <ol className="text-left marker:text-blue-500 h-30 overflow-hidden -mt-4 font-inter list-disc text-black font-semibold">
          {list.map((e, i) => {
            if (i <= 2) {
              return (
                <li className="list-disc ml-6 font-inter mb-[3px]" key={e}>
                  {" "}
                  {e}
                </li>
              );
            }
          })}
        </ol>
      )}
      <div className="flex w-full justify-between">
        <p className="justify-self-start text-md font-poppins text-black font-extralight mt-2 self-start">
          {" "}
          {datecreated}{" "}
        </p>
      </div>
    </div>
  );
}
