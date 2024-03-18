import manisha2 from "../../assets/manisha2.png"
import { SelectedPage } from "../../shared/types";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const RightSection = ({}: Props) => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative mb-5">
    <img
      className="w-[300px] h-[400px] lgl:w-[380px] lgl:h-[420px] mt-4 z-10 border-solid rounded-t-[200px] lgl:rounded-lg"
      src={manisha2}
      alt="bannerImg"
    />
    {/* <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div> */}
  </div>
  )
}
export default RightSection