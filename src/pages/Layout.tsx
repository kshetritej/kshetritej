import  Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Homepage from "./Homepage";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Routes, Route } from "react-router-dom";
export default function Layout(){
  return (
    <div>
        <Navbar />

        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </div>
  )
}