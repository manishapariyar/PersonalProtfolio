import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaJava, FaGithub } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FiFramer } from "react-icons/fi";
import { SiTypescript, SiTailwindcss, SiRedux, SiNodedotjs, SiMongodb } from "react-icons/si";
import { SelectedPage } from "../../shared/types";
import Marquee from "react-fast-marquee";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const skills = [
  { icon: <FaReact className="text-5xl mt-2 text-blue-300" />, name: "ReactJs" },
  { icon: <FaHtml5 className="text-5xl mt-2 text-[#e44d26]" />, name: "HTML5" },
  { icon: <IoLogoJavascript className="text-5xl mt-2 text-[#ebe846]" />, name: "JavaScript" },
  { icon: <FaCss3Alt className="text-5xl mt-2 text-[#039be5]" />, name: "CSS3" },
  { icon: <SiTailwindcss className="text-5xl mt-2 text-[#039be5]" />, name: "Tailwind" },
  { icon: <FaBootstrap className="text-5xl mt-2 text-[#7f03e5]" />, name: "Bootstrap" },
  { icon: <SiTypescript className="text-5xl mt-2 text-[#0356e5]" />, name: "TypeScript" },
  { icon: <FiFramer className="text-5xl mt-2 text-[#c84f75]" />, name: "Framer-Motion" },
  { icon: <FaJava className="text-5xl mt-2 text-[#eeb64c]" />, name: "Java" },
  { icon: <SiRedux className="text-5xl mt-2 text-[#c54cee]" />, name: "Redux" },
  { icon: <FaGithub className="text-5xl mt-2 text-[#4a484a]" />, name: "Git/GitHub" },
  { icon: <SiNodedotjs className="text-5xl mt-2 text-[#008000]" />, name: "NodeJS" },
  { icon: <SiMongodb className="text-5xl mt-2 text-[#008000]" />, name: "Mongodb" },
];

const SkillSection = ({ }: Props) => {
  return (
    <div id="skills" className="w-full flex justify-center flex-col gap-2 m-8">
      <h1 className="font-bold text-xl p-4 text-center">Skills & Abilities</h1>

      <div className="w-full">
        <Marquee
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border-2 flex flex-col justify-center items-center w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] py-4 px-6 bg-bodyColor rounded-xl flex-shrink-0 m-2"
            >
              {skill.icon}
              <p className="text-white p-2 text-lg md:text-xl">{skill.name}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default SkillSection;
