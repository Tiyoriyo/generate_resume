import React from "react";
import NavBar from "./NavBar";

export default function Container(props) {
  return (
    <div className="flex items-end justify-center border p-8 shadow-md">
      <NavBar></NavBar>
    </div>
  );
}
