import React, { useState } from "react";
import NavButton from "./NavButton";

export default function NavBar(props) {
  const [CurrentButton, setCurrentButton] = useState(0);

  const numbers = [0, 1, 2, 3, 4];
  const buttonList = numbers.map((number) => (
    <NavButton
      key={number.toString()}
      index={number}
      onClick={() => setCurrentButton(number)}
      active={CurrentButton === number ? true : false}
    ></NavButton>
  ));

  return <div className="flex gap-4">{buttonList}</div>;
}
