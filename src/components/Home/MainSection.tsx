import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../shared/types"
import manisha from "../../assets/manisha.png"
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
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-5"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-40 md:mt-32 r md:order-2 flex justify-center">
        {isAboveLarge ? (
          <div
            className="relative z-0  ml-40 before:absolute before:-top-10 before:-left-10 before:rounded-t-[400px]
            before:w-full before:max-w-[300px] md:before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[400px] rounded-t-[400px]"
              src={manisha}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[300px]
           rounded-t-full"
            src={manisha2}

            />
        )}
      </div>
       <div className="z-30 basis-2/5 mt-7 md:mt-12  flex  items-center   ml-40">
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
          <div className="flex flex-col flex-wrap items-start">
         <div>
           
         <p className="text-l text-left text-yellow font-playfair"> नमस्ते🙏🏻, My name is</p>
          {/* <div className="border-b-2 border-cyan-200"></div> */}
         </div>
         
        <h1 className="text-2xl  md:text-6xl font-playfair ml-4 md:ml-2">Manisha{""} Pariyar </h1>
          <p className=" text-left flex  gap-2 my-4  text-xl md:text-4xl font-playfair">
           And I am a 
           <Typewriter
           options={{
            strings:[" passionate Leaner.", "Web-Developer.", "Code Enthusiast." , "programmer"],
            autoStart:true,
            loop:true,
           }
           }/> 
          </p>
         
          </div>
      
        <div className="mt-2 flex flex-col  md:flex-row  gap-4 ">
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