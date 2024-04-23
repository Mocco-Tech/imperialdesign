import { client } from '../lib/sanity';

export async function getHomepageData() {
  const query = `*[_type == 'homepage'][0]{
      heroImage,
      heroTitle,
      heroSubtitle,
      aboutImage,
      aboutTitle,
      aboutDescription
    }`;
  const data = await client.fetch(query);
  return data;
}
