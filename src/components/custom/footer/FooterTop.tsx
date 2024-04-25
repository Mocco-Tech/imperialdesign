import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { menu } from '../header/NavMenu';

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
      <ul className="flex flex-col lg:flex-row gap-1 lg:gap-5">
        {menu.map((menuItem, index) => {
          return (
            <li key={index}>
              <Link href={menuItem.link}>
                <Button
                  variant="link"
                  className="duration-200 text-base w-fit px-0 text-slate-700"
                >
                  {menuItem.label}
                </Button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterTop;
