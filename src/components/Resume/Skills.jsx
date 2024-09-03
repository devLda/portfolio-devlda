import { Card, CardContent, Typography } from "@mui/material";
import listSkill from "../../utils/listSkill.jsx";
import { useOutletContext } from "react-router-dom";

const Skills = () => {
  const [isLandscapeMobile] = useOutletContext();
  return (
    <>
      <h1
        className={`${
          isLandscapeMobile
            ? "text-xl"
            : "h-12 text-base sm:text-2xl lg:text-3xl pb-2"
        }  text-center text-blue-400`}
      >
        Công nghệ chính thường sử dụng
      </h1>

      <div className="w-full h-[calc(100%_-_48px)] overflow-auto scrollbar">
        <div className="flex flex-wrap">
          {listSkill?.length &&
            listSkill?.map((skill, index) => {
              return (
                <div className="basis-full xs:basis-1/2 sm:basis-1/4 my-2 flex justify-center items-center">
                  <Card
                    key={index}
                    sx={{
                      width: 0.8,
                      display: "flex",
                      justifyItems: "center",
                    }}
                  >
                    <CardContent
                      sx={{
                        width: 1,
                        padding: {
                          md: "16px!important",
                          xxs: "8px!important",
                        },
                      }}
                    >
                      <p className="text-slate-600 flex justify-center">
                        {skill.image}
                      </p>
                      <Typography
                        gutterBottom
                        component="div"
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        color={"black"}
                        className="text-4xl"
                      >
                        {skill.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Skills;
