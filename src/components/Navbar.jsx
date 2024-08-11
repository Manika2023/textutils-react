import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

export default function Navbar({ title, mode, toggleMode, green, toggleGreen }) {
  // Apply dark mode to the entire body element
  useEffect(() => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
    } else if (green === "dark") {
      document.body.style.backgroundColor = "green";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#042743";
    }
  }, [mode, green]);

  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
      <Link className="navbar-brand" to="#">
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
                Home
              </Link>
            </li>
        
          </ul>

          <div className={`form-check form-switch text-${mode === "light" ? "dark" : "light"}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={toggleMode}
              id="flexSwitchCheckDarkMode"
              checked={mode === "dark"} // Keeps the toggle in sync with dark mode state
              readOnly
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDarkMode"
              style={{ cursor: "pointer" }} // Makes the label behave like a button
              onClick={toggleMode} // Enables the label to toggle dark mode
            >
              {mode === "dark" ? "Disable Dark Mode" : "Enable Dark Mode"}
            </label>
          </div>

          <div className={`form-check form-switch text-${green === "light" ? "success" : "success"} mx-3`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={toggleGreen}
              id="flexSwitchCheckGreenMode"
              checked={green === "dark"} // Keeps the toggle in sync with green mode state
              readOnly
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckGreenMode"
              style={{ cursor: "pointer" }} // Makes the label behave like a button
              onClick={toggleGreen} // Enables the label to toggle green mode
            >
              {green === "dark" ? "Disable Green Mode" : "Enable Green Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  green: PropTypes.string.isRequired,
  toggleGreen: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: "Set Title",
};
