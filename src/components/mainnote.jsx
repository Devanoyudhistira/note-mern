/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import LoadingSpinner from "./loadingpsinner";
export default function Mainnote({children,data,identity}){

    return(
        data !== undefined ?
         <motion.main className="w-screen h-max py-2 px-2 box-border mt-1 flex gap-y-1 flex-col">
            <h1 className="col-span-2 text-2xl font-bebas text-blue-700  tracking-wider justify-self-start ml-2" >What you gonna do</h1>
            {children}
        </motion.main> : 
        <div className="mt-8 text-center" >
            <LoadingSpinner/> 
            <h1 className="text-3xl tracking-wider  font-inter font-bold" >hello {identity} </h1>
            <p className="text-xl tracking-widest animate-pulse capitalize font-inter font-medium" > loading note </p>
        </div>
    )
}