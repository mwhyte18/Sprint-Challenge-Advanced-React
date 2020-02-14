import React, { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [value, setValue] = useLocalStorage("setDarkMode");

  useEffect(() => {
    if (value === true) {
      window.document.body.classList.remove("light-mode");
      window.document.body.classList.add("dark-mode");
    } else {
      window.document.body.classList.remove("dark-mode");
      window.document.body.classList.add("light-mode");
    }
  }, [value]);

  return [value, setValue];
};
