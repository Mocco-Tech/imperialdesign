import { client } from '../lib/sanity';

export async function getProjects() {
  const query = `*[_type == 'projects'] {
    title,
    description,
    "slug": slug.current,
    images,
    blockEditor
  }`;
  const projects = await client.fetch(query);
  return projects;
}
