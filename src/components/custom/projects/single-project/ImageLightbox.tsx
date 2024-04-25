import { urlFor } from '@/lib/sanity';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/solid';

export default function ImageLightbox({
  image,
  setIsOpenLightbox,
}: {
  image: string;
  setIsOpenLightbox: (isOpenLightbox: boolean) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 100, y: 0 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0, y: 30 }}
      className="fixed top-0 left-0 w-screen h-dvh z-50 bg-black/70 flex items-center justify-center p-4 lg:p-10 backdrop-blur"
    >
      <Image
        src={urlFor(image).url()}
        alt="Main image"
        className="h-auto lg:h-full w-full object-cover object-center rounded-xl"
        width={2500}
        height={2500}
        priority
        onClick={() => setIsOpenLightbox(true)}
      />
      <button
        className="absolute top-3 right-3"
        onClick={() => setIsOpenLightbox(false)}
      >
        <XMarkIcon className="w-6 text-white" />
      </button>
    </motion.div>
  );
}
