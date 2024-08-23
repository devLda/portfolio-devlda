import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import PageTransition from "../../animations/PageTransition";
import StairEffect from "../../animations/StairEffect";
import { useEffect, useState } from "react";

const Layout = () => {
  const [isLandscapeMobile, setLandscapeMobile] = useState(false);
  useEffect(() => {
    // Kiểm tra thiết bị đăng nhập có phải mobile và nằm ngang ko
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
        navigator.userAgent
      )
    ) {
      console.log("mobile");
      if (window.innerWidth < 768) {
        if (!window.matchMedia("(orientation: portrait)").matches)
          setLandscapeMobile(true);
      }
    }
    // setLandscapeMobile(true)
    // console.log(isLandscapeMobile);
  }, [window.innerWidth]);
  return (
    <div className="bg-amber-300 w-screen h-screen font-primary">
      <Header childrenProp={{ isLandscapeMobile: isLandscapeMobile }} />
      <div
        className={`
        ${
          isLandscapeMobile
            ? "h-5/6 max-w-full"
            // #AnhOctKnow #Tips: muốn thêm khoảng trắng vào class tailwind ta thêm "_"
            : "h-[calc(100vh_-_48px)] lg:h-[90%]"
        }
        container`}
      >
        {/* #useOutletContext: dùng để truyền prop vào outlet */}
        {/* Arrray có thể truyền giá trị hoặc hàm */}
        <Outlet context={[isLandscapeMobile, setLandscapeMobile]} />
      </div>
      <StairEffect />
      <PageTransition />
    </div>
  );
};

export default Layout;
