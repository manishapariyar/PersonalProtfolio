import { useEffect, useState } from "react";
import Navbar from "./components/Navbar"
import { SelectedPage } from "./shared/types";


const  App = () => {
  const [selectedPage,setSelectedPage] = useState<
  SelectedPage>(SelectedPage.About);
  const [isTopOfpage,setIsTopOfpage] = useState<boolean>(true);
  useEffect(()=>{
    const handleScroll =() =>{
      if(window.scrollY === 0){
        setIsTopOfpage(true);
        setSelectedPage(SelectedPage.About);
      }
      // if(window.scrollY !== 0)
      else
      {
        setIsTopOfpage(false);
      }
    }
    window.addEventListener("scroll",handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll)
   },[]);
  return (
    <div className= ' app bg-blue-20' >
      <Navbar/>

    </div>
  )
}

export default  App