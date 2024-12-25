import Navbar from "@/components/Navbar";
import Homepage from "./Homepage";
import { Routes, Route } from "react-router-dom";
export default function Layout(){
  return (
    <div>
        <Navbar />

        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
    </div>
  )
}