import React, { useRef, useState } from "react";
import { inputStructure } from "../assets/inputStructure";

function getDataSkeleton() {
  return {
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
}

export default function InputSetup(props) {
  const initialDataSkeleton1 = getDataSkeleton();
  const initialDataSkeleton2 = getDataSkeleton();

  const [curTempState, setCurTempState] = useState(initialDataSkeleton1);
  const [prevTempState, setPrevTempState] = useState(initialDataSkeleton2);

  const [mainData, setMainData] = useState(undefined);
  const [firstTimeInput, setFirstTimeInput] = useState(true);

  const section = props.section;
  const sectionIndex = props.sectionIndex;
  const setSectionHandler = props.setSectionHandler;

  const fieldList = inputStructure[section].fields;
  const keys = Object.keys(fieldList);

  function sdf() {
    if (firstTimeInput && mainData) {
      setFirstTimeInput(false);
      console.log("a");
      return mainData;
    } else {
      console.log("b");
      return curTempState;
    }
  }

  // console.log(mainData[section]);

  return (
    <div className="flex w-full flex-col gap-4 border p-8 shadow-md">
      <div className="flex flex-col gap-2">
        {keys.map((field, i) => {
          const data = fieldList[field];
          return (
            <div className="flex w-full flex-col" key={field}>
              <label>{data.label}</label>
              <input
                type={data.type}
                className="h-8 border shadow-sm"
                onChange={(e) => {
                  if (firstTimeInput) setFirstTimeInput(false);

                  if (!firstTimeInput) {
                    const newPrevTempState = curTempState;
                    setPrevTempState(newPrevTempState); // Set Old Input to previous temp state
                    console.log("works", prevTempState[section]);
                  }

                  const newFieldObj = curTempState; // Create new workstate object
                  const input = e.target.value; // Retrieve Input Value
                  newFieldObj[section][field] = input; // Add new input to workstate object
                  setCurTempState(newFieldObj); // Set workstate obj to current tempstate obj
                  console.log(curTempState[section]);
                }}
                value={sdf()[section][field].value}
              ></input>
            </div>
          );
        })}
      </div>
      <div className="flex gap-2">
        <button
          className="w-16 border bg-green-300"
          onClick={() => {
            if (sectionIndex < 4) {
              setSectionHandler(sectionIndex + 1);
            }
            setMainData(curTempState);
          }}
        >
          Submit
        </button>
        {/* <button className="w-16 border bg-red-300">Edit</button> */}
      </div>
    </div>
  );
}
