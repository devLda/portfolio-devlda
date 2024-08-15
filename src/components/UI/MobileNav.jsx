import { Link } from "react-router-dom";
import ListNav from "../../utils/listNav";

const MobileNav = () => {
  return (
    <nav className="flex flex-col">
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
