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

import { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';

import { DarkmodeContext } from "../../App";

const Contact = () => {
  const [isLandscapeMobile] = useOutletContext();
  const Darkmode = useContext(DarkmodeContext);

  const refInnerWidth = useRef(window.innerWidth);
  const refInnerHeight = useRef(window.innerHeight);
  const refContactName = useRef(null);
  const refContactEmail = useRef(null);
  const refContactPhone = useRef(null);
  const refContactMessage = useRef(null);

  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const handleSubmit = () => {
    console.log("ref refContactName ", refContactName.current.value);
    console.log("ref refContactEmail ", refContactEmail.current.value);
    console.log("ref refContactPhone ", refContactPhone.current.value);
    console.log("ref refContactMessage ", refContactMessage.current.value);

    const USER_PUBLIC_KEY = "KuHyxSQrEoI-jBcgL"
    const SERVICE_ID = "service_n0kxhku"
    const TEMPLATE_ID = "template_6kyjwv4"

    const templateParams = {
      from_name: refContactName.current.value,
      from_email: refContactEmail.current.value,
      to_name: "Le Duc Anh",
      message: refContactMessage.current.value
    }

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_PUBLIC_KEY).then((res) => {
      console.log('res ', res)
    }).catch((err) => {
      console.error("Error sending email: ", err)
    })
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
        paddingBottom={isLandscapeMobile || refInnerWidth.current < 360 ? 1 : 2}
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
                className="dark:text-white"
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
                className="dark:text-white"
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
                className="dark:text-white"
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
                className="dark:text-white"
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
                className="dark:text-white"
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
                className="dark:text-white"
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
          bgcolor={Darkmode?.isDark ? blue[100] : amber[100]}
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
              md: isLandscapeMobile ? 2 : 1.75,
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
                height={isLandscapeMobile ? 1 : "fit-content"}
                xxs={isLandscapeMobile ? 4 : 12}
                lg={6}
                container
                direction={
                  isLandscapeMobile || refInnerWidth.current < 960
                    ? "row"
                    : "column"
                }
                overflow={
                  isLandscapeMobile || refInnerWidth.current < 360
                    ? "auto"
                    : "hidden"
                }
                gap={{
                  xl: 2,
                  lg: 1,
                  xs: isLandscapeMobile
                    ? 1
                    : refInnerHeight.current > 700
                    ? 4
                    : 1,
                  xxs: isLandscapeMobile ? 1 : 0,
                }}
                onClick={handleTooltipOpen}
              >
                {/* Pair */}
                <Grid item xxs={12} lg={2} container direction={"row"}>
                  {/* Name */}
                  <Grid
                    item
                    xxs={
                      isLandscapeMobile || refInnerWidth.current < 360 ? 6 : 12
                    }
                    lg={12}
                    paddingRight={
                      isLandscapeMobile || refInnerWidth.current < 360 ? 1 : 0
                    }
                  >
                    <TextField
                      fullWidth
                      inputRef={refContactName}
                      label="Tên"
                      variant="standard"
                      color="secondary"
                      // custom color trong TextField
                      InputProps={{
                        style: { color: "black" },
                      }}
                      // InputLabelProps={{ sx: { color: "#000" }}}
                    />
                  </Grid>

                  {/* Email */}
                  <Grid
                    item
                    xxs={
                      isLandscapeMobile || refInnerWidth.current < 360 ? 6 : 12
                    }
                    lg={12}
                    paddingLeft={
                      isLandscapeMobile || refInnerWidth.current < 360 ? 1 : 0
                    }
                  >
                    <TextField
                      fullWidth
                      inputRef={refContactEmail}
                      label="Email"
                      variant="standard"
                      color="secondary"
                      inputProps={{
                        style: { color: "black" },
                      }}
                    />
                  </Grid>
                </Grid>

                {/* Phone */}
                <Grid item xxs={12} lg={1}>
                  <TextField
                    fullWidth
                    inputRef={refContactPhone}
                    label="Số điện thoại"
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
                <Grid item xxs={12} lg={2}>
                  <TextField
                    fullWidth
                    inputRef={refContactMessage}
                    rows={
                      isLandscapeMobile || refInnerWidth.current < 360
                        ? 2
                        : refInnerWidth.current < 960 &&
                          refInnerWidth.current > 768
                        ? 6
                        : 4
                    }
                    label="Message"
                    multiline
                    variant="filled"
                    color="secondary"
                    inputProps={{
                      style: { color: "black" },
                    }}
                  />
                </Grid>
              </Grid>
            </Tooltip>
          </ClickAwayListener>

          {/* Submit */}
          <Grid
            item
            xxs={isLandscapeMobile ? 1 : 12}
            lg={1}
            paddingY={refInnerWidth.current < 360 ? "4px" : "auto"}
          >
            <Button
              variant="contained"
              fullWidth
              sx={{
                paddingY: {
                  lg: 1,
                  md: 3,
                  xxs: "4px",
                },
              }}
              onClick={handleSubmit}
            >
              <span className="text-sm md:text-base">Submit</span>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
