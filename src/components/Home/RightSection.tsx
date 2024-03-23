import { motion } from "framer-motion";
import manisha2 from "../../assets/manisha2.png"
import { SelectedPage } from "../../shared/types";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const RightSection = ({}: Props) => {
  return (
    <motion.div className="mb-5"
    initial="hidden"
    whileInView="visible"
    viewport={{once:true, amount:0.5}}
    transition={{delay:0.5,duration:0.5}}
    variants={{
     hidden:{opacity:0,x:-100},
     visible:{opacity:1,x:0}
    }}>
    <img
      className="w-[300px] h-[400px] lgl:w-[380px] lgl:h-[420px] mt-4 z-10 border-solid rounded-t-[200px] lgl:rounded-lg"
      src={manisha2}
      alt="bannerImg"
    />
    {/* <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div> */}
  </motion.div>
  )
}
export default RightSection