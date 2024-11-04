import React, { useRef, useState } from "react";
import { inputStructure } from "../assets/inputStructure";

export default function InputSetup(props) {
  const section = inputStructure[props.section].title;

  return (
    <div>
      {/* Inputfield */}
      {[
        "Personal Information",
        "Professional Summary",
        "Work Experience",
        "Education Certifications",
        "Skills",
      ].map((item) => {})}
    </div>
  );
}
