import { ProjectCard } from '@/interfaces/projectCard';
import { getProjects } from '@/utils/getProjects';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();
  const URL = 'https://imperialdesign.com.ua';

  const restUrls = [
    {
      url: `${URL}/`, // Home Page
      lastModified: new Date(),
      priority: 1.0,
      changeFrequency: 'weekly',
    },
    {
      url: `${URL}/projects`, // Projects Page
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: 'weekly',
    },
  ];

  const allPrpjects = projects.map((project: ProjectCard, date: Date) => {
    return {
      url: `${URL}/projects/${project.slug}`,
      lastModified: new Date(date),
      priority: 0.64,
      changeFrequency: 'daily',
    };
  });

  return [...restUrls, ...allPrpjects];
}
