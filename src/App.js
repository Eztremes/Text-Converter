import "./App.css";
import Textform from "./Component/Textform";
import { useState } from "react";
import About from "./Component/About";
import {Route,Routes,} from "react-router-dom";

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
        <Routes>
          <Route path="/" element={ <Textform handleMode={handleMode} mode={mode} />} />
          <Route path="/about" element={<About mode={mode} handleMode={handleMode} />} />
        </Routes>
  );
}
export default App;
