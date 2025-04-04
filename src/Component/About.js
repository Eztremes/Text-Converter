import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
export default function About({mode,handleMode}) {
  // Dark mode
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnText, setBtnText] = useState("mode");
useEffect(()=>{
  if (mode === "dark") {
    setMyStyle({
      color: "white",
      backgroundColor: "black",
    });
    setBtnText("Enable dark mode");
  } else {
    setMyStyle({
      color: "black",
      backgroundColor: "white",
    });
    setBtnText("Enable light mode ");
  }
},[mode])
  return (
    <>
    <Navbar
          title="TextSurface"
          aboutText="About"
          mode={mode}
          handleMode={handleMode}
        />
    <div className="container">
      <h1>About Us</h1>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Text Surface
            </button>
          </h2>
          <div
            style={myStyle}
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
             TextSurface is website that is useful in converting the text into <b>UPPERCASE</b> , <b>lowercase</b>, also helps in removing the <b>extra spaces</b> between the text with a follow up of <b>clear </b> button. A <b>Copy to clipboard</b> function is also provided so the user can copy the text or content written so far . 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Text Summary
            </button>
          </h2>
          <div
            style={myStyle}
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              Secondly we have <b>Text Summary</b> which counts how much <b>words</b> have been typed as well as the amount of <b>characters</b> used in the sentence . 
              It also calculates how many <b>Minutes Read</b> which means how much time it is taken to read the text approximately .
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Preview
            </button>
          </h2>
          <div
            style={myStyle}
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
             And lastly we have the <b>Preview</b> : it basically shows us the text which is being typed into the textarea above .
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  );
}
