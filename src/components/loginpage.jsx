/* eslint-disable react/prop-types */
export default function Loginpage({loginWithRedirect}){
    return(
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center" >
          <h1 className="text-2xl font-inter font-bold text-blue-500 capitalize -mt-2" > welcome  </h1>
          <button type="submit" onClick={(e) => {loginWithRedirect();e.preventDefault()}} className="bg-blue-500 rounded-xl text-white font-inter mt-2 px-3 py-1 text-2xl" >login</button>
        </div>
    )
}