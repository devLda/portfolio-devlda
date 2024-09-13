import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiRedux, SiMui } from "react-icons/si";
import RestApi from "../assets/skills/RestApi.png";
import Figma from "../assets/skills/Figma.png";

const listSkill = [
  {
    image: <FaHtml5 className="text-red-500" size={100} />,
    title: "Html 5",
  },
  {
    image: <FaCss3Alt className="text-blue-500" size={100} />,
    title: "Css 3",
  },
  {
    image: <FaJsSquare className="text-yellow-500" size={100} />,
    title: "Javascript",
  },
  {
    image: <SiTypescript className="text-blue-600" size={100} />,
    title: "TypeScript",
  },
  {
    image: (
      <img
        src={RestApi}
        alt="Rest Api"
        className="h-16 w-24 scale-125 my-4 mx-1"
      />
    ),
    title: "Rest Api",
  },
  {
    image: <FaReact className="text-blue-400" size={100} />,
    title: "ReactJs",
  },

  // RestApi vs RestFull Api:
  // RestApi đề cập đến kiến trúc và thiết kế của webservice
  // Restfull đề cập đến bất kỳ api nào mang kiến trúc của Rest

  {
    image: <SiTailwindcss className="text-blue-300" size={100} />,
    title: "TailwindCss",
  },
  {
    image: <SiRedux className="text-indigo-600" size={100} />,
    title: "Redux",
  },
  {
    image: <FaGithub className="text-black" size={100} />,
    title: "Git",
  },
  {
    image: (
      <img
        src={Figma}
        alt="Figma"
        className="h-16 w-20 scale-125 my-4 mx-1"
      />
    ),
    title: "Figma",
  },
  {
    image: <SiMui className="text-blue-600" size={100} />,
    title: "Material UI",
  },
];

export default listSkill;
