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
        backgroundColor: "white",
        transform: "translateX(28px)!important"
    },
    
    //Áp dụng khoảng không gian SwitchBase chạy qua
    "& .MuiSwitch-track": {
        backgroundColor: "white",
        outline: "#FF9900 solid 1px",        
        borderRadius: 16,
        "&::before, &::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: 20,
        height: 20,
        },
        "&::before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#ffff00"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        left: 12,
        },
        "&::after": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#ffff00"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
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
        transform: "translate(1px, 1px)",
    },
}));

export default DarkModeButton;
