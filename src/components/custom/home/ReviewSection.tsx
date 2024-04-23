'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import ReviewItem from './ReviewItem';
import { Review } from '@/interfaces/review';

function ReviewsSection({ reviews }: { reviews: Review[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ duration: 1000 }),
  ]);

  return (
    <div className="py-16 bg-white flex flex-col gap-10  ">
      <div className="pl-8">
        <h2 className="font-heading text-xl text-slate-800 lg:text-3xl">
          Відгуки
        </h2>
      </div>

      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-8 ">
          {reviews.map((review, index) => {
            const isLast = reviews.length === index + 1;
            return <ReviewItem key={index} isLast={isLast} review={review} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ReviewsSection;
