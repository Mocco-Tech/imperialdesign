'use client';

import Image from 'next/image';

import { urlFor } from '@/lib/sanity';
import { Button } from '@/components/ui/button';
import { homeData } from '@/interfaces/homeData';
import { DialogTrigger } from '@/components/ui/dialog';

function AboutSection({ homeData }: { homeData: homeData }) {
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row justify-between gap-5 px-8 py-16 bg-slate-100 relative"
    >
      <Image
        src={urlFor(homeData.aboutImage).url()}
        alt="Про нас"
        width={500}
        height={500}
        className="object-cover basis-full md:basis-2/5 max-h-96 w-full rounded-sm"
      />

      <h3 className="font-heading text-3xl lg:text-5xl uppercase lg:absolute top-24 left-1/4 text-slate-800 z-10 mix-blend-difference invert">
        {homeData.aboutTitle}
      </h3>

      <div className="basis-3/5 flex flex-col h-96 items-start justify-end gap-3">
        <p className="text-slate-600">{homeData.aboutDescription}</p>
        <DialogTrigger asChild>
          <Button variant="default">Замовити дизайн</Button>
        </DialogTrigger>
      </div>
    </div>
  );
}

export default AboutSection;
