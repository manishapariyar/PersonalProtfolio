import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../shared/types"
import manisha2 from "../../assets/manisha2.png"
import { motion } from "framer-motion";
import ActionButton from "../../shared/ActionButton";
import Typewriter from 'typewriter-effect';


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const MainSection = ({setSelectedPage}: Props) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");


  
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5  mt-20 md:mt-32  md:order-2 flex justify-center">
        {isAboveLarge ? (
          <div
            className="relative z-0  ml-40 before:absolute before:-top-10 before:-left-10 before:rounded-t-[400px]
            before:w-full before:max-w-[300px] md:before:max-w-[400px] before:h-full before:border-2 before:border-black before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[400px] rounded-t-[400px]"
              src={manisha2}
            />
          </div>
        ) : (
          <div>
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[400px] rounded-t-[400px]"
              src={manisha2}
            />
          </div>
        )}
      </div>
       <div className=" md:basis-2/5 mt-3 md:mt-12  flex  items-start md:items-center ml-10 md:ml-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex flex-col flex-wrap items-start ">
   
           
         <p className="text-l text-left font-playfair  pt-4"> <span className=" text-black text-4xl ">नमस्ते🙏🏻</span>, My name is</p>
          {/* <div className="border-b-2 border-cyan-200"></div> */}
       
         
        <h1 className="text-4xl md:text-6xl font-playfair mt-1  md:ml-2 text-blue_pink">Manisha{""} Pariyar </h1>
          <div className=" text-left flex  gap-2 mt-2 mb-4  text-xl md:text-4xl font-playfair text-black">
           <span className="text-white"> And I am a </span>
           <Typewriter
           options={{
            strings:[" passionate Leaner.", "Web-Developer.", "Code Enthusiast." , "programmer"],
            autoStart:true,
             loop:true,
           }
           }
       />
          </div>
         
    
          </div>
      
          <div className=" flex gap-5  text-sm ">
           <ActionButton setSelectedPage={setSelectedPage} >
            Contact Me</ActionButton>
           <ActionButton setSelectedPage={setSelectedPage} >
           Download CV</ActionButton>
           </div>
           </motion.div>
        </div>
   </section>
  )
}
export default MainSection