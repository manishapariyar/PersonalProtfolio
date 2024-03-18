
import ActionButton from "../../shared/ActionButton";

import { SelectedPage } from "../../shared/types";
import {  Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const LeftSection = ({setSelectedPage}: Props) => {
  const [text] = useTypewriter({
    words: [" passionate Leaner.", "Web-Developer.", "Code Enthusiast." , "programmer!"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">
          "स्वागतम् मेरो संसारमा"</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Manisha Pariyar</span>
        </h1>
        <h2 className="text-3xl font-bold text-white  lg:text-xl">
          a <span>{text}</span>
          <Cursor
            cursorBlinking= {false}
            cursorStyle=""
            cursorColor="#212428"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide flex-wrap">
         I'm a Third year BCA student at <span className="text-designColor">Pokhara Universty</span>,
         I would describe myself as an avid learner with immense  curiosity towards technology.
        
         I enjoy learning new skills and implementing them in real life! I believe in community-building and collaboration. 
        </p>
     

      <div className=" flex gap-5  text-sm ">
       <ActionButton setSelectedPage={setSelectedPage} >
        Contact Me</ActionButton>
       <ActionButton setSelectedPage={setSelectedPage} >
       View Resume</ActionButton>
       </div>
       </div>
    </div>
  )
}

export default LeftSection