import { motion } from 'framer-motion';
import { SelectedPage } from '../../shared/types';
import Htext from '../../shared/Htext';
import Project from './Project';

type Props = {
  setSelectedPage : (value:SelectedPage) => void;
}

function ProjectSection({setSelectedPage}: Props) {


  return (
    <section id="project" className="w-full bg-boxBg py-20">
      <motion.div
      onViewportEnter={()=>setSelectedPage(SelectedPage.Project)}>
        <motion.div
        className="mx-auto w-5/6"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        transition={{delay:0.5,duration:0.5}}
        variants={{
         hidden:{opacity:0,x:-100},
         visible:{opacity:1,x:0}
        }}
        >
          <div className=" flex flex-col w-full justify-center items-center ">
            <Htext>My Projects</Htext>
            <p className="py-5 font-sans text-[20px]">
            "These are some my Projects whice i made during I learn new Technologies."</p>
          </div>

        </motion.div>
        <div className="mt-4 h-[390px] w-[full] overflow-x-auto overflow-y-hidden">
           <ul className="w-[1000px] whitespace-nowrap">
              <Project/>
           </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default ProjectSection