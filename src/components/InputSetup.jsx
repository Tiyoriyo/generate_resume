import React from "react";
import { inputStructure } from "../assets/inputStructure";

export default function InputSetup(props) {
  const SectionObject = inputStructure[props.section];
  const Fields = SectionObject.fields;
  const keyArrayList = Object.keys(Fields).map((key) => key);
  const sectionHandler = props.setSectionHandler;

  return (
    <div className="flex w-full flex-col gap-4 border p-8 shadow-md">
      <div className="flex flex-col gap-2">
        {keyArrayList.map((field) => (
          <div className="flex w-full flex-col" key={field}>
            <label>{Fields[field].label}</label>
            <input
              type={Fields[field].type}
              className="h-8 border shadow-sm"
            ></input>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <button
          className="w-16 border bg-green-300"
          onClick={() => {
            if (props.sectionIndex < 4) {
              sectionHandler(props.sectionIndex + 1);
            }
          }}
        >
          Submit
        </button>
        {/* <button className="w-16 border bg-red-300">Edit</button> */}
      </div>
    </div>
  );
}
