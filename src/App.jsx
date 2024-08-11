import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [green, setGreen] = useState("light");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 15000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setGreen("light"); // Disable green mode if dark mode is enabled
      document.body.style.background = "#042743";
      document.body.style.color = "white"; // Ensure text color is readable in dark mode
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - dark mode";
    } else {
      setMode("light");
      document.body.style.background = "white";
      document.body.style.color = "#042743";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - light mode";
    }
  };

  const toggleGreen = () => {
    if (green === "light") {
      setGreen("dark");
      setMode("light"); // Disable dark mode if green mode is enabled
      document.body.style.background = "green";
      document.body.style.color = "white"; // Ensure text color is readable in green mode
      showAlert("Green mode has been enabled", "success");
      document.title = "TextUtils - green mode";
    } else {
      setGreen("light");
      document.body.style.background = "white";
      document.body.style.color = "#042743";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - light mode";
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        toggleGreen={toggleGreen}
        green={green}
      />
      <Alert alert={alert} />

      <div className="container my-4">
        <TextForm
          heading="Enter the text to analyze"
          mode={mode}
          green={green}
        />
      </div>
    </>
  );
}

export default App;
