import Navbar from "./Component/Navbar";
import "./App.css";
import Textform from "./Component/Textform";
import { useState } from "react";
import About from "./Component/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
     
      <BrowserRouter>
      <Navbar
          title="TextSurface"
          aboutText="About"
          mode={mode}
          handleMode={handleMode}
        />
        <Routes>
          <Route index element={ <Textform heading="TextConverter" mode={mode} />} />
          <Route path="/home" element={ <Textform heading="TextConverter" mode={mode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
     
     
      
    </>
  );
}
export default App;
