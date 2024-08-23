import { createTheme } from "@mui/material";
import { amber, blue, yellow } from "@mui/material/colors";

// kiểm tra system có bật darkmode 
function getModeOnSystem() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 360,
      sm: 640,
      md: 768,
      lg: 960,
      xl: 1200,
    },
  },
// Kiểu chữ
  typography: {
    body2: {
        fontWeight: [
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "800",
            "900",
        ],
        letterSpacing: "2px"
    }
    // Có thể sử dụng biến thể
    // .poster: {}
  },

// Chỉnh sửa màu
  palette: {
    text: {
        primary: "#fff",
        secondary: blue[400],
    },
    primary:{
        main: amber[300],
        light: "#fff"
    }
    // mode: getModeOnSystem() ? "dark" : "light"
  },
});

export default theme;
