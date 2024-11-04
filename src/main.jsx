import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import Container from "./components/Container";
import InputSetup from "./components/InputSetup";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container></Container>
    <InputSetup></InputSetup>
  </StrictMode>,
);
