/* eslint-disable react/prop-types */
export default function Typeradio({onchange,identityvalue,labelstyle,inputstyle}){
  return (
    <label
    htmlFor={identityvalue}
    style={{  }}
    className={`flex gap-1 ml-2 w-72 h-max bg-white dark:bg-black rounded-xl border-2 border-black px-4 py-6 box-border 
      shadow-[1px_0_8px_black] duration-200 ${labelstyle} `}
  >
    <h1 className={`font-inter text-xl ${inputstyle} dark:text-white text-black capitalize font-bold`}>{identityvalue}</h1>
    <input
      onChange={onchange}
      type="radio"
      className="peer opacity-0"
      value={identityvalue}
      name="typeradio"
      id={identityvalue}
    />
  </label>
  
  )  
}