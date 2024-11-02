/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
export default function Mainnote({children}){
    return(
         <motion.main className="w-screen h-max py-2 px-2 box-border mt-1 flex gap-y-1 flex-col">
            <h1 className="col-span-2 text-2xl font-bebas text-blue-700  tracking-wider justify-self-start ml-2" >What you gonna do</h1>
            {children}
        </motion.main>
    )
}