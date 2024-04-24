import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import { ProjectCard as ProjectCardType } from '@/interfaces/projectCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function ProjectCard({ project }: { project: ProjectCardType }) {
  const { images, title, description, slug } = project;

  return (
    <div className="relative bg-white h-auto w-full flex flex-col gap-3 items-center">
      <Image
        src={`${urlFor(images[0]).url()}`}
        alt={title}
        width={500}
        height={500}
        className="h-64 md:h-72 w-full object-cover rounded-sm"
      />
      <h3 className="font-heading text-2xl lg:text-5xl uppercase absolute top-1/3 lg:top-1/3 -translate-y-1/2 -lg:left-1/3 text-slate-900 z-10 mix-blend-difference invert lg:text-nowrap">
        {title}
      </h3>
      <div className="w-full flex flex-col justify-between gap-2 items-start">
        <p className="text-slate-600">{description}</p>
        <Link href={`/projects/${slug}`}>
          <Button
            variant="outline"
            className="rounded-lg border-slate-400 hover:bg-teal-800 hover:text-teal-50"
          >
            Детальніше
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
