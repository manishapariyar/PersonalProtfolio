import { SelectedPage } from "../../shared/types";
import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import logo from '../../assets/logo.png'
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import Link from './Link'


type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

function Navbar({ selectedPage, setSelectedPage }: Props) {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveSmallScreens = useMediaQuery("(min-width:1069px)");

  return (
    <nav>
      <div className="w-full h-24 sticky z-30 py-3 top-0 bg-transparent  flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 drop-shadow ">
        <div>
          <img src={logo} alt="logo"
            className="mt-5 my-2 lgl:mx-10 w-[150px] " />
        </div>
        {isAboveSmallScreens ? (
          <div className="hidden mdl:inline-flex items-center mdl:gap-2">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage} />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage} />
            <Link
              page="Education"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage} />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage} />
            <Link
              page="Project"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage} />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage} />
          </div>
        ) : (
          <button
            className="rounded-full bg-white p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <RiMenu2Fill className="h-6 w-6 text-black" />
          </button>
        )}
      </div>

      {isMenuToggled && (
        <div className="fixed right-0 bottom-0 h-full w-[200px] bg-bodyColor block">
          {/*close icon*/}
          <div className="flex justify-end p-9">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <RxCross2 className="h-5 w-7 text-designColor" />
            </button>
          </div>
          <div className=" flex flex-col gap-10 text-xl ">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage} />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage} />
            <Link
              page="Education"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage} />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage} />
            <Link
              page="Project"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage} />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage} />
          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;
