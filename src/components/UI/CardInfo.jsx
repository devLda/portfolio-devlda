import { Box, Card, CardContent, Typography } from "@mui/material";

const CardInfo = ({ childrenProp }) => {
  const { time, title, describe } = childrenProp;
  return (
    <Box className="my-4 py-2 px-4 bg-blue-200 rounded-xl">
      <Typography variant="h5" className="text-amber-500">
        {time}
      </Typography>
      <Typography variant="h4" className="text-white">
        {title}
      </Typography>
      <Typography variant="h6" className="text-black">
        {describe}
      </Typography>
    </Box>
  );
};

export default CardInfo;
