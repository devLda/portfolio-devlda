import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routers } from "./routes/Routers.jsx";

function App() {
  // Cần viết theo syntax react router dom v6 để sử dụng những tính năng mới của v6
  const router = createBrowserRouter(Routers);
  return <RouterProvider router={router} />;
}

export default App;
