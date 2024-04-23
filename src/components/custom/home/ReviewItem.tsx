import { Review } from '@/interfaces/review';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';

function ReviewItem({ review, isLast }: { review: Review; isLast: boolean }) {
  return (
    <div
      className={`embla__slide relative bg-white grow-0 shrink-0 basis-4/5 sm:basis-3/5 lg:basis-1/2 h-auto w-72 flex flex-col items-center justify-center gap-3 ${
        isLast ? 'mr-8' : ''
      }`}
    >
      <div className="py-4 px-6 border border-slate-200 text-slate-800 rounded-lg flex flex-col gap-3">
        <div className="flex flex-row gap-3 items-center">
          <Image
            src={urlFor(review.icon).url()}
            alt={review.name}
            width={50}
            height={50}
            className="w-12 h-12 object-cover rounded-full"
          />
          <div className="flex flex-col">
            <h4 className="font-heading text-2xl">{review.name}</h4>
            <p className="text-slate-600">
              <em>{review.project}</em>
            </p>
          </div>
        </div>
        <p className="text-slate-600">{review.review}</p>
      </div>
    </div>
  );
}

export default ReviewItem;
