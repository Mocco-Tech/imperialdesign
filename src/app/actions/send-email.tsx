'use server';
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { revalidatePath } from 'next/cache';
import { FieldValues } from 'react-hook-form';
import { EmailTemplate } from '@/components/custom/contact/EmailTemplate';
import { EmailTemplateClient } from '@/components/custom/contact/EmailTemplateClient';

export async function sendEmail(formData: FieldValues) {
  const { email, fullName, message, phone } = formData;

  const html = render(
    <EmailTemplate
      email={email}
      fullName={fullName}
      message={message}
      phoneNumber={phone}
    />,
    {
      pretty: true,
    }
  );

  const htmlClient = render(
    <EmailTemplateClient
      email={email}
      fullName={fullName}
      message={message}
      phoneNumber={phone}
    />,
    {
      pretty: true,
    }
  );

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
    to: process.env.MOCCO_ADMIN_EMAIL!,
    subject: `Message from ${fullName} (${email})`,
    html: html,
  };

  const clientMailOptions = {
    from: {
      name: 'Imperial Design',
      address: process.env.MOCCO_ADMIN_EMAIL!,
    },
    to: email,
    subject: `Автоматичний лист від Imperial Design`,
    html: htmlClient,
  };

  try {
    const mail = await transport.sendMail(mailOptions);
    const clientMail = await transport.sendMail(clientMailOptions);
    revalidatePath('/', 'layout');
    return Promise.resolve('Message sent');
  } catch (err) {
    return Promise.reject('Rejected');
  }
}
