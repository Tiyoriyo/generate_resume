import React, { useRef, useState } from "react";

export default function InputSetup() {
  const [Verified, setVerified] = useState(false);
  const [InputText, setInputText] = useState(undefined);
  const [VerifiedText, setVerifiedText] = useState(undefined);

  const TextInput = useRef(null);

  const vText = Verified ? "Verified" : "Not Verified";

  function handleChange(e) {
    setInputText(e.target.value);
  }

  return (
    <div>
      {/* Inputfield */}
      <div className="flex flex-col gap-4">
        <label>input</label>
        <input
          type="text"
          className="h-12 border"
          onChange={handleChange}
          ref={TextInput}
        ></input>
        <button
          type="submit"
          className="w-24 border bg-green-300"
          onClick={() => {
            setVerifiedText(InputText);
            TextInput.current.value = "";
            if (!Verified && InputText) {
              setVerified(true);
              TextInput.current.disabled = true;
            }
          }}
          onSubmit={() => setVerifiedText(InputText)}
        >
          submit
        </button>
      </div>
      {/* Debug Verified Text */}
      <p>{vText}</p>
      {/* Debug Submitted Text */}
      <p>{VerifiedText}</p>
    </div>
  );
}
