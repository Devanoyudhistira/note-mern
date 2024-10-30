/* eslint-disable react/prop-types */
export default function Mainnote({children}){
    return(
        <main className="w-screen h-max py-2 mt-1 grid gap-y-2 grid-cols-2">
            <h1 className="col-span-2 text-xl font-poppins font-bold tracking-wider justify-self-start ml-2" >What you gonna do</h1>
            {children}
        </main>
    )
}