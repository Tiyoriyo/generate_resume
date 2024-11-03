import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import Container from "./components/Container";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container></Container>
  </StrictMode>,
);
