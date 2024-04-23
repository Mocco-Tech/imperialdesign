import { client } from '../lib/sanity';

export async function getReviews() {
  const query = `*[_type == 'reviews']{
      name,
      project,
      review,
      icon,
    }`;
  const reviews = client.fetch(query);
  return reviews;
}
