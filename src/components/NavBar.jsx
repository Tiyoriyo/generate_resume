import React, { useState } from "react";
import NavButton from "./NavButton";
import { inputStructure } from "../assets/inputStructure";

export default function NavBar(props) {
  const numbers = [0, 1, 2, 3, 4];

  const rawSections = [
    "personalInformation",
    "professionalSummary",
    "workExperience",
    "educationCertifications",
    "skills",
  ];

  const sections = rawSections.map((section) => inputStructure[section].title);

  const buttonList = numbers.map((number) => (
    <NavButton
      title={sections[number]}
      key={rawSections[number]}
      index={number}
      onClick={() => props.navigateFunc(number)}
      active={props.curNumber === number ? true : false}
    ></NavButton>
  ));

  return (
    <div className="flex w-full justify-center gap-4 border-x">
      {buttonList}
    </div>
  );
}
