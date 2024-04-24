'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageLightbox from './ImageLightbox';
import { AnimatePresence } from 'framer-motion';
import { urlFor } from '@/lib/sanity';

export default function ImageGallery({ images }: { images: string[] }) {
  const [bigImage, setBigImage] = useState(images[0]);
  const [isOpenLightbox, setIsOpenLightbox] = useState(false);

  const isGallery = images.length > 1;

  const handleSmallImageClick = (image: string) => {
    setBigImage(image);
  };

  return (
    <>
      <div className="basis-full lg:basis-3/5 flex flex-col lg:flex-row gap-3 lg:gap-5">
        {isGallery && (
          <div className="basis-1/5 grid grid-cols-3 lg:flex lg:flex-col gap-3 lg:gap-5 order-2 lg:order-1">
            {images.map((image, index) => {
              return (
                <Image
                  key={index}
                  src={urlFor(image).url()}
                  alt="Photo"
                  className="h-full w-full object-cover object-center cursor-pointer rounded-lg"
                  width={500}
                  height={500}
                  onClick={() => handleSmallImageClick(image)}
                  priority
                />
              );
            })}
          </div>
        )}

        <div className="w-full h-full order-1 lg:order-2">
          <Image
            src={urlFor(bigImage).url()}
            alt="Main image"
            className="object-coverobject-center cursor-pointer rounded-xl"
            width={1000}
            height={1000}
            priority
            onClick={() => setIsOpenLightbox(true)}
          />
        </div>
      </div>

      <AnimatePresence>
        {isOpenLightbox && (
          <ImageLightbox
            image={bigImage}
            setIsOpenLightbox={setIsOpenLightbox}
          />
        )}
      </AnimatePresence>
    </>
  );
}
