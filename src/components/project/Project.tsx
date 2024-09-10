import React from 'react';
import ProjectCard from './ProjectCard';
import { p1, p2, p3, p4, p5 } from '../../shared/images';

const projects = [
  {
    title: 'Simple UI Design',
    description: 'Modern UI/UX design by using Reactjs',
    imageSrc: p1,
    liveLink: 'https://modern-uiux-website-in-react.vercel.app/',
    codeLink: 'https://github.com/manishapariyar/-Modern-UIUX-Website-in-React/tree/main',
  },
  {
    title: 'Dice Game',
    description: 'Modern UI/UX design by using Reactjs',
    imageSrc: p4,
    liveLink: 'https://dice-game-zeta-one.vercel.app/',
    codeLink: 'https://github.com/manishapariyar/10_React_projets/tree/main/Project_3',
  },
  {
    title: 'Fitness Application',
    description: 'Fitness Application, By using frontend technologies: React, Typescript, Tailwind, Hero Icons, Framer Motion',
    imageSrc: p3,
    liveLink: 'https://mvogym.vercel.app/',
    codeLink: 'https://github.com/manishapariyar/Mvogym',
  },
  {
    title: 'Portfolio',
    description: 'Simple Personal Portfolio using HTML, CSS, JS',
    imageSrc: p2,
    liveLink: 'https://my-portfolio-hazel-alpha.vercel.app/',
    codeLink: 'https://github.com/manishapariyar/my-Portfolio',
  },
  {
    title: 'News Webpage',
    description: 'Simple news page using HTML, CSS, JS',
    imageSrc: p5,
    codeLink: 'https://github.com/manishapariyar/NewsWebsite/tree/main',
  },
];

const Project:
  React.FC = () => {
    return (
      <>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            liveLink={project.liveLink}
            codeLink={project.codeLink}
          />
        ))}
      </>
    );
  };

export default Project;
