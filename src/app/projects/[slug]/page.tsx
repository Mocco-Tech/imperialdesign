import MoccoPortableText from '@/components/custom/MoccoPortableText';
import Header from '@/components/custom/header/Header';
import ImageGallery from '@/components/custom/projects/single-project/ImageGallery';
import ProjectButtons from '@/components/custom/projects/single-project/ProjectButtons';
import { urlFor } from '@/lib/sanity';
import { getProject } from '@/utils/getSingleProject';

export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const singleProject = await getProject(params.slug);

  return {
    title: `Imperial Design - ${singleProject.title}`,
    description: singleProject.description,

    metadataBase: new URL('https://www.imperialdesign.com.ua'),
    openGraph: {
      title: `Imperial Design - ${singleProject.title}`,
      description: singleProject.description,
      url: `https://www.imperialdesign.com.ua/projects/${singleProject.slug}`,
      siteName: 'Imperial Design',
      images: [
        {
          url: urlFor(singleProject.images[0]).url(),
          width: 800,
          height: 600,
        },
      ],
      locale: 'uk_UA',
      type: 'website',
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProject(params.slug);

  return (
    <>
      <Header type="project" />
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 p-5 lg:py-12 lg:px-8 items-center">
        <ImageGallery images={project.images} />

        <div className="basis-full lg:basis-2/5 flex flex-col gap-3">
          <h1 className="font-heading text-slate-800 text-3xl">
            {project.title}
          </h1>
          <MoccoPortableText value={project.blockEditor} />

          <ProjectButtons />
        </div>
      </div>
    </>
  );
}
