import Note from "./note";
import Projectlist from "./projectlist";
import Todo from "./todo";

/* eslint-disable react/prop-types */
export default function Sectionnote({ notedata, type, notetitle }) {
  return (
    <div id="horizontal" className="overflow-x-scroll" >
    <section className=" w-max relative grid grid-flow-col auto-cols-max mb-2 px-2 pt-5 justify-start h-max gap-4">
      <h1 className="absolute -top-2 font-bebas tracking-wider mt-2 text-xl"> {notetitle} </h1>
      {notedata.map((e) => {
        if (type === "project") {
          return (
            e.description !== undefined && (
              <Projectlist projectdesc={e.description} />
            )
          );
        } else if (type === "note") { 
          return (
            e.blog !== undefined && <Note textblog={e.blog} title={e.agenda} />
          );
        } else if (type === "to-do-list") {
          return (
            e.list !== undefined && <Todo list={e.list} title={e.agenda} />
          );
        }
      })}
    </section>
    </div>
  );
}
