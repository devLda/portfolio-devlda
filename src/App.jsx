import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routers } from "./routes/Routers.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import theme from "./utils/theme.js";

function App() {
  // Cần viết theo syntax react router dom v6 để sử dụng những tính năng mới của v6
  const router = createBrowserRouter(Routers);

  // AnhOctKnow #responsiveMUI #CustomBreakpoints
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
