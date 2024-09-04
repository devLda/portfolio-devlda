import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routers } from "./routes/Routers.jsx";
import { ThemeProvider } from "@mui/material";
import theme from "./utils/theme.js";

function App() {
  // Cần viết theo syntax react router dom v6 để sử dụng những tính năng mới của v6
  const router = createBrowserRouter(Routers);

  return (
    // Thêm theme cho trang web
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
