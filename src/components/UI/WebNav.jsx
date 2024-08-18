import { Link, useBlocker, useLocation } from "react-router-dom";
import ListNav from "../../utils/listNav";
import { useEffect, useState } from "react";

const WebNav = () => {
  const location = useLocation();
  const [pathName, setPathName] = useState(location.pathname.split("/"));

  // #ReactRouter6 #AnhOctKnow
  // useBlocker: ngăn chặn người dùng điều hướng theo điều kiện và cho phép xác nhận có điều hướng ko
  // Phải sử dụng <RouterProvider/> để dùng được useBlocker
  // Có thể gắn useBlocker với biến để sử dụng các hàm reset(), proceed()
  useBlocker(
    ({ currentLocation, nextLocation }) =>
      currentLocation.pathname === nextLocation.pathname
  );

  useEffect(() => {
    console.log(location.pathname);
    setPathName(location.pathname.split("/"));
  }, [location]);
  return (
    <nav className="flex items-center gap-8">
      {ListNav?.map((item, index) => {
        return (
          <Link
            key={index}
            to={item.path}
            className={`
              relative flex items-center justify-center lg:w-20 xl:w-24 h-10 xl:text-xl z-0 border-2 border-blue-400 border-solid font-semibold ease-out duration-500 ${
                pathName.includes(item.path)
                  ? "bg-amber-50 text-yellow-500 before:w-0 after:h-0 before:bg-amber-300 after:bg-amber-300"
                  : "text-white hover:bg-amber-50 hover:text-yellow-500 before:w-2/3 hover:before:w-0  before:bg-amber-300 before:hover:bg-amber-50 after:h-2/3 after:hover:h-0 after:bg-amber-300 after:hover:bg-amber-50"
              } 
               before:content-[''] before:absolute before:h-11 before:-z-10 before:ease-out before:duration-1000
               after:content-[''] after:absolute after:lg:w-[82px] after:xl:w-[98px] after:-z-10 after:ease-out after:duration-1000
            `}
          >
            {/* 
              AnhOctAnimate - #BorderAnimation
              Lưu ý:
              - width và height BẮT BUỘC fix cứng để tận dụng tính chất border nằm bên trong 
              từ đó khi ta styled cho after và before full width và height mới che được phần border cần che tạo hiệu ứng hình ảnh
             */}
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default WebNav;
