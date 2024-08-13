import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import PageTransition from "../../animations/PageTransition";

const Layout = () => {
  return (
    <div className="bg-amber-100 w-screen h-screen">
        <Header />
      <PageTransition>
        <Outlet />
      </PageTransition>
    </div>
  );
};

export default Layout;
