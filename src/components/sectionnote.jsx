import Note from "./note";
import Projectlist from "./projectlist";
import Todo from "./todo";

/* eslint-disable react/prop-types */
export default function Sectionnote({ clickhandler,notedata, type, icon }) {
  return (
    <div id="horizontal" className="overflow-x-scroll relative">
      <h1 className="absolute -top-2 font-bebas tracking-wider mt-2 text-xl">
        {" "}
        {type} {icon}{" "}
      </h1>
      <section className=" w-max mt-2 shadow-[1px_3px_10px_black grid grid-flow-col auto-cols-max mb-2 px-2 pt-5 justify-start h-max gap-4">
        {notedata !== undefined && notedata.map((e) => {
          if (type === "project") {
            return (
              e.description !== undefined && e.type === type && (
                <Projectlist clickhandler={() => clickhandler(e.description,e.agenda,e["date_created"],e.percentage,e.checkpoint)} projectdesc={e.description} percentage={e.percentage} title={e.agenda} />
              )
            );
          } else if (type === "note") {
            return (
              e.blog !== undefined && e.type === type && (
                <Note textblog={e.blog} clickhandler={() => clickhandler(e.blog,e.agenda,e["date_created"])} title={e.agenda} />
              )
            );
          } else if (type === "to-do-list") {
            return (
              e.list !== undefined && e.type === type && <Todo clickhandler={clickhandler} list={e.list} title={e.agenda} />
            );
          }
        })}
      </section>
    </div>
  );
}
