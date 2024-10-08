import { useOutletContext } from "react-router-dom";
import listEdu from "../../utils/listEdu";
import CardInfo from "../UI/CardInfo";

const Education = () => {
  const [isLandscapeMobile] = useOutletContext();
  return (
    <>
      <h1 className={`${isLandscapeMobile ? "text-xl" : "h-12 text-xl sm:text-3xl pb-2"}  text-center text-blue-400`}>
        Học vấn và các chứng chỉ
      </h1>

      <div className={`${isLandscapeMobile ? "gap-0" : "gap-4"} h-[calc(100%_-_48px)] w-full flex flex-col overflow-y-auto scrollbar`}>
        {listEdu.map((edu, index) => {
          return (
            <div className="w-full">
              <CardInfo key={index} childrenProp={edu} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Education;
