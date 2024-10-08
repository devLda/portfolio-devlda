import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import PageTransition from "../../animations/PageTransition";
import StairEffect from "../../animations/StairEffect";
import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";

const Layout = () => {
  const [isLandscapeMobile, setLandscapeMobile] = useState(false);
  
  const themeDefault = useTheme()
  console.log("def ", themeDefault)
  // const [heightReal, setHeightReal] = useState(window.innerHeight);
  const [widthReal, setWidthReal] = useState(window.innerWidth);
  // const heightReal = useRef(window.innerHeight);
  // useEffect(() => {
  //   // update height
  //   // setHeightReal(window.innerHeight);
  //   setWidthReal(window.innerWidth);
  //   // Kiểm tra thiết bị đăng nhập có phải mobile và nằm ngang ko
  //   if (
  //     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
  //       navigator.userAgent
  //     )
  //   ) {
  //     console.log("mobile");
  //     if (window.innerWidth < 768) {
  //       if (!window.matchMedia("(orientation: portrait)").matches)
  //         setLandscapeMobile(true);
  //     }
  //   }
  //   // setLandscapeMobile(true);
  //   // console.log(isLandscapeMobile);
  // }, [window.innerWidth]);

  useEffect(() => {
    setWidthReal(window.innerWidth)

    if (window.innerWidth < 960) {
      setLandscapeMobile(!window.matchMedia("(orientation: portrait)").matches);
    } else setLandscapeMobile(false);
  }, [window.matchMedia("(orientation: portrait)").matches]);

  return (
    <div className="bg-amber-300 dark:bg-black dark:opacity-90 w-screen h-screen font-primary overflow-hidden">
      <Header childrenProp={{ isLandscapeMobile: isLandscapeMobile }} />
      <div
        className={`
        ${
          isLandscapeMobile
            ? "h-5/6 max-w-full"
            : `${
                widthReal > 640
                  ? "h-[90%]"
                  : "max-w-full h-[calc(100vh_-_49px)]"
              }`
        }
       container`}
        // #AnhOctKnow #Tips: muốn thêm khoảng trắng vào class tailwind ta thêm "_"
        // style={{
        //   height: `${
        //     isLandscapeMobile
        //       ? (heightReal * 5) / 6
        //       : widthReal > 960
        //       ? (heightReal * 9) / 10
        //       : heightReal - 49
        //   }px`,
        // }}
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
