import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routers } from "./routes/Routers.jsx";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  // Cần viết theo syntax react router dom v6 để sử dụng những tính năng mới của v6
  const router = createBrowserRouter(Routers);

  // AnhOctKnow #responsiveMUI #CustomBreakpoints 
  const theme = createTheme({
    breakpoints: {
      values: {
        xxs: 0,
        xs: 360,
        sm: 640,
        md: 768,
        lg: 960,
        xl: 1200,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
