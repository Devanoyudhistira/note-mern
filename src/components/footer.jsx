/* eslint-disable react/prop-types */
export default function Footer({children}){
   return( <footer className="w-screen fixed bottom-0 h-12 items-center bg-blue-500 flex justify-end px-2 py-1">
        {children}
    </footer>)
}