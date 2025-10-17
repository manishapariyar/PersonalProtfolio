
import { SelectedPage } from "../../shared/types"

import LeftSection from "./LeftSection";
import RightSection from "./RightSection"

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const MainSection = ({ setSelectedPage }: Props) => {


  return (
    <section
      id="home"
      className={`
      className="w-full pt-4  flex justify-between flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px]
      xl:
      `}
    >


      <LeftSection setSelectedPage={setSelectedPage} />
      <RightSection setSelectedPage={setSelectedPage} />
    </section>
  )
}
export default MainSection