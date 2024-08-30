import { Box } from "@mui/material";
import Slider from "../../components/UI/Slider";

const Projects = () => {
  return (
    <Box width={1} height={1}>
      <Slider />
      {/* {listProject?.map((list, index) => {
        return (
          <ItemProject key={index} childrenProp = {list} />
        )
      })} */}
    </Box>
  );
};

export default Projects;
