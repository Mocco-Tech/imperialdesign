import Image from 'next/image';

import { urlFor } from '@/lib/sanity';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SliterItem } from '@/interfaces/sliderItem';

function SliderItem({ isLast, image, title, description, slug }: SliterItem) {
  return (
    <div
      className={`embla__slide relative bg-white grow-0 shrink-0 basis-4/5 sm:basis-3/5 lg:basis-1/2 h-auto w-72 md:h-80 md:w-80 lg:w-96 lg:h-96 flex flex-col items-center justify-center gap-3 ${
        isLast ? 'mr-8' : ''
      }`}
    >
      <Image
        src={`${urlFor(image)}`}
        alt={title}
        width={500}
        height={500}
        className="h-64 md:h-96 w-96 object-cover rounded-md"
      />
      <h3 className="font-heading text-2xl lg:text-5xl uppercase absolute top-1/3 lg:top-1/3 -translate-y-1/2 -lg:left-1/3 text-slate-900 z-10 mix-blend-difference invert lg:text-nowrap">
        {title}
      </h3>
      <div className="w-full max-w-96 flex flex-col justify-between gap-2 items-start">
        <p className="text-slate-600">{description}</p>
        {/* Dynamic URL */}
        <Link href={`/projects/${slug}`}>
          <Button variant="default">Детальніше</Button>
        </Link>
      </div>
    </div>
  );
}

export default SliderItem;
