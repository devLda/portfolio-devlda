import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import Item from "../../components/UI/Item";
import { useState } from "react";

import { motion } from "framer-motion";
import Experience from "../../components/Resume/Experience";
import Skills from "../../components/Resume/Skills";
import Education from "../../components/Resume/Education";
import { blue } from "@mui/material/colors";
import { useOutletContext } from "react-router-dom";

// , "Về tôi"
const itemResume = [
  {
    label: "Experience",
    title: "Kinh nghiệm",
  },
  {
    label: "Skills",
    title: "Kỹ năng",
  },
  {
    label: "Education",
    title: "Học vấn",
  },
];
const componentResume = [
  {
    label: "Experience",
    component: <Experience />,
  },
  {
    label: "Skills",
    component: <Skills />,
  },
  {
    label: "Education",
    component: <Education />,
  },
];

export default function Resume() {
  const [isLandscapeMobile] = useOutletContext();
  const [isSelected, setIsSelected] = useState("Experience");

  const handleSelectResume = (e) => {
    setIsSelected(e.target.value);
  };
  return (
    // Layout: cách bố trí trang web
    // Box:
    // Một vùng chứa có các tính năng tích hợp bổ sung của MUI,
    // render ra 1 div không có thuộc tính
    // Container:
    // Một vùng chứa đơn thuần (Không tích hợp bổ sung) có thể chọn tùy chinh linh hoạt hoặc fix cứng
    // render ra div tự động căn giữa, padding left right

    // giá trị width ở giữa (0,1] sẽ được chuyển sang dạng %
    <Box
      width={1}
      height={1}
      paddingBottom={"20px"}
      className={`
        ${isLandscapeMobile ? "" : "flex-col lg:flex-row"}
      flex`}
    >
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

      {/* Select Type Lap */}
      <Box
        className={`
        ${isLandscapeMobile ? "" : "hidden lg:block"}
        w-1/4 `}
      >
        <Stack spacing={3}>
          {itemResume.map((item) => {
            return (
              <Item
                key={item.label}
                // css sx prop > css setup trong component > css class tailwindcss
                // sx prop với điều kiện
                sx={{
                  ...(!isLandscapeMobile &&
                    item.label === isSelected && {
                      backgroundColor: "#42a5f5",
                      color: "white",
                    }),
                  ...(isLandscapeMobile &&
                    item.label === isSelected && {
                      fontSize: 12,
                      backgroundColor: "#42a5f5",
                      color: "white",
                    }),
                  ...(isLandscapeMobile &&
                    item.label !== isSelected && {
                      fontSize: 12,
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
      </Box>

      {/* Select Type Mobile */}
      <Box
        className={`
        ${isLandscapeMobile ? "hidden" : "block lg:hidden"}
      w-full`}
      >
        <FormControl fullWidth>
          <Select
            value={isSelected}
            // set text field ko có label
            hiddenLabel={true}
            onChange={handleSelectResume}
            style={{
              backgroundColor: "#fff",
              fontSize: 20,
              border: "2px solid black",
              color: blue[400],
            }}
            sx={{
              "& .MuiSelect-select": {
                borderRadius: 0,
              },
            }}
          >
            {componentResume.map((item) => {
              return (
                <MenuItem
                  key={item.label}
                  value={item.label}
                  style={{
                    backgroundColor: "white",
                    fontSize: 20,
                    color: blue[400],
                  }}
                >
                  {item.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>

      {/* CardContent: block, padding-bottom */}
      <Box
        className={`
      ${
        isLandscapeMobile
          ? "w-3/4 h-full"
          : "lg:container w-full lg:w-3/4 h-[calc(100%_-_80px)] lg:h-full my-2 sm:my-4 lg:my-0"
      }
       `}
      >
        <motion.div
          key={isSelected}
          animate={{
            // scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "2%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
          className={`
            ${isLandscapeMobile ? "py-1 ml-2" : "pt-4 pb-8"}
          w-full h-full container flex justify-between items-center bg-amber-100`}
        >
          {componentResume.map((item) => {
            return (
              isSelected === item.label && (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 3.5,
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
      </Box>
    </Box>
  );
}
