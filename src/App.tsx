import {useState } from "react";
import Navbar from "./components/Navabar/Navbar"
import { SelectedPage } from "./shared/types";
import useMediaQuery from "./hooks/useMediaQuery";
import MainSection from "./components/Home/MainSection"

const  App = () => {
  const [selectedPage,setSelectedPage] = useState<
  SelectedPage>(SelectedPage.Home);
  
 

 
  return (
    <div className= 'w-full h-auto bg-bodyColor text-lightText px-4' >
      <Navbar
        selectedPage={selectedPage} 
         setSelectedPage={setSelectedPage}
      />
      <div className="max-w-screen-xl mx-auto">
      < MainSection setSelectedPage={setSelectedPage} />
      </div>
    </div>
  )
}

export default  App