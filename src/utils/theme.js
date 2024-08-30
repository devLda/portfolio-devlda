import { createTheme } from "@mui/material";
import { amber, blue, yellow } from "@mui/material/colors";

// kiểm tra system có bật darkmode
function getModeOnSystem() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
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
      letterSpacing: "2px",
    },
    h1: {
      fontSize: "2.5rem"
    },
    h2: {
      fontSize: "2rem"
    },
    h3: {
      fontSize: "1.75rem"
    },
    h4: {
      fontSize: "1.5rem"
    },
    h5: {
      fontSize: "1.25rem"
    },
    h6: {
      fontSize: "1rem",
    },
    h7: {
      fontSize: "0.875rem",
    },
    h8: {
      fontSize: "0.75rem",
    },
    // Có thể sử dụng biến thể
    title: {
      fontSize: "1.5rem",
      color: blue[400]
    }
  },

  // Chỉnh sửa màu
  palette: {
    text: {
      primary: "#fff",
      secondary: blue[400],
    },
    primary: {
      main: amber[300],
      light: "#fff",
    },
    secondary: {
      main: blue[400],
    },
    // mode: getModeOnSystem() ? "dark" : "light"
  },
});

export default theme;
