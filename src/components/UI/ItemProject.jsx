import { Box, Grid, styled, Typography } from "@mui/material";
import list from "../../utils/listProject";
import { amber, blue, yellow } from "@mui/material/colors";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
const ItemProject = () => {
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
        // chia theo cột không chia theo hàng
        columns={{ xs: 4, md: 12 }}
        width={0.6}
        height={2 / 3}
        bgcolor={amber[100]}
        borderRadius={4}
      >
        {/* Một trong số các cách chia hàng là sử dụng flex và direction */}
        <Grid
          item
          xs={2}
          md={4}
          container
          display={"flex"}
          direction={"column"}
        >
          <Grid item md={6}>
            <Img
              src={list[0].image}
              alt="avatar"
              sx={{ paddingY: 1, borderRadius: 4 }}
            />
          </Grid>
          <Grid item md={6} margin={"auto"}>
            <Typography component={"div"} variant="h6">
              {list[0].time}
            </Typography>
            <Typography component={"div"} variant="h4" color={blue[400]}>
              {list[0].project}
            </Typography>
            {list[0].state === "done" && (
              <Typography
                component={"div"}
                className="basis-auto sm:basis-1/6 inline-block bg-green-200 text-green-800 text-sm font-medium sm:me-2 px-2.5 py-1 rounded sm:ms-3"
              >
                Đã hoàn thành
              </Typography>
            )}
            {list[0].state === "processing" && (
              <Typography
                component={"div"}
                className="basis-auto sm:basis-1/6 inline-block bg-yellow-200 text-yellow-600 text-sm font-medium sm:me-2 px-2.5 py-1 rounded sm:ms-3"
              >
                Đang tiến hành
              </Typography>
            )}
          </Grid>
        </Grid>

        <Grid container item xs={2} md={8} paddingY={1}>
          <Grid item>
            <div className="mb-2">
              <Typography variant="h4" component={"div"} color={blue[500]}>
                Mô tả:
              </Typography>
              <ul className="list-disc">
                {list[0]?.describe?.map((des, index) => {
                  return (
                    <li key={index} className="mx-4">
                      <Typography variant="h5" component={"div"}>
                        {des}
                      </Typography>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mb-2">
              <Typography variant="h4" component={"div"} color={blue[500]}>
                Mục tiêu chính:
              </Typography>
              <ul className="list-disc">
                {list[0]?.mainFunction?.map((des, index) => {
                  return (
                    <li key={index} className="mx-4">
                      <Typography variant="h5" component={"div"}>
                        {des}
                      </Typography>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mb-2">
              <Typography variant="h4" component={"div"} color={blue[500]}>
                Công nghệ sử dụng:
              </Typography>
              <ul className="list-disc flex">
                {list[0]?.technologies?.map((des, index) => {
                  return (
                    <li key={index} className="mx-4">
                      <Typography variant="h5" component={"div"}>
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
    //         <img src={list[0].image} alt="avatar" className='h-full py-2'/>
    //       </div>
    //       <div className="col-span-2"></div>
    //     </div>
    //     <div className="row-span-1 grid grid-cols-3">
    //       <div className="col-span-1">
    //         <p>{list[0].project}</p>
    //       </div>
    //       <div className="col-span-2"></div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ItemProject;
