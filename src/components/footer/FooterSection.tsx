
import { FaFacebookMessenger } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import {  useTypewriter } from 'react-simple-typewriter'
import { FaArrowCircleUp } from "react-icons/fa";

const FooterSection = () => {
  const [text] = useTypewriter({
    words: ["Learning......", "searching for opportunities.", "i love to code." , "Creating better version of myself !!"],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 3000,
  });

  return (
    <footer>
      <div className=' py-10 w-full h-full bg-bodyColor mx-auto flex justify-center items-center flex-col border-t-2  border-gray-500 '>
      <p className=' text-center flex flex-wrap text-xl lgl:w-[60%] '>My inbox and social medias are always open. Whether you have a question or just want to say hello, I will try my best to get back to you! Feel free to contact me about any relevant opportunity or just a simple talk.</p>

      <div className='flex m-10 justify-between gap-10 text-3xl '>
     <a href="https://www.messenger.com/t/100075532211635" target='blank'> <FaFacebookMessenger  className='text-[#dd00ff]'/></a>
      <a href="https://github.com/manishapariyar" target='blank'><FaGithubSquare /></a>
      
      <a href="https://www.linkedin.com/in/manisha-pariyar-22b1a5253/" target='blank'><FaLinkedin className='text-[#00b7fff1]' /></a>
      </div>
       <div className="flex justify-center items-center mt-3 text-sm text-white font-playfair font-bold py-5  rounded-sm">{text}</div>
      </div>
      <a href="/home" className="items-end justify-end flex p-5 "><FaArrowCircleUp className="text-3xl text-designColor" /></a>
    </footer>
  )
}

export default FooterSection
