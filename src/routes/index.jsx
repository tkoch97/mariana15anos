import { Route, Routes } from "react-router-dom";

import { Welcome } from "../pages/Welcome";
import { Invitation } from "../pages/Invitation";
import { Pix } from "../pages/Pix";

export function SwitchBetweenRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/invitation" element={<Invitation/>}/>
      <Route path="/pix" element={<Pix/>}/>
    </Routes>
  )
}