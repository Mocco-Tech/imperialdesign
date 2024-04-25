import Image from 'next/image';
import React from 'react';

export default function InstagramIcon({ className }: { className: string }) {
  return (
    <Image
      src="/instagram.svg"
      alt="Instagram"
      width={20}
      height={20}
      className={className}
    />
  );
}
