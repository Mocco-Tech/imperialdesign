import type { Metadata } from 'next';
import { Alegreya, Jost } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Imperial Design',
  description: 'Дизайн проєкти в Києві та Україні',
};

const headingsFont = Alegreya({
  subsets: ['latin'],
  variable: '--font-headings',
});

const bodyFont = Jost({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-body',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingsFont.variable} ${bodyFont.variable} font-body text-slate-700`}
      >
        {children}
      </body>
    </html>
  );
}
