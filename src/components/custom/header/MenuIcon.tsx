import React from 'react';

export default function MenuIcon({ isScrolled }: { isScrolled: boolean }) {
  return (
    <div className="flex flex-col gap-[6px]">
      <div
        className={`h-[2px] w-5 rounded ${
          isScrolled ? 'bg-slate-700' : 'bg-slate-100'
        }`}
      ></div>
      <div
        className={`h-[2px] w-5 rounded ${
          isScrolled ? 'bg-slate-700' : 'bg-slate-100'
        }`}
      ></div>
    </div>
  );
}
