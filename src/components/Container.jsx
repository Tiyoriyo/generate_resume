import React, { useState } from "react";
import NavBar from "./NavBar";
import Count from "./Count";

export default function Container() {
  const [CurrentSection, setCurrentSection] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center gap-4 border p-8 shadow-md">
      <Count curNumber={CurrentSection}></Count>
      <NavBar
        curNumber={CurrentSection}
        navigateFunc={setCurrentSection}
      ></NavBar>
    </div>
  );
}
