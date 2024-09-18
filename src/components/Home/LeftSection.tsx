
import ActionButton from "../../shared/ActionButton";
import { SelectedPage } from "../../shared/types";
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const LeftSection = ({ setSelectedPage }: Props) => {
  const [text] = useTypewriter({
    words: [" passionate Leaner.", "Web-Developer.", "Code Enthusiast.", "programmer!"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const PDF_URL = "/file_pdf.pdf"
  const downloadFile = (url: string) => {
    const fileName = url.split('/').pop();
    const link = document.createElement('a');
    link.href = url;  // Corrected href
    link.setAttribute('download', fileName || 'download');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-2xl font-bold">
          "स्वागतम् मेरो संसारमा"</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Manisha Pariyar</span>
        </h1>
        <h2 className="text-3xl font-bold text-white  lg:text-xl">
          a <span>{text}</span>
          <Cursor
            cursorBlinking={false}
            cursorStyle=""
            cursorColor="#212428"
          />
        </h2>



        <div className=" flex gap-5  text-sm ">
          <ActionButton setSelectedPage={setSelectedPage} >
            Contact Me</ActionButton>
          <button onClick={() => { downloadFile(PDF_URL) }} className="rounded-md 
    bg-designColor text-white
     px-5 md:px-10 py-2 hover:bg-yellow
     hover:text-deep-blue">My Resume</button>
        </div>
      </div>
    </div>
  )
}

export default LeftSection