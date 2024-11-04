import React from "react";

export default function NavButton(props) {
  const isActiveColour = props.active ? "bg-red-400" : "bg-red-300";

  console.log(props.active);

  return (
    <div className="flex w-24 flex-col items-center">
      <div
        className={`max-w-[10px] rounded-full p-[10px] shadow-md ${isActiveColour}`}
        onClick={props.onClick}
      ></div>

      <p className="text-center text-xs">{props.title}</p>
    </div>
  );
}
