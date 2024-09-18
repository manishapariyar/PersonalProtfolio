import React from 'react';
import Button from '../../shared/Button';
import { BsBoxArrowInUpRight } from 'react-icons/bs';

type Props = {
   title: string;
   description: string;
   imageSrc: string;
   liveLink?: string;
   codeLink: string;
};

const ProjectCard: React.FC<Props> = ({ title, description, imageSrc, liveLink, codeLink }) => {
   const overlayStyles = `p-5 absolute z-50 flex
    h-[240px] w-[290px] lgl:w-[370px] flex-col items-center justify-center gap-2
    whitespace-normal bg-gray-300 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90 hover:absolute`;

   return (
      <li className="relative mx-2 inline-block h-[330px] w-[300px] lgl:w-[380px] p-2 bg-slate-800 rounded-sm mb-8">
         <div className={overlayStyles}>
            <p className="text-2xl text-white">{title}</p>
            <p className="mt-5 text-sm text-black">{description}</p>
            {liveLink && (
               <a href={liveLink} target="_blank" rel="noopener noreferrer">
                  <BsBoxArrowInUpRight className="text-4xl mt-3" />
               </a>
            )}
         </div>
         <img src={imageSrc} alt={title} className="w-[300px] lgl:w-[380px] h-[240px]" />
         <Button>
            <a href={codeLink} target="_blank" rel="noopener noreferrer">Code</a>
         </Button>
      </li>
   );
};

export default ProjectCard;
