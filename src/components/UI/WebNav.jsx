import { Link, useLocation } from "react-router-dom";
import ListNav from "../../utils/listNav";
import { useEffect, useState } from "react";

const WebNav = () => {
  const location = useLocation();
  const [pathName, setPathName] = useState(location.pathname.split("/"));
  console.log("location", location);
  useEffect(() => {
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
              relative flex items-center justify-center w-[100px] h-[40px] text-xl z-0 border border-yellow-500 border-solid duration-500 ${
                pathName.includes(item.path)
                  ? "bg-amber-50 text-yellow-500 before:w-0 after:h-0 before:bg-amber-50 after:bg-amber-50"
                  : "hover:bg-amber-50 hover:text-yellow-500 hover:before:w-0 hover:after:h-0 before:hover:bg-amber-50 after:hover:bg-amber-50"
              } 
               before:content-[''] before:absolute before:w-2/3 before:h-[40px] before:-z-10 before:bg-amber-100  before:duration-500
               after:content-[''] after:absolute after:w-[100px] after:h-2/3 after:-z-10 after:bg-amber-100  after:duration-500
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
