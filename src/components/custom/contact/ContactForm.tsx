'use client';

import { sendEmail } from '@/app/actions/send-email';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { InputField } from './InputField';
import { Button } from '@/components/ui/button';
import { TextArea } from './TextArea';
import { emailRegex, phoneRegex } from '@/utils/regex';

export default function ContactForm() {
  const { register, handleSubmit, formState } = useForm();
  const { isSubmitting, errors } = formState;

  const onSubmit = async (data: FieldValues) => {
    const status = sendEmail(data);

    toast.promise(status, {
      loading: 'Надсилаємо...',
      success: 'Ваше повідомлення надіслано!',
      error: 'Нажаль сталась помилка',
    });

    return status;
  };

  return (
    <form
      className="flex flex-col gap-4 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        id="fullName"
        register={register}
        placeholder="Повне ім'я"
        requiredValue={true}
        requiredMessage="Це поле є обов'язковим"
        minLengthMessaage="Ім'я має бути не менше 3 символів"
        minLengthValue={3}
        disabled={isSubmitting}
        errors={errors?.fullName}
      />
      <InputField
        id="phone"
        type="tel"
        register={register}
        placeholder="Ваш телефон"
        requiredValue={true}
        requiredMessage="Це поле є обов'язковим"
        minLengthMessaage="Телефон має бути не менше 3 символів"
        minLengthValue={3}
        patternValue={phoneRegex}
        patternMessage="Вкажіть дійсний номер телефону будь ласка (тільки цифри)"
        disabled={isSubmitting}
        errors={errors?.phone}
      />
      <InputField
        id="email"
        type="email"
        register={register}
        placeholder="Ваша email адреса"
        requiredValue={true}
        requiredMessage="Це поле є обов'язковим"
        minLengthMessaage="Email має бути не менше 3 символів"
        minLengthValue={3}
        patternValue={emailRegex}
        patternMessage="Вкажіть дійсний email будь ласка"
        disabled={isSubmitting}
        errors={errors?.email}
      />
      <TextArea
        id="message"
        register={register}
        placeholder="Ваше повідомлення"
        requiredValue={true}
        requiredMessage="Це поле є обов'язковим"
        minLengthMessaage="Повідомлення має бути не менше 10 символів"
        minLengthValue={10}
        disabled={isSubmitting}
        errors={errors?.message}
      />
      <Button
        className={`${
          isSubmitting ? 'bg-slate-400' : 'bg-teal-700'
        } hover:bg-teal-600`}
        disabled={isSubmitting}
      >
        Надіслати
      </Button>
    </form>
  );
}
