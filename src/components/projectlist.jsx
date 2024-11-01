/* eslint-disable react/prop-types */
export default function Projectlist({projectdesc}){
    return(<div className="w-full text-left overflow-hidden h-24 text-black">
        <p className="text-base font-inter font-light text-ellipsis" >
          {" "} 
          {projectdesc}{" "}
        </p>
      </div>)
}