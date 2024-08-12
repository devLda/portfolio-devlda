import { Link } from "react-router-dom";
import ListNav from "../../utils/listNav";

const WebNav = () => {
  return (
    <nav className="flex gap-9 items-center">
      {ListNav?.map((item, index) => {
        return (
          <Link
            key={index}
            to={item.path}
            className="text-xl hover:text-orange-500"
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default WebNav;
