
import { FaReact } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { SelectedPage } from "../../shared/types";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const SkillSection = ({setSelectedPage}: Props) => {
  return (
    <div id="skills" className="w-full items-center flex justify-center flex-col  gap-2">
      <h1 className="font-bold text-xl">"Skills & Abilities"</h1>
      <div className="mt-2 bg-designColor flex  h-auto  w-auto flex-row  flex-wrap p-6 justify-center">
          <div className=" border-2 flex flex-col justify-center items-center w-[140px] py-4 px-6 m-4 bg-bodyColor rounded-xl">  
          <FaReact className="text-5xl mt-2 text-blue-300 "/>
          <p className="text-white p-2 text-xl ">ReactJs</p>
          </div>
          <div className=" border-2 flex flex-col justify-center items-center w-[140px] py-4 px-6 m-4 bg-bodyColor rounded-xl">  
          <FaHtml5  className="text-5xl mt-2 text-[#e44d26] "/>
          <p className="text-white p-2 text-xl ">HTML:5</p>
          </div>
          <div className=" border-2 flex flex-col justify-center items-center w-[140px] py-4 px-6 m-4 bg-bodyColor rounded-xl">  
          <IoLogoJavascript  className="text-5xl mt-2 text-[#ebe846] "/>
          <p className="text-white p-2 text-xl ">JavaScript</p>
          </div>
          <div className=" border-2 flex flex-col justify-center items-center w-[140px] py-4 px-6 m-4 bg-bodyColor rounded-xl">  
          <FaCss3Alt  className="text-5xl mt-2 text-[#039be5] "/>
          <p className="text-white p-2 text-xl ">CSS3</p>
          </div>
          <div className=" border-2 flex flex-col justify-center items-center w-[140px] py-4 px-6 m-4 bg-bodyColor rounded-xl">  
          <SiTailwindcss
           className="text-5xl mt-2 text-[#039be5] "/>
          <p className="text-white p-2 text-xl ">Tailwind</p>
          </div>
          <div className=" border-2 flex flex-col justify-center items-center w-[140px] py-4 px-6 m-4 bg-bodyColor rounded-xl">  
          <FaBootstrap 
           className="text-5xl mt-2 text-[#7f03e5] "/>
          <p className="text-white p-2 text-xl ">Bootstrap</p>
          </div>
          <div className=" border-2 flex flex-col justify-center items-center w-[140px] py-4 px-6 m-4 bg-bodyColor rounded-xl">  
          <SiTypescript
           className="text-5xl mt-2 text-[#0356e5] "/>
          <p className="text-white p-2 text-xl ">TypeScript</p>
          </div>
          <div className=" border-2 flex flex-col justify-center items-center w-[140px] py-4 px-6 m-4 bg-bodyColor rounded-xl">  
          <FiFramer
           className="text-5xl mt-2 text-[#c84f75] "/>
          <p className="text-white text-center text-xl ">Framer-Motion</p>
          </div>
          <div className=" border-2 flex flex-col justify-center items-center w-[140px] py-4 px-6 m-4 bg-bodyColor rounded-xl">  
          <FaJava
           className="text-5xl mt-2 text-[#eeb64c] "/>
          <p className="text-white text-center text-xl p-2">java</p>
          </div>
          <div className=" border-2 flex flex-col justify-center items-center w-[140px] py-4 px-6 m-4 bg-bodyColor rounded-xl">  
          <SiRedux 
           className="text-5xl mt-2 text-[#c54cee] "/>
          <p className="text-white text-center text-xl p-2">Redux</p>
          </div>
          <div className=" border-2 flex flex-col justify-center items-center w-[140px] py-4 px-6 m-4 bg-bodyColor rounded-xl">  
          <FaGithub 
           className="text-5xl mt-2 text-[#4a484a] "/>
          <p className="text-white text-center text-xl p-2">Git/GitHub</p>
          </div>
          <div className=" border-2 flex flex-col justify-center items-center w-[140px] py-4 px-6 m-4 bg-bodyColor rounded-xl ">  
          <SiVercel 
           className="text-5xl mt-2 text-[#000000] "/>
          <p className="text-white text-center text-xl p-2">Vercel</p>
          </div>
         </div>
    </div>
  )
}

export default SkillSection