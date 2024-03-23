
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
        <h4 className=" text-2xl font-bold">
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