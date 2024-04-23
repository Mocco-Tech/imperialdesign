'use client';

import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import SliderItem from './SliderItem';
import { ProjectCard } from '@/interfaces/projectCard';

export default function PrjectsSection({
  projects,
}: {
  projects: ProjectCard[];
}) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ duration: 6000 }),
  ]);

  return (
    <div className="px-0 pt-8 pb-12 lg:pt-12 lg:pb-20 bg-white" id="projects">
      <div className="grid grid-cols-2 pb-8 lg:pb-16 px-4 lg:px-10">
        <div className="">
          <h2 className="font-heading text-xl text-slate-800 lg:text-3xl">
            Останні проекти
          </h2>
        </div>
        <div className="justify-self-end">
          <Link
            href="/projects"
            className="text-slate-700 hover:text-slate-500 duration-150"
          >
            Переглянути всі
          </Link>
        </div>
      </div>
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-8 items-start">
          {projects.map((project, index) => {
            const isLast = projects.length === index + 1;
            return (
              <SliderItem
                key={index}
                image={project.images?.[0]}
                title={project.title}
                isLast={isLast}
                description={project.description}
                slug={project.slug}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
