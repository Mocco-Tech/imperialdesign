// Menu to be added from sanity

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function FooterTop() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center text-center gap-5 py-4 px-6 text-slate-600 ">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Imperial Design Logo"
          width={200}
          height={200}
          className="w-36 object-cover invert"
        />
      </Link>
      <ul className="flex flex-col lg:flex-row gap-2 lg:gap-5">
        <li>
          <Link href="/">
            <Button
              variant="link"
              className="duration-200 text-base w-fit px-0 text-slate-700"
            >
              Головна
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <Button
              variant="link"
              className="duration-200 text-base w-fit px-0 text-slate-700"
            >
              Проекти
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/#about">
            <Button
              variant="link"
              className="duration-200 text-base w-fit px-0 text-slate-700"
            >
              Про нас
            </Button>
          </Link>
        </li>
        <li>
          <Button
            variant="link"
            className="duration-200 text-base w-fit px-0 text-slate-700"
          >
            Контакти
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default FooterTop;
