'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useScrollPosition } from '@/hooks/useScrollPostiion';
import { motion } from 'framer-motion';
import MenuIcon from './MenuIcon';
import NavMenu from './NavMenu';

export default function Header({ type = 'default' }: { type?: string }) {
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 5;

  const className = () => {
    return type === 'project'
      ? 'w-screen max-w-[1600px] 2xl:left-1/2 2xl:-translate-x-1/2 grid grid-cols-2 md:grid-cols-3 px-4 py-2 border-b border-slate-200 items-center sticky top-0 left-0 z-50 bg-white'
      : `w-screen max-w-[1600px] 2xl:left-1/2 2xl:-translate-x-1/2 grid grid-cols-2 md:grid-cols-3 px-4 py-2 border-b border-slate-200 items-center fixed top-0 left-0 z-50 duration-300 ${
          isScrolled
            ? 'text-slate-800 bg-white color'
            : 'bg-black/15 text-white'
        }`;
  };

  return (
    <Sheet>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 0.5 }}
        className={className()}
      >
        <div className="hidden md:block"></div>
        <div className="md:justify-self-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Imperial Design Logo"
              width={500}
              height={500}
              className="max-w-40 object-cover"
              priority
            />
          </Link>
        </div>
        <div className="justify-self-end flex items-center">
          <SheetTrigger>
            <MenuIcon isScrolled={isScrolled} type={type} />
          </SheetTrigger>
        </div>
      </motion.header>
      <SheetContent className="flex flex-col justify-between items-start pt-10">
        <NavMenu />
        <SheetClose asChild>
          <Link href="/#call_to_action" className="w-full">
            <Button
              variant={'default'}
              className="w-full rounded-lg bg-teal-700 hover:bg-teal-800"
            >
              Замовити дизайн
            </Button>
          </Link>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
