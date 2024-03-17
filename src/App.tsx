import {useState } from "react";
import Navbar from "./components/Navabar/Navbar"
import { SelectedPage } from "./shared/types";
import useMediaQuery from "./hooks/useMediaQuery";
import MainSection from "./components/Home/MainSection"

const  App = () => {
  const [selectedPage,setSelectedPage] = useState<
  SelectedPage>(SelectedPage.Home);
  
 

 
  return (
    <div className= 'app bg-blue-dark' >
      <Navbar
        selectedPage={selectedPage} 
         setSelectedPage={setSelectedPage}
      />
        < MainSection setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default  App