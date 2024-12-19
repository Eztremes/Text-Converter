
import React, { useState,useEffect } from "react";
import axios from 'axios';

export default function Textform(props) {
  // Or listen how u write code your code is dirty anywhere usestate, anyvariable not any blocks you are using u are typing anywhere brother
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [targetLang, setTargetLang] = useState("es"); // Es means Espaneol that iis spanish if you click on translate then by default transalte to spanish from english
  
  const synth = window.speechSynthesis;
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  const handleSpeakClick = () => {
    if (synth.speaking) {
      synth.cancel();
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);
    }
  };

  const handleListenClick = () => {
    if (recognition) {
      if (isListening) {
        recognition.stop();
      } else {
        recognition.start();
        recognition.onresult = (event) => {
          const speechText = event.results[0][0].transcript;
          setText((prevText) => `${prevText} ${speechText}`);
        };
      }
      setIsListening(!isListening);
    } else {
      alert("Speech-to-text not supported in this browser.");
    }
  };

  async function handleTranslateClick() {
    

const options = {
  method: 'POST',
  url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'x-rapidapi-key': 'e175641489msh0b6f47b19c2f02dp153705jsn3de64e4f0bcd',
    'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    q: text,
    source: 'en',
    target: targetLang
  }
};

try {
	const response = await axios.request(options);
	setText(response?.data?.data?.translations?.translatedText);
} catch (error) {
	console.error(error);
}
  }
  
  const [languages,setlanguages] = useState([])
  const Getlanguages= async() => {
    const options = {
      method: 'GET',
      url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2/languages',
      headers: {
        'x-rapidapi-key': 'e175641489msh0b6f47b19c2f02dp153705jsn3de64e4f0bcd',
        'x-rapidapi-host': 'deep-translate1.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
 useEffect(() => {
   
 Getlanguages()
    
 }, [])
 
  const handleBoldClick = () => setIsBold(!isBold);
  const handleItalicClick = () => setIsItalic(!isItalic);
  const handleUnderlineClick = () => setIsUnderline(!isUnderline);
  const handleResetFormatClick = () => { setIsBold(false); setIsItalic(false); setIsUnderline(false); };
  const handleUpClick = () => setText(text.toUpperCase());
  const handleLowClick = () => setText(text.toLowerCase());
  const handleClearClick = () => setText("");
  const handleCopyClick = () => navigator.clipboard.writeText(text);
  const handleSpaceClick = () => setText(text.replace(/\s+/g, " ").trim());
  const handleOnChange = (event) => setText(event.target.value);

  const textStyle = {
    fontWeight: isBold ? "bold" : "normal",
    fontStyle: isItalic ? "italic" : "normal",
    textDecoration: isUnderline ? "underline" : "none",
    backgroundColor: props.mode === "dark" ? "grey" : "white",
    color: props.mode === "dark" ? "white" : "black",
  };

  return (
    <>
      <h1 style={{ color: props.mode === "dark" ? "white" : "blue" }}>{props.heading}</h1>
      <div className="mb-3" id="mybox">
        <textarea
          className="form-control"
          placeholder="Enter text here"
          id="floatingTextarea"
          value={text}
          style={textStyle}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div className="button">
        <button onClick={handleUpClick} type="button" className="btn btn-primary">🔠 Uppercase</button>
        <button onClick={handleLowClick} type="button" className="btn btn-primary">🔡 Lowercase</button>
        <button onClick={handleClearClick} type="button" className="btn btn-primary">🧹 Clear</button>
        <button onClick={handleCopyClick} type="button" className="btn btn-primary">📋 Copy</button>
        <button onClick={handleSpaceClick} type="button" className="btn btn-primary">🔄 Extra Spaces</button>
        <button onClick={handleBoldClick} type="button" className="btn btn-primary">{isBold ? "🔲 Unbold" : "⬛ Bold"}</button>
        <button onClick={handleItalicClick} type="button" className="btn btn-primary">{isItalic ? "🔳 Unitalicize" : "🔲 Italic"}</button>
        <button onClick={handleUnderlineClick} type="button" className="btn btn-primary">{isUnderline ? "🚫 Remove Underline" : "🔽 Underline"}</button>
        <button onClick={handleResetFormatClick} type="button" className="btn btn-primary">🔄 Reset Formatting</button>
        <button onClick={handleSpeakClick} type="button" className="btn btn-primary">🔊 Speak</button>
        <button onClick={handleListenClick} type="button" className="btn btn-primary">🎙️ {isListening ? "Stop Listening" : "Start Listening"}</button>
        
        <select onChange={(e) => setTargetLang(e.target.value)} value={targetLang}>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="zh">Chinese</option>
          <option value="hi">Hindi</option>
          <option value="en">English</option>
        </select>
        <button onClick={handleTranslateClick} type="button" className="btn btn-primary">🌐 Translate</button>
        
        <h1 style={{ color: props.mode === "dark" ? "white" : "blue" }}>Text Summary:</h1>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
        
        <h1 style={{ color: props.mode === "dark" ? "white" : "blue" }}>Minutes Read</h1>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>{0.008 * text.split(" ").filter((element) => element.length !== 0).length}</p>
        
      
        <h1 style={{ color: props.mode === "dark" ? "white" : "blue" }}>Preview</h1>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>{text.length > 0 ? text : "Enter something in the box above to preview it here"}</p>
      </div>
    </>
  );
}
