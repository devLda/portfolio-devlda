import {
  Box,
  Button,
  ClickAwayListener,
  Grid,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { amber, blue } from "@mui/material/colors";
import { useOutletContext } from "react-router-dom";

import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { useRef } from "react";
import { useState } from "react";

const Contact = () => {
  const [isLandscapeMobile] = useOutletContext();
  const refInnerWidth = useRef(window.innerWidth);

  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return (
    <Box
      width={1}
      height={1}
      className={`
      ${isLandscapeMobile ? "max-w-full" : "max-w-full sm:max-w-fit"}
      container `}
      sx={{
        paddingTop: {
          lg: isLandscapeMobile ? 0 : 2,
          xxs: 0,
        },
        paddingBottom: {
          lg: isLandscapeMobile ? 0 : 4,
          xxs: 0,
        },
        paddingX: {
          sm: isLandscapeMobile ? 0 : "inherit",
          xxs: 0,
        },
      }}
    >
      <Grid
        container
        width={1}
        height={1}
        paddingBottom={isLandscapeMobile ? 1 : 2}
      >
        <Grid
          item
          xxs={isLandscapeMobile ? 6 : 12}
          lg={6}
          sx={{
            height: {
              lg: "100%",
              xs: "20%",
              xxs: "25%",
            },
          }}
        >
          <Typography
            color={blue[400]}
            sx={{
              fontWeight: "500!important",
              typography: {
                lg: "h1",
                sm: isLandscapeMobile ? "h4" : "h2",
                xs: isLandscapeMobile ? "h6" : "h4",
                xxs: isLandscapeMobile ? "h7" : "h5",
              },
            }}
          >
            Thông tin liên lạc
          </Typography>
          <Box
            display={"flex"}
            height={0.7}
            flexDirection={"column"}
            sx={{
              justifyContent: {
                lg: "start",
                xxs: "space-around",
              },
            }}
          >
            <Box
              display={"flex"}
              gap={2}
              sx={{
                marginY: {
                  lg: 2,
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500!important",
                  typography: {
                    xl: "h3",
                    sm: "h5",
                    xs: "h7",
                    xxs: "h8",
                  },
                }}
              >
                <FaLocationDot />
              </Typography>

              <Typography
                sx={{
                  fontWeight: "500!important",
                  typography: {
                    xl: "h3",
                    sm: "h5",
                    xs: "h7",
                    xxs: "h8",
                  },
                }}
              >
                Địa chỉ: {isLandscapeMobile && <br />} Hà Nội, Việt Nam
              </Typography>
            </Box>
            <Box
              display={"flex"}
              gap={2}
              sx={{
                marginY: {
                  lg: 2,
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500!important",
                  typography: {
                    xl: "h3",
                    sm: "h5",
                    xs: "h7",
                    xxs: "h8",
                  },
                }}
              >
                <IoIosMail />
              </Typography>

              <Typography
                sx={{
                  fontWeight: "500!important",
                  typography: {
                    xl: "h3",
                    sm: "h5",
                    xs: "h7",
                    xxs: "h8",
                  },
                }}
              >
                Email: {isLandscapeMobile && <br />} leducanh.mywork@gmail.com
              </Typography>
            </Box>
            <Box
              display={"flex"}
              gap={2}
              sx={{
                marginTop: {
                  lg: 2,
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500!important",
                  typography: {
                    xl: "h3",
                    sm: "h5",
                    xs: "h7",
                    xxs: "h8",
                  },
                }}
              >
                <FaGithub />
              </Typography>

              <Typography
                sx={{
                  fontWeight: "500!important",
                  typography: {
                    xl: "h3",
                    sm: "h5",
                    xs: "h7",
                    xxs: "h8",
                  },
                }}
              >
                <a href="https://github.com/devLda">
                  Github: {isLandscapeMobile && <br />}{" "}
                  https://github.com/devLda
                </a>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xxs={isLandscapeMobile ? 6 : 12}
          lg={6}
          container
          paddingX={2}
          // định hướng grid
          // direction={"col"}
          direction={
            isLandscapeMobile
              ? "column"
              : refInnerWidth.current > 960
              ? "column"
              : "row"
          }
          borderRadius={4}
          bgcolor={amber[100]}
          sx={{
            // flexDirection: {
            //   lg: "column",
            //   xxs: "row",
            // },
            height: {
              lg: "100%",
              xs: isLandscapeMobile ? 1 : "80%",
              xxs: isLandscapeMobile ? 1 : "75%",
            },
            // flexDirection: {
            //   lg: "column",
            //   xxs: "row",
            // },
            gap: {
              xl: isLandscapeMobile ? 2 : 2.5,
              lg: isLandscapeMobile ? 2 : 1.75,
              xxs: isLandscapeMobile ? 1 : 0,
            },
          }}
        >
          {/* My title */}
          <Grid
            item
            xxs={isLandscapeMobile ? 2 : 12}
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
                  sm: isLandscapeMobile ? "h4" : "h2",
                  xs: isLandscapeMobile ? "h6" : "h4",
                  xxs: isLandscapeMobile ? "h7" : "h5",
                },
              }}
            >
              Liên hệ với tôi
            </Typography>
          </Grid>

          {/* My message */}
          <Grid item xxs={isLandscapeMobile ? 1 : 12} lg={1}>
            <Typography
              sx={{
                typography: {
                  lg: isLandscapeMobile ? "h6" : "h5",
                  sm: isLandscapeMobile ? "h6" : "h4",
                  xs: isLandscapeMobile ? "h8" : "h7",
                  xxs: isLandscapeMobile ? "h8" : "h8",
                },
                lineHeight: isLandscapeMobile ? "normal!important" : "inherit",
              }}
            >
              Để lại thông tin của bạn và một thông điệp bạn muốn gửi cho
              tôi.Tôi sẽ liên hệ lại sớm nhất có thể
            </Typography>
          </Grid>

          <ClickAwayListener onClickAway={handleTooltipClose}>
            <Tooltip
              title="Scroll Down"
              onClose={handleTooltipClose}
              open={open && isLandscapeMobile}
              arrow
            >
              <Grid
                item
                height={1}
                xxs={isLandscapeMobile ? 4 : 12}
                lg={6}
                container
                direction={isLandscapeMobile ? "row" : "column"}
                overflow={isLandscapeMobile ? "auto" : "hidden"}
                gap={1}
                onClick={handleTooltipOpen}
              >
                {/* Pair */}
                <Grid
                  item
                  xxs={isLandscapeMobile ? 12 : 12}
                  lg={2}
                  container
                  direction={"row"}
                  gap={1}
                >
                  {/* Name */}
                  <Grid
                    item
                    xxs={isLandscapeMobile ? 6 : 12}
                    lg={12}
                    paddingRight={isLandscapeMobile ? 1 : 0}
                  >
                    <TextField
                      fullWidth
                      id="contactName"
                      label="Tên"
                      variant="standard"
                      color="secondary"
                      // custom color trong TextField
                      inputProps={{
                        style: { color: "black" },
                      }}
                    />
                  </Grid>

                  {/* Email */}
                  <Grid
                    item
                    xxs={isLandscapeMobile ? 6 : 12}
                    lg={12}
                    paddingLeft={isLandscapeMobile ? 1 : 0}
                  >
                    <TextField
                      fullWidth
                      id="contactEmail"
                      label="Email"
                      variant="standard"
                      color="secondary"
                      inputProps={{
                        style: { color: "black" },
                      }}
                    />
                  </Grid>
                </Grid>

                {/* Subject */}
                <Grid item xxs={isLandscapeMobile ? 12 : 12} lg={1}>
                  <TextField
                    fullWidth
                    id="contactSubject"
                    label="Subject"
                    variant="standard"
                    color="secondary"
                    inputProps={{
                      style: {
                        color: "black",
                      },
                    }}
                  />
                </Grid>

                {/* Message */}
                <Grid item xxs={isLandscapeMobile ? 12 : 12} lg={2}>
                  <TextField
                    fullWidth
                    rows={isLandscapeMobile ? 2 : 4}
                    id="contactMess"
                    label="Message"
                    multiline
                    variant="filled"
                    color="secondary"
                    inputProps={{
                      style: { color: "black", fontSize: "12px" },
                    }}
                  />
                </Grid>
              </Grid>
            </Tooltip>
          </ClickAwayListener>

          {/* Submit */}
          <Grid item xxs={isLandscapeMobile ? 1 : 12} lg={1}>
            <Button variant="contained" fullWidth>
              <span className="text-sm md:text-base">Submit</span>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
