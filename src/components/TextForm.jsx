import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpClick = (event) => {
    let action = event.target.value;
    if (action === "uppercase") {
      setText(text.toUpperCase());
    } else if (action === "lowercase") {
      setText(text.toLowerCase());
    } else if (action === "capitalize") {
      let newText = text.replace(/\b\w/g, (char) => char.toUpperCase());
      setText(newText);
    } else if (action === "clear") {
      setText("");
    } else if (action === "reverse") {
      setText(text.split("").reverse().join(""));
    } else if (action === "removeSpaces") {
      setText(text.replace(/\s+/g, " ").trim());
    } else if (action === "removeSpecialChars") {
      setText(text.replace(/[^a-zA-Z0-9 ]/g, ""));
    }
  };

 

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Determine the background color based on the mode and green prop
  const themeStyle =
   props.green === "dark" ? { backgroundColor: "green", color: "white" }
    : props.mode === "dark" ? { backgroundColor: "#042743", color: "white" }
    : { backgroundColor: "white", color: "#042743" };

  return (
    <div className="container-fluid" style={themeStyle}>
      <div className="container py-5">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h1>{props.heading}</h1>
          </label>
          <textarea
            className="form-control"
            style={{ backgroundColor: props.mode === "dark" ? "gray" : "white", color: props.mode === "dark" ? "white" : "#042743" }}
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            placeholder={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="py-4">
          <button className="m-2 btn btn-primary" value="uppercase" onClick={handleUpClick}>
            Uppercase
          </button>
          <button className="m-2 btn btn-primary" value="lowercase" onClick={handleUpClick}>
            Lowercase
          </button>
          <button className="m-2 btn btn-primary" value="capitalize" onClick={handleUpClick}>
            Capitalize
          </button>
          <button className="m-2 btn btn-secondary" value="clear" onClick={handleUpClick}>
            Clear Text
          </button>
          <button className="m-2 btn btn-info" value="removeSpaces" onClick={handleUpClick}>
            Remove Extra Spaces
          </button>
          <button className="m-2 btn btn-secondary" value="reverse" onClick={handleUpClick}>
            Reverse
          </button>
        
          <button className="m-2 btn btn-info" value="removeSpecialChars" onClick={handleUpClick}>
            Remove Special Characters
          </button>
        </div>
        <div className="container my-5">
          <h1>Your text summary</h1>
          <p>{text.split(/\s+/).filter((word) => word.length > 0).length} words and {text.length} characters</p>
          <p>{0.008 * text.split(/\s+/).filter((word) => word.length > 0).length} minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
        </div>
      </div>
    </div>
  );
}
