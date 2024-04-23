'use client';

import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { homeData } from '@/interfaces/homeData';

function HomeBanner({ homeData }: { homeData: homeData }) {
  const bannerImage = urlFor(homeData.heroImage).url();

  return (
    <div className="h-dvh md:h-dvh flex flex-col items-center justify-center gap-3  bg-center bg-cover relative">
      <Image
        src={bannerImage}
        alt="Imperial Design"
        width={1500}
        height={1500}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 100, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="z-10"
      >
        <p className="text-slate-50 text-xl z-10 tracking-wider block">
          {homeData.heroSubtitle}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 100, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="z-10"
      >
        <h1 className="font-heading text-3xl text-slate-50 z-10 uppercase tracking-widest md:text-5xl">
          {homeData.heroTitle}
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 100, y: 0 }}
        transition={{ delay: 0.9, duration: 0.4 }}
        className="z-10 flex gap-5 mt-5"
      >
        <Button
          variant="secondary"
          className="rounded-lg text-base text-teal-950 hover:bg-teal-700 hover:text-teal-50 duration-300"
        >
          Замовити дизайн
        </Button>
        <Link href="#projects">
          <Button
            variant="secondary"
            className="rounded-lg text-base bg-slate-500 text-slate-300 hover:bg-slate-400"
          >
            Проекти
          </Button>
        </Link>
      </motion.div>
      <div className="backdrop-opacity-60 w-full h-full absolute top-0 left-0 bg-black/30"></div>
    </div>
  );
}

export default HomeBanner;
