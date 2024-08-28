import Timeline from "../UI/Timeline";
import timelineExp from "../../utils/timelineExp";
import { useOutletContext } from "react-router-dom";

const Experience = () => {
  const [isLandscapeMobile] = useOutletContext();

  return (
    <>
      <h1
        className={`${
          isLandscapeMobile
            ? "text-xl"
            : "h-12 text-xl xs:text-2xl sm:text-3xl pb-2"
        }  text-center text-blue-400`}
      >
        Kinh nghiệm chính thức
      </h1>

      <div
        className={`h-[calc(100%_-_48px)] w-full pl-5 lg:pt-5 overflow-y-auto scrollbar`}
      >
        <Timeline childrenProp={timelineExp} />
      </div>
    </>
  );
};

export default Experience;
