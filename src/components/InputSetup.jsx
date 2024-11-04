import React from "react";
import { inputStructure } from "../assets/inputStructure";

export default function InputSetup(props) {
  const SectionObject = inputStructure[props.section];
  const Title = SectionObject.title;
  const Fields = SectionObject.fields;

  const keyArrayList = Object.keys(Fields).map((key) => key);

  return (
    <div className="flex flex-col">
      {keyArrayList.map((field) => (
        <div className="flex w-max flex-col" key={field}>
          <label>{Fields[field].label}</label>
          <input type={Fields[field].type} className="border"></input>
        </div>
      ))}
    </div>
  );
}
