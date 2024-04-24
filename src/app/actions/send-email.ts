'use server';
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { revalidatePath } from 'next/cache';
import { FieldValues } from 'react-hook-form';
import EmailTemplate from '@/components/custom/contact/EmailTemplate';

export async function sendEmail(formData: FieldValues) {
  const { email, fullName, message, phoneNumber } = formData;

  // const html = render(<EmailTemplate />, { pretty: true });

  const transport = nodemailer.createTransport({
    pool: true,
    host: process.env.MOCCO_HOST_EMAIL,
    port: 465,
    secure: true,
    auth: {
      user: process.env.MOCCO_ADMIN_EMAIL,
      pass: process.env.MOCCO_ADMIN_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: {
      name: 'Imperial Design: Contact',
      address: process.env.MOCCO_ADMIN_EMAIL!,
    },
    to: 'davidlyashuk20@gmail.com',
    subject: `Message from ${fullName} (${email})`,
    html: email,
  };

  try {
    const mail = await transport.sendMail(mailOptions);
    revalidatePath('/', 'layout');
    return Promise.resolve('Message sent');
  } catch (err) {
    return Promise.reject('Rejected');
  }
}
