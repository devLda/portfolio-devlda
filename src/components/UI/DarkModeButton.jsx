// AnhOctKnow: Switch MUI
import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

// Tất cả các component MUI đều được tạo kiểu bằng style() vì thế để thay đổi mặc định ta dùng style()
const DarkModeButton = styled(Switch)(({ theme }) => ({
  // Css bên ngoài cùng sẽ áp dụng class cấp cao nhất của component
  width: 68, //px
  height: 40,
  padding: 4,

  // Áp dụng cho class cấp cao nhất của SwitchBase
  "& .MuiSwitch-switchBase": {
    transitionDuration: "500ms",
    // transform: "translateX(28px)"
  },

  // Áp dụng trạng thái checked
  "& .Mui-checked": {
    transform: "translateX(28px)!important",
  },
  "& .Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#000000!important",
    opacity: "1!important"
  },
  "& .Mui-checked .MuiSwitch-thumb": {
    color: "white",
  },

  //Áp dụng khoảng không gian SwitchBase chạy qua
  "& .MuiSwitch-track": {
    backgroundColor: "#7ebee6",
    outline: "4px solid white",
    borderRadius: 16,
    opacity: 1,
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 20,
      height: 20,
    },
    "&::before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg class="moon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="${encodeURIComponent(
        "#FF9900"
      )}" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>')`,

      left: 12,
    },
    "&::after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg class="sun" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="${encodeURIComponent(
        "#FF9900"
      )}" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>')`,
      right: 12,
    },
  },
  // Áp dụng cho SwitchBase
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 24,
    height: 24,
    marginTop: -2,
    marginLeft: -2,
    color: "#faec87",
    transform: "translate(1px, 1px)",
  },
}));

export default DarkModeButton;
