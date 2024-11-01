/* eslint-disable react/prop-types */
export default function Todo({ list }) {
  console.log(list)
  return (
    <ol className="text-left marker:text-blue-500 h-30 overflow-hidden font-inter list-disc text-black font-semibold">
      {list.map((e, i) => {
        if (i <= 2) {
          return (
            <li className="list-disc ml-6 font-inter mb-[3px]" key={e.task}>
              {" "}
              {e.task}
            </li>
          );
        }
      })}
    </ol>
  );
}
