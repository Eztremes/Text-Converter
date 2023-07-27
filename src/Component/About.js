import React from "react";
import { useState } from "react";
export default function About() {
  // Dark mode
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
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
  };

  return (
    <div className="container">
      <h1>About Us</h1>
      <div className="accordion mb-3" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            style={myStyle}
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
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
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            style={myStyle}
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
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
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            style={myStyle}
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
             And lastly we have the <b>Preview</b> : it basically shows us the text which is being typed into the textarea above .
            </div>
          </div>
        </div>
      </div>
      <button onClick={toggleStyle} type="button" className="btn btn-primary">
        Dark mode
      </button>
    </div>
  );
}
