'use client';

import Link from 'next/link';
import { DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

function ProjectButtons() {
  return (
    <div className="flex flex-row gap-3 mt-2 lg:mt-5">
      <DialogTrigger asChild>
        <Button variant="default" className="rounded-lg hover:bg-teal-700">
          Замовити дизайн
        </Button>
      </DialogTrigger>
      <Link href="/projects">
        <Button variant="secondary" className="bg-slate-200 rounded-lg">
          Всі проекти
        </Button>
      </Link>
    </div>
  );
}

export default ProjectButtons;
