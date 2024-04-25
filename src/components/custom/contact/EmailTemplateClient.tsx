import React from 'react';

import { Hr } from '@react-email/hr';
import { Html } from '@react-email/html';
import { Text } from '@react-email/text';
import { FieldValues } from 'react-hook-form';

export function EmailTemplateClient({
  email,
  fullName,
  message,
  phoneNumber,
}: FieldValues) {
  return (
    <Html lang="en">
      <Text>
        Шановний {fullName}, дякуємо за Ваш запит.
        <br /> Ми зв&apos;яжемося з вами якомога швидше і відповімо на всі ваші
        запитання.
      </Text>
      <Hr />
      <Text>
        <b>Ваш запит:</b>
      </Text>
      <Text>Ваше повідомлення: {message}</Text>
      <Text>Ваше телефон: {phoneNumber}</Text>
      <Text>Ваше email: {email}</Text>
    </Html>
  );
}

export default EmailTemplateClient;
