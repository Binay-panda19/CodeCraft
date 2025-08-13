import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CodeArena from "./Components/CodeArena.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CodeArena />
  </StrictMode>
);
