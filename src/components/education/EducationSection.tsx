import { SelectedPage } from "../../shared/types";
import crimson from "../../assets/crimsonCollage.jpg"
import parbhat from "../../assets/parbhatSchool.jfif"
import SkillSection from "./SkillSection"


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}


const Education = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="education"
      className={` w-full  flex flex-col  lg:flex lg:justify-around lg:flex-row gap-20 items-center
      `}
    >
      <div className="flex flex-col  lg:flex lg:justify-between lgl:flex-row items-center mt-8 w-full">
        <div className='flex flex-col gap-8 w-full items-center p-6'>
          <h1 className='text-2xl font-bold'>My Skills/Education:</h1>
          <div className="flex
       items-center justify-center flex-col gap-6 w-full">
            <p className="text-sm font-playfair text-center"> Education Is Not The Learning Of Facts, But The Training of The Mind To Think .</p>
            <div className="w-full flex flex-col justify-center items-center">
              <div className="border-[2px] border-white-500 bg-white p-6 leading-8 flex rounded-[10px]  w-[80%]  justify-around hover:bg-slate-500 mb-5 flex-col lgl:flex-row gap-2 lgl:gap-60">
                <img src={crimson} alt="" className="w-200 " />
                <div className="flex flex-col gap-2 mt-10">
                  <h1 className="text-xl text-designColor font-bold   lgl:text-2xl">Bachelor Of Computer Application</h1>
                  <p className="text-sm  text-black hover:text-designColor">Crimson college of Technology | PU</p>
                  <p className=" text-green-400 text-1xl font-bold ">2020-2024 | Pursuing </p>
                </div>
              </div>
              <div className="border-[2px] border-white-500 bg-white p-6 leading-8 flex rounded-[10px] w-[80%]  justify-around hover:bg-slate-500 flex-col lgl:flex-row gap-2 lgl:gap-40">
                <img src={parbhat} alt="" className="w-100 " />
                <div className="flex flex-col gap-2 mt-10">
                  <h1 className="text-xl text-designColor  font-bold lgl:text-2xl">Management In Computer Science</h1>
                  <p className="text-sm text-black hover:text-designColor">Parbhat English Boarding School </p>
                  <p className="  text-green-400 text-1xl font-bold ">2018-2020 | Completed </p>
                </div>
              </div>
            </div>
          </div>
          <SkillSection setSelectedPage={setSelectedPage} />
        </div>
      </div>
    </section>
  )
}

export default Education