import React, { useRef, useState } from "react";
import { inputStructure } from "../assets/inputStructure";
import { data } from "../assets/dataHolder";

const initialState = {
  personalInformation: {
    fullName: {
      value: undefined,
    },
    professionalTitle: {
      value: undefined,
    },
    phoneNumber: {
      value: undefined,
    },
    email: {
      value: undefined,
    },
    linkedInProfile: {
      value: undefined,
    },
    portfolio: {
      value: undefined,
    },
  },
  professionalSummary: {
    summary: {
      value: undefined,
    },
  },
  workExperience: {
    jobTitle: {
      value: undefined,
    },
    companyName: {
      value: undefined,
    },
    location: {
      value: undefined,
    },
    startDate: {
      value: undefined,
    },
    endDate: {
      value: undefined,
    },
    responsibilities: {
      value: undefined,
    },
  },
  educationCertifications: {
    degree: {
      value: undefined,
    },
    institution: {
      value: undefined,
    },
    graduationDate: {
      value: undefined,
    },
    achievements: {
      value: undefined,
    },
  },
  skills: {
    skill: {
      value: undefined,
    },
  },
};

export default function InputSetup(props) {
  const [tempData, setTempData] = useState(initialState);

  const fieldList = inputStructure[props.section].fields;
  const keys = Object.keys(fieldList).map((key) => key);

  return (
    <div className="flex w-full flex-col gap-4 border p-8 shadow-md">
      <div className="flex flex-col gap-2">
        {keys.map((field, i) => (
          <div className="flex w-full flex-col" key={field}>
            <label>{fieldList[field].label}</label>
            <input
              type={fieldList[field].type}
              className="h-8 border shadow-sm"
              onChange={(e) => {
                const fieldName = Object.keys(fieldList)[i];
                const inputData = e.target.value;
                let temp = tempData;
                temp[props.section][fieldName].value = inputData;
                console.log(tempData);
                setTempData(temp);
              }}
              value={tempData[props.section][Object.keys(fieldList)[i]].value}
            ></input>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <button
          className="w-16 border bg-green-300"
          onClick={() => {
            if (props.sectionIndex < 4) {
              data[props.section] = props.setSectionHandler(
                props.sectionIndex + 1,
              );
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
