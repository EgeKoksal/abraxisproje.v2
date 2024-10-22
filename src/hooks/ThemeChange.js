import { useEffect, useState } from "react";

const useThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("app-theme") || "light"
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("app-theme", newTheme);
  };

  useEffect(() => {
    console.log("Current theme in useEffect:", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, toggleTheme };
};

export default useThemeToggle;
