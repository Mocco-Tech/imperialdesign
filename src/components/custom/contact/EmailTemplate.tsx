import React from 'react';

import { Hr } from '@react-email/hr';
import { Html } from '@react-email/html';
import { Text } from '@react-email/text';
import { FieldValues } from '@/interfaces/fieldValues';

export function EmailTemplate({
  email,
  fullName,
  message,
  phoneNumber,
}: FieldValues) {
  return (
    <Html lang="en">
      <Text>
        <b>Name:</b> {fullName}
      </Text>
      <Hr />
      <Text>
        <b>Email:</b> {email}
      </Text>
      <Hr />
      <Text>
        <b>Phone:</b> {phoneNumber}
      </Text>
      <Hr />
      <Text>
        <b>Message:</b> {message}
      </Text>
    </Html>
  );
}

export default EmailTemplate;
