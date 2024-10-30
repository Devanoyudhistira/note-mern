/* eslint-disable react/prop-types */


export default function Addbutton({icon,background}){
    return(
        <button className={`rounded-full ${background} w-6 h-6 p-1`} >
            {icon}
        </button>
    )
}