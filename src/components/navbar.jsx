import image from "./122488494_p0.jpg"
export default function Navbar() {
  return (
    <nav className="bg-slate-200/40 w-screen box-border h-auto flex items-center justify-between px-2 py-1">
      <h1 className="font-bebas ml-1 text-2xl tracking-wider" >good morning Devano </h1>
      <img
        src={image}
        alt="face-profile"
        className="rounded-full w-7 h-7 object-cover object-center"
      />
    </nav>
  );
}
