import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Desktop } from "./screens/Desktop/Desktop";
import "./index.css";   // ✅ Tailwind 스타일 import

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Desktop />
  </StrictMode>
);