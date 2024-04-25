import React from 'react';

import Link from 'next/link';

const { PortableText } = require('next-sanity');

const myPortableTextComponents = {
  block: {
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className="text-2xl font-heading font-medium text-gray-800">
        {children}
      </h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-xl font-heading text-gray-800">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-lg font-heading font-semibold text-gray-800">
        {children}
      </h2>
    ),
    h4: ({ children }: { children: React.ReactNode }) => (
      <h4 className="text-lg font-heading text-gray-800">{children}</h4>
    ),
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="text-md font-body text-gray-600">{children}</p>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className="text-md font-body text-gray-600">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className="list-none text-gray-700">{children}</ul>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <ol className="list-number text-gray-700 ml-5">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <li>
        <span className="flex gap-2 items-center">{children}</span>
      </li>
    ),
  },

  marks: {
    link: ({ children, value }: { children: React.ReactNode; value: any }) => {
      return (
        <Link href={value.href} className="duration-100 hover:text-indigo-500">
          {children}
        </Link>
      );
    },
  },
};

export default function MoccoPortableText(props: any) {
  return (
    <PortableText value={props.value} components={myPortableTextComponents} />
  );
}
