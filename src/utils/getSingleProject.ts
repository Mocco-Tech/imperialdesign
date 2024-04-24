import { client } from '@/lib/sanity';

export async function getProject(slug: string) {
  const query = `*[_type == 'projects' && slug.current =='${slug}'][0] {
        title,
        description,
        "slug": slug.current,
        images,
        link,
        blockEditor
      }`;

  const project = await client.fetch(query);

  return project;
}
