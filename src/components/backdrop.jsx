/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
export default function Backdrop({children,onclose}){
    return (<motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} onClick={onclose} className="bg-black/0 w-screen h-screen absolute z-50 top-0 flex justify-center items-center left-0" >
        {children}
    </motion.div>)
}