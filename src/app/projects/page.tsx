import Header from '@/components/custom/header/Header';
import ProjectsBlock from '@/components/custom/projects/ProjectsBlock';
import { urlFor } from '@/lib/sanity';
import { getProjects } from '@/utils/getProjects';
import React from 'react';

export const revalidate = 0;

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <Header />
      <ProjectsBlock projects={projects} />
    </>
  );
}

export async function generateMetadata() {
  const projects = await getProjects();
  const featuredImage = urlFor(projects[0].images[0]).url();

  return {
    title: 'Дизайн-проекти від Imperial Design',
    description:
      'Декілька останніх дизайн-проектів від Imperial Design. Замовити дизайн квартири. Дизайн дому в Києві та Україні. Дизайн-проекти за доступними цінами',

    metadataBase: new URL('https://www.imperialdesign.com.ua'),
    openGraph: {
      title: `Дизайн-проекти від Imperial Design`,
      description:
        'Декілька останніх дизайн-проектів від Imperial Design. Замовити дизайн квартири. Дизайн дому в Києві та Україні. Дизайн-проекти за доступними цінами',
      url: `https://www.imperialdesign.com.ua/projects`,
      siteName: 'Imperial Design',
      images: [
        {
          url: featuredImage,
          width: 800,
          height: 600,
        },
      ],
      locale: 'uk_UA',
      type: 'website',
    },
  };
}
