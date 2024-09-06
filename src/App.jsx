import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routers } from "./routes/Routers.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import theme from "./utils/theme.js";
import { createContext, useEffect, useState } from "react";

export const DarkmodeContext = createContext();

function App() {
  // Cần viết theo syntax react router dom v6 để sử dụng những tính năng mới của v6
  const router = createBrowserRouter(Routers);
  const [isDark, setIsDarkmode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const [themeObject, setThemeObject] = useState(theme);
  const [themeView, setThemeView] = useState(createTheme(theme));

  useEffect(() => {
    let themeTemp = themeObject;
    themeTemp.palette.mode = isDark ? "dark" : "light";
    console.log(themeTemp);
    setThemeObject(themeTemp);
    setThemeView(createTheme(themeTemp));
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
