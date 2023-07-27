import React, { useState } from "react";
export default function Textform(props) {
  // Uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  // lowercase
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  // Clear
  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
  };

  // Copy to clipboard
  const handleCopyClick = () => {
    let newText = text.split();
    navigator.clipboard.writeText(newText);
  };

  // extra space
  const handleSpaceClick = () => {
    let newText = text.split(/ [ ]+ /);
    setText(newText.join(""));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState(" ");

  return (
    <>
      <h1 style={{color : props.mode === 'dark'?'white':'blue'}}>{props.heading}</h1>
      <div className="mb-3" id="mybox" >
        <textarea
          className="form-control"
          placeholder=""
          id="floatingTextarea"
          value={text}
          style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white' , color : props.mode === 'dark'?'white':'black'}}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div className="button">
        <button
          onClick={handleUpClick}
          type="button"
          className="btn btn-primary"
        >
          Convert to UPPERCASE
        </button>
        <button
          onClick={handleLowClick}
          type="button"
          className="btn btn-primary"
        >
          Convert to lowercase
        </button>
        <button
          onClick={handleClearClick}
          type="button"
          className="btn btn-primary"
        >
          Clear
        </button>
        <button
          onClick={handleCopyClick}
          type="button"
          className="btn btn-primary"
        >
         Copy To Clipboard
        </button>
        <button
          onClick={handleSpaceClick}
          type="button"
          className="btn btn-primary"
        >
          Extra Space
        </button>
        <h1 style={{color : props.mode === 'dark'?'white':'blue'}}>Text Summary :</h1>
        <p style={{color : props.mode === 'dark'?'white':'black'}}>
          {text.split(/\s+/).filter((element) => {return element.length!== 0}).length} words and {text.length} characters
        </p>
        <h1 style={{color : props.mode === 'dark'?'white':'blue'}}>Minutes Read</h1>
        <p style={{color : props.mode === 'dark'?'white':'black'}}>{0.008 * text.split(" ").length}</p>
        <h1 style={{color : props.mode === 'dark'?'white':'blue'}}>Preview</h1>
        <p style={{color : props.mode === 'dark'?'white':'black'}}>{text.length>0?text :"Enter something in the box above to preview it here " }</p>
      </div>
    </>
  );
}
