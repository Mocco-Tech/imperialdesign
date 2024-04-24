import { InputHTMLAttributes } from 'react';
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from 'react-hook-form';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  type?: string;
  register: UseFormRegister<FieldValues>;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  disabled?: boolean;
  isSubmitting?: boolean;
  defaultValue?: string | number;
  placeholder?: string;
  requiredMessage?: string;
  requiredValue?: boolean;
  minLengthMessaage?: string;
  minLengthValue?: number;
  patternMessage?: string;
  patternValue?: RegExp;
  variation?: string;
  multiple?: boolean;
  ref?: '';
}
