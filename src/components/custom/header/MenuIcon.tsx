import React from 'react';

export default function MenuIcon({
  isScrolled,
  type,
}: {
  isScrolled: boolean;
  type: string;
}) {
  return (
    <div className="flex flex-col gap-[6px]">
      <div
        className={`h-[2px] w-5 rounded ${
          isScrolled || type === 'project' ? 'bg-slate-700' : 'bg-slate-100'
        }`}
      ></div>
      <div
        className={`h-[2px] w-5 rounded ${
          isScrolled || type === 'project' ? 'bg-slate-700' : 'bg-slate-100'
        }`}
      ></div>
    </div>
  );
}
