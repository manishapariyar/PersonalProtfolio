import {useState } from "react";
import Navbar from "./components/Navabar/Navbar"
import { SelectedPage } from "./shared/types"
import MainSection from "./components/Home/MainSection"
import AboutSection from "./components/aboutme/AboutSection";
import EducationSection from "./components/education/EducationSection";
import ProjectSection from "./components/project/ProjectSection";
import ContactSection from "./components/contactSection/ContactSection";
import FooterSection from "./components/footer/FooterSection";


const  App = () => {
  const [selectedPage,setSelectedPage] = useState<
  SelectedPage>(SelectedPage.Home);
  
 

 
  return (
    <div className= ' w-full h-auto bg-bodyColor text-lightText px-4' >
      <Navbar
        selectedPage={selectedPage} 
         setSelectedPage={setSelectedPage}
      />
      <div className="max-w-screen-xl mx-auto">
      < MainSection setSelectedPage={setSelectedPage} />
      <AboutSection setSelectedPage={setSelectedPage}/>
      <EducationSection setSelectedPage={setSelectedPage}/>
      <ProjectSection setSelectedPage={setSelectedPage}/>
      <ContactSection setSelectedPage={setSelectedPage}/>
       <FooterSection/>
      </div>
    </div>
  )
}

export default  App