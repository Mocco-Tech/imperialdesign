'use client';

import Header from '@/components/custom/header/Header';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Header type="project" />
      <div className="px-4 py-12 flex items-center justify-center flex-col gap-3">
        <h2 className="text-2xl font-heading">Не все сталося як гадалося!</h2>
        <Button onClick={() => reset()} className="rounded-lg bg-teal-700">
          Спробувати ще раз
        </Button>
        <p className="text-lg text-center text-slate-500">
          Все ще є помилка?
          <br /> зв&apos;яжіться з нами та повідомте про проблему, будь ласка
        </p>
      </div>
    </>
  );
}
