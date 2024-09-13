import { Box, Typography } from "@mui/material";
import { useOutletContext } from "react-router-dom";

const CardInfo = ({ childrenProp }) => {
  const { time, title, describe } = childrenProp;
  const [isLandscapeMobile] = useOutletContext();
  return (
    <Box
      className={`${
        isLandscapeMobile ? "my-2" : "my-4 "
      } py-2 px-4 bg-blue-200 rounded-xl`}
    >
      <Typography className="text-amber-500 dark:text-white" sx={{
        fontWeight: 500,
        fontSize: {
          md: 18,
          xxs: 12
        }
      }}>
        {time}
      </Typography>
      <Typography className="text-white dark:text-green-500" sx={{
        fontWeight: 500,
        fontSize: {
          md: 28,
          xxs: 20
        }
      }}>
        {title}
      </Typography>
      <Typography className="text-black" sx={{
        fontWeight: 500,
        fontSize: {
          md: 20,
          xxs: 16
        }
      }}>
        {describe}
      </Typography>
    </Box>
  );
};

export default CardInfo;
