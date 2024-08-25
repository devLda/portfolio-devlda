import Timeline from "../UI/Timeline";
import timelineExp from "../../utils/timelineExp";

const Experience = () => {
  return (
    <>
      <h1 className="text-3xl text-center text-blue-400 pb-2">
        Kinh nghiệm của tôi
      </h1>

      <div className="w-full h-full pl-5 pt-5 overflow-y-auto">
        <Timeline childrenProp={timelineExp} />
      </div>
    </>
  );
};

export default Experience;
