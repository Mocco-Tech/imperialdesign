import { InputProps } from '@/interfaces/InputProps';
import React from 'react';

export const TextArea = ({
  id,
  label = '',
  type = 'text',
  register,
  errors,
  isSubmitting = false,
  defaultValue = '',
  placeholder = '',
  disabled = false,
  requiredMessage = '',
  requiredValue = false,
  minLengthMessaage = '',
  minLengthValue = 0,
  patternMessage = '',
  patternValue,
  variation = 'default',
  ...rest
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <textarea
        id={id}
        placeholder={placeholder}
        rows={4}
        className={`w-full border outline-none border-slate-300 rounded-lg py-2 px-4 outline-0 focus:ring-2 focus:ring-teal-600 focus:pl-6 duration-200 ${
          disabled && 'bg-slate-200 text-slate-400'
        }`}
        {...register!(id!, {
          required: { message: requiredMessage, value: true },
          minLength: { message: minLengthMessaage, value: minLengthValue },
          pattern: {
            message: patternMessage,
            value: patternValue!,
          },
        })}
        disabled={isSubmitting}
      />
      {errors && (
        <p className="bg-red-200 rounded-md px-3 py-1 text-red-500 text-sm mt-1">
          {errors?.message?.toString()}
        </p>
      )}
    </div>
  );
};
