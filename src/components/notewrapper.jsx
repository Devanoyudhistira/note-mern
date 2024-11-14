/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"

export default function Notewrapper({ notecolor, children }) {
    return(
    <motion.div
        initial={{ scale: 0 }}
        exit={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1 }}
        className={`w-screen h-[100dvh] fixed z-[100] top-0 ${notecolor}`}>
            {children}
    </motion.div>)
}
