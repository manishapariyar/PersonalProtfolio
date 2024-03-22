import Button from "../../shared/Button";
import { p1,p2 ,p3 ,p4} from '../../shared/images';
import { BsBoxArrowInUpRight } from "react-icons/bs";
// type Props = {
//   Name:string;
//   description:string;
//   image:string;


// }


const Class =  () => {
 const overlayStyles= `p-5 absolute z-50 flex
 h-[240px] w-[290px] lgl:w-[370px] flex-col items-center justify-center
 whitespace-normal bg-slate-400 text-center text-white
 opacity-0 transition duration-500 hover:opacity-90`;


  return (
      <>
     <li className="relative mx-2 inline-block h-[330px] w-[300px] lgl:w-[380px] p-2 bg-slate-800  rounded-sm mb-8">
         <div className={overlayStyles}>
            <p className="text-2xl text-white">Simple UI Design</p>
            <p className="mt-5 text-xl text-green-300"> Modern UI/UX design by using Reactjs</p>
            <a href="https://modern-uiux-website-in-react.vercel.app/" target="blank">  <BsBoxArrowInUpRight className="text-4xl mt-3 "/></a>
           </div>
           <img src={p1} alt="image"  
           className="w-[300px]  lgl:w-[380px] h-[240px]" />
        <Button>
        <a href="https://github.com/manishapariyar/-Modern-UIUX-Website-in-React/tree/main" target="blank">Code</a>
        </Button>
       </li>
     <li className="relative mx-2 inline-block h-[330px] w-[300px] lgl:w-[380px] p-2 bg-slate-800  rounded-sm mb-8">
         <div className={overlayStyles}>
            <p className="text-2xl text-white">Dice Game</p>
            <p className="mt-5 text-xl text-green-300"> Modern UI/UX design by using Reactjs</p>
            <a href="https://dice-game-zeta-one.vercel.app/" target="blank">  <BsBoxArrowInUpRight className="text-4xl mt-3 "/></a>
           </div>
           <img src={p4} alt="image"  
           className="w-[300px]  lgl:w-[380px] h-[240px]" />
        <Button>
        <a href="https://github.com/manishapariyar/10_React_projets/tree/main/Project_3" target="blank">Code</a>
        </Button>
       </li>
     <li className="relative mx-2 inline-block h-[330px] w-[300px] lgl:w-[380px] p-2 bg-slate-800  rounded-sm mb-8">
         <div className={overlayStyles}>
            <p className="text-2xl text-white">Fitness Application</p>
            <p className="mt-5 text-xl text-green-300">  Fitness Application ,By using frontend technologies :React,Typescript, Tailwind, Hero Icons, Framer Motion,</p>
            <a href="https://mvogym.vercel.app//" target="blank">  <BsBoxArrowInUpRight className="text-4xl mt-3 "/></a>
           </div>
           <img src={p3} alt="image"  
           className="w-[300px]  lgl:w-[380px] h-[240px]" />
        <Button>
        <a href="https://github.com/manishapariyar/Mvogym" target="blank">Code</a>
        </Button>
       </li>
     <li className="relative mx-2 inline-block h-[330px] w-[300px] lgl:w-[380px] p-2 bg-slate-800  rounded-sm mb-8">
         <div className={overlayStyles}>
            <p className="text-2xl text-white">Protfolio</p>
            <p className="mt-5 text-xl text-green-300">Simple Personal Protfolio using HTML CSS JS</p>
            <a href="https://my-portfolio-hazel-alpha.vercel.app/" target="blank">  <BsBoxArrowInUpRight className="text-4xl mt-3"/></a>
           </div>
           <img src={p2} alt="image"  
           className="w-[300px]  lgl:w-[380px] h-[240px]" />
        <Button>
        <a href="https://github.com/manishapariyar/my-Portfolio" target="blank">Code</a>
        </Button>
       </li>
  
      </>
   
  )
}

export default Class