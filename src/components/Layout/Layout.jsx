import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import PageTransition from "../../animations/PageTransition";
import StairEffect from "../../animations/StairEffect";

const Layout = () => {
  return (
    <div className="bg-amber-300 w-screen h-screen font-primary">
      <Header />
      <Outlet />
      <StairEffect />
      <PageTransition />
    </div>
  );
};

export default Layout;
