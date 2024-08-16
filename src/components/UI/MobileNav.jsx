import { Link } from "react-router-dom";
import ListNav from "../../utils/listNav";

const MobileNav = () => {
  return (
    <nav className="
      absolute top-0 right-0 flex flex-col items-center 
      h-full w-1/2 z-20 bg-amber-50 opacity-100
    ">
      {ListNav?.map((item, index) => {
        return (
          <Link key={index} to={item.path}>
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default MobileNav;
