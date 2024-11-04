import React from "react";

export default function NavButton(props) {
  const isActiveColour = props.active ? "bg-red-400" : "bg-red-300";

  return (
    <div
      className={`rounded-full bg-red-400 p-[10px] shadow-md ${isActiveColour}`}
      onClick={props.onClick}
    ></div>
  );
}
