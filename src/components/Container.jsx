import React, { useState } from "react";
import NavBar from "./NavBar";
import InputSetup from "./InputSetup";

export default function Container() {
  const [curSection, setCurSection] = useState(0);
  const [prevSection, setPrevSection] = useState(0);

  const sections = [
    "personalInformation",
    "professionalSummary",
    "workExperience",
    "educationCertifications",
    "skills",
  ];

  return (
    <div className="flex flex-col items-start justify-center gap-8">
      <InputSetup
        section={sections[curSection]}
        setSectionHandler={setCurSection}
        sectionIndex={curSection}
        previousSection={prevSection}
        setPreviousSection={setPrevSection}
      ></InputSetup>
      <NavBar curNumber={curSection} navigateFunc={setCurSection}></NavBar>
    </div>
  );
}
