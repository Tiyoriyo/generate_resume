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
    <div className="flex flex-col items-start justify-center gap-4">
      <InputSetup
        section={sections[CurrentSection]}
        setSectionHandler={setCurrentSection}
        sectionIndex={CurrentSection}
      ></InputSetup>
      <NavBar
        curNumber={CurrentSection}
        navigateFunc={setCurrentSection}
      ></NavBar>
    </div>
  );
}
