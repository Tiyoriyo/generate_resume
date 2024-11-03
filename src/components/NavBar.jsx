import React, { useState } from "react";
import NavButton from "./NavButton";

export default function NavBar(props) {
  const numbers = [0, 1, 2, 3, 4];
  const buttonList = numbers.map((number) => (
    <NavButton
      key={number.toString()}
      index={number}
      onClick={() => props.navigateFunc(number)}
      active={props.curNumber === number ? true : false}
    ></NavButton>
  ));

  return <div className="flex gap-4">{buttonList}</div>;
}
