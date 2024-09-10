import { FaFacebookMessenger, FaLinkedin, FaGithubSquare, FaArrowCircleUp } from 'react-icons/fa';
import { useTypewriter } from 'react-simple-typewriter';

const FooterSection = () => {
  // Typewriter effect for dynamic text
  const [text] = useTypewriter({
    words: [
      "Learning......",
      "Searching for opportunities.",
      "I love to code.",
      "Creating a better version of myself !!",
    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 3000,
  });

  return (
    <footer className='py-10 w-full h-full bg-bodyColor mx-auto flex flex-col items-center border-t-2 border-gray-500'>
      {/* Main description */}
      <p className='text-center text-xl lgl:w-[60%] mb-8'>
        My inbox and social medias are always open. Whether you have a question or just want to say hello,
        I will try my best to get back to you! Feel free to contact me about any relevant opportunity or
        just a simple talk.
      </p>

      {/* Social media links */}
      <div className='flex gap-10 text-3xl mb-8'>
        <a href="https://www.messenger.com/t/100075532211635" target='_blank' rel='noopener noreferrer'>
          <FaFacebookMessenger className='text-[#dd00ff]' />
        </a>
        <a href="https://github.com/manishapariyar" target='_blank' rel='noopener noreferrer'>
          <FaGithubSquare />
        </a>
        <a href="https://www.linkedin.com/in/manisha-pariyar-22b1a5253/" target='_blank' rel='noopener noreferrer'>
          <FaLinkedin className='text-[#00b7fff1]' />
        </a>
      </div>

      {/* Typewriter text */}
      <div className="flex justify-center items-center text-sm text-white font-playfair font-bold py-5 rounded-sm">
        {text}
      </div>

      {/* Back to top button */}
      <a href="/home" className="flex justify-end items-end p-5">
        <FaArrowCircleUp className="text-3xl text-designColor" />
      </a>
    </footer>
  );
}

export default FooterSection;
