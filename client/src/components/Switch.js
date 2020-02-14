import React, { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
const Switch = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div data-testid="button">
      <button className="button" data-testid="switch" onClick={toggleMode}>
        Go to dark mode!
      </button>
    </div>
  );
};

export default Switch;
