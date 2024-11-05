/* eslint-disable react/prop-types */

import { Search } from "react-bootstrap-icons";

export default function Input({ style, inputType, identity }) {
  return (
    <label
      className="w-[95vw] rounded-sm items-center mt-2 relative flex"
      htmlFor={identity}
    >
      <button className="font-poppins font-medium text-xl absolute z-40 right-2 text-black">
        {" "}
        <Search />{" "}
      </button>
      <input
        className={style}
        type={inputType}
        name={identity}
        id={identity}
      />
    </label>
  );
}
