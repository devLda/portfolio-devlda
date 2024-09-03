import { Box, Button, Grid, styled, Typography } from "@mui/material";
import { amber, blue, yellow } from "@mui/material/colors";
import { useOutletContext } from "react-router-dom";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
const ItemProject = ({ childrenProp }) => {
  const [isLandscapeMobile] = useOutletContext();
  const {
    image,
    time,
    project,
    state,
    link,
    describe,
    mainFunction,
    technologies,
  } = childrenProp;
  return (
    <Box
      width={1}
      height={1}
      position={"relative"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {/* Grid chứa container là grid cha chứa item là grid con */}
      <Grid
        container
        columns={12}
        bgcolor={amber[100]}
        borderRadius={4}
        sx={{
          width: 1,
          height: {
            md: isLandscapeMobile ? 0.9 : 2 / 3,
            xxs: 0.9,
          },
          overflowY: "auto",
        }}
      >
        {/* Một trong số các cách chia hàng là sử dụng flex và direction */}
        <Grid
          item
          xs={12}
          lg={4}
          display={"flex"}
          direction={"column"}
          paddingX={2}
        >
          <Img src={image} alt="avatar" sx={{ paddingY: 1, borderRadius: 4 }} />
          <Typography
            component={"div"}
            sx={{
              typography: {
                sm: "h6",
                xxs: "h7",
              },
            }}
          >
            {time}
          </Typography>
          <Typography
            component={"div"}
            color={blue[400]}
            sx={{
              typography: {
                sm: "h4",
                xxs: "h6",
              },
            }}
          >
            {project}
          </Typography>
          <div className="my-2">
            {state === "done" && (
              <Typography
                component={"div"}
                className="basis-auto sm:basis-1/6 inline-block bg-green-200 text-green-800 font-medium sm:me-2 px-2.5 py-1 rounded sm:ms-3"
                sx={{
                  typography: {
                    sm: "h6",
                    xxs: "h7",
                  },
                }}
              >
                Đã hoàn thành
              </Typography>
            )}
            {state === "processing" && (
              <Typography
                component={"div"}
                className="basis-auto sm:basis-1/6 inline-block bg-yellow-200 text-yellow-600 font-medium sm:me-2 px-2.5 py-1 rounded sm:ms-3"
                sx={{
                  typography: {
                    sm: "h6",
                    xxs: "h7",
                  },
                }}
              >
                Đang tiến hành
              </Typography>
            )}
          </div>
          <div className="w-full my-1 md:my-4 flex justify-between gap-2 sm:gap-4">
            {link.map((item, index) => {
              return (
                <Button
                  key={index}
                  variant="contained"
                  href={item.url}
                  fullWidth
                >
                  <span className="text-sm md:text-base">{item.label}</span>
                </Button>
              );
            })}
          </div>
        </Grid>

        <Grid
          container
          item
          xs={12}
          lg={8}
          paddingY={1}
          sx={{
            paddingX: {
              lg: 0,
              xxs: 2,
            },
          }}
        >
          <Grid item>
            <div className="mb-2">
              <Typography
                component={"div"}
                color={blue[500]}
                sx={{
                  typography: {
                    md: "h4",
                    xxs: "h6",
                  },
                }}
              >
                Mô tả:
              </Typography>
              <ul className="list-disc">
                {describe?.map((des, index) => {
                  return (
                    <li key={index} className="mx-4">
                      <Typography
                        component={"div"}
                        sx={{
                          typography: {
                            md: "h5",
                            xxs: "h7",
                          },
                        }}
                      >
                        {des}
                      </Typography>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mb-2">
              <Typography
                component={"div"}
                color={blue[500]}
                sx={{
                  typography: {
                    md: "h4",
                    xxs: "h6",
                  },
                }}
              >
                Chức năng chính:
              </Typography>
              <ul className="list-disc">
                {mainFunction?.map((des, index) => {
                  return (
                    <li key={index} className="mx-4">
                      <Typography
                        component={"div"}
                        sx={{
                          typography: {
                            md: "h5",
                            xxs: "h7",
                          },
                        }}
                      >
                        {des}
                      </Typography>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mb-2">
              <Typography
                component={"div"}
                color={blue[500]}
                sx={{
                  typography: {
                    md: "h4",
                    xxs: "h6",
                  },
                }}
              >
                Công nghệ sử dụng:
              </Typography>
              <ul className="list-disc flex flex-wrap">
                {technologies?.map((des, index) => {
                  return (
                    <li key={index} className="mx-4">
                      <Typography
                        component={"div"}
                        sx={{
                          typography: {
                            md: "h5",
                            xxs: "h7",
                          },
                        }}
                      >
                        {des}
                      </Typography>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    // <div className="relative w-full h-full flex items-center justify-center">
    //   <div className="h-2/3 w-3/5 grid grid-rows-2 bg-amber-100">
    //     <div className="row-span-1 grid grid-cols-3">
    //       <div className="col-span-1 flex justify-center items-center">
    //         <img src={image} alt="avatar" className='h-full py-2'/>
    //       </div>
    //       <div className="col-span-2"></div>
    //     </div>
    //     <div className="row-span-1 grid grid-cols-3">
    //       <div className="col-span-1">
    //         <p>{project}</p>
    //       </div>
    //       <div className="col-span-2"></div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ItemProject;
