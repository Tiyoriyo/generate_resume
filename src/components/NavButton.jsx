import React from "react";

export default function NavButton(props) {
  const isActiveColour = props.active ? "bg-red-400" : "bg-red-300";

  return (
    <div>
      <div
        className={`max-w-[10px] rounded-full bg-red-400 p-[10px] shadow-md ${isActiveColour}`}
        onClick={props.onClick}
      ></div>

      <p className="">{props.title}</p>
    </div>
  );
}
