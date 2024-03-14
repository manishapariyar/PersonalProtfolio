import { SelectedPage } from "../shared/types";
import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import logo from '../assets/logo.png'
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import Link from './Link'


type Props = {
  selectedPage: SelectedPage;
  setSelectedPage:(value: SelectedPage)=>void;
}

const Navbar = ({selectedPage,setSelectedPage}: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
 ;
  return (
   <nav className={`top-0 z-40  w-full py-6`}>
    <div className={`flex items-center justify-between mx-auto w-5/6`}>
      <img src={logo} alt="logo" className="w-[130px]" />
      
      {isAboveSmallScreens ? (<div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
           
                <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Education/Skills"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Project"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  
          
             
            </div>):( <button
              className="rounded-full bg-red-300 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <RiMenu2Fill className="h-6 w-6 text-blue-400" />
            </button>
               )}
    </div>
     {/*Mobile menu model*/}
     {!isAboveSmallScreens && isMenuToggled && (
      <div className="fixed right-0 bottom-0 z-40 h-full w-[200px] bg-light-red drop-shadow-xl">
        {/*close icon*/}
        <div className="flex justify-end p-12">
          <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <RxCross2 className="h-6 w-6 text-blue-600 "/>
          </button>
        </div>
        <div className="ml-[20%] flex flex-col gap-10 text-1xl">
                   <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Education/Skills"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Project"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  
      </div>
      </div>
     )}
   </nav>
  )
}

export default Navbar