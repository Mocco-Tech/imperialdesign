import { getHomepageData } from '@/utils/getHomepageData';
import { getProjects } from '@/utils/getProjects';
import { getReviews } from '@/utils/getReviews';
import { urlFor } from '../lib/sanity';
import Header from '@/components/custom/header/Header';
import HomeBanner from '@/components/custom/home/HomeBanner';
import PrjectsSection from '@/components/custom/home/ProjectsSection';
import AboutSection from '@/components/custom/home/AboutSection';
import ReviewsSection from '@/components/custom/home/ReviewSection';

export const revalidate = 0;

export default async function Home() {
  const homeData = await getHomepageData();
  const projects = await getProjects();
  const reviews = await getReviews();

  return (
    <>
      <Header />
      <HomeBanner homeData={homeData} />
      <PrjectsSection projects={projects} />
      <AboutSection homeData={homeData} />
      <ReviewsSection reviews={reviews} />
    </>
  );
}

export async function generateMetadata() {
  const data = await getHomepageData();
  const featuredImage = urlFor(data.aboutImage).url();

  return {
    title: "Дизайн інтер'єру від Imperial Design",
    description:
      "Дизайн інтер'єру Київ. Замовити дизайн квартири. Дизайн дому в Києві та Україні. Дизайн-проекти за доступними цінами",

    metadataBase: new URL('https://www.imperialdesign.com.ua'),
    openGraph: {
      title: `Дизайн інтер'єру від Imperial Design`,
      description:
        "Дизайн інтер'єру в Києві та Україні. Дизайн-проекти за доступними цінам від Imperial Design.",
      url: `https://www.imperialdesign.com.ua`,
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
