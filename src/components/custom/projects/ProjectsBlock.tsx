'use client';

import { motion } from 'framer-motion';
import { ProjectCard as ProjectCardType } from '@/interfaces/projectCard';
import ProjectCard from './ProjectCard';

function ProjectsBlock({ projects }: { projects: ProjectCardType[] }) {
  return (
    <>
      <div className="bg-teal-700 w-full h-80  bg-[url('/slider1.jpg')] bg-cover bg-center relative flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="z-10  mix-blend-difference invert"
        >
          <h1 className="font-heading text-5xl tracking-wider text-black ">
            Останні проєкти
          </h1>
        </motion.div>
        <div className="bg-black/30 absolute top-0 left-0 w-full h-full"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 100, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 py-8 lg:px-8 lg:py-16"
      >
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </motion.div>
    </>
  );
}

export default ProjectsBlock;
