import { SelectedPage } from "../../shared/types";
import {  Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}


 

const AboutSection = ({}: Props) => {
  const [text] = useTypewriter({
    words: [" passionate Leaner.", "Web-Developer.", "Code Enthusiast." , "programmer!"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 4000,
  });
  return (
      <section  
      id="about"
      className={ `w-full  flex flex-col  lg:flex lg:justify-around lg:flex-row gap-20 items-center
      `}>
         <div className="flex flex-col  lg:flex lg:justify-between lgl:flex-row items-center mt-8">
          <div className='flex flex-col gap-4 p-2'>
             <h1 className='text-2xl font-bold'>मेरो बारेमा:</h1>
             <h2 className="text-xl font-bold text-white  lg:text-xl">
           I'm a {" "}<span className="text-designColor">{text}</span>
          <Cursor
            cursorBlinking= {false}
            cursorStyle=""
            cursorColor="#212428"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide flex-wrap  mb-3">
         I'm a Third year BCA student at <span className="text-designColor">Pokhara Universty</span>,
         I would describe myself as an avid learner with immense  curiosity towards technology.
        
         I enjoy learning new skills and implementing them in real life! I believe in community-building and collaboration. 
        </p>
         <p>
           Email : <span className="text-designColor">manishapaiyar196@gmail.com</span>
         </p>
         <p>Place : <span className="text-designColor"> Butwal, Nepal</span> </p>
     </div>
     </div>
      </section>
  )
}

export default AboutSection