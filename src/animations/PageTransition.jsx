// AnhOctKnow
// Variants #FarmerMotion: là các trạng thái trực quan được thiết lập trước của một motion component
// Là key bên trong Object gắn với thuộc tính"variants" trong motion component,
// Tên do người dùng tự định nghĩa và thường được sử dụng trong thuộc tính "initial" và "animate" của motion component
// Kế thừa: nếu component con có variants giống cha và không định nghĩa lại thì ở mặc định thẻ con sẽ được kế thừa lại variants giống cha

import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }) => {
  console.log("children ", children);
  const location = useLocation();
  return (
    <AnimatePresence>
      {/* set key cho div nhằm tận dụng cơ chế reconciliation để hàm render() hoạt động */}
      <div key={location.pathname}>
        {/* Motion Component #FarmerMotion */}
        {/* Motion component được tạo ra khi ta thêm keywork "motion" và bên trong thẻ */}
        <motion.div
          className="fixed top-0 w-screen h-screen bg-amber-100 dark:bg-black dark:opacity-80 pointer-events-none z-20"
          variants={{
            // variants sử dụng giá trị css thuần
            open: {
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            },
            closed: {
              opacity: 1,
            },
          }}
          initial={"closed"}
          animate={"open"}
        >
          {/* khi initial thì hiện ra div, khi animate hoàn tất thì ẩn div */}
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
