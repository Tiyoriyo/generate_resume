import React, { useState } from "react";
import NavBar from "./NavBar";
import InputSetup from "./InputSetup";

export default function Container() {
  const [CurrentSection, setCurrentSection] = useState(0);

  const sections = [
    "personalInformation",
    "professionalSummary",
    "workExperience",
    "educationCertifications",
    "skills",
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-4 border p-8 shadow-md">
      <InputSetup section={sections[CurrentSection]}></InputSetup>
      <NavBar
        curNumber={CurrentSection}
        navigateFunc={setCurrentSection}
      ></NavBar>
    </div>
  );
}
