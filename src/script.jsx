import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Board from './Square.jsx'

createRoot(document.getElementById("root")).render(
  <>
    <Board />
  </>
)

