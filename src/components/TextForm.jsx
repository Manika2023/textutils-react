import React, { useState } from "react";

export default function TextForm(props) {
     const [darkMode, setDarkMode] = useState(false);
     const [text, setText] = useState("enter text here");

     const toggleDarkMode = ()=>{
          setDarkMode(!darkMode)
     }


  const handleUpClick = (event) => {
    let action = event.target.value;
    if (action == "uppercase") {
      let newText = text.toUpperCase();
      setText(newText);
    }

    if (action == "lowercase") {
      let newText = text.toUpperCase();
      setText(newText);
    } else if (action === "capitalize") {
     // b- it matches the first character of each word.
     // w- word
     // g- globally
     // if any first char then capitalize
     let newText = text.replace(/\b\w/g, (char) => char.toUpperCase());
      setText(newText);
    }
     else if (action === "clear") {
     let newText = "";
      setText(newText);
    }
    else if (action === "reverse") {
  let   newText = text.split("").reverse().join("");
  setText(newText);
 }
 else if (action === "removeSpaces") {
     // s -search all space , g= for globally
   let  newText = text.replace(/\s+/g, ' ').trim();
   setText(newText);
 }
 else if (action === "removeSpecialChars") {
   let  newText = text.replace(/[^a-zA-Z0-9 ]/g, '');
   setText(newText);

}

  };
  const handleCopy = () => {
     navigator.clipboard.writeText(text);
     alert("Text copied to clipboard!");
 };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
 
  const textStyle = darkMode ? "bg-dark text-light" : "bg-light text-dark";


  return (
    <div  className={`container py-3 ${textStyle}`}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          placeholder={text}
          // onChange={handleOnChange}
          onChange={(event)=> setText(event.target.value)}
        ></textarea>
      </div>
      <button
        className="m-2 btn btn-primary"
        value="uppercase"
        onClick={handleUpClick}
      >
        uppercase
      </button>
      <button
        className="m-2 btn btn-primary"
        value="lowercase"
        onClick={handleUpClick}
      >
        lowercase
      </button>
      <button
        className="m-2 btn btn-primary"
        value="capitalize"
        onClick={handleUpClick}
      >
        Capitalize
      </button>
      <button
        className="m-2 btn btn-secondary"
        value="clear"
        onClick={handleUpClick}
      >
        Clear Text
      </button>
      <button
        className="m-2 btn btn-info"
        value="removeSpaces"
        onClick={handleUpClick}
      >
        remove extra space
      </button>
      <button
        className="m-2 btn btn-secondary"
        value="reverse"
        onClick={handleUpClick}
      >
        reverse
      </button>
      <button className="m-2 btn btn-info" value="removeSpaces" onClick={handleCopy}>
               clip to copy
     </button>
      <button className="m-2 btn btn-info" value="removeSpecialChars" onClick={handleUpClick}>
      Remove Special Characters
     </button>
     <button className="m-2 btn btn-dark" onClick={toggleDarkMode}>
                Toggle Dark Mode
            </button>
    </div>
  );
}
