import { useState, useEffect } from "react";

export default function useColorScheme() {
  const [isDarkMode, setIsDarkMode] = useState(null);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkMode);

    const handleChange = (event) => {
      console.log(event.matches);
      setIsDarkMode(event.matches);
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleChange);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleChange);
    };
  }, []);

  return isDarkMode;
}
