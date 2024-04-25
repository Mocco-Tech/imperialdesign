import React from 'react';

import { Hr } from '@react-email/hr';
import { Html } from '@react-email/html';
import { Text } from '@react-email/text';
import { FieldValues } from 'react-hook-form';

export function EmailTemplate({
  email,
  fullName,
  message,
  phoneNumber,
}: FieldValues) {
  return (
    <Html lang="en">
      <Text>
        <b>Ім&apos;я:</b> {fullName}
      </Text>
      <Hr />
      <Text>
        <b>Email:</b> {email}
      </Text>
      <Hr />
      <Text>
        <b>Телефон:</b> {phoneNumber}
      </Text>
      <Hr />
      <Text>
        <b>Повідомлення:</b> {message}
      </Text>
    </Html>
  );
}

export default EmailTemplate;
