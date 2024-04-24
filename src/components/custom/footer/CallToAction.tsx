import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import React from 'react';

export default function CallToAction() {
  return (
    <>
      <div
        id="call_to_action"
        className="flex flex-col items-center justify-center gap-8 py-16 border-y border-slate-200 bg-teal-900"
      >
        <h3 className="font-heading text-3xl lg:text-6xl text-emerald-50">
          Все ще є запитання?
        </h3>
        <DialogTrigger asChild>
          <Button
            variant="default"
            className="rounded-lg text-md bg-slate-100 ring-1 ring-slate-100 text-slate-700 hover:text-slate-100 hover:bg-transparent hover:ring-2 duration-200"
          >
            Замовити дизайн
          </Button>
        </DialogTrigger>
      </div>
    </>
  );
}
