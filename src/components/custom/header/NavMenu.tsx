import React from 'react';
import Link from 'next/link';
import { SheetClose } from '@/components/ui/sheet';

export const menu = [
  { link: '/', label: 'Головна' },
  { link: '/projects', label: 'Проєкти' },
  { link: '/#about', label: 'Про нас' },
  { link: '#call_to_action', label: 'Контакти' },
];

export default function NavMenu() {
  return (
    <ul className="flex flex-col gap-2">
      {menu?.map((menuItem, index) => {
        return (
          <li key={index}>
            <SheetClose asChild>
              <Link
                href={menuItem.link}
                className="hover:ml-2 duration-200 font-heading text-2xl hover:text-teal-700"
              >
                {menuItem.label}
              </Link>
            </SheetClose>
          </li>
        );
      })}
    </ul>
  );
}
