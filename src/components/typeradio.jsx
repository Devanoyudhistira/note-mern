/* eslint-disable react/prop-types */
export default function Typeradio({onchange,identityvalue}){
  return (
    <label
    htmlFor={identityvalue}
    className="flex gap-1 ml-4 w-80 h-max bg-white rounded-xl border-2 border-black px-4 py-6 box-border 
      shadow-[1px_0_8px_black] duration-100 hover:border-green-400 hover:shadow-[1px_0_8px_colors.green.500]
      peer-checked:bg-green-100 peer peer-checked:border-green-500 peer-checked:shadow-[1px_0_8px_colors.green.500]"
  >
    <h1 className="font-inter text-xl peer-hover:text-green-400 capitalize font-bold">{identityvalue}</h1>
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