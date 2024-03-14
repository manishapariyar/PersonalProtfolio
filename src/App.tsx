import { useEffect, useState } from "react";
import Navbar from "./components/Navbar"
import { SelectedPage } from "./shared/types";
import useMediaQuery from "./hooks/useMediaQuery";


const  App = () => {
  const [selectedPage,setSelectedPage] = useState<
  SelectedPage>(SelectedPage.Home);
  
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

 
  return (
    <div className= 'app bg-blue-dark' >
      <Navbar
        
        selectedPage={selectedPage} 
         setSelectedPage={setSelectedPage}
      />

    </div>
  )
}

export default  App