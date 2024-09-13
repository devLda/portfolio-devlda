import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routers } from "./routes/Routers.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import theme from "./utils/theme.js";
import { createContext, useEffect, useMemo, useState } from "react";
import { amber, blue } from "@mui/material/colors";

export const DarkmodeContext = createContext();

function App() {
  // Cần viết theo syntax react router dom v6 để sử dụng những tính năng mới của v6
  const router = createBrowserRouter(Routers);
  const [isDark, setIsDarkmode] = useState(() => {
    if ("dark-mode" in localStorage)
      return localStorage.getItem("dark-mode") === "true";
    if (
      window?.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    return false;
  });

  // const [themeObject, setThemeObject] = useState(theme);
  // const [themeView, setThemeView] = useState(createTheme(theme));

  // setup dark mode
  useEffect(() => {
    localStorage.setItem("dark-mode", isDark);
    if (
      localStorage.getItem("dark-mode") === "true" ||
      (!("dark-mode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [isDark]);

  // Tránh re-render 1 logic ko cần thiết
  const themeView = useMemo(() => {
    return createTheme({
      ...theme,
      palette: {
        text: {
          primary: "#fff",
          secondary: blue[400],
        },
        primary: {
          main: amber[300],
          light: "#fff",
        },
        secondary: {
          main: blue[400],
          dark: "#000"
        },
        mode: isDark ? "dark" : "light",
      },
    });
  }, [isDark]);

  return (
    // Thêm theme cho trang web
    <DarkmodeContext.Provider
      value={{ isDark: isDark, setDark: setIsDarkmode }}
    >
      <ThemeProvider theme={themeView}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </DarkmodeContext.Provider>
  );
}

export default App;
