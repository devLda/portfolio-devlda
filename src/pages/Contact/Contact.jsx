import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { amber, blue } from "@mui/material/colors";
import { useOutletContext } from "react-router-dom";

const Contact = () => {
  const [isLandscapeMobile] = useOutletContext();
  return (
    <Box width={1} height={1} paddingBottom={4} className="container">
      <Grid container width={1} height={1}>
        <Grid
          item
          xxs={12}
          lg={6}
          container
          paddingX={2}
          borderRadius={4}
          bgcolor={amber[100]}
          display={"flex"}
          direction={"column"}
          gap={2.5}
        >
          <Grid
            item
            xxs={12}
            lg={2}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              color={blue[400]}
              sx={{
                fontWeight: "500!important",
                typography: {
                  lg: "h1",
                },
              }}
            >
              Contact Form
            </Typography>
          </Grid>
          <Grid item xxs={12} lg={1}>
            <Typography
              sx={{
                typography: {
                  lg: "h5",
                },
              }}
            >
              Gửi tôi thông tin của bạn hoặc một thông điệp bạn muốn gửi cho
              tôi.Tôi sẽ liên hệ lại nhanh nhất có thể
            </Typography>
          </Grid>
          <Grid item xxs={12} lg={1}>
            <TextField
              fullWidth
              id="contactName"
              label="Tên"
              variant="standard"
            />
          </Grid>
          <Grid item xxs={12} lg={1}>
            <TextField
              fullWidth
              id="contactEmail"
              label="Email"
              variant="standard"
            />
          </Grid>
          <Grid item xxs={12} lg={1}>
            <TextField
              fullWidth
              id="contactSubject"
              label="Subject"
              variant="standard"
            />
          </Grid>
          <Grid item xxs={12} lg={2}>
            <TextField
              fullWidth
              rows={4}
              id="contactMess"
              label="Message"
              multiline
              variant="filled"
            />
          </Grid>
          <Grid
            item
            xxs={12}
            lg={1}
          >
            <Button variant="contained" fullWidth>
              <span className="text-sm md:text-base">Submit</span>
            </Button>
          </Grid>
        </Grid>
        <Grid item xxs={12} lg={6}></Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
