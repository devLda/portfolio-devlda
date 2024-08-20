import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ListNav from "../../utils/listNav";
import { AnimatePresence, motion } from "framer-motion";

// Icons Material
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";

// variant item nav
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const MobileNav = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AnimatePresence>
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="-mt-1"
        >
          {/* Ẩn nút mở nav và hiệu ứng */}
          {!isOpen && (
            <motion.div>
              <MenuIcon
                sx={{
                  // marginTop: "-4px",
                  // AnhOctKnow #responsiveMUI #SxPropBreakpoints
                  fontSize: {
                    xs: 40,
                    sm: 48,
                  },
                  color: "white",
                  cursor: "pointer",
                }}
              />
            </motion.div>
          )}

          {/* Hiện nút đóng nav và hiệu ứng */}
          {isOpen && (
            <motion.div
              initial={{
                rotate: 180,
              }}
              animate={{
                rotate: 90,
              }}
              exit={{
                rotate: 180,
              }}
              transition={{ duration: 0.3 }}
            >
              <ClearIcon
                sx={{
                  // marginTop: "-4px",
                  // AnhOctKnow #responsiveMUI #SxPropBreakpoints
                  fontSize: {
                    xs: 40,
                    sm: 48,
                  },
                  color: "white",
                  cursor: "pointer",
                }}
              />
            </motion.div>
          )}
        </motion.button>

        {/* Thiết lập animate xuất hiện của nav và khi nav đóng */}
        <motion.div
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
                delayChildren: 0.2,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
          className={`absolute left-0 z-10 flex flex-col items-center w-full h-[calc(100vh)] bg-amber-300`}
        >
          <div className="container">
            {ListNav?.map((item, index) => {
              return (
                // animate cho các phần tử
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  {/* Thiết lập hiệu ứng khi hover vào item trong nav */}
                  <Link
                    to={item.path}
                    className={`
                        py-3 my-3 w-full relative flex justify-center items-center text-xl text-white border-solid border-blue-400 border-2 z-0 ease-in-out duration-500
                        ${
                          location.pathname.split("/").includes(item.path)
                            ? "text-yellow-500 bg-white before:w-0 after:h-0"
                            : "before:w-[110%] after:h-[110%] hover:text-yellow-500 hover:bg-white before:hover:w-0 after:hover:h-0"
                        }
                        before:content-[''] before:absolute before:h-8 before:bg-amber-300 before:-z-10 before:ease-in-out before:duration-500 
                        after:content-[''] after:w-20 after:absolute after:bg-amber-300 after:-z-10 after:ease-in-out after:duration-500
                      
                      `}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default MobileNav;
