import React from 'react';
import ProjectCard from './ProjectCard';
import { p1, p2, p3, p4, p5, p6, p7, p8, p9 } from '../../shared/images';

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
  {
    title: 'Rental Car',
    description: "About Simple Rental Car Frontend page using react JS and tailwind CSS.....",
    imageSrc: p6,
    liveLink: 'https://rental-car-rho.vercel.app/',
    codeLink: 'https://github.com/manishapariyar/RentalCar',
  },
  {
    title: 'Foodies',
    description: "full stack food delivary website using MERN stack",
    imageSrc: p7,
    codeLink: 'https://github.com/manishapariyar/food_delivery_web',
  },
  {
    title: 'Havnify',
    description: "Frontend realState website",
    imageSrc: p8,
    codeLink: 'https://github.com/manishapariyar/Havnify',
  },
  {
    title: 'Snapgram',
    description: "Modern social app using stacks like an infinite scroll feature, and amazing performance using React JS, Appwrite, TypeScript, and more",
    imageSrc: p9,
    codeLink: 'https://github.com/manishapariyar/SocialMedia',
  },
];

const Project: React.FC = () => {
  return (
    <div className="mx-auto mb-10 grid gap-8 
      xs:grid-cols-1 
      sm:grid-cols-1 
      md:grid-cols-2 
      lgl:grid-cols-3
      xl:grid-cols-3">
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
    </div>
  );
};

export default Project;
