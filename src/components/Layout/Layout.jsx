import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import PageTransition from "../../animations/PageTransition";
import StairEffect from "../../animations/StairEffect";

const Layout = () => {
  return (
    <div className="bg-amber-300 w-screen h-screen font-primary overflow-hidden">
      <Header />
      <div className="container h-[92%] lg:h-[90%]">
        <Outlet />
      </div>
      <StairEffect />
      <PageTransition />
    </div>
  );
};

export default Layout;
