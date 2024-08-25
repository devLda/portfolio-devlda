import { Box, CardContent, Stack } from "@mui/material";
import Item from "../../components/UI/Item";
import { useState } from "react";

import { motion } from "framer-motion";
import Experience from "../../components/Resume/Experience";
import Skills from "../../components/Resume/Skills";
import Education from "../../components/Resume/Education";

// , "Về tôi"
const itemResume = [
  {
    label: "experience",
    title: "Kinh nghiệm",
  },
  {
    label: "skills",
    title: "Kỹ năng",
  },
  {
    label: "education",
    title: "Bằng cấp",
  },
];
const componentResume = [
  {
    label: "experience",
    component: <Experience />,
  },
  {
    label: "skills",
    component: <Skills />,
  },
  {
    label: "education",
    component: <Education />,
  },
];

export default function Resume() {
  const [isSelected, setIsSelected] = useState("experience");
  return (
    // Layout: cách bố trí trang web
    // Box:
    // Một vùng chứa có các tính năng tích hợp bổ sung của MUI,
    // render ra 1 div không có thuộc tính
    // Container:
    // Một vùng chứa đơn thuần (Không tích hợp bổ sung) có thể chọn tùy chinh linh hoạt hoặc fix cứng
    // render ra div tự động căn giữa, padding left right

    // giá trị width ở giữa (0,1] sẽ được chuyển sang dạng %
    <Box width={1} height={1} display={"flex"}>
      {/* 
        CardHeader: flex, align item center  
        thường là tiêu đề cho card có thể có button action
      */}
      {/* <CardHeader
        className="w-1/5"
        title="Hellow"
        subheader="Header"
        action={
          <>
            <button className="px-4 py-2 bg-blue-300">1</button>
            <button className="px-4 py-2 bg-blue-300">2</button>
            <button className="px-4 py-2 bg-blue-300">3</button>
          </>
        }
      /> */}

      <CardContent className="w-1/4">
        <Stack spacing={3}>
          {itemResume.map((item) => {
            return (
              <Item
                key={item.label}
                // css sx prop > css setup trong component > css class tailwindcss
                // sx prop với điều kiện
                sx={{
                  ...(item.label === isSelected && {
                    backgroundColor: "#42a5f5",
                    color: "white",
                  }),
                }}
                onClick={() => {
                  if (item.label !== isSelected) setIsSelected(item.label);
                }}
              >
                {item.title}
              </Item>
            );
          })}
        </Stack>
      </CardContent>

      {/* CardContent: block, padding-bottom */}
      <CardContent className="w-3/4">
        <motion.div
          key={isSelected}
          animate={{
            // scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
          className="w-full h-full py-4 container flex justify-between items-center bg-amber-100"
        >
          {componentResume.map((item) => {
            return (
              isSelected === item.label && (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full overflow-hidden"
                >
                  {item.component}
                </motion.div>
              )
            );
          })}
        </motion.div>
      </CardContent>
    </Box>
  );
}
