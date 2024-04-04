import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
        <div className="container">
          <Navbar />
          <Header />
          <Skills/>
          <Footer/>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
